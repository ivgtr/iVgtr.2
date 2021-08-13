import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Icon } from "../../components/Icon";
import { Navigation } from "../../components/Navigation";
import { Contact } from "../../components/PageDescription";
import classes from "./blog.module.scss";

const Articles = () => {
  return (
    <div className="h-full pt-12">
      <h2 className="text-3xl font-bold">Blog</h2>
      <ul>
        <li>
          <Link href={`/blog/test`}>
            <a>test</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="sm:inline-block hidden">
      <Icon />
      <h1 className="text-3xl font-bold">iVgtr</h1>
      <Contact />
    </div>
  );
};

const Main = () => {
  return (
    <div className={classNames("sm:grid items-center justify-center h-full px-4", classes.g)}>
      <Profile />
      <Articles />
    </div>
  );
};

const Blog = () => {
  const title = "blog";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
      </Head>
      <div className="h-full">
        <Navigation />
        <Main />
      </div>
    </>
  );
};

export default Blog;
