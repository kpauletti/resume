"use client";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import * as anim from "./animations";
import { twMerge } from "tailwind-merge";
import { useWindowSize } from "react-use";

export interface BaseTileProps extends HTMLMotionProps<"a"> {
  id: "CENTER" | "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
  children?: React.ReactNode;
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
      {props.children}
    </motion.a>
  );
};

/* -------------------------------------------------------------------------- */
/*                 STYLES AND ANIMATIONS SPECIFIC TO EACH TILE                */
/* -------------------------------------------------------------------------- */

const createTileProps = (id: BaseTileProps["id"]): BaseTileProps => {
  switch (id) {
    case "CENTER":
      return {
        id: "CENTER",
        className:
          "bg-yellow-200 md:absolute top-0 left-0 md:top-[40%] md:left-[40%] md:w-[20%] md:h-[20%] w-full z-50",
        onMouseEnter: anim.expandCenterTile,
        onMouseLeave: anim.reset,
        whileHover: {
          fontSize: "40px",
          backgroundColor: "transparent",
          transition: { duration: 0.5 },
        },
      };
    case "TOP_LEFT":
      return {
        id: "TOP_LEFT",
        className: "top-0 left-0 md:w-[60%] md:h-[40%]",
        onMouseEnter: anim.expandTopLeftTile,
        onMouseLeave: anim.reset,
      };
    case "TOP_RIGHT":
      return {
        id: "TOP_RIGHT",
        className: "top-0 left-auto bottom-auto right-0 md:w-[40%] md:h-[60%]",
        onMouseEnter: anim.expandTopRightTile,
        onMouseLeave: anim.reset,
      };
    case "BOTTOM_LEFT":
      return {
        id: "BOTTOM_LEFT",
        className: "top-auto left-0 bottom-0 right-auto md:w-[40%] md:h-[60%]",
        onMouseEnter: anim.expandBottomLeftTile,
        onMouseLeave: anim.reset,
      };
    case "BOTTOM_RIGHT":
      return {
        id: "BOTTOM_RIGHT",
        className: "top-auto left-auto bottom-0 right-0 md:w-[60%] md:h-[40%]",
        onMouseEnter: anim.expandBottomRightTile,
        onMouseLeave: anim.reset,
      };

    default:
      return {} as BaseTileProps;
  }
};
