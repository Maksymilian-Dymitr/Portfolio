import { Navbar } from "./Components/navbar";
import { Main } from "./Cards/Main";
import { About } from "./Cards/About";
import { Projects } from "./Cards/Projects";

import { useRef } from "react";

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
  
  return (
    <div>
      <div className="min-h-screen bg-zinc-100 ">
        <Navbar
          scrollToMain={scrollToMain}
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects} />

        <li className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <Main ref={mainRef} />
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
        </li>
      </div>
    </div>
  );
}

export default App;
