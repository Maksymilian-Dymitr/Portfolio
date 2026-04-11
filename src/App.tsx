import { Navbar } from "./Components/navbar";
import { Main } from "./Cards/Main";
import { About } from "./Cards/About";
import { Projects } from "./Cards/Projects";

import { useEffect, useRef, useState } from "react";

export function App() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const scrollToMain = () =>
    mainRef.current?.scrollIntoView({ behavior: "smooth" });

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  const [isVisiable, setIsVisable] = useState({
    main: false,
    about: false,
    projects: false,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

            setIsVisable((prev) => ({
              ...prev,
              [id]: entry.isIntersecting,
            }));
        });
      },
      {
        root: containerRef.current,
        threshold: 0.3,
      },
    );
    if (
        !containerRef.current ||
        !mainRef.current ||
        !aboutRef.current ||
        !projectsRef.current
      ) {
        return;
      }
    
    const elements = [
      mainRef.current,
      aboutRef.current,
      projectsRef.current,
    ]

    elements.forEach((el) => observer.observe(el));

    return () => { observer.disconnect(); };
    
  }, []);

  return (
    <div>
      <div className="select-none min-h-screen bg-[#111111]">
        <Navbar
          scrollToMain={scrollToMain}
          isVisibleMain={isVisiable.main}
          scrollToAbout={scrollToAbout}
          isVisibleAbout={isVisiable.about}
          scrollToProjects={scrollToProjects}
          isVisibleProjects={isVisiable.projects}
        />

        <div
          ref={containerRef}
          className="snap-y snap-mandatory overflow-y-scroll h-screen"
        >
          <Main ref={mainRef} isVisible={isVisiable.main} id="main" />
          <About ref={aboutRef} isVisible={isVisiable.about} id="about" />
          <Projects
            ref={projectsRef}
            isVisible={isVisiable.projects}
            id="projects"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
