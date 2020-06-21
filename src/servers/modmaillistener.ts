import dotenv from "dotenv";
import { ModMailStream } from "snoostorm";
import { redditapi } from "../services/redditapi";

dotenv.config();

export const ModMailListener = () => {
  return new ModMailStream(redditapi.snoowrap, {
    pollTime: 1000, // FIXME: use environment variable
  });
};
