import * as anim from "./animations";
import type { BaseTileProps } from "./Tile";

export const createTileProps = (id: BaseTileProps["id"]): Partial<BaseTileProps> => {
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
