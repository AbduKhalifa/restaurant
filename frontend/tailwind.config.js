/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'base':'#121618',
        'helper':'#FFC851',
        'text':'#F7FFFF',
        'dark':'#686A6B'
      },
      fontSize:{
        'ex-small':"13px",
        'small':'14px',
        'medium':'16px',
        'big':'18px',
        'xbig':'32px',
      },
      transitionDuration:{
        "fast":"300ms",
        "medium":"450ms",
        "slow":"850ms",
        "second":"1s"
      }
    },
  },
  plugins: [],
}


