 
export function Navbar() {
  return (
    <div className="flex justify-center ">
      <nav className="flex text-2xl justify-around shadow-2xl/100 w-fit h-fit  
        rounded-4xl fixed px-3 py-2 text-zinc-700 mt-3 bg-white">
          <button className="px-4 py-2 cursor-pointer hover:text-black rounded-4xl">Home</button>
          <button className="px-4 py-2 cursor-pointer hover:text-black rounded-4xl">About</button>
          <button className="px-4 py-2 cursor-pointer hover:text-black rounded-4xl">Projects</button>
        </nav>
    </div>
  )
}
