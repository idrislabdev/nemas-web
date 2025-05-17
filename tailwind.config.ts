import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/@core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/@core/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary' : '#39BFB6'
      },
      screens: {
        "2xl": { max: "1535px" },  
        xl: { max: "1279px" },  
        lg: { max: "1023px" },  
        md: { max: "820px" },  
        sm: { max: "639px" },
      },
      spacing: {
        container: '1536px'
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'serif']
      }
    },
  },
  plugins: [],
};
export default config;
