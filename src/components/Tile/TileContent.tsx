import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TileContent = (props: HTMLAttributes<HTMLSpanElement>) => {
  const className = twMerge(
    "h-full w-full flex items-center justify-center text-2xl md:text-5xl text-center text-shadow-white",
    props.className
  );

  return <div {...props} className={className} />;
};
