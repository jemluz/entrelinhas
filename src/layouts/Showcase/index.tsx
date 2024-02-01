import { useEffect } from 'react'
import { Container } from './styled'
import { ProjectsNavigation } from './ProjectsNavigation'
import { Parallax } from './Parallax'
import { ShowcaseHeader } from '@/components/ShowcaseHeader'
import { ShowcaseCTA } from '@/components/ShowcaseCTA'

export function ShowcaseLayout({
  leftLink,
  rightLink,
  subtitle,
  tone,
  projects,
}: ShowcaseLayoutProps) {
  const totalProjects = projects!.length;

  // total / 3 arredondado para string fixa e convertido para numero novamente
  let numberOfLines = parseInt((totalProjects / 3).toFixed());
  numberOfLines = ((totalProjects % 3) > 0) ? (numberOfLines + 1) : numberOfLines;

  let lines: ProjectButtonProps[][] = [[]];

  useEffect(() => {
    calculateProjectLines();
    generateLinesMultiArray();
  }, [projects])

  function calculateProjectLines(): void {
    if (projects!.length > 0) {
      const totalElements = projects!.length;
      let lastMultiple = 0;

      // divide array by three (lines)
      for (let i = 0; i < projects!.length; i++) {
        const isNotZero = i !== 0;
        const isThreeMultiple = i % 3 == 0;

        // define three multiple
        if (isNotZero && isThreeMultiple) {
          lastMultiple = i;
        }

        // use multiple to calculate how many lines
        numberOfLines = lastMultiple / 3;

        // if has an incomplete line at end
        if (totalElements > lastMultiple) {
          numberOfLines++
        }
      }
    }
  }

  function generateLinesMultiArray() {
    for (let currentLine = 0; currentLine < numberOfLines; currentLine++) {
      lines[currentLine] = [];

      let lineStartAt = currentLine === 0 ? currentLine : (currentLine * 3);
      let lineEndsAt = lineStartAt + 2;

      if (projects!.length / 3 > lines.length) {
      }

      for (let p = 0; p < totalProjects; p++) {
        let isPartOfCurrentLine = (p <= lineEndsAt) && (p >= lineStartAt);
        const rest = p % 3; // equals 0, 1, or 2

        if (isPartOfCurrentLine) {
          lines[currentLine][rest] = projects![p];
        }
      }
    }
  }

  console.log(tone)
  return (
    <Container tone={tone}>

      <ShowcaseHeader tone={tone} leftLink={leftLink} rightLink={rightLink} subtitle={subtitle} />
      <ShowcaseCTA tone={tone} />
      <ProjectsNavigation lines={lines} />
      <Parallax />

    </Container>
  )
}
