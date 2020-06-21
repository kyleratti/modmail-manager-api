import { Poll, SnooStormOptions } from "snoostorm";
import { AuditLogItem } from "../items";
import { redditapi } from "../services/redditapi";

export type ModAuditLogStreamOptions = SnooStormOptions;

export class ModAuditLogStream extends Poll<AuditLogItem> {
  constructor(subreddit: string, options?: ModAuditLogStreamOptions) {
    super({
      frequency: options.pollTime,
      get: () => redditapi.getAuditLog(subreddit),
      identifier: "id",
    });
  }
}
