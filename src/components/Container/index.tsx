import React from 'react'

export const Container: React.FC = ({ children }) => {
  return <div className="w-full sm:max-w-2xl mx-auto px-4 pb-12">{children}</div>
}
