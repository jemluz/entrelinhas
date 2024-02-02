import { ExtensionButtonProps } from "@/models/project.model";
import { BtnContainer } from "./style";

export const extensionsInfo: ExtensionButtonProps[] = [
  {
    color: "#f58d13",
    text: '.html',
    documentationLink: "https://www.w3schools.com/html/default.asp",
  },
  {
    color: "#73A66E",
    text: '.css',
    documentationLink: "https://www.w3schools.com/css/default.asp",
  },
  {
    color: "#3880D6",
    text: '.jsx',
    documentationLink: "https://pt-br.legacy.reactjs.org/docs/introducing-jsx.html",
  }
]

export function ExtensionBtn({ color, text, documentationLink }: ExtensionButtonProps) {
  return (
    <BtnContainer color={color} href={documentationLink} target="_blank">{text}</BtnContainer>
  )
}