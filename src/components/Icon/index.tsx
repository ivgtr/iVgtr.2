import React from 'react'

export const Icon: React.VFC = () => {
  return (
    <div className="box-border w-28 h-28 p-1 rounded-full bg-gray-700 dark:bg-gray-100 shadow-md overflow-hidden">
      <img src="/icon.png" alt="伊吹風子" className="w-full h-full object-contain rounded-full" />
    </div>
  )
}
