module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx}","./components/**/*.{js,jsx}","./content/**/*.{md,mdx}"],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
};
