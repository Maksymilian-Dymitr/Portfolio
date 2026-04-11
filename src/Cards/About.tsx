import { Card } from "@/Components/card";
import { GitHubCalendar } from "react-github-calendar";
import { forwardRef, useEffect } from "react";
import { type Props } from "@/types";
import githubImg from ".././img/github.png";
import emailImg from ".././img/email.png";
import linkedinImg from ".././img/linkedin.png";

export const About = forwardRef<HTMLDivElement, Props>(
  ({ isVisible, id }, aboutRef) => {
    const getAge = (bDay: Date) => {
      const today = new Date();
      const age = today.getFullYear() - bDay.getFullYear();
      const m = today.getMonth() - bDay.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < bDay.getDate())) {
        return age - 1;
      }
      return age;
    };
    return (
      <Card>
        <div
          ref={aboutRef}
          id={id}
          className={`w-full h-full flex  transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="pl-10 pt-10 w-[40%] flex flex-col">
            <h1 className=" text-6xl font-bold">About</h1>

            <div
              className="flex flex-col gap-4 text-zinc-500
               text-3xl pt-10"
            >
              <div className="p-4 bg-[#1e1e1f] rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-sm">Age</p>
                <p className="text-white text-lg">
                  {getAge(new Date("2004-01-24"))} years old
                </p>
              </div>
              <div className="p-4 bg-[#1e1e1f] rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-sm">Focus</p>
                <p className="text-white text-lg">
                  Perfecting Full Stack Knowledge
                </p>
              </div>

              <div className="p-4 bg-[#1e1e1f] rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-sm">Interest</p>
                <p className="text-white text-lg">
                  AI, Automation & System Design
                </p>
              </div>

              <div className="p-4 bg-[#1e1e1f] rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-sm">Experience</p>
                <p className="text-white text-lg">Full Stack Projects</p>
              </div>
              
              
              <div className="pt-60">
                
              <div
                className="
                  p-4 bg-[#1e1e1f] rounded-2xl border border-white/5
                  flex justify-around"
              >
                <button
                  onClick={() => {
                    window.open("https://github.com/Maksymilian-Dymitr");
                  }}
                >
                  <img
                    className="invert size-18 cursor-pointer"
                    src={githubImg}
                  />
                </button>
                <a href="mailto:maksymilian.dymitr@gmail.com">
                  <img
                    className="invert size-18 cursor-pointer"
                    src={emailImg}
                  />
                </a>
                <button
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/maksymilian-dymitr/",
                    );
                  }}
                >
                  <img
                    className="invert size-18 cursor-pointer"
                    src={linkedinImg}
                  />
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className="p-10 flex flex-col w-full items-center gap-10 ">
            <div className="p-8 bg-[#1e1e1f]/80 rounded-3xl border border-white/5">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I build efficient and scalable applications across the full
                stack, focusing on clean design and reliable systems.
              </p>

              <p className="text-lg text-zinc-400 mt-4">
                Recently, I’ve been exploring AI, system architecture and
                creating tools that solve real-world problems.
              </p>
            </div>
            <div
              className="p-6 bg-[#1e1e1f] w-[47vw] rounded-3xl
              shadow-xl border border-white/5"
            >
              <GitHubCalendar
                className="w-full"
                username="Maksymilian-Dymitr"
                showColorLegend={false}
                showMonthLabels={false}
                showTotalCount={false}
                theme={{
                  dark: ["#101010", "#2a2a2a", "#4c1d95", "#6d28d9", "#7c3aed"],
                }}
              />
            </div>
          </div>
        </div>
      </Card>
    );
  },
);
