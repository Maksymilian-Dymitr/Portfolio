import * as icons from "developer-icons";

export function Carusel() {
  return (
    <div className="w-[88vw] xl:w-[47vw] p-4 sm:p-6 xl:p-8 mx-auto">
      <div className="overflow-hidden xl:p-6 p-3
  bg-[#1e1e1f]/80 rounded-3xl border border-white/5"
      >
        <div className="flex w-max gap-6 animate-[marquee_50s_linear_infinite] ">
          <icons.React className="xl:size-20 size-10" />
          <icons.CSharp className="xl:size-20 size-10" />
          <icons.TypeScript className="xl:size-20 size-10" />
          <icons.BunJs className="xl:size-20 size-10" />
          <icons.Python className="xl:size-20 size-10" />
          <icons.TailwindCSS className="xl:size-20 size-10" />
          <icons.Docker className="xl:size-20 size-10" />
          <icons.NodeJs className="xl:size-20 size-10" />
          <icons.PostgreSQL className="xl:size-20 size-10" />
          <icons.MongoDB className="xl:size-20 size-10" />

          <icons.React className="xl:size-20 size-10" />
          <icons.CSharp className="xl:size-20 size-10" />
          <icons.TypeScript className="xl:size-20 size-10" />
          <icons.BunJs className="xl:size-20 size-10" />
          <icons.Python className="xl:size-20 size-10" />
          <icons.TailwindCSS className="xl:size-20 size-10" />
          <icons.Docker className="xl:size-20 size-10" />
          <icons.NodeJs className="xl:size-20 size-10" />
          <icons.PostgreSQL className="xl:size-20 size-10" />
          <icons.MongoDB className="xl:size-20 size-10" />
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
    </div>
  );
}
