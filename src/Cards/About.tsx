import { Card } from "@/Components/card";
import { GitHubCalendar } from "react-github-calendar";
import { forwardRef, useEffect } from "react";
import { type Props } from "@/types";
import { contactMedia } from "@/icons";
import * as icons from "developer-icons";

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
                <p className="text-white text-lg">Chas Academy, Personal Projects</p>
              </div>

              <div className="p-4 bg-[#1e1e1f] rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-sm">Location</p>
                <p className="text-white text-lg">Sweden, Stockholm</p>
              </div>

              <div className="pt-31">
                <div
                  className="
                  p-4 bg-[#1e1e1f] rounded-2xl border border-white/5
                  flex justify-around"
                >
                  <button
                    className=" ring-white rounded-2xl
                    hover:ring-3 duration-500"
                    onClick={() => {
                      window.open("https://github.com/Maksymilian-Dymitr");
                    }}
                  >
                    <img
                      className="invert size-18 cursor-pointer
                      "
                      src={contactMedia.github}
                    />
                  </button>
                  <a
                    href="mailto:maksymilian.dymitr@gmail.com"
                    className=" ring-white rounded-2xl
                    hover:ring-3 duration-500"
                  >
                    <img
                      className="invert size-18 cursor-pointer"
                      src={contactMedia.email}
                    />
                  </a>
                  <button
                    className=" ring-white rounded-xl
                    hover:ring-5 duration-500"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/maksymilian-dymitr/",
                      );
                    }}
                  >
                    <img
                      className="invert size-18 cursor-pointer"
                      src={contactMedia.linkedin}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center gap-10 justify-center">
            <div
              className="p-8 bg-[#1e1e1f]/80 rounded-3xl border border-white/5
              w-[47vw] h-[35vh]"
            >
              <p className="text-xl text-zinc-300 leading-relaxed  ">
                I’m a Jr. Full-stack developer focused on well-structured
                  web applications. I enjoy working across the
                  entire stack from UI to backend systems and architecture
                  with a focus on clean design and reliable performance.
                  My current focus is deepening my
                  understanding all across the stack and exploring how AI can be
                  integrated into real-world applications to build smarter and
                  more efficient tools.
              </p>

              <p className="text-xl text-zinc-400 mt-10">
                I am currently studying Fullstack Open Source at Chas Academy,
                  where I'm building a great foundation for my web development journey.
                  I am focused on grasping new knowledge about systems to create efficient,
                  maintainable applications.
              </p>
            </div>

            <div
              className="overflow-hidden w-[47vw] p-6
              bg-[#1e1e1f]/80 rounded-3xl border border-white/5"
            >
              <div
                className="flex w-max gap-6  animate-[marquee_50s_linear_infinite]
                    "
              >
                <icons.React />
                <icons.CSharp />
                <icons.TypeScript />
                <icons.BunJs />
                <icons.Python />
                <icons.TailwindCSS />
                <icons.Docker />
                <icons.NodeJs />
                <icons.PostgreSQL />
                <icons.MongoDB />

                <icons.React />
                <icons.CSharp />
                <icons.TypeScript />
                <icons.BunJs />
                <icons.Python />
                <icons.TailwindCSS />
                <icons.Docker />
                <icons.NodeJs />
                <icons.PostgreSQL />
                <icons.MongoDB />
              </div>
              <style>{`
                    @keyframes marquee {
                      0% {
                        transform: translateX(-50%);
                      }
                      100% {
                        transform: translateX(0%);
                      }
                    }
                  `}</style>
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
