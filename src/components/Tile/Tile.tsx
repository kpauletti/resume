"use client";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useWindowSize } from "react-use";
import { createTileProps } from "./createTileProps";
import { TileContent } from "./TileContent";

export interface BaseTileProps extends HTMLMotionProps<"a"> {
  id: "CENTER" | "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
  children?: React.ReactNode;
  content?: string;
}

export const Tile = (props: BaseTileProps) => {
  const { width } = useWindowSize();
  const tileProps = createTileProps(props.id);

  const className = twMerge(
    "md:absolute relative border-2 w-full border-black flex flex-1 hover:bg-yellow-400",
    tileProps.className
  );

  if (width < 768) {
    tileProps.onMouseEnter = undefined;
    tileProps.onMouseLeave = undefined;
  }

  return (
    <motion.a {...props} {...tileProps} className={className}>
      {props.content ? <TileContent>{props.content}</TileContent> : props.children}
    </motion.a>
  );
};
