import { LineContainer, ProjectButton } from "./styled";

export function ProjectLine({ line, lineNumber }: ProjectLineProps) {
  return (
    <LineContainer>
      {
        line && line.map((proj, index) => {

          let id = Math.random();
          const isUnpaired: boolean = lineNumber % 2 !== 0;

          return (
            <ProjectButton key={id} href={proj.url} odd={isUnpaired.toString()} className="proj_link" data-aos="fade-down" data-aos-duration={700 * index}>
              {proj.letter}
            </ProjectButton>
          )
        })
      }
    </LineContainer>
  )
}