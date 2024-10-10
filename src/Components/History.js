import hisotryImg from '../Alabay Assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png'

const History = () => {
  return (
    <div className='relative bg-radial sidebg'>

      <div className='w-56 h-4 bg-[#FFF6A1] rounded-xl mx-auto cursor-pointer absolute left-1/2 -translate-x-1/2 top-4' ></div>

        <div className='flex lg:flex-row flex-col w-full lg:gap-8 justify-around xl:px-24 items-center'>
            <div className='w-full lg:w-1/2'>
                <img src={hisotryImg} alt='History Image' className='mirrored-shadow lg:mt-32 mt-8' />
            </div>
            <div className='flex flex-col lg:gap-4 w-full lg:w-1/2 lg:bg-transparent bg-yellow-300'>
                <h2 className='lg:text-9xl text-4xl lg:text-right text-white text-center'><span className='font-montserrat font-extrabold lg:text-7xl text-4xl text-orange-500'>History Of</span> ALABAY</h2>
                <p className=' w-full p-2 font-sans lg:text-2xl font-bold lg:text-right mt-5 text-center mx-auto'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
            </div>
        </div>
    </div>
  )
}

export default History