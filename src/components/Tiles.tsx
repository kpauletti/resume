"use client";
import { motion as m } from "framer-motion";
import { Tile } from "./Tile/Tile";
import { TileContent } from "./Tile/TileContent";

export const Tiles = () => {
  return (
    <div className="absolute border-black inset-0 mt-12 md:m-12 border-2 flex flex-col">
      <Tile id="CENTER" href="#" target="_self">
        <TileContent className="text-5xl md:text-3xl">
          <span>Kenneth Pauletti</span>
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
        </TileContent>
      </Tile>
      <Tile id="TOP_LEFT" href="/CV_KPauletti.docx" target="_blank" content="RESUME" />
      <Tile
        id="TOP_RIGHT"
        href="https://www.linkedin.com/in/kpauletti"
        target="_blank"
        content="LINKEDIN"
      />
      <Tile
        id="BOTTOM_LEFT"
        href="https://www.github.com/kpauletti"
        target="_blank"
        content="GITHUB"
      />
      <Tile
        id="BOTTOM_RIGHT"
        href="mailto:kennethpauletti@gmail.com"
        target="_blank"
        content="EMAIL"
      />
    </div>
  );
};
