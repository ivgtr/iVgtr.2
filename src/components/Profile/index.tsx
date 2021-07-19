import React from 'react'
import { Icon } from '../Icon'
// import { Coment } from '../Coment'
import { PageDescription } from '../PageDescription'

const ProfileIcon = () => {
  return (
    <div className="relative">
      {/* <Coment /> */}
      <Icon />
    </div>
  )
}

const Description = () => {
  return (
    <div className="m-3 mt-8 sm:mt-3 box-border sm:ml-16 max-w-xs">
      <PageDescription />
    </div>
  )
}

export const Profile: React.VFC = () => {
  return (
    <div className="sm:flex flex-wrap items-center justify-center flex-col sm:flex-row py-16 px-4">
      <ProfileIcon />
      <Description />
    </div>
  )
}
