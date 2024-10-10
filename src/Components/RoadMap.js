import ROAD_MAP from '../Constants/index'
import { MERCHANDISE } from '../Constants/index'

const RoadMap = () => {

  return (
    <div>

        <div className='flex flex-col lg:flex-row justify-evenly items-center relative w-full'>
            <div className='w-full lg:w-1/3 font-sans font-semibold text-center lg:text-left lg:text-3xl text-2xl'>
                <p className=' opacity-85 p-2 lg:p-0'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>

                <p className='mt-8 opacity-85 text-[#FFA800]'>Join us as we grow and achieve new heights.</p>
            </div>
            
            <div className='w-full lg:w-1/2 max-w-xl -mt-48 lg:flex hidden z-20'>
                <img src={ROAD_MAP} alt="Road Map" className='mirrored-shadow' />
            </div>
        </div>

        <div className='w-full flex mt-24 lg:flex-row flex-col justify-evenly items-center font-sans font-bold text-2xl text-center p-8 gap-4'>
            
            {MERCHANDISE.map((image, index) => (
                <div key={index} className={`w-full relative flex flex-col text-white opacity-85 gap-6 justify-center items-center ${image.gradient} ${image.borderRadius} lg:w-1/4`}>
                    <p className='mt-4'>{image.desc}</p>
                    <img src={image.img} width={200} className='object-center aspect-square' />
                    <div className={`${image.linearGradient} absolute top-40 bottom-0 w-full`}></div>
                </div>
            ))}
            
        </div>

    </div>
  )
}

export default RoadMap