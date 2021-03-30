import React from 'react'
import classes from './JobsContents.module.scss'

const worksList = [
  {
    url: 'https://github.com/ivgtr/iVgtr.2',
    title: 'iVgtr.2',
    description: 'ポートフォリオサイトv2(このサイト)'
  },
  {
    url: 'https://github.com/ivgtr/twcl',
    title: 'twcl',
    description: 'Node.js で作られたCLI上のTwitterクライアント'
  },
  {
    url: 'https://github.com/ivgtr/aikatsu-btn',
    title: 'aikatsu-btn',
    description: 'アイカツ!格言を聞けるボタンのサイト'
  },
  {
    url: 'https://github.com/ivgtr/aikatsu-cli',
    title: 'aikatsu-cli',
    description: 'アイカツ!格言を再生するCL!ツール'
  },
  {
    url: 'https://github.com/ivgtr/node-alltweets',
    title: 'node-alltweets',
    description: 'Node.js を使って誰かの全ツイート(直近3200ツイート)をダウンロードします'
  },
  {
    url: 'https://github.com/ivgtr/luv-t-archive',
    title: 'luv-t-archive',
    description: 'Twitter でふぁぼったツイートを定期的に、自動で保存します'
  },
  {
    url: 'https://github.com/ivgtr/i2Color',
    title: 'i2Color',
    description: '画像から特徴色を抽出し表示するサイト'
  },
  {
    url: 'https://github.com/ivgtr/iVgtr.1',
    title: 'iVgtr.1',
    description: 'ポートフォリオサイトv1'
  }
]

const badgesList = [
  {
    name: 'Pro Twitter User',
    color: '#00acee'
  },
  {
    name: 'Vue/Nuxt.js',
    color: '#42b883'
  },
  {
    name: 'React/Next.js',
    color: '#00d8ff'
  },
  {
    name: 'TypeScript',
    color: '#3178c6'
  },
  {
    name: 'Node.js',
    color: '#6cc24a'
  },
  {
    name: 'Python',
    color: '#4584b6'
  }
]

const Skills = () => {
  return (
    <ul className="flex flex-wrap">
      {badgesList.map((item, i) => {
        const style = {
          backgroundColor: item.color
        }
        return (
          <li className="text-white bg-gray-700 flex text-xs mt-3 mr-2 last:mr-0" key={i}>
            <span className="inline-block h-full w-2" style={style}></span>
            <p className="px-2 py-1">{item.name}</p>
          </li>
        )
      })}
    </ul>
  )
}

const Works = () => {
  return (
    <ul>
      {worksList.map((item, i) => {
        return (
          <li className="mt-4" key={i}>
            <p className="font-bold">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                {item.title}
              </a>
            </p>
            <ul>
              <li>{item.description}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export const JobsContents = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Web Developer</h2>
      <p>Front-End Engineer</p>
      <article>
        <section className="mt-8">
          <h3 className="font-bold">Skills</h3>
          <Skills />
        </section>
        <section className={`mt-8 ${classes.list}`}>
          <h3 className="font-bold">Works</h3>
          <Works />
        </section>
      </article>
    </div>
  )
}
