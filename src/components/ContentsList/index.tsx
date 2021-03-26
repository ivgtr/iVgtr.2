import React from 'react'
import classes from './ContentsList.module.scss'

export const ContentsList = () => {
  return (
    <section className={`mt-4 ${classes.list}`}>
      <h3 className="text-xl font-bold">Likes</h3>
      <ul>
        <li>
          ワンダーエッグ・プライオリティワンダーエッグ・プライオリティワンダーエッグ・プライオリティ
        </li>
      </ul>
    </section>
  )
}
