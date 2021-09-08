import React from "react";

type List = {
  discription: string;
  list: {
    title: string;
  }[];
}[];

export const ContentList = ({ list }: { list: List }) => {
  return (
    <div className="break-words">
      {list.map((items, index) => {
        return (
          <ul className="pl-[1em] my-[0.5em] list-disc" key={index}>
            <li className="mt-4">
              <h3 className="font-bold">{items.discription}</h3>
              <ul className="pl-[1em] my-[0.5em] list-[circle]">
                {items.list.map(({ title }, key) => {
                  return <li key={key}>{title}</li>;
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
