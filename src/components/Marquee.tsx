import { twMerge } from "tailwind-merge";

export const Marquee = ({
  items,
  location,
}: {
  items: string[];
  location: "top" | "bottom" | "left" | "right";
}) => {
  const className = twMerge(
    "border-black whitespace-nowrap overflow-hidden absolute",
    location === "top" && "w-screen top-0 border-t-4 border-x-4 px-0 md:px-12",
    location === "bottom" && "w-screen bottom-0 z-50 px-12 border-b-4 hidden md:block",
    location === "left" &&
      "w-[100vh] top-[100%] -rotate-90 origin-top-left border-t-4 hidden md:block",
    location === "right" &&
      "w-[100vh] left-[100vw] rotate-90 origin-top-left border-t-4 hidden md:block"
  );

  //reverse the marquee if it's on the bottom
  const contentClassName = twMerge("marquee__content", location === "bottom" && "marquee_reverse");

  return (
    <div className={className}>
      <div className="marquee font-bold tracking-wider h-12">
        <ul className={contentClassName}>
          {items.map(item => (
            <li key={item + "_track1"}>{item}</li>
          ))}
        </ul>
        <ul aria-hidden="true" className={contentClassName}>
          {items.map(item => (
            <li key={item + "_track2"}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
