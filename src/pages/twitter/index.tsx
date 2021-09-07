import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

const title = "iVgtr.me | Twitter";
type Props = InferGetStaticPropsType<typeof getStaticProps>;

type TwitterResponse = {
  created_at: string;
  screen_name: string;
  name: string;
  statuses_count: number;
};

const Twitter: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
      </Head>
      <div>
        <Navigation />
        <Container>
          <Header>twitter...</Header>
          <div>test</div>
        </Container>
      </div>
    </>
  );
};

export default Twitter;

export const getStaticProps = async () => {
  const USER_ENDPOINT = "https://api.twitter.com/1.1/users/show.json";
  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

  const params = {
    screen_name: "mawaru_hana",
  };

  const query_params = new URLSearchParams(params);

  const data: TwitterResponse = await fetch(`${USER_ENDPOINT}?${query_params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  }).then((res) => res.json());

  const { created_at, screen_name, name } = data;

  return {
    props: { created_at, screen_name, user_name: name },
    revalidate: 60 * 60 * 24,
  };
};
