import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssForms from '@tailwindcss/forms';
import tailwindcssTypography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        myprimary: 'var(--myprimary)',
        mysecondary: 'var(--mysecondary)',
        myborder: 'var(--myborder)',
        mytext: 'var(--mytext)',
        mybackground: 'var(--mybackground)',
        myforeground: 'var(--myforeground)',
      },
      keyframes: {
        flow: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 0.5rem))' },
        },
      },
      animation: {
        flow: 'flow var(--duration, 20s) linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssForms, tailwindcssTypography],
};

export default config;
