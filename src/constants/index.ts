import { NavbarLinkProps, SocialsProps, PostProps } from "@/types";
import { type Icon, Facebook, Instagram } from "iconsax-react";
import { Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: "home", label: "home" },
  { id: 2, link: "about", label: " About" },
  { id: 3, link: "blog", label: " Blog" },
];

export const Social_Links: SocialsProps[] = [
  { id: 1, link: "", label: "Facebook", icon: Facebook },
  { id: 2, link: "", label: "Linkedin", icon: Linkedin },
  { id: 3, link: "", label: "Twitter", icon: BsTwitterX },
  { id: 4, link: "", label: "Instagram", icon: Instagram },
];

export const Post: PostProps[] = [
  {
    id: 1,
    title: "HOW AI WILL CHANGE THE FUTURE",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, impedit necessitatibus ex alias ab qui repudiandae sequi mollitia officia ipsa quisquam dicta, voluptas nulla, sunt quia aperiam soluta. Repellendus, cupiditate!",
    image: "/aiimage.png",
  },
];
