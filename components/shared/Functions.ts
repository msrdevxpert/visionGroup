import { StaticImageData } from "next/image";

export const isActive = (path: string, submenus: { id: number; title: string; link: string; img?: StaticImageData | string }[] | undefined): boolean => {
  return (
    Array.isArray(submenus) &&
    submenus.some(({ link }) => {
      return link === path; // Example condition
    })
  );
};
