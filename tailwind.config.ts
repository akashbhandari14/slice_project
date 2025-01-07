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
        bgColor : "#f9f3e5",
        lightRed : "#942c23",
        darkRed : "#942b25",
        darkestRed : "#942c23",
        foreground: "var(--foreground)",
        navbar_bg: "var(--navbar_bg_color)",
        category_btn : "var(--category_box_bg_color)"
      },
    },
  },
  plugins: [],
} satisfies Config;
