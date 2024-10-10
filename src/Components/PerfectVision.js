import React from 'react'
import groupImg from '../Alabay Assets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png'

const PerfectVision = () => {
  return (
    <div className='beforebg bg-radial z-10'>
        <h1 className='lg:text-8xl text-4xl text-center z-10 mt-24 text-[#FFA800]'>Project Vision</h1>
        <div className='flex flex-col w-full p-12 items-center'>
            <div>
                <img src={groupImg} alt='' className='mirrored-shadow' />
            </div>
            <div className='mt-12 lg:text-4xl text-2xl text-[#353535] text-center font-semibold'>
                <p className='font-sans font-semibold'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
            <h2 className='lg:text-8xl text-6xl tracking-wider z-20 mt-24 text-white text-center lg:ml-32 lg:text-left font-ch'>Road Map</h2>
            </div>

        </div>
    </div>
  )
}

export default PerfectVision