import React from 'react'
import Link from 'next/link'
import classes from './Description.module.scss'

const Contact = () => {
  // const list: { [key: string]: string } = {
  //   Twitter: 'https://twitter.com/mawaru_hana',
  //   Twitter2: 'https://twitter.com/ivgtr',
  //   Steam: 'https://steamcommunity.com/id/ivgtr',
  //   Discord: 'discord:ivgtr#1332',
  //   Github: 'https://github.com/ivgtr',
  //   Amazon: 'https://amz.run/3WX9'
  // }
  return (
    <section className="mt-4">
      <h3 className="text-xl font-bold">Contact</h3>
      <ul className="flex flex-wrap mt-2">
        <li>
          <a href="https://twitter.com/mawaru_hana" rel="nofollow">
            <img
              src="https://camo.githubusercontent.com/fdd2a610b14de176402083cdd04243bc4f0fcb60997d302b4d4590e0a1533600/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f6d61776172755f68616e613f7374796c653d736f6369616c"
              alt="Twitter Follow"
              data-canonical-src="https://img.shields.io/twitter/follow/mawaru_hana?style=social"
            ></img>
          </a>
        </li>
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
              ねぎ / まわるはな(
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
              <a
                href="https://amz.run/3WX9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                🎂 96/11/12
              </a>
            </li>
            <li>コンテンツを消費することが得意</li>
            <li>
              <Link href="/contents">
                <a className="hover:underline text-blue-500">漏れ...</a>
              </Link>
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
