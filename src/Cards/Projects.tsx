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
          className={`w-full h-full flex justify-between items-center snap-center
            transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h1
            className="p-5 text-black
          text-6xl font-bold"
          >
            {" "}
            Projects{" "}
          </h1>
        </div>
      </Card>
    );
  },
);
