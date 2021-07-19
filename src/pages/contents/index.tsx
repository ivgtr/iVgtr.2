import Head from 'next/head'
import React from 'react'
import { Container } from '../../components/Container'
import { ContentsDescription } from '../../components/ContentsDescription'
import { ContentsLink } from '../../components/ContentsLink'
import { ContentsList } from '../../components/ContentsList'
import { Header } from '../../components/Header'
import { Navigation } from '../../components/Navigation'

const Me = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">
        iVgtr
        <sup>
          [<i>?</i>]
        </sup>
      </h2>
      <p>
        <a
          href="https://twitter.com/mawaru_hana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-500"
        >
          𝑻𝒘𝒊𝒕𝒕𝒆𝒓
        </a>
        の通りに生きてる。
      </p>
      <p>ｺﾝﾋﾟｭｰﾀｰと🌈 が好き。</p>
      <p>好きなもの以外に興味が向かない。</p>
    </section>
  )
}
const Otaku = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">好きなものたち</h2>
      <ContentsLink />
      <ContentsList />
    </section>
  )
}

const Main = () => {
  return (
    <Container>
      <Header>more...</Header>
      <article>
        <ContentsDescription />
        <Me />
        <Otaku />
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
