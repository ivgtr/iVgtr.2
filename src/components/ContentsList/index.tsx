import classNames from 'classnames'
import React from 'react'
import classes from './ContentsList.module.scss'

export const ContentsList = () => {
  return (
    <div className={classNames('mt-4', classes.list)}>
      <p className="text-3l font-bold">一覧</p>

      <ul>
        <li className="mt-4">
          <h3 className="font-bold">今期のアニメ</h3>
          <ul>
            <li>まだ</li>
          </ul>
        </li>
        <li className="mt-4">
          <h3 className="font-bold">作品</h3>
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
        <li className="mt-4">
          <h3 className="font-bold">ゲーム</h3>
          <ul>
            <li>DarkSouls</li>
            <li>Battlefield 3</li>
            <li>グランブルーファンタジーファンタジー</li>
          </ul>
        </li>
        <li className="mt-4">
          <h3 className="font-bold">ブランド</h3>
          <ul>
            <li>フロムソフトウェア</li>
            <li>すみっこソフト</li>
            <li>Key</li>
          </ul>
        </li>
        <li className="mt-4">
          <h3 className="font-bold">ライター</h3>
          <ul>
            <li>王雀孫</li>
            <li>すかぢ</li>
            <li>衣笠彰梧</li>
            <li>渡辺僚一</li>
            <li>朱門優</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
