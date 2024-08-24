import { TimelineCard } from './components/timeline-card'
import { Credits, TimelineContainer } from './styles'

const colors = {
  accentBlue: '#41516C',
  accentYellow: '#FBCA3E',
  accentRed: '#E24A68',
  accentDarkBlue: '#1B5F8C',
  accentTeal: '#4CADAD',
}

export default function Timeline() {
  return (
    <div>
      <h1>UL timeline cards</h1>
      <TimelineContainer>
        <TimelineCard
          date="2002"
          title="Title 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!"
          accentColor={colors.accentBlue}
          columnSide="left"
        />
        <TimelineCard
          date="2007"
          title="Title 2"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam."
          accentColor={colors.accentYellow}
          columnSide="right"
        />
        <TimelineCard
          date="2012"
          title="Title 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic."
          accentColor={colors.accentRed}
          columnSide="left"
        />
        <TimelineCard
          date="2017"
          title="Title 4"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque."
          accentColor={colors.accentDarkBlue}
          columnSide="right"
        />
        <TimelineCard
          date="2022"
          title="Title 5"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non."
          accentColor={colors.accentTeal}
          columnSide="left"
        />
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
