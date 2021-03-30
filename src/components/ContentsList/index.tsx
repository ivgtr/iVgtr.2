import React from 'react'
import classes from './ContentsList.module.scss'

export const ContentsList = () => {
  return (
    <section className={`mt-4 ${classes.list}`}>
      <h3 className="text-xl font-bold">好きなものたち</h3>

      <h2 className="mt-4 text-lg font-bold">今期のアニメ</h2>
      <ul>
        <li>ワンダーエッグ・プライオリティ</li>
      </ul>
      <h2 className="mt-4 text-lg font-bold">作品</h2>
      <ul>
        <li>プリパラ/プリティーリズム RL</li>
        <li>アイカツ!</li>
        <li>少女革命ウテナ/輪るピングドラム</li>
        <li>ガンダムシリーズ</li>
        <li>カードキャプターさくら</li>
        <li>小麦ちゃんマジカルて</li>
        <li>うたわれるもの</li>
      </ul>
      <h2 className="mt-4 text-lg font-bold">ゲーム</h2>
      <ul>
        <li>DarkSouls</li>
        <li>Battlefield 3</li>
        <li>アイカツ!</li>
        <li>少女革命ウテナ</li>
        <li>輪るピングドラム</li>
      </ul>
    </section>
  )
}
