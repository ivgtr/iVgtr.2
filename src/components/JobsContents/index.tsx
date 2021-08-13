import classNames from "classnames";
import dayjs from "dayjs";
import React from "react";
import classes from "./JobsContents.module.scss";

type Repository = {
  title: string;
  url: string;
  description: string;
  update: string;
};

type Repositories = Repository[];

const badgesList = [
  {
    name: "Pro Twitter User",
    color: "#00acee",
  },
  {
    name: "Vue/Nuxt.js",
    color: "#42b883",
  },
  {
    name: "React/Next.js",
    color: "#00d8ff",
  },
  {
    name: "TypeScript",
    color: "#3178c6",
  },
  {
    name: "Node.js",
    color: "#6cc24a",
  },
  {
    name: "Python",
    color: "#4584b6",
  },
];

const Skills = () => {
  return (
    <ul className="flex flex-wrap">
      {badgesList.map((item, i) => {
        const style = {
          backgroundColor: item.color,
        };
        return (
          <li className="text-white bg-gray-700 flex text-xs mt-3 mr-2 last:mr-0" key={i}>
            <span className="inline-block h-full w-2" style={style}></span>
            <p className="px-2 py-1">{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

const Works: React.VFC<{ worksList: Repositories }> = ({ worksList }) => {
  return (
    <ul>
      {worksList.map((item, i) => {
        return (
          <li className="mt-4" key={i}>
            <p className="font-bold">
              {item.title}{" "}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                (Github)
              </a>
            </p>
            <ul>
              <li>{item.description}</li>
              <li>update: {dayjs(item.update).format("YYYY-MM-DD")}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export const JobsContents: React.VFC<{ worksList: Repositories }> = ({ worksList }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Web Developer</h2>
      <p>🌈 ｵﾀｸらしくﾌﾟﾛｸﾞﾗﾐﾝｸﾞとかをしてる</p>
      <article>
        <section className="mt-8">
          <h3 className="font-bold">Skills</h3>
          <Skills />
        </section>
        <section className={classNames("mt-8", classes.list)}>
          <h3 className="font-bold">Works</h3>
          <p>
            全て
            <a
              href="https://github.com/ivgtr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-500"
            >
              Github
            </a>
            にあげてる
          </p>
          <Works worksList={worksList} />
        </section>
      </article>
    </div>
  );
};
