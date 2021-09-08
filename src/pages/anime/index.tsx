import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { ContentList } from "../../components/ContentList";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

const title = "iVgtr.me | Anime";
type WorksList = { title: string }[];

type AnnictAPIResponse = {
  data: {
    viewer: {
      works: {
        nodes: WorksList;
      };
    };
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Otaku = ({ watchingList }: { watchingList: WorksList }) => {
  const animeList = [
    {
      discription: "最近やっとる",
      list: watchingList,
    },
    {
      discription: "すき",
      list: [
        { title: "プリパラ/プリティーリズム RL" },
        { title: "少女革命ウテナ" },
        { title: "輪るピングドラム" },
        { title: "カードキャプターさくら" },
        { title: "小麦ちゃんマジカルて" },
        { title: "CLANNAD" },
        { title: "ワンダーエッグ・プライオリティ" },
      ],
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">🌈</h2>
      <div className="mt-4">
        <ContentList list={animeList} />
      </div>
    </section>
  );
};

const Main = ({ watchingList }: { watchingList: WorksList }) => {
  return (
    <Container>
      <Header>anime...</Header>
      <Otaku watchingList={watchingList} />
    </Container>
  );
};

const Anime: NextPage<Props> = ({ watchingList }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
      </Head>
      <div>
        <Navigation />
        <Main watchingList={watchingList} />
      </div>
    </>
  );
};

export default Anime;

export const getStaticProps = async () => {
  const endpoint = process.env.ANNICT_API_URL;
  const BearerToken = process.env.ANNICT_BEARER_TOKEN;
  const split = ["winter", "spring", "summer", "autumn"];
  const nowTime = new Date();
  const season = `${nowTime.getFullYear()}-${split[Math.floor(nowTime.getMonth() / 3)]}`;
  const query = `query { 
	viewer {
    works(seasons: ["${season}"], state: WATCHING, orderBy: {field: SEASON, direction: DESC}) {
      nodes {
        title
      }
    }
  }
}`;

  const res = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BearerToken}`,
    },
    body: JSON.stringify({
      query,
    }),
  });
  const {
    data: {
      viewer: {
        works: { nodes },
      },
    },
  }: AnnictAPIResponse = await res.json();

  return {
    props: { watchingList: nodes },
    revalidate: 60 * 60 * 24,
  };
};
