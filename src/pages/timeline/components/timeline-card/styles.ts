import { styled } from '../../../../styles/stitches.config'

// Componentes estilizados usando Stitches
export const TimelineCardContainer = styled('li', {
  '--inlineP': '1.5rem',
  '--row-gap': '2rem',

  gridColumn: 2,
  marginInline: 'var(--inlineP)',
  gridRow: 'span 2',
  display: 'grid',
  gridTemplateRows: 'min-content min-content min-content',
  marginBottom: 'var(--row-gap)',
  padding: '20px',
  borderRadius: '8px',
})

export const ChapterPoint = styled('div', {
  '--inlineP': '1.5rem',
  '--dateH': '3rem',
  '--col-gap': '2rem',
  '--line-w': '0.25rem',

  height: 'var(--dateH)',
  marginInline: 'calc(var(--inlineP)* -1)',
  textAlign: 'center',
  backgroundColor: 'var(--accent-color)',
  color: 'white',
  fontSize: '1.25rem',
  fontWeight: '700',

  display: 'grid',
  placeContent: 'center',
  position: 'relative',

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    aspectRatio: '1',
  },

  '&::before': {
    width: 'var(--inlineP)',
    background: 'var(--accent-color)',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent)',
    top: '100%',
  },

  '&::after': {
    width: '2rem',
    background: '$bgColor',
    border: '0.3rem solid var(--accent-color)',
    borderRadius: '50%',
    top: '50%',
  },

  variants: {
    side: {
      left: {
        borderRadius: '0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0',
        '&::before': {
          left: 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        },
        '&::after': {
          transform: 'translate(0%, -50%)',
          left: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
        },
      },
      right: {
        borderRadius: 'calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2)',
        '&::before': {
          right: 0,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        },
        '&::after': {
          transform: 'translate(00%, -50%)',
          right: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
        },
      },
    },
  },

  defaultVariants: {
    side: 'left',
  },

  // '@media (min-width: 40rem)': {
  //   '&::before': {
  //     clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
  //     left: 0,
  //   },
  //   '&::after': {
  //     transform: 'translate(-50%, -50%)',
  //     left: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
  //   },
  // },
})

export const Title = styled('div', {
  '--inlineP': '1.5rem',

  background: '$bgColor',
  position: 'relative',
  paddingInline: 'var(--inlineP)',
  paddingBlockStart: '1.5rem',
  paddingBlockEnd: '1rem',
  fontWeight: '500',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '90%',
    height: '0.5rem',
    background: 'rgba(0, 0, 0, 0.5)',
    left: '50%',
    borderRadius: '50%',
    filter: 'blur(4px)',
    transform: 'translate(-50%, 50%)',
    bottom: 'calc(100% + 0.125rem)',
  },
})

export const Description = styled('div', {
  '--inlineP': '1.5rem',

  background: '$bgColor',
  position: 'relative',
  paddingInline: 'var(--inlineP)',
  paddingBlockEnd: '1.5rem',
  fontWeight: '300',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '90%',
    height: '0.5rem',
    background: 'rgba(0, 0, 0, 0.5)',
    left: '50%',
    borderRadius: '50%',
    filter: 'blur(4px)',
    transform: 'translate(-50%, 50%)',
    bottom: '0.25rem',
    zIndex: -1,
  },
})
