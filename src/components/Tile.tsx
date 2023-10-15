"use client";
import { motion as m, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useWindowSize } from "react-use";

interface Tile extends HTMLMotionProps<"a"> {}

export const Tile = (props: Tile) => {
  const { width } = useWindowSize();
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
      id={props.id}
      target={props.target ?? "_blank"}
      className={className}
      whileHover={{
        textShadow: "0 0 10px rgba(255,255,255,1)",
      }}
      onMouseEnter={width > 768 ? props.onMouseEnter : undefined}
      onMouseLeave={width > 768 ? props.onMouseLeave : undefined}
    >
      {props.children}
    </m.a>
  );
};
