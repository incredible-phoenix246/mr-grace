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
  isvideo?: boolean;
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
  isvideo?: boolean;
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

export interface Uploadresult {
  event: string;
  info: Info;
}

export interface Info {
  id: string;
  batchId: string;
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  pages: number;
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  playback_url: string;
  folder: string;
  audio: Audio;
  video: Video;
  is_audio: boolean;
  frame_rate: number;
  bit_rate: number;
  duration: number;
  rotation: number;
  original_filename: string;
  nb_frames: number;
  done: boolean;
  path: string;
  thumbnail_url: string;
}

export interface Audio {
  codec: string;
  bit_rate: string;
  frequency: number;
  channels: number;
  channel_layout: string;
}

export interface Video {
  pix_format: string;
  codec: string;
  level: number;
  profile: string;
  bit_rate: string;
  dar: string;
  time_base: string;
}
