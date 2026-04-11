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
            h-full flex justify-between items-center transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="p-12 w-[40%] flex flex-col items-center ">
            <h1
              className="p-7 
              text-6xl font-bold"
            >
              Maksymilan Dymitr
            </h1>
            <div className="bg-[#292929] rounded-2xl px-4 py-2 font-medium">
            <p
              className="text-3xl w-fit 
              rounded-2xl "
            >
              Full-Stack Developer
            </p>
            </div>
          </div>
          <div className="w-[60%] flex justify-center">
            <div className="w-fit bg-zinc-800 rounded-full pt-2 overflow-hidden
            ring-white ring-4 "> 
              <img src={pic} className="w-[30vw] h-[40vw] 
              object-cover "></img>
          </div>
          </div>
        </div>
      </Card>
    );
  },
);
