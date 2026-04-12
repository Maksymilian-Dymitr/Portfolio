import { Card } from "@/Components/card";
import { forwardRef } from "react";
import { type Props } from "@/types";
import pic from "../pic.jpg"

export const Main = forwardRef<HTMLDivElement, Props>(
  ({ isVisible, id }, mainRef) => {
    return (
      <Card>
        <div
          id={id}
          ref={mainRef}
          className={`w-full
            h-full flex lg:flex-row flex-col-reverse 
            justify-center items-center transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className=" lg:w-[50%] flex flex-col items-center ">
            <h1 className="p-6 mb-0 sm:mb-3 sm:text-6xl text-4xl font-bold text-center
             leading-11 lg:leading-17">
              Maksymilian Dymitr
            </h1>
            <div className="bg-[#292929] rounded-xl px-4 py-2 font-medium">
            <p className="md:text-3xl rounded-2xl text-2xl"
            >
              Full-Stack Developer
            </p>
            </div>
            
          </div>
          <div className="w-[80vw] flex justify-center items-center">
            <div className="bg-zinc-800 rounded-full overflow-hidden
            ring-white/10 ring-2 "> 
              <img src={pic} className="lg:w-[30vw] lg:h-[38vw] w-dvw
              object-cover "></img>
          </div>
          </div>
        </div>
      </Card>
    );
  },
);
