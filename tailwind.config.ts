import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#4cc9f0",
        pink: "#f72585",
        grey: "#2A2F3A",
        slate: "#8d99ae",
        navy: "#171e31",
        ghost: "#E9E9EF",
      },
    },
  },
  plugins: [],
} satisfies Config;
