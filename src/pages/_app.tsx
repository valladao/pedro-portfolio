import '../styles/globals.css'
import '../styles/animations.css'
import type {AppProps} from 'next/app'
import Script from 'next/script'
import {NEXT_PUBLIC_GTM_ID} from '../scripts/gtm'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${NEXT_PUBLIC_GTM_ID}');
        `}
      </Script>
      {/* End Google Tag Manager */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
