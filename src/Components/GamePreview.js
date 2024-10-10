import { GAMES_PREVIEW } from "../Constants"
import rightArrow from '../Alabay Assets/Union.png'
import { useRef } from "react"
const GamePreview = () => {

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

  return (
    <div className="w-full mt-20">
        <h1 className="flex gap-4 font-bold font-montserrat uppercase lg:text-8xl opacity-90 ml-24">
            <p className="text-[#FFA800]">Game</p>
            <span>Previes</span>
        </h1>`  `

        <div className="flex lg:flex-row flex-col gap-3 items-center w-full justify-evenly mt-12 lg:px-6">
            <div ref={targetRef} className="flex overflow-x-scroll hide-scrollbar w-[78%] mx-auto gap-4">
                {GAMES_PREVIEW.map((game, index) => (
                    <div key={index} className="flex-shrink-0 rounded object-cover w-80">
                        <img src={game} alt="Game Preview" className="object-cover w-full rounded-lg" />
                    </div>
                ))}
            </div>

            <div className='h-16 w-16 lg:w-[100px] lg:h-[120px] rounded-3xl flex justify-center items-center bg-[#353535] cursor-pointer shadow' onClick={() => scrollImg()}>
                <img src={rightArrow} width={50} alt='union' />
            </div>
        </div>
    </div>
  )
}

export default GamePreview