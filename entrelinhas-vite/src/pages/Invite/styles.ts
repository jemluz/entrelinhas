import styled from "styled-components";

// font-family: 'Changa', sans-serif;
// font-family: 'Nova Square', cursive;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35fr 144px 30fr 27fr;
  grid-template-rows: 30fr auto 10fr 20fr 10fr;

  height: 100vh;
  color: #292929;
  font-family: 'Changa', sans-serif;

  a {
    text-decoration: none;
  }
`

export const LeftTopContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  height: 100%;
  width: 100%;

  border-bottom: 3px solid #E3E3E3;

  display: flex;
  justify-content: flex-end;
`

export const LeftTopContent = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: 'Nova Square', cursive;
    -webkit-font-smoothing: antialiased;
  }
`

export const Avatar = styled.img`
  height: 6rem;
  width: 6rem;

  border-radius: 99px;
  border: 3px solid #E3E3E3;
`

export const LeftBottomConainter = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`

export const LeftBottomContent = styled.nav`
  width: 200px;
  height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    padding: .5rem .6rem .3rem .6rem;
    border-radius: 12px;
    border: 1px solid transparent;
    background-color: transparent;

    transition: all .2s ease;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`

export const GitHubBtn = styled.a`
  color: #0A0A0A;

  &:hover {
    color: #0A0A0A;
    background-color: #E6E6E6;
  }
`

export const LinkedinBtn = styled.a`
  color: #3880D6;

  &:hover {
    color: #3880D6;
    background-color: #EBF2FB;
  }
`

export const YoutubeBtn = styled.a`
  color: #EF5330;

  &:hover {
    color: #EF5330;
    background-color: #FDEEEA;
  }
`

export const CenterContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  display: flex;
  justify-content: center;
`

export const CenterContent = styled.div`
  height: fit-content;

  border-left: 3px solid #E3E3E3;

  display: flex;
  flex-direction: column;

  a {
    font-size: 20px;
    padding: .1rem 1rem;
    color: #8B8B8B;

    strong {
      color: #0A0A0A;
    }

    &.active {
      background-color: #F3F3F3;
      border-right: 3px solid #0A0A0A;
      display: flex;
      justify-content: center;
      color: #0A0A0A;
    }
  }
`

export const Dot = styled.span`
  height: 16px;
  width: 16px;
  border: 4px solid #0A0A0A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -90px;
  margin-top: 6px;
  position: absolute;
`

export const LittleDot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #A2A2A2;
  border-radius: 50%;
  display: inline-block;
`

export const CallToAction = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 4;

  background: blue;
  height: 100%;
  width: 100%;
`

export const Footer = styled.footer``