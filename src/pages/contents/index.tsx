import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { ContentsDescription } from "../../components/ContentsDescription";
import { ContentsLink } from "../../components/ContentsLink";
import { ContentsList } from "../../components/ContentsList";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

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
  );
};
const Otaku = ({ watchingList }: { watchingList: WorksList }) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">好きなものたち</h2>
      <ContentsLink />
      <ContentsList watchingList={watchingList} />
    </section>
  );
};

const Main = ({ watchingList }: { watchingList: WorksList }) => {
  return (
    <Container>
      <Header>more...</Header>
      <article>
        <ContentsDescription />
        <Me />
        <Otaku watchingList={watchingList} />
      </article>
    </Container>
  );
};

const Contents: NextPage<Props> = ({ watchingList }) => {
  const title = "漏れ";

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

export default Contents;

export const getStaticProps = async () => {
  const endpoint = process.env.ANNICT_API_URL;
  const BearerToken = process.env.ANNICT_BEARER_TOKEN;
  const split = ["winter", "spring", "summer", "autumn"];
  const nowTime = new Date();
  const season = `${nowTime.getFullYear()}-${split[Math.floor(nowTime.getMonth() / 3)]}`;
  const query = `query { 
	viewer{
    works(seasons: ["${season}"], state: WATCHING, orderBy: {field: SEASON, direction: DESC}){
     nodes{
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
