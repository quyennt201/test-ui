import { PlusIcon } from "lucide-react";
import Progress from "./Progress";

export default function GoalsCard() {
  return (
    <div className="space-y-1 w-full h-full flex flex-col relative">
      <h3 className="text-2xl font-medium">My goals</h3>
      <div className="w-full flex-1 glass px-4 py-6 grid grid-cols-2 gap-4">
        <GoalItem progress={60} title="Travel Abroad" />
        <GoalItem progress={89} title="Real Estate" />
      </div>

      <div className="absolute -bottom-2 left-0 size-7 bg-white/90 rounded-full flex items-center justify-center">
        <PlusIcon className="size-5 text-black" />
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
