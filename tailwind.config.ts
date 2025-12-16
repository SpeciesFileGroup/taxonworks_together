import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  app: {
    baseURL: '/2025'
  },
  theme: {
    extend: {
      colors: {
        primary: '#41BA8D',
        secondary: '#342D25',
        tertiary: '#fafaf5',
        'primary-dark': '#00845D',
        'secondary-dark': '#28221B'
      },
      fontFamily: {
        sans: ['Hind', ...defaultTheme.fontFamily.sans],
        hind: ['Hind']
      }
    }
  },
  plugins: [tailwindTypography]
}
