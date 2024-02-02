import { ReactNode } from "react";
import { TitleContainer } from "./styles";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <TitleContainer>
      {children}
    </TitleContainer>
  )
}