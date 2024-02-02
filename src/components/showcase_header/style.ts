import styled from "styled-components";

export const Header = styled.header`
  @import url("https://use.typekit.net/amo0ldj.css");
  font-family: t26-carbon, monospace;
  width: fit-content;
  margin: 64px auto;
  z-index: 999;

  h1 {
    display: flex;
    align-items: center;
  }

  a {
    opacity: 0.8;
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.div<ShowcaseLayoutProps>`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 300;

  strong {
    color: ${(props) => props.tone.primary};
    font-weight: 600;
    margin-left: 4px;
  }
`;

export const Subtitle = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
  margin-top: -4px;
`;

export const Line = styled.p<ShowcaseLayoutProps>`
  background-color: ${(props) => props.tone.primary};
  border-radius: 2px;
  height: 1px;
  margin-top: -16px;

  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: -0.2rem;
  opacity: 0.5;

  &.line_small {
    width: 2rem;
  }

  &.line_large {
    width: 4rem;
  }
`;
