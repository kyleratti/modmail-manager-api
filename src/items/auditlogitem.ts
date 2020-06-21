import { RedditContent } from "snoowrap";

export enum AuditLogAction {
  banuser = "banuser",
  unbanuser = "unbanuser",
  spamlink = "spamlink",
  removelink = "removelink",
  approvelink = "approvelink",
  spamcomment = "spamcomment",
  removecomment = "removecomment",
  approvecomment = "approvecomment",
  addmoderator = "addmoderator",
  showcomment = "showcomment",
  invitemoderator = "invitemoderator",
  uninvitemoderator = "uninvitemoderator",
  acceptmoderatorinvite = "acceptmoderatorinvite",
  removemoderator = "removemoderator",
  addcontributor = "addcontributor",
  removecontributor = "removecontributor",
  editsettings = "editsettings",
  editflair = "editflair",
  distinguish = "distinguish",
  marknsfw = "marknsfw",
  wikibanned = "wikibanned",
  wikicontributor = "wikicontributor",
  wikiunbanned = "wikiunbanned",
  wikipagelisted = "wikipagelisted",
  removewikicontributor = "removewikicontributor",
  wikirevise = "wikirevise",
  wikipermlevel = "wikipermlevel",
  ignorereports = "ignorereports",
  unignorereports = "unignorereports",
  setpermissions = "setpermissions",
  setsuggestedsort = "setsuggestedsort",
  sticky = "sticky",
  unsticky = "unsticky",
  setcontestmode = "setcontestmode",
  unsetcontestmode = "unsetcontestmode",
  lock = "lock",
  unlock = "unlock",
  muteuser = "muteuser",
  unmuteuser = "unmuteuser",
  createrule = "createrule",
  editrule = "editrule",
  reorderrules = "reorderrules",
  deleterule = "deleterule",
  spoiler = "spoiler",
  unspoiler = "unspoiler",
  modmail_enrollment = "modmail_enrollment",
  community_styling = "community_styling",
  community_widgets = "community_widgets",
  markoriginalcontent = "markoriginalcontent",
  collections = "collections",
  events = "events",
  hidden_award = "hidden_award",
  add_community_topics = "add_community_topics",
  remove_community_topics = "remove_community_topics",
  create_scheduled_post = "create_scheduled_post",
  edit_scheduled_post = "edit_scheduled_post",
  delete_scheduled_post = "delete_scheduled_post",
  submit_scheduled_post = "submit_scheduled_post",
  edit_post_requirements = "edit_post_requirements",
}

export class AuditLogItem extends RedditContent<AuditLogItem> {
  kind: "modaction"; // WARN: can't find any documentation on what this is supposed to be
  data: {
    description: string | null;
    target_body: string;
    mod_id36: string;
    created_utc: number;
    /**
     * The name of the subreddit the log is from (without prefix)
     * @example "PublicFreakout"
     */
    subreddit: string;
    target_title: string | null;
    /** The relative URL for the permalink to the content in question */
    target_permalink: string;
    /** The name of the subreddit the log is from (with prefix) */
    subreddit_name_prefixed: string;
    /** The details of the action that was performed */
    details: string | null;
    /** The action that was performed */
    action: AuditLogAction;
    /** The username of the user targeted by this action */
    target_author: string;
    target_fullname: string;
    sr_id36: string;
    /**
     * The unique audit log ID of this action
     * @example "ModAction_3dab85c4-b350-11ea-ae28-12e35e359864"
     */
    id: string;
    /**
     * The username of the moderator that performed this action
     * @example "AutoModerator"
     */
    mod: string;
  };
}
