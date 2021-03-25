import React from 'react'
import classes from './Description.module.scss'

const Link = () => {
  const list: { [key: string]: string } = {
    Twitter: 'https://twitter.com/mawaru_hana',
    Twitter2: 'https://twitter.com/ivgtr',
    Steam: 'https://steamcommunity.com/id/ivgtr',
    Discord: 'discord:ivgtr#1332',
    Github: 'https://github.com/ivgtr',
    Amazon: 'https://amz.run/3WX9'
  }
  return (
    <section className="mt-2">
      <h3 className="font-bold">link</h3>
      <ul className="flex flex-wrap">
        {Object.keys(list).map((item, i) => {
          return (
            <li key={i}>
              <a href={list[item]} target="_brank" rel="noopener">
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const About = () => {
  return (
    <section className={`mt-2 ${classes.about}`}>
      <h3 className="font-bold">about me</h3>
      <ul>
        <li>
          name
          <ul>
            <li>ねぎ / まわるはな(@mawaru_hana)</li>
          </ul>
        </li>
        <li>
          profile
          <ul>
            <li>🎂 96/11/12</li>
            <li>コンテンツを消費することが得意</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

const Name = () => {
  return (
    <section className="name mt-2">
      <h2 className="text-3xl font-bold">
        <span className="text-2xl mr-1">@</span>iVgtr
      </h2>
    </section>
  )
}

export const Description = () => {
  return (
    <article className="-mt-2">
      <Name />
      <About />
      <Link />
    </article>
  )
}
