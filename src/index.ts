import { ModMailStream } from "snoostorm";
import { PrivateMessage } from "snoowrap";
import { logger } from "tuckbot-util";
import { redditapi } from "./services/redditapi";
import { ModAuditLogStream } from "./streams";

logger.info(`Starting modmail-manager-api...`);

const { snoowrap } = redditapi;

const modListener = new ModMailStream(snoowrap, {
  pollTime: 1000 * 20, // FIXME: use environment variable
});

const toLoggablePrivateMessage = (msg: PrivateMessage) => {
  return {
    body: msg.body,
    created: msg.created,
    created_utc: msg.created_utc,
    dest: msg.dest,
    distinguished: msg.distinguished,
    first_message: msg.first_message,
    first_message_name: msg.first_message_name,
    id: msg.id,
    likes: msg.likes,
    name: msg.name,
    num_comments: msg.num_comments,
    parent_id: msg.parent_id,
    replies: msg.replies,
    score: msg.score,
    subject: msg.subject,
    subreddit: msg.subreddit.display_name,
    subreddit_name_prefixed: msg.subreddit_name_prefixed,
  };
};

modListener.on("item", (item) => {
  logger.info({
    msg: `Found new message in mod mail`,
    subreddit: item.subreddit.display_name,
    modmail: toLoggablePrivateMessage(item),
  });
});

logger.info(`Starting mod mail stream`);

const auditLogListener = new ModAuditLogStream("PublicFreakout", {
  pollTime: 1000 * 10,
});

logger.info(`Starting mod audit log stream`);

auditLogListener.on("item", (item) => {
  logger.info({
    msg: `Found new action in mod audit log`,
    subreddit: "PublicFreakout",
    auditLog: item,
  });
});

logger.info(`Service started`);
