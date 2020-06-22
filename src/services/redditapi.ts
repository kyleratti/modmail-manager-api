import Snoowrap, { Listing, RedditContent } from "snoowrap";
import { configurator } from "tuckbot-util";
import { AuditLogItem } from "../items";

class ExtendedRedditApi {
  private _snoowrap: Snoowrap;

  constructor() {
    this._snoowrap = new Snoowrap({
      userAgent: process.env.REDDIT_USER_AGENT,
      clientId: configurator.reddit.clientID,
      clientSecret: configurator.reddit.clientSecret,
      username: configurator.reddit.username,
      password: configurator.reddit.password,
    });

    this._snoowrap.config({
      debug: true,
    });
  }

  public get snoowrap() {
    return this._snoowrap;
  }

  getAuditLog = (subreddit: string) =>
    new Promise<AuditLogItem[]>((success, fail) => {
      this._snoowrap
        // @ts-ignore
        // this exists on the prototype but is not in the typings file
        ._get({
          uri: `r/${subreddit}/about/log`,
        })
        .then(function (result: Listing<RedditContent<AuditLogItem>>) {
          const logItems = new Array<AuditLogItem>();
          result.map((obj) => logItems.push(obj as AuditLogItem));
          return success(logItems);
        })
        .catch((err: any) => fail(err));
    });
}

export const redditapi = new ExtendedRedditApi();
