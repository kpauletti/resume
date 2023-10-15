import { animate } from "framer-motion";

export const CENTER_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#CENTER", { width: "30%", height: "30%", top: "35%", left: "35%" });
    animate("#TOP_LEFT", { height: "35%", width: "65%" });
    animate("#BOTTOM_LEFT", { height: "65%", width: "35%" });
    animate("#BOTTOM_RIGHT", { height: "35%", width: "65%" });
    animate("#TOP_RIGHT", { height: "65%", width: "35%" });
  },
  onMouseLeave: () => {
    animate("#CENTER", { width: "20%", height: "20%", top: "40%", left: "40%" });
    animate("#TOP_LEFT", { height: "40%", width: "60%" });
    animate("#BOTTOM_LEFT", { height: "60%", width: "40%" });
    animate("#BOTTOM_RIGHT", { height: "40%", width: "60%" });
    animate("#TOP_RIGHT", { height: "60%", width: "40%" });
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
  onMouseLeave: () => {
    animate("#TOP_LEFT", { height: "40%" });
    animate("#BOTTOM_LEFT", { height: "60%" });
    animate("#CENTER", { top: "40%" });
    animate("#BOTTOM_RIGHT", { height: "40%" });
    animate("#TOP_RIGHT", { height: "60%" });
  },
};

export const TOP_RIGHT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#TOP_RIGHT", { width: "50%" });
    animate("#TOP_LEFT", { width: "50%" });
    animate("#CENTER", { left: "30%" });
    animate("#BOTTOM_LEFT", { width: "30%" });
    animate("#BOTTOM_RIGHT", { width: "70%" });
  },
  onMouseLeave: () => {
    animate("#TOP_RIGHT", { width: "40%" });
    animate("#TOP_LEFT", { width: "60%" });
    animate("#CENTER", { left: "40%" });
    animate("#BOTTOM_LEFT", { width: "40%" });
    animate("#BOTTOM_RIGHT", { width: "60%" });
  },
};

export const BOTTOM_LEFT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#BOTTOM_LEFT", { width: "50%" });
    animate("#BOTTOM_RIGHT", { width: "50%" });
    animate("#CENTER", { left: "50%" });
    animate("#TOP_RIGHT", { width: "30%" });
    animate("#TOP_LEFT", { width: "70%" });
  },
  onMouseLeave: () => {
    animate("#BOTTOM_LEFT", { width: "40%" });
    animate("#BOTTOM_RIGHT", { width: "60%" });
    animate("#CENTER", { left: "40%" });
    animate("#TOP_RIGHT", { width: "40%" });
    animate("#TOP_LEFT", { width: "60%" });
  },
};

export const BOTTOM_RIGHT_TILE_ANIMATION = {
  onMouseEnter: () => {
    animate("#BOTTOM_RIGHT", { height: "50%" });
    animate("#TOP_RIGHT", { height: "50%" });
    animate("#CENTER", { top: "30%" });
    animate("#TOP_LEFT", { height: "30%" });
    animate("#BOTTOM_LEFT", { height: "70%" });
  },
  onMouseLeave: () => {
    animate("#BOTTOM_RIGHT", { height: "40%" });
    animate("#TOP_RIGHT", { height: "60%" });
    animate("#CENTER", { top: "40%" });
    animate("#TOP_LEFT", { height: "40%" });
    animate("#BOTTOM_LEFT", { height: "60%" });
  },
};
