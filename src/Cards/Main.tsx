import { Card } from "@/Components/card";
import { forwardRef } from "react";
import { type Props } from "@/types";
import pic from "../pic.jpg";
import { Contact } from "@/Components/contact";

export const Main = forwardRef<HTMLDivElement, Props>(
  ({ isVisible, id }, mainRef) => {
    return (
      <Card>
        <div
          id={id}
          ref={mainRef}
          className={`min-w-screen h-screen flex lg:flex-row flex-col-reverse
            justify-center items-center transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="lg:w-[50%] flex flex-col items-center ">
            <h1
              className="p-6 mb-0 sm:mb-3 sm:text-6xl text-4xl font-bold text-center
             leading-11 lg:leading-17"
            >
              Maksymilian Dymitr
            </h1>
            <div className="bg-[#292929] rounded-xl px-4 py-2 font-medium">
              <p className="md:text-3xl rounded-2xl text-2xl">
                Full-Stack Developer
              </p>
            </div>
            <Contact/>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div
              className="  bg-zinc-800 overflow-hidden rounded-full
                ring-2 ring-white/10 shadow-lg w-64 h-80
                sm:w-80 sm:h-96 md:w-96 md:h-120 lg:w-md lg:h-152 "
            >
              <img src={pic} className="object-cover "></img>
            </div>
          </div>
        </div>
      </Card>
    );
  },
);
