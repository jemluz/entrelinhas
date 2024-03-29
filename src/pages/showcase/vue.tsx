import { ShowcaseLayout } from '../../layouts/Showcase'
import { greenTone } from '../../styles/themes'

const projectsButtons: Array<ProjectButtonProps> = [
  {
    letter: '1',
    url: '/project/little-blog',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '6',
    url: '/project/iasdade-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '7',
    url: '/project/littlsdfsdg',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '8',
    url: '/project/tdfdfist',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '9',
    url: '/project/tasdasdst',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: '10',
    url: '/projectasadasdlist',
    isAvailable: true
  } as ProjectButtonProps,
]

export default function ShowcaseVue() {
  return (
    <ShowcaseLayout
      subtitle="vueJS"
      tone={greenTone}
      leftLink="/showcase/react"
      projects={projectsButtons}
    />
  )
}
