import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useEffect, useRef, useState } from "react";
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

type TimeDiff = {
  sec: number;
  min: number;
  hour: number;
  date: number;
};

const getDiffTime = (ms: number): TimeDiff => {
  const diffSec = Math.floor(ms / 1000);
  const sec = Math.floor((ms % 60000) / 1000);
  const min = Math.floor(diffSec / 60) % 60;
  const hour = Math.floor(diffSec / (60 * 60)) % 24;
  const date = Math.floor(diffSec / (60 * 60 * 24));

  return { sec, min, hour, date };
};

const Content: React.VFC<{
  diffTime: number;
  screen_name: string;
  user_name: string;
}> = ({ diffTime, screen_name, user_name }) => {
  const diff = getDiffTime(diffTime);
  return (
    <p className="text-3xl">
      <a
        href="https://twitter.com/mawaru_hana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <span className="inline-block px-1 font-bold">{`${user_name}(@${screen_name})`}</span>
      </a>
      が<span className="inline-block px-1 font-bold">Twitter</span>を始めてから
      <span className="inline-block px-1 font-bold">{diff.date}</span>日
      <span className="inline-block px-1 font-bold">{diff.hour}</span>時間
      <span className="inline-block px-1 font-bold">{diff.min}</span>分
      <span className="inline-block px-1 font-bold">{diff.sec}</span>秒が経過しました。
    </p>
  );
};

const Twitter: NextPage<Props> = ({ data }) => {
  const { created_at, ...props } = data;
  const refRequestAnimationFrame = useRef<ReturnType<typeof requestAnimationFrame>>();
  const created_time = new Date(created_at).getTime();
  const getDiffTime = useCallback(() => Math.floor(Date.now() - created_time), [created_time]);
  const [diffTime, setDiffTime] = useState<number>(getDiffTime());

  const animate = useCallback(() => {
    setDiffTime(getDiffTime());
    refRequestAnimationFrame.current = requestAnimationFrame(animate);
  }, [getDiffTime]);

  useEffect(() => {
    refRequestAnimationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (refRequestAnimationFrame.current) {
        return cancelAnimationFrame(refRequestAnimationFrame.current);
      }
    };
  }, [animate]);

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
          <div>{typeof window !== "undefined" && <Content diffTime={diffTime} {...props} />}</div>
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
    props: { data: { created_at, screen_name, user_name: name } },
    revalidate: 60 * 60 * 24,
  };
};
