// Project buttons
interface ProjectButtonProps {
  letter: string;
  url: string;
  isAvailable: boolean;
}

// This info will organize each page of showcase (by stack, like vue, react)
interface ShowcaseLayoutProps {
  subtitle?: string;
  leftLink?: string;
  rightLink?: string;
  tone: {
    background: string;
    primary: string;
  };
  projects?: Array<ProjectButtonProps>;
}

// Lines of projects
interface ProjectsNavigationProps {
  lines: ProjectButtonProps[][];
}

interface ProjectLineProps {
  line: ProjectButtonProps[];
  lineNumber: number;
}
