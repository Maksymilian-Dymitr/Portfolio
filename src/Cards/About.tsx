import { Card } from "@/Components/card";
import { GitHubCalendar } from "react-github-calendar";
import { forwardRef } from "react";
import { type Props } from "@/types";
import { TextTag } from "@/Components/textTag";
import { Paragraph } from "@/Components/paragraph";
import { Carusel } from "@/Components/carusel";

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
          className={`w-full h-full flex flex-col xl:flex-row transition-all duration-700
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="xl:px-10 px-5 pt-12 xl:w-[40%] w-full flex flex-col">
            <div className="flex flex-col gap-4 text-zinc-500 xl:pt-10 pt-4">
              <div className="grid xl:grid-cols-1 grid-cols-2 gap-3">
                <TextTag
                  title="Age"
                  description={`${getAge(new Date("2004-01-24"))} years old`}
                />
                <TextTag title="Location" description="Sweden, Stockholm" />
                <TextTag
                  title="Focus"
                  description="Perfecting Full Stack Knowledge"
                />
                {/*<TextTag title="Interests" description=" AI, Automation & System Design " /> */}
                <TextTag
                  title="Experience"
                  description="  Chas Academy, Personal Projects "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center xl:gap-10 gap-2 justify-center">
            <Paragraph />
            <Carusel />
            <div
              className="w-full xl:w-[47vw] p-6 bg-[#1e1e1f] rounded-3xl shadow-xl
              border border-white/5 overflow-hidden"
            >
              <div className="w-max scale-[0.7] sm:scale-[] md:scale-100 origin-left">
                <GitHubCalendar
                  username="Maksymilian-Dymitr"
                  showColorLegend={false}
                  showMonthLabels={false}
                  showTotalCount={false}
                  theme={{
                    dark: [
                      "#101010",
                      "#2a2a2a",
                      "#4c1d95",
                      "#6d28d9",
                      "#7c3aed",
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  },
);
