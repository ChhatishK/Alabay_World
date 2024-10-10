import socialMediaLinks from '../Alabay Assets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png'

import Twitter from '../Alabay Assets/twitter logo 1.png'
import Telegram from '../Alabay Assets/Mask group.png'
import LinksBg from '../Alabay Assets/Alabay Games/LinkBg.png'

const SocialMedia = () => {
  return (
    <div className="mt-48">
        <h1 className="lg:text-8xl text-4xl text-center uppercase text-[#FFA800]">social media links</h1>

        <div className='flex lg:flex-row flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-start lg:w-[500px] lg:h-[400px] bg-center object-cover aspect-square rounded font-montserrat font-extrabold text-white tracking-wider lg:text-3xl text-xl gap-3' style={{backgroundImage: `url(${LinksBg})`}}>

                <a href='#'  className='flex gap-6 justify-center w-full items-center'>
                    <div className='bg-[#353535] h-12 w-12 rounded-full flex justify-center items-center'>
                        <img src={Twitter} width={30} alt='twitter' />
                    </div>
                    <p>Twitter Link</p>
                </a>
                <a href='#'  className='flex gap-6 justify-center w-full items-center'>
                    <div className='bg-[#353535] h-12 w-12 rounded-full flex justify-center items-center'>
                        <img src={Telegram} width={30} alt='twitter' />
                    </div>
                    <p>Telegram Link</p>
                </a>

                

            </div>

            <div>
                <img src={socialMediaLinks} width={600} alt="" />
            </div>

        </div>
        <div className='w-full h-8 bg-white'></div>
    </div>
  )
}

export default SocialMedia