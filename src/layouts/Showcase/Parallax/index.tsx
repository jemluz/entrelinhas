import { useEffect, useState } from "react";
import { Bg_3_1, Bg_3_2, Bg_3_3, Bg_3_4, ParallaxBackground3, ParallaxContainer } from "./styled";

import triangulos_claros_mobile from "../../../assets/home-bg/tcm.svg";
import triangulos_escuros_mobile from "../../../assets/home-bg/tem.svg";
import estrelas_mobile from "../../../assets/home-bg/em.svg";

import tringulos_claros_desktop from "../../../assets/home-bg/d-tcm.svg";
import triangulos_escuros_desktop from "../../../assets/home-bg/d-tem.svg";
import estrelas_desktop from "../../../assets/home-bg/d-em.svg";
import faixa from "../../../assets/home-bg/d-b.svg";

import Image from "next/image";

export function Parallax() {
  const [isLoaded, setIsLoaded] = useState(false);
  let waitBeforeShow = 700;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, waitBeforeShow);

    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(document.querySelector('#parallax-bg-3'))
    }, 1500);

    return () => clearTimeout(timer);
  }, [])

  return (
    isLoaded ? <ParallaxContainer className="parallax" >
      {/* only show between 0px and 901 */}
      <ParallaxBackground3 id="parallax-bg-3" className="parallax-bg hide_when_biger_than_901" >
        <Bg_3_1
          id="bg-3-1"
          src={triangulos_claros_mobile}
          data-aos="fade-up"
          data-aos-duration="5000"
          alt="" />
        <Bg_3_2
          id="bg-3-2"
          src={triangulos_escuros_mobile}
          data-aos="fade-up"
          data-aos-duration="3000"
          alt="" />
        <Bg_3_3
          id="bg-3-3"
          src={estrelas_mobile}
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="" />
        <Bg_3_4
          src={faixa}
          id="bg-3-4"
          alt="" />
      </ParallaxBackground3>

      {/*  only show between 0px and 1400 to infinite */}
      <ParallaxBackground3 id="parallax-bg-3" className="parallax-bg hide_when_less_than_1400" >
        <Bg_3_1
          id="bg-3-1"
          src={tringulos_claros_desktop}
          data-aos="fade-up"
          data-aos-duration="5000"
          alt="" />
        <Bg_3_2
          id="bg-3-2"
          src={triangulos_escuros_desktop}
          data-aos="fade-up"
          data-aos-duration="3000"
          alt="" />
        <Bg_3_3
          id="bg-3-3"
          src={estrelas_desktop}
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="" />
        <Bg_3_4
          src={faixa}
          id="bg-3-4"
          alt="" />
      </ParallaxBackground3>
    </ParallaxContainer> : <div></div>
  )
}