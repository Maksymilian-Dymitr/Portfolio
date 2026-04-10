import { Card } from "@/Components/card";
import { forwardRef } from "react";
import { type Props } from "@/types";

export const Main = forwardRef<HTMLDivElement, Props>(
  ({ isVisible, id }, mainRef) => {
    return (
      <Card>
        <div
          id={id}
          ref={mainRef}
          className={`w-full h-full flex justify-between items-center transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div
            className="p-12 w-[40%] flex flex-col items-center "
          >
            <h1
              className="p-5 text-black
              text-6xl font-bold"
            >
              Maksymilan Dymitr
            </h1>
            <p
              className="text-2xl w-fit text-gray-600
              rounded-2xl "
            >
              Full-Stack Developer
            </p>
          </div>
          <div className="h-full w-[60%] bg-zinc-200 rounded-xl">
            <img className="w-full h-full rounded-4xl "></img>
          </div>
        </div>
      </Card>
    );
  },
);
