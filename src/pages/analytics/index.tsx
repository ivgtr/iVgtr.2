import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";

const Main: React.VFC = () => {
  return (
    <Container>
      <Header>Analytics</Header>
    </Container>
  );
};

const Analytics: NextPage = () => {
  const title = "Analytics";

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

export default Analytics;
