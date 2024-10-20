import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown :'#654321',
        lightbrown : '#664c28',
        lightpink: '#FFB6C1',
        pink: ' #A94064',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'xxs': '0.625rem',  // Custom size: 10px
      'xs': '0.75rem',    // 12px (already exists in Tailwind)
      'sm': '0.875rem',   // 14px (already exists in Tailwind)
      'base': '1rem',     // 16px (default size)
      'lg':'1.5rem',
      '1xl': '1rem',
       '2xl': '2rem',
       '3xl': '3rem',
       '4xl': '4rem',
       '5xl': '5rem',  // 5xl (default example)
      '6xl': '2rem',
       '7xl': '4rem',
       '8xl': '6rem',
       '9xl': '8rem',  // 9xl (default example)
      '10xl': '10rem', // 10xl - bigger size
      '11xl': '12rem', // 11xl - even bigger size
      '12xl': '14rem', // 12xl - massive size
      '13xl': '16rem', // 13xl - even bigger size
      '14xl': '18rem', // 14xl - massive size
      '15xl': '20rem', // 15xl - even bigger size
      '16xl': '22rem', // 16xl - massive 
    },
  },
  plugins: [],
};
export default config;

