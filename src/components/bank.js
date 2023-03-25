
import React from 'react'
import { ControlBar, PlayerProvider, Songs } from './MusicProvider';

const bank = () => {
  return (
    <>
     <ControlBar/>
    <Songs/>
     <PlayerProvider/> 
    </>
  )
}

export default bank;
