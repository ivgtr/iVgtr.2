import React from 'react'
import Link from 'next/link'
import { faGithub, faTwitter, faDiscord, faSteam } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { Brand } from '../Brand'
import classes from './Description.module.scss'

type items = {
  title: string
  alt: string
  url: string
  logo: IconDefinition
}[]

const Contact = () => {
  const list: items = [
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
      title: 'faGithub',
      alt: 'Github',
      url: 'https://github.com/ivgtr',
      logo: faGithub
    }
  ]

  return (
    <section className="mt-4">
      <h3 className="text-xl font-bold">Contact</h3>
      <ul className="flex flex-wrap mt-2">
        {list.map((item, index) => {
          return (
            <li key={index} className="mr-2 last:mr-0">
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
    <section className={`mt-4 ${classes.about}`}>
      <h3 className="text-xl font-bold">About me</h3>
      <ul>
        <li>
          name
          <ul>
            <li>
              ねぎ / まわるはな (
              <a
                href="https://twitter.com/mawaru_hana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                @mawaru_hana
              </a>
              )
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
                <li>ネットサーフィン</li>
                <li>
                  その他の漏れ (
                  <Link href="/contents">
                    <a className="hover:underline text-blue-500">More...</a>
                  </Link>
                  )
                </li>
              </ul>
            </li>

            <li>
              <Link href="/jobs">
                <a className="hover:underline text-blue-500">仕事</a>
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
    <section className="name -ml-4">
      <h2 className="text-3xl font-bold">
        <span className="text-2xl mr-1">@</span>iVgtr
      </h2>
    </section>
  )
}

export const Description = () => {
  return (
    <article className="w-full">
      <Name />
      <About />
      <Contact />
    </article>
  )
}
