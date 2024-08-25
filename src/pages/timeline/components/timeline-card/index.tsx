import {
  ChapterPoint,
  Description,
  TimelineCardContainer,
  Title,
} from './styles'

interface TimelineCardProps {
  date: string
  title: string
  description: string
  accentColor: string | undefined
  columnSide: 'left' | 'right'
}

export function TimelineCard({
  date,
  title,
  description,
  accentColor,
  columnSide = 'left',
}: TimelineCardProps) {
  return (
    <TimelineCardContainer side={columnSide}>
      <ChapterPoint side={columnSide} css={{ '--accent-color': accentColor }}>
        {date}
      </ChapterPoint>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TimelineCardContainer>
  )
}
