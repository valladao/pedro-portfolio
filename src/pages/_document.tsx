import Document, {Html, Head, Main, NextScript} from 'next/document'
import {NEXT_PUBLIC_GTM_ID} from '../scripts/gtm'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gruppo&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />
          <link href="https://use.typekit.net/vwp7bkc.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript)*/}
        </body>
      </Html>
    )
  }
}

export default MyDocument