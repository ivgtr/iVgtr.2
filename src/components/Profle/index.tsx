import React from 'react'
import { Icon } from '../Icon'
import { Description } from '../Description'

const ProfileIcon = () => {
  return (
    <div className="">
      <Icon />
    </div>
  )
}

const ProfileDescription = () => {
  return (
    <div className="m-3 mt-5 sm:mt-3 box-border sm:ml-16 max-w-xs">
      <Description />
    </div>
  )
}

export const Profle: React.VFC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row py-16">
      <ProfileIcon />
      <ProfileDescription />
    </div>
  )
}
