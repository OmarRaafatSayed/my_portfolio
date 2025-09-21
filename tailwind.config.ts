import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
        headline: ["var(--font-headline)", "IBM Plex Sans", "sans-serif"],
        sans: ["var(--font-sans)", "Nunito", "sans-serif"],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fly-1': {
          'from': { transform: 'translateY(0.1em)' },
          'to': { transform: 'translateY(-0.1em)' },
        },
        'pulse-cv': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 hsl(var(--primary-foreground) / 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 16px hsl(var(--primary-foreground) / 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 hsl(var(--primary-foreground) / 0)' },
        },
        'installing-cv': {
          from: { height: '0%' },
          to: { height: '100%' },
        },
        'rotate-cv': {
          '0%': { transform: 'rotate(-90deg) translate(27px) rotate(0deg)', opacity: '1' },
          '99%': { transform: 'rotate(270deg) translate(27px) rotate(270deg)', opacity: '1' },
          '100%': { opacity: '0' },
        },
        'installed-cv': {
          '100%': { width: '160px', borderColor: 'hsl(var(--accent))' },
        },
        'circle-delete-cv': {
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        'show-installed-message-cv': {
          '100%': { opacity: '1', visibility: 'visible', right: '40px' },
        },
        'marquee': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-h': {
          '0%': { top: '0', opacity: '0' },
          '25%': { opacity: '1' },
          '50%': { top: '30%', opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'move-v': {
          '0%': { left: '0', opacity: '0' },
          '25%': { opacity: '1' },
          '50%': { left: '45%', opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        'loader-effect': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'loader-rot': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'loader-scale': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.9)' },
          '100%': { transform: 'scale(1)' },
        },
        'loader-height': {
          '0%': { bottom: '0%', left: '0%', height: '0px' },
          '25%': { height: '90px' },
          '50%': { bottom: '100%', left: '100%', height: '90px' },
          '75%': { height: '0px' },
          '100%': { bottom: '0%', left: '0%', height: '0px' },
        },
        'loader-width': {
          '0%': { left: '0%', width: '0px' },
          '50%': { left: '100%', width: '90px' },
          '100%': { left: '0%', width: '0px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fly-1': 'fly-1 0.6s ease-in-out infinite alternate',
        'pulse-cv': 'pulse-cv 1s forwards',
        'installing-cv': 'installing-cv 3s ease-in-out forwards',
        'rotate-cv': 'rotate-cv 3s ease-in-out 0.4s forwards',
        'installed-cv': 'installed-cv 0.4s ease 3.5s forwards',
        'circle-delete-cv': 'circle-delete-cv 0.2s ease 3.5s forwards',
        'show-installed-message-cv': 'show-installed-message-cv 0.4s ease 3.5s forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee-slow 40s linear infinite',
        'move-h': 'move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        'move-v': 'move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        'loader-effect-light': 'loader-effect 0.2s 0.1s infinite linear',
        'loader-effect-light-d': 'loader-effect 0.3s 0.2s infinite linear',
        'loader-rot': 'loader-rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        'loader-scale': 'loader-scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        'loader-height': 'loader-height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        'loader-width': 'loader-width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
