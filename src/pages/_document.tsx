import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="https://use.typekit.net/amo0ldj.css"></link>
      </Head>
      <body>
        <Main />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init()
        </script>
        <NextScript />
      </body>
    </Html>
  );
}
