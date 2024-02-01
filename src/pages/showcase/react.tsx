import { ShowcaseLayout } from '../../layouts/Showcase'
import { blueTone } from '../../styles/themes'

const projectsButtons: Array<ProjectButtonProps> = [
  {
    letter: 'e',
    url: '/project/event-plataform',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'd',
    url: '/project/diplomata',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'b',
    url: '/project/diplomata-backend',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'l',
    url: '/project/ignite-feed',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
    url: '/project/todo-list',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'i',
    url: '/project/ignite-timer',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'c',
    url: '/project/coffe-delivery',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'm',
    url: '/project/dt-money',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 's',
    url: '/project/ignite-shop',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 't',
    url: '/project/tabnews-clone',
    isAvailable: true
  } as ProjectButtonProps,
  {
    letter: 'a',
    url: '/project/frontend-artesanal',
    isAvailable: true
  } as ProjectButtonProps,
]

export default function ShowcaseReact() {
  return (
    <ShowcaseLayout
      subtitle="reactJS"
      tone={blueTone}
      rightLink="/showcase/vue"
      projects={projectsButtons}
    />
  )
}
