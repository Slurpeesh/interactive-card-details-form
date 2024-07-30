import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        danger: 'hsl(var(--color-danger) / <alpha-value>)',
        'muted-dark': 'hsl(var(--color-muted-dark) / <alpha-value>)',
      },
    },
  },
  plugins: [],
} satisfies Config
