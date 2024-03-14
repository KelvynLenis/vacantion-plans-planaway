/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#faeee7",
        headline: "#33272a",
        paragraph: '#594a4e',
        button: '#ff8ba7',
        "button-text": '#33272a',
        stroke: '#33272a',
        main: '#fffffe',
        highlight: '#ff8ba7',
        secondary: '#ffc6c7',
        tertiary: '#c3f0ca',
      }
    },
  },
  plugins: [],
}

