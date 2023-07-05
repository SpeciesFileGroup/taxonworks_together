import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#41BA8D',
        secondary: '#342D25',
        'primary-dark': '#00845D',
        'secondary-dark': '#28221B'
      },
      fontFamily: {
        lato: ['Lato'],
        hind: ['Hind'],
        body: ['Lato']
      }
    }
  },
  plugins: [tailwindTypography]
}
