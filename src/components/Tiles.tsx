"use client";
import { Yellowtail } from "next/font/google";
import { Tile } from "./Tile";
import * as tileAnimation from "./tileAnimations";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export const Tiles = () => {
  return (
    <div className="absolute border-black inset-0 mt-12 border-2 flex flex-col">
      <Tile
        id="CENTER"
        href="#"
        target="_self"
        className="text-4xl bg-yellow-200 md:absolute top-[40%] left-[40%] md:w-[20%] md:h-[20%] w-full hover:bg-yellow-200"
        {...tileAnimation.CENTER_TILE_ANIMATION}
      >
        <span className={yellowtail.className}>Kenneth Pauletti</span>
      </Tile>
      <Tile
        id="TOP_LEFT"
        href="/kennethpauletti.pdf"
        className="top-0 left-0 md:w-[60%] md:h-[40%]"
        {...tileAnimation.TOP_LEFT_TILE_ANIMATION}
      >
        RESUME
      </Tile>
      <Tile
        id="TOP_RIGHT"
        href="https://www.linkedin.com/in/kpauletti"
        className="top-0 left-auto bottom-auto right-0 md:w-[40%] md:h-[60%]"
        {...tileAnimation.TOP_RIGHT_TILE_ANIMATION}
      >
        LINKEDIN
      </Tile>
      <Tile
        id="BOTTOM_LEFT"
        href="https://www.github.com/kpauletti"
        className="top-auto left-0 bottom-0 right-auto md:w-[40%] md:h-[60%]"
        {...tileAnimation.BOTTOM_LEFT_TILE_ANIMATION}
      >
        GITHUB
      </Tile>
      <Tile
        id="BOTTOM_RIGHT"
        href="mailto:kennethpauletti@gmail.com"
        className="top-auto left-auto bottom-0 right-0 md:w-[60%] md:h-[40%]"
        {...tileAnimation.BOTTOM_RIGHT_TILE_ANIMATION}
      >
        CONTACT
      </Tile>
    </div>
  );
};
