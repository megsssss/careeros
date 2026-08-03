import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1A2B",
          soft: "#16273D",
          softer: "#1D3049",
          line: "#2A4361",
        },
        paper: {
          DEFAULT: "#EDEFE9",
          dim: "#8FA0B5",
        },
        signal: {
          amber: "#E3A84E",
          amberDim: "#8A6A34",
          green: "#6FA787",
          red: "#C7735A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(237,239,233,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,233,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
export default config;
