import React from 'react'

const Photo = ({photo}) => {
  return (
    <div>
        <div className='flex-shrink-0 font-extrabold text-center p-1 w-[360px] h-[310px] rounded bg-[#A6A6A6] uppercase flex justify-center items-center'>
            <img src={photo} width={200} className='object-cover' />
        </div>
    </div>
  )
}

export default Photo