import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { JobsContents } from "../../components/JobsContents";
import { Navigation } from "../../components/Navigation";

type Repository = {
  title: string;
  url: string;
  description: string;
  update: string;
};

type Repositories = Repository[];

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Main: React.VFC<{ worksList: Repositories }> = ({ worksList }) => {
  return (
    <Container>
      <Header>その他</Header>
      <JobsContents worksList={worksList} />
    </Container>
  );
};

const Jobs: NextPage<Props> = ({ worksList }) => {
  const title = "その他";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
      </Head>
      <div>
        <Navigation />
        <Main worksList={worksList} />
      </div>
    </>
  );
};

export default Jobs;

export const getStaticProps = async () => {
  const endpoint = process.env.GOOGLE_API_URL;
  const authKey = process.env.AUTH_KEY;

  const res = await fetch(`${endpoint}?auth_key=${authKey}`, { redirect: "follow" });
  const json: Repositories = await res.json();
  const worksList = [...json].sort((a, b) => {
    if (new Date(a.update) > new Date(b.update)) {
      return -1;
    } else {
      return 1;
    }
  });

  return {
    props: { worksList },
    revalidate: 60 * 60 * 24,
  };
};
