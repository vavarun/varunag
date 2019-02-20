import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Varun Agarwal" />
          <meta
            name="keywords"
            content="Varun Agarwal, Developer, Javascript, JS, React, Barcelona, London, HTML, Node, Frontend, Full Stack"
          />
          <meta name="author" content="Varun Agarwal" />
          <meta property="og:title" content="Varun Agarwal" />
          <meta property="og:url" content="http://www.varunag.com" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Personal website of Varun Agarwal, a developer based in Barcelona" />
          <meta property="og:image" content="http://www.varunag.com/static/profile-image.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta name="google-site-verification" content="ByCv0Fi4o8CbMj92I7pG7TNuzBLOxv-ZXNKG3IE7tJk" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                ga('create', 'UA-133657282-1', 'auto');
                ga('send', 'pageview');
              `,
            }}
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/favicon.ico"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/favicon.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Roboto:400,500|Roboto+Condensed:300,300i,400,700"
            rel="stylesheet"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
