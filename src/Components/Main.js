import React from 'react'
import History from './History'
import PhotoView from './PhotoView'
import PerfectVision from './PerfectVision'
import RoadMap from './RoadMap'
import Tokenomics from './Tokenomics'
import Merchandise from './Merchandise'
import Games from './Games'
import GamePreview from './GamePreview'
import SocialMedia from './SocialMedia'

const Main = () => {

  return (
    <div className='customScrollbar absolute lg:top-[600px] top-[700px] left-1/2 -translate-x-1/2 w-[85%] lg:h-[95vh] lg:overflow-y-scroll rounded-lg bg-white'>

        <History />

        <PhotoView />

        <PerfectVision />

        <RoadMap />

        <Tokenomics />

        <Merchandise />

        <Games />

        <GamePreview />

        <SocialMedia />

    </div>
  )
}

export default Main