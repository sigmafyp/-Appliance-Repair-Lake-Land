/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            DEFAULT: '#0F4C5C',
            dark: '#0A343F',
            light: '#1D7082',
            bg: '#EAF4F6'
          },
          amber: {
            DEFAULT: '#F2994A',
            hover: '#E08637',
            light: '#FFF5EC'
          },
          bg: '#FAFAF8',
          surface: '#F1F3F2',
          text: '#1F2A2E',
          muted: '#5C6B6E',
          success: '#4C9A6A',
          alert: '#C75B4A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
