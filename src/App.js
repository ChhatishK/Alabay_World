import Background from "./Components/Background";
import hero from './Alabay Assets/hero.png'
import Main from "./Components/Main";
function App() {
  return (
    <div className="overflow-hidden w-[100vw] h-auto">
      <div className='fixed top-0 w-full h-full -z-10'>
        <img src={hero} alt='Hero Image' className="object-cover h-screen w-screen"/>
      </div>
      <Background />
      <Main />
    </div>
  );
}

export default App;
