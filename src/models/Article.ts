import { Author } from "./Author";
import { Tag } from "./Tag";

export interface Article {
  slug: string,
  title: Text,
  description: Text,
  body: Text,
  tagList: Tag[],
  createdAt: Date,
  updatedAt: Date,
  favorited: boolean,
  favoritesCount: BigInteger,
  author: Author,
}
