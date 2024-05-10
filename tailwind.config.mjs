/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0a1128",
        secontaryDark: "#001f54",
        tertiaryDark: "#0c4592",
        primaryLight: "#3b82f6",
        secontaryLight: "#d9d9d9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [nextui()],
};
