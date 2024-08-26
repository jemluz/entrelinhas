export interface IGetProject {
  project: {
    id: string
    name: string
    title: string
    slug: string
    dificulty: 'easy' | 'medium' | 'hard'
  }
  teachers: {
    name: string
    avatarUrl: string
  }[]
}
