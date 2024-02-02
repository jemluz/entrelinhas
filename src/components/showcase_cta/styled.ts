import styled from "styled-components";

export const CallToAction = styled.div<ShowcaseLayoutProps>`
  font-family: t26-carbon, monospace;
  font-weight: 600;

  position: absolute;
  margin-top: 12rem;
  text-align: right;

  @media (min-width: 640px) {
    margin-left: 6rem;
    width: 50%;
  }
`;

export const PressAKey = styled.h2`
  font-weight: 300;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const First = styled.span<ShowcaseLayoutProps>`
  background: ${(props) => props.tone.primary + "10"};
  color: ${(props) => props.tone.primary};

  &.left_text {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 8rem;

    font-size: 1.35rem;
    line-height: 1.75rem;
  }
`;

export const Second = styled.span<ShowcaseLayoutProps>`
  background-color: transparent;
  color: ${(props) => props.theme["gray-100"]};

  &.right_text {
    font-size: 1.35rem;
    line-height: 1.75rem;
  }
`;

export const Third = styled.p`
  display: flex;
  justify-content: center;

  padding-left: 8rem;
  margin-top: 0.5rem;
  opacity: 0.7;

  font-weight: 200;
  font-size: 1rem;
  line-height: 1.25rem;

  @media (min-width: 640px) {
    width: 83.333333%;
  }
  @media (min-width: 768px) {
    padding-left: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 12rem;
  }
  @media (min-width: 1280px) {
    padding-left: 16rem;
  }
`;
