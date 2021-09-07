import classNames from "classnames";
import React from "react";
import classes from "./ContentList.module.scss";

type WorksList = { title: string; image: { recommendedImageUrl: string } }[];

export const ContentList = ({ watchingList }: { watchingList: WorksList }) => {
  return (
    <div className={classNames("mt-4", classes.list)}>
      <ul>
        <li className="mt-4">
          <h3 className="font-bold">今期見てるアニメ</h3>
          <ul>
            {watchingList.length > 0 ? (
              watchingList.map(({ title }, key) => {
                return <li key={key}>{title}</li>;
              })
            ) : (
              <li>まだ</li>
            )}
          </ul>
        </li>
        <li className="mt-4">
          <h3 className="font-bold">好きなものたち</h3>
          <ul>
            <li>プリパラ/プリティーリズム RL</li>
            <li>アイカツ!</li>
            <li>少女革命ウテナ/輪るピングドラム</li>
            <li>ガンダムシリーズ</li>
            <li>カードキャプターさくら</li>
            <li>小麦ちゃんマジカルて</li>
            <li>うたわれるもの</li>
            <li>CLANNAD</li>
            <li>ワンダーエッグ・プライオリティ</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
