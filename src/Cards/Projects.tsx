import { Card } from "@/Components/card";
import { forwardRef } from "react";
import { type Props } from "@/types";

export const Projects = forwardRef<HTMLDivElement, Props>(
  ({ isVisible, id }, projectRef) => {
    return (
      <Card>
        <div
          ref={projectRef}
          id={id}
          className={`w-full h-full flex snap-center
            transition-all duration-700 flex-col
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h1 className="pt-10 pl-10 text-6xl font-bold ">Projects</h1>
          <div className="flex justify-center items-center">
            <div className="grid p-10 grid-cols-2 gap-10 ">
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
              <div className="w-[43vw] bg-[#1e1e1f] border border-white/5
             h-[15vh] rounded-xl hover:border-white/15 duration-500" ></div>
            </div>
            <h1 className="fixed text-9xl font-bold bg-[#1e1e1f] border 
              rounded-xl p-10 border-whtie/5">
              Coming Soon 😴
            </h1>
          </div>
        </div>
      </Card>
    );
  },
);
