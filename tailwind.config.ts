import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {} as Record<string, any>;
      const colors = theme("colors");

      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const colorShade = colors[color]["500"];
          const colorShade2 = colors[color]["800"];

          neonUtilities[`.neon-text-${color}`] = {
            textShadow: `0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 5px ${colorShade}, 0 0 25px ${colorShade}, 0 0 50px ${colorShade}, 0 0 60px ${colorShade},  0 0 70px ${colorShade}`,
          };

          neonUtilities[`.neon-text-${color}-pulse`] = {
            [`@keyframes neon-pulse-${color}`]: {
              "100%": {
                textShadow: `0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 5px ${colorShade}, 0 0 25px ${colorShade}, 0 0 50px ${colorShade}, 0 0 60px ${colorShade},  0 0 70px ${colorShade}`,
              },
              "0%": {
                textShadow: `0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px ${colorShade2}, 0 0 50px ${colorShade2}, 0 0 100px ${colorShade2}, 0 0 120px ${colorShade2},  0 0 140px ${colorShade2}`,
              },
            },
            animation: `neon-pulse-${color} 2.5s infinite alternate`,
          };
        }
      }

      addUtilities(neonUtilities);
    }),
  ],
};
export default config;
