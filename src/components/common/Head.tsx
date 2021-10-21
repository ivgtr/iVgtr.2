import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description: string;
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
    </Head>
  );
};
