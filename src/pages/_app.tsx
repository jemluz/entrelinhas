import { GlobalStyle } from "@/styles/globalStyle";
import { defaultTheme } from "@/styles/themes";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
