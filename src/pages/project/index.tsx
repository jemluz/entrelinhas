import { useQuery } from '@apollo/client'
import { ProjectContainer, Title } from './styles'
import { GET_TEACHER_SHORTENED } from '../../utils/queries'
import client from '../../utils/apolo-client'
import { Loading } from '../../components/loading'
import { useEffect, useState } from 'react'
import { Timeline } from '../timeline'

export default function Project() {
  const { loading, error, data } = useQuery(GET_TEACHER_SHORTENED, { client })

  // if (error) return <p>Error: {error.message}</p>

  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 1500)
  }, [loading, setShowLoading])

  console.log()
  return (
    <ProjectContainer className="project-page">
      {showLoading ? (
        <Loading />
      ) : (
        <div className="after-loading">
          <Title>Frontend Artesanal</Title>
          <Timeline />
        </div>
      )}
      {/* <Credits>
        <a
          target="_blank"
          href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
          rel="noopener noreferrer"
        >
          inspired by
        </a>
      </Credits> */}
    </ProjectContainer>
  )
}
