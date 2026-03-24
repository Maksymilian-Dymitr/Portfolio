
export function App() {
  return (
    <div className="fixed flex justify-center items-center
      w-full h-full bg-white
      ">
        <div
          className="w-[95%] h-[90%] bg-white rounded-4xl
          overflow-hidden shadow-2xl/100 flex flex-col">
            <div className="flex justify-center ">
              <nav className="flex text-2xl justify-around shadow-2xl/100 w-fit h-fit  
                rounded-4xl fixed px-3 py-2 text-zinc-700 mt-3">
            <button className="px-4 py-2 cursor-pointer hover:text-black rounded-4xl">Home</button>
                  <button className="px-4 py-2 cursor-pointer hover:text-black rounded-4xl">About</button>
                  <button className="px-4 py-2 cursor-pointer hover:text-black rounded-4xl">Projects</button>
                </nav>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <div className="p-12 w-[40%] flex flex-col items-center">
                <h1 className="p-5 text-black
                  text-6xl font-bold"> Maksymilan Dymitr </h1> 
                <p className="text-2xl w-fit text-gray-600
                  rounded-2xl ">Full-Stack Developer</p>
              </div>
              <img className="h-full w-[60%] rounded-4xl"></img>
            </div>
          </div>
      </div>
  );
}

export default App;
