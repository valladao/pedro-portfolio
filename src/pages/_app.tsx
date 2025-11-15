import '../styles/globals.css'
import '../styles/animations.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Pedro H. Valladao - Music Composer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
