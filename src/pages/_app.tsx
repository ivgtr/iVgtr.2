import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { config, dom } from '@fortawesome/fontawesome-svg-core'

import '../assets/styles/styles.scss'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>iVgtr.me</title>
        <meta name="description" content="null"></meta>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
