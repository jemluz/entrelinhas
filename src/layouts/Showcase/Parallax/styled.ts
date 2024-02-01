import styled from "styled-components";
import Image from "next/image";

export const ParallaxContainer = styled.div`
  .hide_when_less_than_1400 {
    @media only screen and (max-width: 1380px) {
      display: none;
    }
  }

  .hide_when_biger_than_901 {
    @media only screen and (min-width: 901px) {
      display: none;
    }
  }

  .hide_when_less_then_900 {
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
`;

/* background layer */
export const ParallaxBackground3 = styled.div`
  width: 100vw;
  height: 500px;

  display: grid;
  grid-template-columns: 1fr 530px 1fr;
  grid-template-rows: 1fr;

  /* foreground */
  & > img {
    background-repeat: no-repeat;
    overflow: hidden;
  }
`;

export const Bg_3_1 = styled(Image)`
  grid-column: 2 / 3;
  grid-row: 1;

  height: 740px;
  margin-left: 140px;
  margin-top: -150px;

  z-index: 3;
  opacity: 0.8;
  rotate: 215deg;

  @media only screen and (min-width: 901px) {
  }
`;

export const Bg_3_2 = styled(Image)`
  grid-column: 2 / 3;
  z-index: 2;
  transform: rotate(-0.4turn);
  rotate: 214deg;
  height: 600px;
  margin-top: -660px;
  margin-left: 150px;
`;

export const Bg_3_3 = styled(Image)`
  grid-column: 2 / 3;
  z-index: 4;
  opacity: 0.5;
  margin-top: -700px;
  margin-left: -100px;

  @media only screen and (min-width: 901px) {
    rotate: 90deg;
    margin-left: -300px;
    margin-top: -400px;
  }
`;

export const Bg_3_4 = styled(Image)`
  grid-column: 3 / 4;
  margin-top: -600px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
