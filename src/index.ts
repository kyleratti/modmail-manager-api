import { logger } from "tuckbot-util";
import { redditapi } from "./services/redditapi";
import { ModAuditLogStream } from "./streams";

logger.info(`Starting modmail-manager-api...`);

const { snoowrap } = redditapi;

/*(const modListener = new ModMailStream(snoowrap, {
  pollTime: 1000, // FIXME: use environment variable
});

modListener.on("item", (item) => console.log(item));
modListener.on("listing", (items) => items.length > 0 && console.log(items));

logger.info(`Starting mod mail stream`);
*/

const auditLogListener = new ModAuditLogStream("PublicFreakout", {
  pollTime: 5000,
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
