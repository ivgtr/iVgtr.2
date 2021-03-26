import React from 'react'
import classes from './Coment.module.scss'

export const Coment = () => {
  return (
    <div
      className={`absolute transform top-1/2 -translate-y-1/2 sm:-top-12 left-36 sm:left-1/2 sm:-translate-x-1/2 bg-gray-700 dark:bg-gray-100 rounded-md ${classes.coment}`}
    >
      <div className="w-full h-full overflow-hidden">
        <p className="dark:text-gray-700 text-gray-100 whitespace-nowrap px-2 py-1 text-xs">
          やあやあやあやあやあやあやあやあ
        </p>
      </div>
    </div>
  )
}
