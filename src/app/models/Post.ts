export interface Post{
  id: number;
  content: any;
  location?: any;
  profileFrom: string;
  descripcion: string;
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

export interface PostShowLikesService {
  show: boolean,
  likes: any[]
}