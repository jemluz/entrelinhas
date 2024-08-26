import { Loading } from '../loading'
import {
  Description,
  PlayerStyled,
  Subtitle,
  TimelineCardContainer,
  Title,
} from './styles'

interface TimelineCardProps {
  title: string
  subtitle: string
  description: string
  accentColor: string | undefined
  columnSide: 'left' | 'right'
}

export function TimelineCard({
  title,
  subtitle,
  description,
  accentColor,
  columnSide = 'left',
}: TimelineCardProps) {
  const baseYoutubeURL = 'https://www.youtube.com/watch?v='

  return (
    <TimelineCardContainer side={columnSide}>
      <Title side={columnSide} css={{ '--accent-color': accentColor }}>
        {title}
      </Title>

      <PlayerStyled
        className="react-player"
        url={`${baseYoutubeURL}aUWBz44l0K0`}
        width="100%"
        height="100%"
        controls
        side={columnSide}
        fallback={<Loading />}
      />

      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </TimelineCardContainer>
  )
}
