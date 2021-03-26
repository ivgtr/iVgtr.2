import React from 'react'

export const Container: React.FC = ({ children }) => {
  return <div className="sm:grid items-center justify-center">{children}</div>
}
