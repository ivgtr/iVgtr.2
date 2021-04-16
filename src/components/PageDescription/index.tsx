import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faGithub, faSteam, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { Brand } from '../Brand'
import classes from './PageDescription.module.scss'

type Item = {
  title: string
  alt: string
  url: string
  logo: IconDefinition
}

const brandList: Item[] = [
  {
    title: 'Twitter',
    alt: '@mawaru_hana',
    url: 'https://twitter.com/mawaru_hana',
    logo: faTwitter
  },
  {
    title: 'Twitter',
    alt: '@ivgtr',
    url: 'https://twitter.com/ivgtr',
    logo: faTwitter
  },
  {
    title: 'Steam',
    alt: 'Steam',
    url: 'https://steamcommunity.com/id/ivgtr',
    logo: faSteam
  },
  {
    title: 'Discord',
    alt: 'Discord',
    url: 'discord:ivgtr#1332',
    logo: faDiscord
  },
  {
    title: 'Github',
    alt: 'Github',
    url: 'https://github.com/ivgtr',
    logo: faGithub
  },
  {
    title: 'MailAddress',
    alt: 'mail address',
    url: 'mailto:ivgtr.me@gmail.com',
    logo: faEnvelope
  }
]

const Contact = () => {
  return (
    <section className="mt-4">
      <h2 className="text-xl font-bold">Contact</h2>
      <ul className="flex flex-wrap mt-2">
        {brandList.map((item, i) => {
          const style = {
            animationDelay: `${i * 0.1 + 0.3}s`
          }
          return (
            <li key={i} className={classNames('mr-2 last:mr-0', classes.d)} style={style}>
              {<Brand item={item} />}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const About = () => {
  return (
    <section className={classNames('mt-4', classes.about)}>
      <h2 className="text-xl font-bold">About me</h2>
      <ul>
        <li>
          <h3>name</h3>

          <ul>
            <li>
              ねぎ/まわるはな{' '}
              <span className={classNames('inline-block cursor-default', classes.s)}>
                (@mawaru_hana)
              </span>
            </li>
          </ul>
        </li>
        <li>
          profile
          <ul>
            <li>
              🎂 96/11/12 (
              <a
                href="https://amz.run/3WX9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                乞食リスト
              </a>
              )
            </li>
            <li>
              趣味
              <ul>
                <li>🏄 ネットサーフィン</li>
                <li>🐔 Twitter</li>
                <li>
                  <Link href="/contents">
                    <a className="hover:underline text-blue-500">MORE...</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/jobs">
                <a className="hover:underline text-blue-500">お仕事</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

const Name = () => {
  return (
    <section className="name -ml-2">
      <h1 className="text-3xl font-bold">
        <span className="text-2xl mr-1">@</span>iVgtr
      </h1>
    </section>
  )
}

export const PageDescription = () => {
  return (
    <article className="w-full">
      <Name />
      <About />
      <Contact />
    </article>
  )
}
