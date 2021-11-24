import { Post } from "modules/feed/application";

export interface User {
  id: number;
  username: string;
  email: string;
  posts: Post[] | null;
  friendsIds: string[] | null;
  created_at: string;
  updated_at: string;
}
