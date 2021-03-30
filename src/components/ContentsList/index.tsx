import React from 'react'
import classes from './ContentsList.module.scss'

export const ContentsList = () => {
  return (
    <article>
      <section className={`mt-12 ${classes.list}`}>
        <h2 className="text-xl font-bold">好きなものたち</h2>

        <ul>
          <li className="mt-4">
            <h3 className="font-bold">今期のアニメ</h3>
            <ul>
              <li>
                ワンダーエッグ・プライオリティ
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/mawaru_hana/status/1362395667180576778"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-500"
                    >
                      https://twitter.com/mawaru_hana/status/1362395667180576778
                    </a>
                  </li>
                </ul>
              </li>
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
      </section>
    </article>
  )
}
