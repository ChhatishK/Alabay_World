import React, { useRef, useState } from 'react'
import Photo from './Photo'
import RightArrow from '../Alabay Assets/Union.png'
import { IMAGES } from '../Constants/index'

const PhotoView = () => {

    const targetRef = useRef(null)
    
    const scrollImg = () => {
      
      if (targetRef.current) {
        const scrollAmount = targetRef.current.offsetWidth;
        if (targetRef.current.scrollLeft + targetRef.current.clientWidth >= targetRef.current.scrollWidth) {
            targetRef.current.scrollLeft = 0;
            targetRef.current.scrollBy ({
              top: 0,
              left: scrollAmount,
              behavior: 'smooth'
            })
        } else {
            targetRef.current.scrollBy({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
      }
    }

    const [activeAll, setActiveAll] = useState(true)
    const [activePhotos, setActivePhotos] = useState(false)
    const [activeVideos, setActiveVideos] = useState(false)

    const activeHandler = (type) => {
        setActiveAll(false)
        setActivePhotos(false)
        setActiveVideos(false)

        if (type === 'All') setActiveAll(true)
        if (type === 'Photos') setActivePhotos(true)
        if (type === 'Videos') setActiveVideos(true)
    }

  return (
    <div>
        
        <div className='flex gap-8 w-full bg-white justify-center py-8 font-montserrat font-bold'>

            <button className={`${activeAll ? 'text-yellow-300' : 'bg-none'}`} onClick={() => activeHandler('All')}>All</button>

            <button className={`${activePhotos ? 'text-yellow-300' : 'bg-none'}`} onClick={() => {activeHandler('Photos')}}>Photos</button>

            <button className={`${activeVideos ? 'text-yellow-300' : 'bg-none'}`} onClick={() => {activeHandler("Videos")}}>Videos</button>
            
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-4 w-full font-sans bg-white lg:px-12'>

          <div className='mt-12 lg:mt-0 flex lg:w-[95%] w-[100%] hide-scrollbar overflow-hidden gap-4 mx-auto p-2 lg:overflow-x-hidden overflow-x-scroll justify-center' ref={targetRef}>

            {activeAll && IMAGES.map((img, index) => (
              <Photo key={index} photo={img} />
            ))}

            {activePhotos && IMAGES.map((img, index) => (
              <Photo key={index} photo={img} />
            ))}
            {activeVideos && <alert className='text-center text-2xl text-red-500 w-full'>No videos available</alert>}

          </div>

          {activeAll && <div className='h-16 w-16 lg:w-[100px] lg:h-[120px] rounded-3xl flex justify-center items-center bg-[#353535] cursor-pointer shadow' onClick={scrollImg}>
            <img src={RightArrow} width={50} alt='union' />
          </div>}
          
          {activePhotos && <div className='h-16 w-16 lg:w-[100px] lg:h-[120px] rounded-3xl flex justify-center items-center bg-[#353535] cursor-pointer shadow' onClick={scrollImg}>
            <img src={RightArrow} width={50} alt='union' />
          </div>}

        </div>
    </div>
  )
}

export default PhotoView