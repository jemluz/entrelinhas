import { Code } from '@phosphor-icons/react'
import { styled } from '../../styles/stitches.config'

export const LoadingWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: 'calc(100vh - 4rem)',
  width: 'calc(100vw - 4rem)',
})

export const GraduationCapStyled = styled(Code, {
  margin: 'auto',
})
