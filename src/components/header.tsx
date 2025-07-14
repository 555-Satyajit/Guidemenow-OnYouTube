import React from 'react'
import  Navbar  from './navbar'
import NoSSR from './NoSSR'

const HEADER = () => {
  return (
    <div >
      <NoSSR >
      <Navbar />
      </NoSSR>
    </div>
  )
}

export default HEADER
