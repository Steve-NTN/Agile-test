export type CommentType = {
  id: number;
  user_id: number;
  description?: string;
  image?: string;
  rating: number;
  user: {
    id: number,
    name: string,
    image?: string
  }
};
