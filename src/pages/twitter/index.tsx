import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { TwitterInfo } from "../../components/TwitterInfo";

const title = "iVgtr.me | Twitter";
type Props = InferGetStaticPropsType<typeof getStaticProps>;

type TwitterResponse = {
  created_at: string;
  screen_name: string;
  name: string;
  statuses_count: number;
};

const Twitter: NextPage<Props> = (props) => {
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
          <div>{typeof window !== "undefined" && <TwitterInfo {...props} />}</div>
        </Container>
      </div>
    </>
  );
};

export default Twitter;

export const getStaticProps = async () => {
  const USER_ENDPOINT = "https://api.twitter.com/1.1/users/show.json";
  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

  try {
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
  } catch (e) {
    console.log(e);

    return {
      props: { created_at: "2020-01-01", screen_name: "hoge", user_name: "fuga" },
    };
  }
};
