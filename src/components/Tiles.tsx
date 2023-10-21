"use client";
import { motion as m } from "framer-motion";
import { Tile } from "./Tile";
import * as tileAnimations from "./tileAnimations";

export const Tiles = () => {
  return (
    <div className="absolute border-black inset-0 mt-12 md:m-12 border-2 flex flex-col">
      <Tile
        id="CENTER"
        href="#"
        target="_self"
        className="text-5xl md:text-3xl bg-yellow-200 md:absolute top-0 left-0 md:top-[40%] md:left-[40%] md:w-[20%] md:h-[20%] w-full z-50"
        whileHover={{
          fontSize: "40px",
          backgroundColor: "transparent",
          transition: { duration: 0.5 },
        }}
        onMouseEnter={tileAnimations.expandCenterTile}
        onMouseLeave={tileAnimations.reset}
        onClick={tileAnimations.clickCenterTile}
      >
        <span id="CENTER_TEXT">Kenneth Pauletti</span>
        <div className="absolute inset-0">
          <m.video
            id="CENTER_VIDEO"
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
        onMouseEnter={tileAnimations.expandTopLeftTile}
        onMouseLeave={tileAnimations.reset}
      >
        RESUME
      </Tile>
      <Tile
        id="TOP_RIGHT"
        href="https://www.linkedin.com/in/kpauletti"
        className="top-0 left-auto bottom-auto right-0 md:w-[40%] md:h-[60%]"
        onMouseEnter={tileAnimations.expandTopRightTile}
        onMouseLeave={tileAnimations.reset}
      >
        LINKEDIN
      </Tile>
      <Tile
        id="BOTTOM_LEFT"
        href="https://www.github.com/kpauletti"
        className="top-auto left-0 bottom-0 right-auto md:w-[40%] md:h-[60%]"
        onMouseEnter={tileAnimations.expandBottomLeftTile}
        onMouseLeave={tileAnimations.reset}
      >
        GITHUB
      </Tile>
      <Tile
        id="BOTTOM_RIGHT"
        href="mailto:kennethpauletti@gmail.com"
        className="top-auto left-auto bottom-0 right-0 md:w-[60%] md:h-[40%]"
        onMouseEnter={tileAnimations.expandBottomRightTile}
        onMouseLeave={tileAnimations.reset}
      >
        CONTACT
      </Tile>
    </div>
  );
};
