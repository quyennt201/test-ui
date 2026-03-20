import { formatCurrency } from "../lib/ultils";

interface VisaCardProps {
  name: string;
  expiredDate: string;
  totalBalance: number;
}

export default function VisaCard({
  name,
  expiredDate,
  totalBalance,
}: VisaCardProps) {
  return (
    <div className="relative h-44 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
      <div className="absolute inset-0 bg-linear-to-r from-[#ffcc33] via-[#ff6633] to-[#ff3333] opacity-90 group-hover:scale-110 transition-transform duration-700" />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-sm font-bold text-white/90">{name}</span>
          <span className="text-2xl font-black italic tracking-tighter text-white">
            Visa
          </span>
        </div>
        <div className="flex justify-between items-end">
          <div className="space-y-0.5">
            <p className="text-[8px] text-white/50 font-bold uppercase tracking-wider">
              Expired
            </p>
            <p className="text-xs font-bold">{expiredDate}</p>
          </div>
          <div className="text-right space-y-0.5">
            <p className="text-[8px] text-white/50 font-bold uppercase tracking-wider">
              Total Balance
            </p>
            <p className="text-xl font-black">
              ${formatCurrency(totalBalance)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
