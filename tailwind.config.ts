import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { text: '#e2e3e8', background: '#242630', accent: '#05EDAB' },
    },
  },
  plugins: [],
}
export default config
