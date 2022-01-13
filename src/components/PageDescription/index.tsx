import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub, faSteam, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPenNib } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Brand } from "../Brand";
import classes from "./PageDescription.module.scss";

type Item = {
  title: string;
  alt: string;
  url: string;
  logo: IconDefinition;
};

const brandList: Item[] = [
  {
    title: "Twitter",
    alt: "@mawaru_hana",
    url: "https://twitter.com/mawaru_hana",
    logo: faTwitter,
  },
  {
    title: "Twitter",
    alt: "@ivgtr",
    url: "https://twitter.com/ivgtr",
    logo: faTwitter,
  },
  {
    title: "はてなブログ",
    alt: "はてなブログ",
    url: "https://ivgtr.hatenablog.jp",
    logo: faPenNib,
  },
  {
    title: "Steam",
    alt: "Steam",
    url: "https://steamcommunity.com/id/ivgtr",
    logo: faSteam,
  },
  {
    title: "Discord",
    alt: "Discord",
    url: "discord:ivgtr#1332",
    logo: faDiscord,
  },
  {
    title: "Github",
    alt: "Github",
    url: "https://github.com/ivgtr",
    logo: faGithub,
  },
  {
    title: "MailAddress",
    alt: "mail address",
    url: "mailto:ivgtr.me@gmail.com",
    logo: faEnvelope,
  },
];

export const Contact = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl font-bold">Contact</h2>
      <ul className="flex flex-wrap mt-2">
        {brandList.map((item, i) => {
          const style = {
            animationDelay: `${i * 0.1 + 0.2}s`,
          };
          return (
            <li key={i} className={classNames("mr-2 last:mr-0", classes.d)} style={style}>
              {<Brand item={item} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const About = () => {
  const [posts, setPosts] = useState<
    { title: string; url: string; pubDate: Date; category: string }[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/rss`).then<{
          rss: { title: string; url: string; pubDate: Date; category: string }[];
        }>((res) => res.json());

        setPosts(res.rss.slice(0, 3));
      } catch {
        alert("記事が取得できない");
      }
    })();
  }, []);

  return (
    <section className={classNames("mt-4", classes.about)}>
      <h2 className="text-xl font-bold">About me</h2>
      <ul>
        <li>
          <h3>name</h3>

          <ul>
            <li>ねぎとろ</li>
          </ul>
        </li>
        <li>
          <h3>profile</h3>

          <ul>
            <li>
              <span className="mr-2">🎂</span>96/11/12
            </li>
            <li>
              興味があるもの
              <ul>
                <li>
                  <span className="mr-2">🏄</span>Internet
                </li>
                <li>
                  <span className="mr-2">🐔</span>
                  <Link href="/twitter">
                    <a className="hover:underline text-blue-500">/twitter</a>
                  </Link>
                </li>
                <li>
                  <span className="mr-2">🎮</span>
                  <Link href="/game">
                    <a className="hover:underline text-blue-500">/game</a>
                  </Link>
                </li>
                <li>
                  <span className="mr-2">🌈</span>
                  <Link href="/anime">
                    <a className="hover:underline text-blue-500">/anime</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <h3>最新記事</h3>

          <ul>
            {posts.length > 0 &&
              posts.map((post, i) => {
                const date = new Date(post.pubDate);
                return (
                  <li key={`post${i}`}>
                    <span className="pr-2">{`${date.toLocaleDateString()}`}</span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-500"
                    >
                      {post.title}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export const Name = () => {
  return (
    <section className="name -ml-2">
      <h1 className="text-3xl font-bold">
        iVgtr.<span className="text-2xl">me</span>
      </h1>
    </section>
  );
};

export const PageDescription = () => {
  return (
    <article className="w-full">
      <Name />
      <About />
      <Contact />
    </article>
  );
};
