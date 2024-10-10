import { GAMES } from "../Constants/index"
import RightArrow from '../Alabay Assets/rightArrow.png'
import arrow from '../Alabay Assets/Union.png'
import { useEffect, useRef, useState } from "react"

const Games = () => {
    const targetRef = useRef();

    const [currentBg, setCurrentBg] = useState("#843AFC")

    const color = ["#45D689", "#843AFC"]

  
    setTimeout(() => {
        color.map((color) => (
            setCurrentBg(color)
        ))
    }, 1000);
    

    const clickHandler = (color) => {
        setCurrentBg(color)
        if (targetRef.current.scrollLeft + targetRef.current.clientWidth >= targetRef.current.scrollWidth) {
            targetRef.current.scrollLeft = 0;
        }

        if (targetRef.current) {
            targetRef.current.scrollBy ({
                left: targetRef.current.offsetWidth,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        if (targetRef.current.scrollLeft + targetRef.current.clientWidth >= targetRef.current.scrollWidth) {
            targetRef.current.scrollLeft = 0;
        }

        if (targetRef.current) {
            targetRef.current.scrollBy ({
                left: targetRef.current.offsetWidth,
                behavior: 'smooth'
            })
        }
    },[currentBg])

  return (
    <div className='bg-radial flex flex-col justify-center items-center -mt-32'>
        <h1 className="mt-48 lg:text-8xl text-4xl text-white">Games</h1>
        <span className="lg:text-4xl text-2xl text-center font-sans font-bold opacity-90 mb-24">Stay tuned for upcoming games !</span>

        <div className="flex w-[80%] mx-auto relative">
            <div  ref={targetRef} className="flex w-full overflow-x-scroll hide-scrollbar rounded-lg">

                {GAMES.map((game, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <img src={game} alt="" className="w-full"/>
                    </div>
                ))}

            </div>

            <div className="absolute top-0 bottom-0 w-full h-full text-white z-50">
                <button className="absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-white font-bold flex justify-center items-center rounded-full" 
                onClick={(prev) => {
                    if (prev === "#843AFC") clickHandler("#45D689")
                    else clickHandler("#843AFC")
                }}><img src={RightArrow} alt="right arrow" width={30} /></button>

                <button className={`absolute bottom-0 lg:bottom-5 left-1/2 -translate-x-1/2 font-sans px-4 py-1 lg:text-2xl uppercase flex items-center justify-center lg:gap-6 gap-2 bg-[${currentBg}] lg:px-8 lg:py-2 rounded-3xl`}><p>Discover</p> <img src={arrow} alt="Union arrow" width={20} /></button>
            </div>
        </div>
    </div>
  )
}

export default Games