import { CallToAction, First, PressAKey, Second, Third } from "./styled";

export function ShowcaseCTA({
  tone,
}: ShowcaseLayoutProps) {
  return (
    <CallToAction tone={tone} data-aos="fade-right" data-aos-duration="1000" className="titulo">
      <PressAKey>
        <First tone={tone} className="left_text">Aperte uma te</First>
        <Second tone={tone} className="right_text">cla</Second>
      </PressAKey>

      <Third>
        para ver um projeto
      </Third>
    </CallToAction>
  )
}