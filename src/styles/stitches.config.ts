// stitches.config.ts
import { createStitches } from '@stitches/react'
// eslint-disable-next-line camelcase
// import { Changa } from 'next/font/google'

// const changa = Changa({ subsets: ['latin'], weight: ['200', '800'] })

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      white100: '#F5F5F5',
      black: '#0A0A0A',
      gray100: '#F2F2F2',
      gray300: '#898989',

      orange: '#F58D13',
      orangeBg: '#F58D1320',
      red: '#EF5330',
      pink: '#DF69DB',
      green: '#73A66E',
      blue: '#3880D6',
      // Adicione mais cores conforme necessário

      accentBlue: '#41516C',
      accentYellow: '#FBCA3E',
      accentRed: '#E24A68',
      accentDarkBlue: '#1B5F8C',
      accentTeal: '#4CADAD',

      bgColor: '#F5F5F5',
      textColor: '#1E1E1E',
    },
    fonts: {
      poppins: 'Poppins, sans-serif',
      // changa: changa.style.fontFamily,
      // Adicione mais fontes conforme necessário
    },
    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '32px',
      xl: '64px',
      // Adicione mais espaçamentos conforme necessário
    },
    radii: {
      sm: '6px',
      md: '12px',
      lg: '24px',
      // Adicione mais raios de borda conforme necessário
    },
    // Adicione mais temas conforme necessário
  },
})
