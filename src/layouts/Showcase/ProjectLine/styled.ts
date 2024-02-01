import Link from "next/link";
import styled from "styled-components";

interface ProjectButtonProps {
  odd: string;
}

export const LineContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

export const ProjectButton = styled(Link)<ProjectButtonProps>`
  border: 1px solid ${(props) => props.theme["gray-100"]};
  color: ${(props) => props.theme["gray-100"]};

  margin-left: ${(props) => (props.odd === "false" ? "50px" : "200px")};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  transition: all 0.5s ease;
  border-radius: 0.5rem;
  opacity: 0.7;

  &:hover,
  &:focus {
    opacity: 1;
  }

  /* if is last (or is first?) apply this style */
  & + .proj_link {
    margin-left: 20px;
  }
`;
