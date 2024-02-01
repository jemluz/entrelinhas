import { ReactNode } from "react"

interface ProjLayoutProps {
  children: ReactNode;
}

export function ProjectLayout({ children }: ProjLayoutProps) {
  return (
    <div>
      Projeto
      {children}
    </div>
  )
}
