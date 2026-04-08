import { Card } from "@/Components/card"
export function Main() {
  return (
    <Card>
        <div className="w-full h-full flex justify-between items-center">
          <div className="p-12 w-[40%] flex flex-col items-center ">
            <h1 className="p-5 text-black 
              text-6xl font-bold"> Maksymilan Dymitr </h1> 
            <p className="text-2xl w-fit text-gray-600
              rounded-2xl ">Full-Stack Developer</p>
          </div>
          <div className="h-full w-[60%] bg-zinc-200 rounded-xl">
            <img className="w-full h-full rounded-4xl border-none"></img>
          </div> 
        </div>
        </Card> 
  )
}