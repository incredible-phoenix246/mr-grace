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
  {
    id: 2,
    title: "THE IMPACT OF BLOCKCHAIN TECHNOLOGY",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam facere dolor cum dolore mollitia, dignissimos praesentium ea ad, aperiam earum assumenda laudantium distinctio adipisci in explicabo est commodi quae neque nam, beatae cupiditate numquam. Qui cum eum repudiandae nam officia obcaecati? Asperiores distinctio officia dolor omnis possimus nisi esse magnam.",
    image: "/slider.png",
  },
  {
    id: 3,
    title: "THE RISE OF MACHINE LEARNING",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec efficitur, dui non vehicula consectetur, lorem arcu consequat arcu, nec venenatis nisi ex et libero.",
    image: "/machinelearningimage.png",
  },
  {
    id: 4,
    title: "THE FUTURE OF VIRTUAL REALITY",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eget ante et felis placerat vehicula. Donec id arcu at nunc viverra efficitur.",
    image: "/virtualrealityimage.png",
  },
  {
    id: 5,
    title: "CYBERSECURITY TRENDS IN 2023",
    desc: "Duis tristique nisi nec est molestie, at malesuada sem molestie. Nulla sollicitudin tincidunt neque, non congue sapien dapibus in. Curabitur mollis, ligula ut venenatis rutrum.",
    image: "/cybersecurityimage.png",
  },
  {
    id: 6,
    title: "THE FUTURE OF AUTOMATION",
    desc: "Suspendisse potenti. Integer at ligula sit amet lectus scelerisque dictum. Integer vel ligula nulla. Nam eget arcu ligula. Integer id magna nec purus dignissim congue.",
    image: "/automationimage.png",
  },
  {
    id: 7,
    title: "THE EVOLUTION OF QUANTUM COMPUTING",
    desc: "Quisque bibendum lacinia ex eget malesuada. Vivamus laoreet sagittis augue, sit amet malesuada sapien. Etiam ut ligula et urna fermentum maximus id vel justo.",
    image: "/quantumcomputingimage.png",
  },
  {
    id: 8,
    title: "THE RISE OF CLOUD COMPUTING",
    desc: "Phasellus eget vestibulum ex. Nam nec augue felis. Integer convallis, mi a posuere condimentum, odio dolor tristique sapien, vitae interdum arcu arcu at purus.",
    image: "/cloudcomputingimage.png",
  },
  {
    id: 9,
    title: "THE FUTURE OF 5G TECHNOLOGY",
    desc: "Donec malesuada nibh nec est vehicula viverra. Fusce non lectus quis enim finibus egestas. Mauris fermentum sem nec leo facilisis, eget ullamcorper quam rutrum.",
    image: "/5gtechnologyimage.png",
  },
  {
    id: 10,
    title: "THE IMPACT OF INTERNET OF THINGS (IOT)",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget mi ut erat ullamcorper mattis in nec mi. Vestibulum in nisi ultricies, pulvinar ligula non, posuere lorem.",
    image: "/iotimage.png",
  },
];
