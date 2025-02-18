export interface Blog {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  featuredImage: string;
  date: string;
  commentsCount: number;
  user: string;
}

export interface Comment {
  _id: string;
  blogId: string;
  user: string;
  content: string;
  date: string;
}