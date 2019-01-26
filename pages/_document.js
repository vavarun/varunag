import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Varun Agarwal" />
          <meta
            name="keywords"
            content="Varun Agarwal, Developer, Javascript, JS, React, Barcelona, London, HTML, Node, Frontend, Full Stack"
          />
          <meta name="author" content="Varun Agarwal" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/static/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:200i,300,300i,400,400i,500,500i,600,600i,700,700i"
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
