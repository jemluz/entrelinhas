import ReactPlayer from 'react-player'
import { styled } from '../../styles/stitches.config'

// Componentes estilizados usando Stitches
export const TimelineCardContainer = styled('li', {
  '--inlineP': '1.5rem',
  '--row-gap': '2rem',

  gridColumn: 2,
  gridRow: 'span 2',

  display: 'grid',
  gridTemplateRows: 'min-content min-content min-content',

  marginInline: 'var(--inlineP)',
  marginBottom: 'var(--row-gap)',
  padding: '20px',
  borderRadius: '8px',

  // '@media (min-width: 1440px)': {
  variants: {
    side: {
      left: {
        '@media (max-width: 1439px)': {
          // single side (timeline at column 1)
          gridColumn: 2,
        },

        '@media (min-width: 1440px)': {
          // double sides
          gridColumn: 1,
        },
      },
      right: {
        '@media (max-width: 1439px)': {
          // single side (timeline at column 1)
          gridColumn: 2,
        },

        '@media (min-width: 1440px)': {
          // double sides
          gridColumn: 3,
        },
      },
    },
  },
  // },

  defaultVariants: {
    side: 'left',
  },
})

export const Title = styled('div', {
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

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // put polygon in the right position
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
    border: '0.3rem solid var(--accent-color)',
    borderRadius: '50%',
    top: '50%',
  },

  variants: {
    side: {
      left: {
        '&::after': {
          width: '2rem',
          background: '$bgColor',
        },

        '@media (max-width: 1439px)': {
          // timeline stays left at screen (disable left/practice side contents)
          borderRadius: 'calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2)',
          // triangle
          '&::before': {
            right: 0,
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          },
          // circle
          '&::after': {
            transform: 'translate(0%, -50%)',
            right: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
          },
        },

        '@media (min-width: 1440px)': {
          // timeline stays middle at scrren (enable left/practice side contents)
          borderRadius: '16px calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0',
          // triangle
          '&::before': {
            left: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
          },
          // circle
          '&::after': {
            transform: 'translate(0%, -50%)',
            left: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
          },
        },
      },
      right: {
        // right(theory) contents is always the same
        borderRadius: 'calc(var(--dateH) / 2) 16px 0 calc(var(--dateH) / 2)',
        // triangle
        '&::before': {
          right: 0,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        },
        // circle
        '&::after': {
          width: '1rem',
          background: 'var(--accent-color)',
          transform: 'translate(-30%, -50%)',
          right: 'calc(100% + var(--col-gap) + var(--line-w) / 2)',
        },
      },
    },
  },

  defaultVariants: {
    side: 'left',
  },
})

export const PlayerStyled = styled(ReactPlayer, {
  width: '100% important',
  height: '100% important',
  aspectRatio: '16/9',
  borderRadius: '8px',

  padding: '2rem',

  '> div > iframe': {
    borderRadius: '8px',
  },

  variants: {
    side: {
      left: {
        // mobile
        '@media (max-width: 1439px)': {
          paddingLeft: '0',
        },

        // desktop
        '@media (min-width: 1440px)': {
          paddingRight: '0',
        },
      },
      right: {
        paddingLeft: '0',
      },
    },
  },
})

export const Subtitle = styled('div', {
  '--inlineP': '1.5rem',

  background: '$bgColor',
  position: 'relative',
  paddingInline: 'var(--inlineP)',
  paddingBlockStart: '1.5rem',
  paddingBlockEnd: '1rem',
  fontWeight: '500',
  overflow: 'hidden',
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
