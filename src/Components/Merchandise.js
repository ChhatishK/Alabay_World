import React, {useEffect, useRef, useState} from "react"
import {MERCHANDISES} from '../Constants/index'
import leftArrow from '../Alabay Assets/leftArrow.png'
import rightArrow from '../Alabay Assets/rightArrow.png'


const Merchandise = () => {

    const targetRef = useRef();

    const [scrollX, setScrollX] = useState({side : ""})

    const handleScroll = (type) => {
        setScrollX({side:type.side})
    }

    useEffect (() => {
        const scrollAmount = targetRef.current.offsetWidth

        if (scrollX.side === "Right") {
            targetRef.current.scrollBy ({
                left: scrollAmount,
                behavior: 'smooth'
            })
        } else {
            targetRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            })
        }
    }, [scrollX])
    

  return (
    <div className="w-full mt-24 mb-48">
        <h1 className="lg:text-8xl text-4xl text-center text-[#FFA800]">merchandise</h1>

        <div className="mx-auto relative flex items-center justify-center w-[80%]">

                <div  ref={targetRef} className="flex w-full mx-auto overflow-x-scroll relative hide-scrollbar">
                    {MERCHANDISES.map((mer, index) => (
                        
                        <div key={index} className="w-full flex-shrink-0 relative rounded-lg">
                            <div className="absolute top-0 bottom-0 w-full -z-10">
                                <img src={mer.bg} className="w-full rounded-lg " />
                            </div>
                            <div>
                                <img src={mer.front} className="w-full rounded-lg"/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 bottom-0 h-full w-full z-40">
                    <button className="lg:h-24 lg:w-24 h-12 p-2 w-12 absolute left-5 top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full bg-white" onClick={() => handleScroll({side : "Left"})}><img src={leftArrow} alt="Left arrow" /></button>

                    <button className="absolute top-1/2 right-5 -translate-y-1/2 lg:h-24 lg:w-24 h-12 p-2 w-12 flex justify-center items-center rounded-full bg-white" onClick={() => handleScroll({side : "Right"})}><img src={rightArrow} alt="Left arrow" /></button>
                </div>
            
        </div>

    </div>
  )
}

export default Merchandise