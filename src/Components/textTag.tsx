type textTagProps = {
  title: string;
  description: string;
};

export function TextTag({ title, description }: textTagProps) {
  return (
    <div
      className="p-4 bg-[#1e1e1f] rounded-xl border border-white/5 w-full
     flex-col  h-fit"
    >
      <p className="text-zinc-400 text-xs sm:text-sm md:text-base ">{title}</p>
      <p className="text-white text-sm sm:text-base md:text-xl">
        {description}
      </p>
    </div>
  );
}
