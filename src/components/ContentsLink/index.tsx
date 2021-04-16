import classNames from 'classnames'
import React from 'react'
import classes from './ContentsLink.module.scss'

type Link = {
  title: string
  url: string
}

const links: Link[] = [
  {
    title: 'comicspace',
    url: 'https://comicspace.jp/profile/ivgtr'
  },
  {
    title: 'Annict',
    url: 'https://annict.jp/@ivgtr'
  },
  {
    title: 'hatena',
    url: 'https://ivgtr.hatenablog.jp/'
  }
]

export const ContentsLink = () => {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold">review</h2>

      <ul className="mt-4">
        {links.map((item, i) => {
          return (
            <li key={i} className={classNames('inline-block', classes.li)}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                <span>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
