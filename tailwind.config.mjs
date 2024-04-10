/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
};
