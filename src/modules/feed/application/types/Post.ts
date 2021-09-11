export interface Post {
  authorId: number;
  id: number;
  title: string | null;
  body: string | null;
  images: string[] | null;
  created_at: string;
  updated_at: string;
}
