import { v4 as uuidv4 } from 'uuid'

export enum lessonTypeEnum {
  practice = 'practice',
  theory = 'theory',
}

export interface ILesson {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  lessonType: lessonTypeEnum
}

const colors = {
  accentBlue: '#41516C',
  accentYellow: '#FBCA3E',
  accentRed: '#E24A68',
  accentDarkBlue: '#1B5F8C',
  accentTeal: '#4CADAD',
}

export const lessonsList: ILesson[] = [
  {
    id: uuidv4(),
    title: 'Introdução',
    subtitle: 'Some subtitle',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!',
    color: colors.accentBlue,
    lessonType: lessonTypeEnum.practice,
  },
  {
    id: uuidv4(),
    title: '',
    subtitle: 'Some subtitle',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!',
    color: colors.accentYellow,
    lessonType: lessonTypeEnum.theory,
  },
  {
    id: uuidv4(),
    title: 'Análise de requisitos',
    subtitle: 'Some subtitle',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!',
    color: colors.accentRed,
    lessonType: lessonTypeEnum.theory,
  },
  {
    id: uuidv4(),
    title: '',
    subtitle: 'Some subtitle',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!',
    color: colors.accentDarkBlue,
    lessonType: lessonTypeEnum.theory,
  },
  {
    id: uuidv4(),
    title: 'Criando repositório',
    subtitle: 'Some subtitle',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!',
    color: colors.accentTeal,
    lessonType: lessonTypeEnum.practice,
  },
]
