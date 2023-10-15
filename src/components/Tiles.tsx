import { Yellowtail } from "next/font/google";
import { Tile } from "./Tile";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export const Tiles = () => {
  return (
    <div className="absolute border-black inset-0 mt-12 border-2 flex flex-col">
      <Tile
        href="#"
        target="_self"
        className="text-4xl bg-yellow-200 md:absolute top-[40%] left-[40%] md:w-[20%] md:h-[20%] w-full hover:bg-yellow-200"
      >
        <span className={yellowtail.className} style={{ textShadow: "1em 1em 1em #fff" }}>
          Kenneth Pauletti
        </span>
      </Tile>
      <Tile href="/kennethpauletti.pdf" className="top-0 left-0 md:w-[60%] md:h-[40%]">
        RESUME
      </Tile>
      <Tile
        href="https://www.linkedin.com/in/kpauletti"
        className="top-0 left-auto bottom-auto right-0 md:w-[40%] md:h-[60%]"
      >
        LINKEDIN
      </Tile>
      <Tile
        href="https://www.github.com/kpauletti"
        className="top-auto left-0 bottom-0 right-auto md:w-[40%] md:h-[60%]"
      >
        GITHUB
      </Tile>
      <Tile
        href="mailto:kennethpauletti@gmail.com"
        className="top-auto left-auto bottom-0 right-0 md:w-[60%] md:h-[40%]"
      >
        CONTACT
      </Tile>
    </div>
  );
};
