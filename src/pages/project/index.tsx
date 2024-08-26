import { useQuery } from '@apollo/client'
import { ProjectContainer, Title } from './styles'
import { GET_PROJECT } from '../../utils/queries'
import client from '../../utils/apolo-client'
import { Loading } from '../../components/loading'
import { useEffect, useState } from 'react'
import { Timeline } from '../timeline'
import { IGetProject } from '../../utils/queries.types'

interface IProject {
  id: string
  name: string
}

export default function Project() {
  const [showLoading, setShowLoading] = useState(true)
  const [project, setProject] = useState<IProject>()

  // if (error) return <p>Error: {error.message}</p>

  const {
    loading: isLoadingProject,
    error: projectError,
    data: projectData,
  } = useQuery<IGetProject>(GET_PROJECT, { client })

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 1500)
  }, [isLoadingProject, setShowLoading])

  useEffect(() => {
    if (projectData) {
      const { name, id } = projectData.project
      setProject({ name, id })
    }
  }, [projectData])

  return (
    <ProjectContainer className="project-page">
      {showLoading ? (
        <Loading />
      ) : (
        <div className="after-loading">
          <Title>{project?.name}</Title>
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
