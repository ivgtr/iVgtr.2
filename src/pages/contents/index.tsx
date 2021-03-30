import React from 'react'
import Head from 'next/head'

import { Container } from '../../components/Container'
import { ContentsList } from '../../components/ContentsList'
import { ContentsDescription } from '../../components/ContentsDescription'
import { Header } from '../../components/Header'
import { Navigation } from '../../components/Navigation'

const Main = () => {
  return (
    <Container>
      <Header>more...</Header>
      <ContentsDescription />
      <ContentsList />
    </Container>
  )
}

const Contents = () => {
  const title = '漏れ'

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

export default Contents
