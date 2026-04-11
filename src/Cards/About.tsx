import { Card } from "@/Components/card";
import { GitHubCalendar } from "react-github-calendar";
import { forwardRef } from "react";
import { type Props } from "@/types";

export const About = forwardRef<HTMLDivElement, Props>(
  ({ isVisible, id }, aboutRef) => {
    return (
      <Card>
        <div
          ref={aboutRef}
          id={id}
          className={`w-full h-full flex justify-between items-center
            transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="p-12 w-[40%] flex flex-col items-center ">
            <h1
              className="p-5 
            text-6xl font-bold" 
            >
              About Me
            </h1>
          </div>
          <div className="flex flex-col w-full items-center gap-10 ">
            <div className=" p-5 bg-[#3333] h-[60vh] w-[60vw] rounded-3xl
             shadow-2xl/100 "
            > 
             <h1>hdaslkfdjasdla</h1> 
             <p>akdjfaölkj</p> 
            </div>
            <div className=" p-5 bg-[#3333] h-[20vh] w-[47vw] rounded-3xl
              flex justify-center shadow-2xl/100">
              <GitHubCalendar username="Maksymilian-Dymitr" />
            </div>
          </div>
        </div>
      </Card>
    );
  },
);
