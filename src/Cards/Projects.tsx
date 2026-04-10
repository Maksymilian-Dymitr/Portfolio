import { Card } from "@/Components/card";
import { forwardRef } from "react"

export const Projects = forwardRef(function Projects(props, projectRef:any) {
  return (
    
    <Card>
      <div ref={projectRef} className="w-full h-full flex justify-between items-center snap-center">
        <h1 className="p-5 text-black  
          text-6xl font-bold"> Projects </h1> 
      </div>
    </Card>    
  );
})