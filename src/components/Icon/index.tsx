import React from 'react'

const Glitch: React.VFC<{ src: string; alt: string }> = (props) => {
  const MAX_GLITCH_COUNT = 10
  const baseStyle = [...Array(MAX_GLITCH_COUNT + 1)].map((_, i) => {
    const clipTop = Math.floor((i / MAX_GLITCH_COUNT) * 100) / 100
    const clipBottom = Math.floor((i / MAX_GLITCH_COUNT) * 100) / 100

    return {
      '--gi-clip-top': `${clipTop}%`,
      '--gi-clip-bottom': `${clipBottom}%`
    } as React.CSSProperties
  })

  return (
    <div className="relative w-full h-full">
      <img
        src={props.src}
        alt={props.alt}
        className="base w-full h-full object-contain rounded-full"
      />
      {baseStyle.map((style, i) => {
        return <img style={style} alt="" key={i} />
      })}
    </div>
  )
}

export const Icon: React.VFC = () => {
  return (
    <div className="box-border w-28 h-28 p-1 rounded-full bg-gray-700 dark:bg-gray-100 shadow-md overflow-hidden">
      {/* <img src="/icon.png" alt="伊吹風子" className="w-full h-full object-contain rounded-full" /> */}
      <Glitch src="/icon.png" alt="伊吹風子" />
    </div>
  )
}
