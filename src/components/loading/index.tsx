import { GraduationCapStyled, LoadingWrapper } from './styles'

export function Loading() {
  return (
    <LoadingWrapper className="loading">
      <GraduationCapStyled color="#525252" size={40}>
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="2s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </GraduationCapStyled>
    </LoadingWrapper>
  )
}
