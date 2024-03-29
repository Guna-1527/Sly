export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Blur: {
        "bg-blur" : "rgba(0,0,0,0.1)",
      }
    },
  },
  plugins: [],
}