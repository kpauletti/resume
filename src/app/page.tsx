import React from "react";

import { Marquee } from "@/components/Marquee";
import { Tiles } from "@/components/Tiles";

const marqueeItems = [
  "TYPESCRIPT.",
  "REACT.",
  "AWS.",
  "REACT NATIVE.",
  "NODEJS.",
  "EXPRESS.",
  "GRAPHQL.",
  "DOCKER.",
];

export default function Home() {
  return (
    <>
      <Marquee location="top" items={marqueeItems} />
      <Marquee location="bottom" items={marqueeItems} />
      <Marquee location="left" items={marqueeItems} />
      <Marquee location="right" items={marqueeItems} />
      <Tiles />
    </>
  );
}
