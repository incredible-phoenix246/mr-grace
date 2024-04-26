import {
  NavbarLinkProps,
  SocialsProps,
  PostProps,
  AboutCardProps,
} from "@/types";
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
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/aiimage.png",
    cart: "Development",
    date: "16 March 2023",
    readcount: 6,
  },
  {
    id: 2,
    title: "THE IMPACT OF BLOCKCHAIN TECHNOLOGY",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/slider.png",
    date: "16 March 2023",
    cart: "BlockChain",
    readcount: 9,
  },
  {
    id: 3,
    title: "THE RISE OF MACHINE LEARNING",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post1.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 8,
  },
  {
    id: 4,
    title: "THE FUTURE OF VIRTUAL REALITY",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post2.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 60,
  },
  {
    id: 5,
    title: "CYBERSECURITY TRENDS IN 2023",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post3.png",
    date: "16 March 2023",
    cart: "CyberSecurity",
    readcount: 10,
  },
  {
    id: 6,
    title: "THE FUTURE OF AUTOMATION",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post1.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 15,
  },
  {
    id: 7,
    title: "THE EVOLUTION OF QUANTUM COMPUTING",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post2.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 8,
  },
  {
    id: 8,
    title: "THE RISE OF CLOUD COMPUTING",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post3.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 90,
  },
  {
    id: 9,
    title: "THE FUTURE OF 5G TECHNOLOGY",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post1.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 10,
  },
  {
    id: 10,
    title: "THE IMPACT OF INTERNET OF THINGS (IOT)",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/post2.png",
    date: "16 March 2023",
    cart: "Development",
    readcount: 30,
  },
];

export const AboutContent: AboutCardProps[] = [
  {
    id: 1,
    title: "Brainstorming",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias rem voluptatibus aliquam harum quo eligendi saepe! Dolorem praesentium quas sed odio, inventore impedit debitis vero quisquam? Iusto, minima suscipit? Expedita laboriosam at praesentium accusantium inventore cupiditate ducimus perspiciatis asperiores!",
  },
  {
    id: 2,
    title: "News Publishing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias rem voluptatibus aliquam harum quo eligendi saepe! Dolorem praesentium quas sed odio, inventore impedit debitis vero quisquam? Iusto, minima suscipit? Expedita laboriosam at praesentium accusantium inventore cupiditate ducimus perspiciatis asperiores!",
  },
  {
    id: 3,
    title: "Analysing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias rem voluptatibus aliquam harum quo eligendi saepe! Dolorem praesentium quas sed odio, inventore impedit debitis vero quisquam? Iusto, minima suscipit? Expedita laboriosam at praesentium accusantium inventore cupiditate ducimus perspiciatis asperiores!",
  },
];
