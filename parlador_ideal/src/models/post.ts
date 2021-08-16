export interface Post {
  user: {
    email: string;
    id: number;
    name: string;
  };
  content: string;
  created_at: Date;
  id: number;
  updated_at: string;
  user_id: number;
}
