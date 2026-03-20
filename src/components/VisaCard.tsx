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
    <div className="relative group">
      <div className="absolute size-[96%] rounded-2xl left-1/2 -translate-x-1/2 -bottom-1 bg-sky-400 z-0 blur-[1px] group-hover:-bottom-3 group-hover:blur-[0.5px] transition-all shadow duration-300 opacity-50" />
      <div className="absolute size-[92%] rounded-2xl left-1/2 -translate-x-1/2 -bottom-2 bg-purple-500 -z-10 blur-[1px] group-hover:-bottom-6 group-hover:blur-[0.5px] transition-all duration-300 opacity-50" />

      <div className="relative h-44 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">

        <div className="absolute inset-0 bg-linear-to-r from-[#ffcc33] via-[#ff6633] to-[#ff3333] brightness-80 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500" />
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
    </div>
  );
}
