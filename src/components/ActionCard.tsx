import type { ElementType } from "react";

export default function ActionCard({
  icon: Icon,
  label,
}: {
  icon: ElementType;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95">
        <Icon size={20} className="text-white/80" />
      </button>
      <span className="text-xs text-white/60 font-medium">{label}</span>
    </div>
  );
}
