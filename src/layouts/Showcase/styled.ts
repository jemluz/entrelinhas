import styled from "styled-components";

// eslint-disable-next-line no-undef
export const Container = styled.div<ShowcaseLayoutProps>`
  height: 100%;
  overflow: hidden;

  color: ${(props) => {
    return props.theme["gray-100"];
  }};
  background: linear-gradient(
    to bottom,
    ${(props) => props.tone.background},
    ${(props) => props.theme["gray-900"]}
  );

  display: flex;
  flex-direction: column;
`;
