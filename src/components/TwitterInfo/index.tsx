import React from "react";

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

export const TwitterInfo: React.VFC<{
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
