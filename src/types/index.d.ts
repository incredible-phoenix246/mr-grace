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
};
