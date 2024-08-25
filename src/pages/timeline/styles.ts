import { styled } from '../../styles/stitches.config'

export const TimelineContainer = styled('ul', {
  '--col-gap': '2rem',
  '--row-gap': '2rem',
  '--line-w': '0.25rem',

  display: 'grid',
  gridTemplateColumns: '0.25rem 1fr',
  gridAutoColumns: 'max-content',
  columnGap: '2rem',
  width: 'min(1440px, 90%)',
  listStyle: 'none',
  marginInline: 'auto',

  '&::before': {
    content: '""',
    gridColumn: 1,
    gridRow: '1 / span 20',
    background: 'rgb(225, 225, 225)',
    borderRadius: 'calc(var(--line-w) / 2)',
  },

  '@media (min-width: 1440px)': {
    gridTemplateColumns: '1fr var(--line-w) 1fr',
    '&::before': {
      gridColumn: 2,
    },
    'li:nth-child(odd)': {
      gridColumn: 1,
    },
    'li:nth-child(even)': {
      gridColumn: 3,
    },
    'li:nth-child(2)': {
      gridRow: '2 / 4',
    },
    'li:nth-child(odd) .date::before': {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
      left: 0,
    },
    'li:nth-child(odd) .date::after': {
      transform: 'translate(-50%, -50%)',
      left: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
    },
    'li:nth-child(odd) .date': {
      borderRadius: '0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0',
    },
  },
})

export const Credits = styled('div', {
  marginTop: '1rem',
  textAlign: 'right',

  a: {
    color: '$textColor',
  },
})
