import { DollarSign } from "lucide-react";

interface StatItemProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const statItems: StatItemProps[] = [
  {
    title: "Total Balance",
    value: 789999.56,
    icon: <DollarSign />,
  },
  {
    title: "Earnings",
    value: 999999.56,
    icon: <DollarSign />,
  },
  {
    title: "Expenses",
    value: 39999.67,
    icon: <DollarSign />,
  },
];

export default function TopStats() {
  return (
    <div className="flex sm:flex-nowrap flex-col sm:flex-row gap-4 sm:bg-gray-dark rounded-2xl sm:p-6  p-0 w-full">
      {statItems.map((item) => (
        <StatItem key={item.title} {...item} />
      ))}
    </div>
  );
}

function StatItem({ title, value, icon }: StatItemProps) {
  return (
    <div className="flex flex-1 items-center gap-3 overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 sm:border-none sm:bg-transparent py-2 sm:p-0 px-4 rounded-2xl">
      <div className="size-10 shrink-0 flex items-center justify-center bg-gray-500 rounded-full">
        {icon}
      </div>
      <div className="space-y-0 flex-1 w-full overflow-hidden">
        <p className="text-sm">{title}</p>
        <p className="text-xl font-semibold truncate">
          $
          {value
            .toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(/,/g, ".")}
        </p>
      </div>
    </div>
  );
}
