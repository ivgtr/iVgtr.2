import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const Navigation = () => {
  return (
    <nav className="fixed inline-block top-2 left-2">
      <Link href="/">
        <a className="p-2 text-gray-700 dark:text-gray-100 transition-all duration-200 hover:text-opacity-80">
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </a>
      </Link>
    </nav>
  )
}
