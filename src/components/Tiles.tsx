"use client";
import { Yellowtail } from "next/font/google";
import { motion as m } from "framer-motion";
import { Tile } from "./Tile";
import * as tileAnimation from "./tileAnimations";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export const Tiles = () => {
  return (
    <div className="absolute border-black inset-0 mt-12 md:m-12 border-2 flex flex-col">
      <Tile
        id="CENTER"
        href="#"
        target="_self"
        className="text-5xl md:text-3xl bg-yellow-200 md:absolute top-0 left-0 md:top-[40%] md:left-[40%] md:w-[20%] md:h-[20%] w-full hover:bg-yellow-200 z-50"
        whileHover={{
          fontSize: "50px",
          backgroundColor: "transparent",
        }}
        {...tileAnimation.CENTER_TILE_ANIMATION}
      >
        <span className={yellowtail.className}>Kenneth Pauletti</span>
        <div className="absolute inset-0">
          <m.video
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.25, transition: { duration: 0.5 } }}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="./glitch.mp4" type="video/mp4" />
          </m.video>
        </div>
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
