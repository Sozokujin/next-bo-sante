/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet" />
      <title>Bo Santé : Diététicienne-Naturopathe-Réflexologue à Roanne</title>
      <meta
      name="description"
      content="Consultations et/ou Téléconsultations de diététique, naturopathie ou réflexologie faciale à Roanne"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
