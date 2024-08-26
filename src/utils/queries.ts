import { gql } from '@apollo/client'

export const GET_PROJECT = gql`
  query GET_PROJECT {
    project(where: { id: "cm0aa7d4d1unb07ke85u6hcqt" }) {
      id
      dificulty
      name
      slug
      title
    }
    teachers {
      name
      avatarUrl
    }
  }
`

export const GET_TEACHER = gql`
  query GET_TEACHER {
    teacher(where: { id: "cm09p34nr1msh07m0lub8edhq" }) {
      id
      name
      avatarUrl
      socialLinks {
        __typename
        ... on Links {
          gitHubUrl
          instagramUrl
          linkedinUrl
          youtubeUrl
        }
      }
      about
    }
  }
`

export const GET_TEACHER_SHORTENED = gql`
  query GET_TEACHER_SHORTENED {
    teacher(where: { id: "cm09p34nr1msh07m0lub8edhq" }) {
      id
      name
      avatarUrl
      socialLinks {
        __typename
        ... on Links {
          gitHubUrl
          instagramUrl
          linkedinUrl
          youtubeUrl
        }
      }
    }
  }
`
