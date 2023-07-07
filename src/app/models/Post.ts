export interface Post{
  id: number;
  content: any;
  location?: any;
  profileFrom: string;
  description: string;
  createdAt?: any;
  likesCount?: number;
  commentsCount?: number;
  comments?: [
    {
      user: string,
      commentText: string,
      createdAt?: Date|null
    }
  ]
}