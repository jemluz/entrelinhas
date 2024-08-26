import { lessonsList, lessonTypeEnum } from '../../utils/lessons'
import { TimelineCard } from './components/timeline-card'
import { TimelineContainer } from './styles'

export function Timeline() {
  return (
    <TimelineContainer>
      {lessonsList.map((lesson) => {
        const { id, title, subtitle, description, color, lessonType } = lesson
        return (
          <TimelineCard
            key={id}
            date={title}
            title={subtitle}
            description={description}
            accentColor={color}
            columnSide={
              lessonType === lessonTypeEnum.practice ? 'left' : 'right'
            }
          />
        )
      })}
      {/* <Credits>
        <a
        target="_blank"
        href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
        rel="noopener noreferrer"
        >
        inspired by
        </a>
        </Credits> */}
    </TimelineContainer>
  )
}
