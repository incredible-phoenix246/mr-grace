import { NavbarLinkProps, SocialsProps } from "@/types";
import { type Icon, Facebook, Instagram } from "iconsax-react";
import { Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: "", label: "home" },
  { id: 2, link: "/about", label: " About" },
  { id: 3, link: "/blog", label: " Blog" },
];

export const Social_Links: SocialsProps[] = [
  { id: 1, link: "", label: "Facebook", icon: Facebook },
  { id: 2, link: "", label: "Linkedin", icon: Linkedin },
  { id: 3, link: "", label: "Twitter", icon: BsTwitterX },
  { id: 4, link: "", label: "Instagram", icon: Instagram },
];
