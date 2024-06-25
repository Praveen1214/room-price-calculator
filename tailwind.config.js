// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-50-custom': '#FAFAFA',
        'custom-blue': '#0052EA',
        'custom-red': '#FF0000',
      },
    },
  },
  plugins: [],
}
