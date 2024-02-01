import Link from "next/link";
import { Header, Line, Subtitle, Title } from "./style";
import { ArrowLeft, ArrowRight } from "phosphor-react";

export function ShowcaseHeader({ leftLink, rightLink, tone, subtitle }: ShowcaseLayoutProps) {
  return (
    <Header data-aos="fade-down" data-aos-duration="500">
      <h1 data-aos="fade-down">
        {leftLink && (
          <Link href={leftLink}>
            <ArrowLeft size={24} weight="bold" className="arrow_btn" />
          </Link>
        )}

        <Line
          className={`${leftLink ? 'line_small' : 'line_large'} line_base`}
          tone={tone}
        ></Line>

        <Title tone={tone}>
          <span>
            Entre<strong>Linhas</strong>
          </span>

          <Subtitle data-aos="fade-down" data-aos-duration="500">
            {subtitle}
          </Subtitle>
        </Title>

        <Line
          className={`${rightLink ? 'line_small' : 'line_large'} line_base`}
          tone={tone}
        ></Line>

        {rightLink && (
          <Link href={rightLink} className="arrow_btn">
            <ArrowRight size={24} weight="bold" />
          </Link>
        )}
      </h1>
    </Header>
  )
}