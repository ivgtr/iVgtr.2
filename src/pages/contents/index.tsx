import Head from 'next/head'
import React from 'react'
import { Container } from '../../components/Container'
import { ContentsDescription } from '../../components/ContentsDescription'
import { ContentsLink } from '../../components/ContentsLink'
import { ContentsList } from '../../components/ContentsList'
import { Header } from '../../components/Header'
import { Navigation } from '../../components/Navigation'

const Main = () => {
  return (
    <Container>
      <Header>more...</Header>
      <article>
        <ContentsDescription />
        <ContentsLink />
        <ContentsList />
      </article>
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
