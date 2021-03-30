import React from 'react'

export const Header: React.FC = ({ children }) => {
  return (
    <>
      <header className="text-left sm:text-center">
        <h1 className="inline-block my-12">
          <span className="font-black text-4xl">{children}</span>
        </h1>
      </header>
    </>
  )
}
