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
              className="p-5 text-black
            text-6xl font-bold"
            >
              About Me
            </h1>
          </div>
          <div>
            <GitHubCalendar username="Maksymilian-Dymitr" />
          </div>
        </div>
      </Card>
    );
  },
);
