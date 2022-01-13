import { NextPage } from "next";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { TwitterInfo } from "../../components/TwitterInfo";

const defaultData = {
  created_at: "Mon Aug 01 17:51:52 +0000 2011",
  screen_name: "mawaru_hana",
  user_name: "ねぎ",
};

const title = "iVgtr.me | Twitter";

type TwitterResponse = {
  created_at: string;
  screen_name: string;
  user_name: string;
};

const TwitterContents: React.FC = () => {
  const [twitterData, setTwitterData] = useState<TwitterResponse>(defaultData);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {twitterData && <TwitterInfo {...twitterData} />}
      <div className="mt-[30%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = inputRef.current;
            if (!input?.value) return alert("入力がない");

            (async () => {
              try {
                const res = await fetch(`/api/twitter?name=${input.value}`).then<TwitterResponse>(
                  (res) => res.json()
                );

                setTwitterData(res);
              } catch {
                alert("screen_nameが間違っているかも");
              }
            })();
          }}
        >
          <div className="flex w-full ">
            <label className="p-2">@</label>
            <input
              type="text"
              ref={inputRef}
              placeholder="screen_name"
              className="w-full rounded p-2 bg-gray-700 dark:bg-gray-100 dark:text-gray-700 text-gray-100"
            />
          </div>
          <div className="mt-2 text-center">
            <button className="rounded px-2 bg-gray-700 dark:bg-gray-100 dark:text-gray-700 text-gray-100">
              見る
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Twitter: NextPage = () => {
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
          <TwitterContents />
        </Container>
      </div>
    </>
  );
};

export default Twitter;
