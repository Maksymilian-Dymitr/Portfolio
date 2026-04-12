type Props = {
  scrollToMain: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  isVisibleMain: any;
  isVisibleAbout: any;
  isVisibleProjects: any;
};

export function Navbar({
  scrollToMain,
  scrollToAbout,
  scrollToProjects,
  isVisibleAbout,
  isVisibleMain,
  isVisibleProjects,
}: Props) {
  return (
    <div className="flex justify-center ">
      <nav
        className="flex text-2xl justify-around shadow-2xl/100 w-fit h-fit
        rounded-4xl px-3 py-2 mt-3 bg-[#1e1e1f] fixed z-10 font-bold"
      >
        <button
          onClick={scrollToMain}
          className={`px-4 py-2 cursor-pointer hover:text-white rounded-4xl
            ${isVisibleMain ? "text-white" : "text-zinc-400"}`}
          id="main"
        >
          Home
        </button>
        <button
          onClick={scrollToAbout}
          className={`px-4 py-2 cursor-pointer hover:text-white rounded-4xl
            ${isVisibleAbout? "text-white" : "text-zinc-400"}`}
          id="about"
        >
          About
        </button>
        <button
          onClick={scrollToProjects}
          className={`px-4 py-2 cursor-pointer hover:text-white rounded-4xl
            ${isVisibleProjects ? "text-white" : "text-zinc-400"}`}
          id="projects"
        >
          Projects
        </button>
      </nav>
    </div>
  );
}
