import React from 'react'
import Head from 'next/head'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Navigation } from '../../components/Navigation'

const Main = () => {
  return (
    <Container>
      <Header>JOBS</Header>
    </Container>
  )
}

const Jobs = () => {
  const title = 'WORKS'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
      </Head>
      <div>
        <Navigation />
        <Main />
      </div>
    </>
  )
}

export default Jobs
