import { forwardRef, type ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex justify-center items-center
   w-screen h-screen snap-start
   "
    >
      <div
        className="w-[95%] h-[90%] bg-white rounded-4xl
       overflow-hidden shadow-2xl/100 flex flex-col"
      >
        {children}
      </div>
    </div>
  );
}
