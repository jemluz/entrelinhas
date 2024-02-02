import styled from "styled-components";

export const ListContainer = styled.ul`
  font-family: "Changa", sans-serif;
  padding-left: 1rem;
  padding-top: 0.8rem;
`;

interface ListItemStatus {
  variant: "todo" | "done";
}

export const ListItem = styled.li<ListItemStatus>`
  font-family: "Changa", sans-serif;
  font-weight: 400;

  color: #6a6969;

  display: flex;
  align-items: center;

  svg {
    margin-right: 0.8rem;
    color: ${(props) => (props.variant === "done" ? "#65cf83" : "#FE6B61")};
  }
`;
