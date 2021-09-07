import axios from "axios";
import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { TwitterInfo } from "../../components/TwitterInfo";

const title = "iVgtr.me | Twitter";
const USER_ENDPOINT = "https://api.twitter.com/1.1/users/show.json";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type TwitterResponse = {
  created_at: string;
  screen_name: string;
  name: string;
};

const Twitter: NextPage<Props> = (props) => {
  const { twitter_profile } = props;
  console.log(twitter_profile);

  const { created_at, screen_name, name } = twitter_profile;

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
          <div>
            {typeof window !== "undefined" && (
              <TwitterInfo {...{ created_at, screen_name, user_name: name }} />
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Twitter;

export const getStaticProps = async () => {
  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
  console.log(BEARER_TOKEN);

  try {
    const params = {
      screen_name: "mawaru_hana",
    };

    const query_params = new URLSearchParams(params);

    const data = await axios
      .get<TwitterResponse>(`${USER_ENDPOINT}?${query_params}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((res) => {
        console.log("----res");
        console.log(res);
        console.log("----res-data");
        console.log(res.data);

        return res.data;
      });

    console.log(data);

    if (!data) {
      console.log("datanai");
      return {
        props: { twitter_profile: { created_at: "2020-01-01", screen_name: "hoge", name: "fuga" } },
      };
    }

    return {
      props: {
        twitter_profile: data,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (e) {
    console.log(e);
    console.log("dataerror");

    return {
      props: { twitter_profile: { created_at: "2020-01-01", screen_name: "hoge", name: "fuga" } },
    };
  }
};
