import { styled } from '../../styles/stitches.config'

export const ProjectContainer = styled('div', {
  margin: '2rem',
})

export const Title = styled('h1', {
  marginBottom: '2rem',
  display: 'flex',

  '@media (min-width: 1440px)': {
    justifyContent: 'center',
  },
})
