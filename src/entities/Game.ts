import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  description_raw: string;
  publishers: Publishers[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  /** 35-Adding Emojis */
  rating_top: number;
}
