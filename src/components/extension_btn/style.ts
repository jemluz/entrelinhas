import { ExtensionButtonProps } from "@/models/project.model";
import styled from "styled-components";

export const BtnContainer = styled.a<ExtensionButtonProps>`
  background-color: ${(props) => props.color + "10"};
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color + "50"};
  font-family: "Changa", sans-serif;

  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;

  padding: 0.3rem 0.8rem;
  border-radius: 6px;

  display: flex;
  width: fit-content;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.color + "40"};
  }
`;
