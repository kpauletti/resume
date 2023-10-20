import { animate } from "framer-motion";

const setDefaultTileSize = () => {
  animate("#CENTER", { width: "20%", height: "20%", top: "40%", left: "40%" });
  animate("#TOP_LEFT", { height: "40%", width: "60%", opacity: 1 });
  animate("#BOTTOM_LEFT", { height: "60%", width: "40%", opacity: 1 });
  animate("#BOTTOM_RIGHT", { height: "40%", width: "60%", opacity: 1 });
  animate("#TOP_RIGHT", { height: "60%", width: "40%", opacity: 1 });
};

export const CENTER_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#CENTER", { width: "30%", height: "30%", top: "35%", left: "35%" });
    animate("#TOP_LEFT", { height: "65%", width: "35%" });
    animate("#BOTTOM_LEFT", { height: "35%", width: "65%" });
    animate("#BOTTOM_RIGHT", { height: "65%", width: "35%" });
    animate("#TOP_RIGHT", { height: "35%", width: "65%" });
  },
  onMouseLeave: setDefaultTileSize,
  onClick: () => {
    animate("#CENTER", { width: "100%", height: "100%", top: "0%", left: "0%" });
    animate("#TOP_LEFT", { height: "0%", width: "0%", opacity: 0 });
    animate("#BOTTOM_LEFT", { height: "0%", width: "0%", opacity: 0 });
    animate("#BOTTOM_RIGHT", { height: "0%", width: "0%", opacity: 0 });
    animate("#TOP_RIGHT", { height: "0%", width: "0%", opacity: 0 });
  },
};

export const TOP_LEFT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#TOP_LEFT", { height: "50%" });
    animate("#BOTTOM_LEFT", { height: "50%" });
    animate("#CENTER", { top: "50%" });
    animate("#BOTTOM_RIGHT", { height: "30%" });
    animate("#TOP_RIGHT", { height: "70%" });
  },
  onMouseLeave: setDefaultTileSize,
};

export const TOP_RIGHT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#TOP_RIGHT", { width: "50%" });
    animate("#TOP_LEFT", { width: "50%" });
    animate("#CENTER", { left: "30%" });
    animate("#BOTTOM_LEFT", { width: "30%" });
    animate("#BOTTOM_RIGHT", { width: "70%" });
  },
  onMouseLeave: setDefaultTileSize,
};

export const BOTTOM_LEFT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#BOTTOM_LEFT", { width: "50%" });
    animate("#BOTTOM_RIGHT", { width: "50%" });
    animate("#CENTER", { left: "50%" });
    animate("#TOP_RIGHT", { width: "30%" });
    animate("#TOP_LEFT", { width: "70%" });
  },
  onMouseLeave: setDefaultTileSize,
};

export const BOTTOM_RIGHT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#BOTTOM_RIGHT", { height: "50%" });
    animate("#TOP_RIGHT", { height: "50%" });
    animate("#CENTER", { top: "30%" });
    animate("#TOP_LEFT", { height: "30%" });
    animate("#BOTTOM_LEFT", { height: "70%" });
  },
  onMouseLeave: setDefaultTileSize,
};
