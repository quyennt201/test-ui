import { PlusIcon } from "lucide-react";
import Progress from "./Progress";
import { useState } from "react";
import clsx from "clsx";

export default function GoalsCard() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="space-y-1 w-full h-full flex flex-col relative">
      <h3 className="text-2xl font-medium">My goals</h3>
      <div className="w-full flex-1 glass px-4 py-6 grid grid-cols-2 gap-4 transition-transform duration-400">
        <GoalItem progress={60} title="Travel Abroad" />
        <GoalItem progress={89} title="Real Estate" />
        <div
          className={clsx(
            "col-span-2 overflow-hidden transition-all duration-300",
            isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
          )}
        >
          <div className="h-20 bg-white/10 rounded-xl" />
        </div>
      </div>

      <div onClick={() => setIsOpen(!isOpen)} className="absolute -bottom-2 z-10 left-0 size-7 cursor-pointer transition-transform duration-100 bg-white/90 rounded-full flex items-center justify-center">
        <PlusIcon className={clsx("size-5 text-black transition-transform duration-100", isOpen ? "rotate-45 scale-125" : "hover:scale-125 transition-transform duration-100")} />
      </div>
    </div>
  );
}

function GoalItem({ progress, title }: { progress: number; title: string }) {
  return (
    <div className="p-6 w-full glass flex flex-col gap-2 items-center justify-center">
      <p className="text-2xl font-bold">{progress}%</p>
      <Progress progress={progress} />
      <p className="text-white/70 text-sm">{title}</p>
    </div>
  );
}
