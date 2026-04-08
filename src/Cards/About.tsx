import { Card } from "@/Components/card"
import { GitHubCalendar } from "react-github-calendar"

export function About() {
  return (
    
    <Card>
      <div className="w-full h-full flex justify-between items-center ">
        <div className="p-12 w-[40%] flex flex-col items-center ">
          <h1 className="p-5 text-black 
            text-6xl font-bold">About Me</h1> 
        </div>
        <div>
        <GitHubCalendar
        username="Maksymilian-Dymitr"/>
        </div>
      </div>
    </Card>    
  ) 
}