import React from 'react'

export const Box: React.FC = ({ children }) => {
  return <div className="sm:grid items-center justify-center">{children}</div>
}
