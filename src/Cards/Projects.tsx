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
          transition-all duration-700 flex-col justify-center 
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="flex justify-center items-center relative">
            <div
              className=" grid grid-cols-1 sm:grid-cols-2
              xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8  p-4 sm:p-10
              w-full "
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-24 sm:h-28 md:h-32 bg-[#1e1e1f]
                  border border-white/5 rounded-xl duration-500
                  "
                />
              ))}
            </div>

            <h1
              className="absolute flex justify-center items-center
              text-4xl sm:text-5xl md:text-7xl xl:text-9xl
              font-bold bg-[#1e1e1f]/80 border border-white/5 rounded-xl
              px-4 py-2 sm:px-6 sm:py-3 md:p-6 backdrop-blur
              "
            >
              Coming Soon 😴
            </h1>
          </div>
        </div>
      </Card>
    );
  },
);
