import React from "react";

type List = {
  title: string;
}[];

export const ContentList = ({ list, discription }: { list: List; discription: string }) => {
  return (
    <ul className="pl-[1em] my-[0.5em] list-disc">
      <li className="mt-4">
        <h3 className="font-bold">{discription}</h3>
        <ul className="pl-[1em] my-[0.5em] list-[circle]">
          {list.length > 0 ? (
            list.map(({ title }, key) => {
              return <li key={key}>{title}</li>;
            })
          ) : (
            <li>No data</li>
          )}
        </ul>
      </li>
    </ul>
  );
};
