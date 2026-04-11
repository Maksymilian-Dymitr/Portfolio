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
          <h1 className="pt-10 pl-10 text-6xl font-bold " >
            Projects
          </h1>
          <div className="font-bold text-9xl flex justify-center items-center w-full h-full"> 
            <h1>
              Coming Soon 😪
            </h1>
          </div>
        </div>
      </Card>
    );
  },
);
