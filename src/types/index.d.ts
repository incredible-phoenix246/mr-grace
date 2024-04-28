export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type SocialsProps = {
  id?: number;
  link: string;
  label: string;
  icon?: Icon;
};

export type PostProps = {
  id?: number;
  cart?: string;
  date?: string;
  title: string;
  desc: string;
  image: string;
  readcount?: number;
  comment?: Comment[];
};

export type AboutCardProps = {
  id: number;
  title: string;
  desc: string;
};

interface Post {
  id: string;
  src: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  desc: string;
  links?: string;
  others?: string;
  comment: Comment[];
  views: number;
  draft: boolean;
}

interface Comment {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  author?: string;
  comment: string;
  postId?: string;
}


type DefaultAuthor<T> = T & { author: Exclude<T["author"], ""> | "anonymous" };

type Comment = DefaultAuthor<CommentBase>;