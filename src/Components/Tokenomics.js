import { IMAGES } from "../Constants"
const Tokenomics = () => {
  return (
    <div className=" w-full relative z-10 flex flex-col bg-radial beforebg">
        <h1 className="lg:text-8xl text-4xl text-center lg:pl-24 lg:text-start text-white mt-72">TOKENOMICS</h1>
        <div className="flex lg:flex-row flex-col gap-6 justify-evenly items-center">

            <div className="flex flex-col gap-8 text-white font-sans font-extrabold mt-8">

                <div className="lg:w-[400px] w-[200px] py-2 lg:h-[100px] bg-[#353535] rounded-lg flex justify-center pl-5 items-start lg:text-3xl flex-col drop-shadow-2xl">
                    <p>LIQUIDITY</p>
                    <span className="lg:text-5xl text-2xl text-[#FFF280]">LOCKED</span>
                </div>

                <div className="lg:w-[400px] w-[200px] py-2 lg:h-[100px] bg-[#353535] rounded-lg flex justify-center pl-5 items-start lg:text-3xl flex-col drop-shadow-2xl">
                    <p>CONTRACT</p>
                    <span className="lg:text-5xl text-2xl text-[#FFF280]">RENOUNCED</span>
                </div>

                <div className="lg:w-[400px] w-[200px] py-2 lg:h-[100px] bg-[#353535] rounded-lg flex justify-center pl-5 items-start lg:text-3xl flex-col drop-shadow-2xl">
                    <p>TAXES</p>
                    <span className="lg:text-5xl text-2xl text-[#FFF280]">0%</span>
                </div>

            </div>

            <div>
                <img src={IMAGES[1]} width={500} alt='Tokenomics' />
            </div>
        </div>
    </div>
  )
}

export default Tokenomics