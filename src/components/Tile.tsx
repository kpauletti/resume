"use client";
import { motion as m, HTMLMotionProps } from "framer-motion";
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { useWindowSize } from "react-use";
import { HTMLAttributes } from "react";

type TileID = "CENTER" | "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";

interface Tile extends HTMLMotionProps<"a"> {
  id: TileID;
  children: React.ReactNode;
}

export const Tile = (props: Tile) => {
  const { width } = useWindowSize();

  const className = twMerge(
    "block md:absolute relative",
    "border-2 border-black",
    "flex flex-1 items-center justify-center",
    "text-2xl md:text-5xl text-center text-shadow-white",
    "hover:bg-yellow-400",
    props.className
  );

  if (width < 768) {
    //strip animations on mobile
    return (
      <a id={props.id} target={props.target ?? "_blank"} href={props.href} className={className}>
        {props.children}
      </a>
    );
  }

  //add text-shadow

  return (
    <m.a {...props} id={props.id} target={props.target ?? "_blank"} className={className}>
      {props.children}
    </m.a>
  );
};
