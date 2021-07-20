import { config, dom } from '@fortawesome/fontawesome-svg-core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../assets/styles/styles.scss'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  const title = 'iVgtr.me'
  const description = '卵の殻を破らねば、雛鳥は生まれずに死んでいく。'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivgtr.me" />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* ここに入れないとfontawesomeの調整が効かない */}
        <style>{dom.css()}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
