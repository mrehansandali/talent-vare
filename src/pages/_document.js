import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
