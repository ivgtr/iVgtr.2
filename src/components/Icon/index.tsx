import React, { useState, useLayoutEffect } from 'react'

const Image = () => {
  const [image, setImage] = useState<'/icon_dark.png' | '/icon.png'>('/icon.png')
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setImage('/icon_dark.png')
    } else {
      setImage('/icon.png')
    }
  }, [])

  return <img src={image} alt="あいこん" className="w-full h-full object-contain rounded-full" />
}

export const Icon: React.VFC = () => {
  return (
    <div className="box-border w-28 h-28 p-1 rounded-full overflow-hidden bg-gray-700 dark:bg-gray-100">
      <Image />
    </div>
  )
}
