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

export const Marquee = () => (
  <div className="border-x-4 border-t-4 border-black whitespace-nowrap overflow-hidden absolute w-screen top-0">
    <div className="marquee font-bold tracking-wider h-12">
      <ul className="marquee__content">
        {marqueeItems.map(item => (
          <li key={item + "_track1"}>{item}</li>
        ))}
      </ul>
      <ul aria-hidden="true" className="marquee__content">
        {marqueeItems.map(item => (
          <li key={item + "_track2"}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);
