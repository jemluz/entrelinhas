import { CircleNotch } from "phosphor-react";
import styled from "styled-components";

export const ProjectsContainer = styled.nav`
  margin-left: calc((100vw - 500px) / 2);
  margin-top: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  z-index: 50;

  font-size: 1.5rem;
  line-height: 2rem;

  a {
    font-weight: 400;
    font-family: t26-carbon, monospace;
  }
`;

export const CircleNotchCustom = styled(CircleNotch)`
  margin: 300px calc((100vw - 24px) / 2) 0 calc((100vw - 24px) / 2);

  display: flex;
  z-index: 50;
  margin-top: 12rem;
  flex-direction: column;
  justify-content: center;
  width: auto;
  font-size: 1.5rem;
  line-height: 2rem;
`;
