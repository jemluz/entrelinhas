import { lessonsList, lessonTypeEnum } from '../../utils/lessons'
import { TimelineCard } from './components/timeline-card'
import { Credits, TimelineContainer } from './styles'

export default function Timeline() {
  console.log()
  return (
    <div>
      <h1>UL timeline cards</h1>
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
      </TimelineContainer>
      <Credits>
        <a
          target="_blank"
          href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
          rel="noopener noreferrer"
        >
          inspired by
        </a>
      </Credits>
    </div>
  )
}
