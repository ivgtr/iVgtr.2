import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { ContentList } from "../../components/ContentList";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

const title = "iVgtr.me | Game";
const gameList = [
  {
    discription: "最近やっとる",
    list: [
      { title: "原神" },
      { title: "グランブルーファンタジーファンタジー" },
      { title: "Twitter" },
    ],
  },
  {
    discription: "すき",
    list: [
      { title: "フロムソフトウェア" },
      { title: "アクアプラス" },
      { title: "すみっこソフト" },
      { title: "FPS" },
    ],
  },
  {
    discription: "ライター",
    list: [
      { title: "王雀孫" },
      { title: "すかぢ" },
      { title: "衣笠彰梧" },
      { title: "渡辺僚一" },
      { title: "朱門優" },
      { title: "奈須きのこ" },
    ],
  },
];

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Otaku = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">🎮</h2>
      <div className="mt-4">
        {gameList.map(({ discription, list }, index) => {
          return <ContentList list={list} discription={discription} key={`list${index}`} />;
        })}
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <Container>
      <Header>game...</Header>
      <Otaku />
    </Container>
  );
};

const Game: NextPage<Props> = () => {
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
  );
};

export default Game;

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
};
