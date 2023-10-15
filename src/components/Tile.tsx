"use client";
import { motion as m } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Tile {
  className?: string;
  href: string;
  target?: string;
  children: React.ReactNode;
}

export const Tile = (props: Tile) => {
  const className = twMerge(
    "block md:absolute",
    "border-2 border-black",
    "flex flex-1 items-center justify-center",
    "text-2xl md:text-5xl font-bold text-center",
    "hover:bg-yellow-400",
    props.className
  );

  return (
    <m.a
      {...props}
      href={props.href}
      target={props.target ?? "_blank"}
      className={className}
      whileHover={{
        textShadow: "0 0 10px rgba(255,255,255,1)",
      }}
    >
      {props.children}
    </m.a>
  );
};
