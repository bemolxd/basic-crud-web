import { Post } from "modules/feed/application";

export interface User {
  id: number;
  username: string;
  email: string;
  posts: Post[] | null;
  creatred_at: string;
  updated_at: string;
}
