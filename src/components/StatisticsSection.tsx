import clsx from "clsx";
import { CheckIcon, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Area,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  XAxis,
} from "recharts";
import ButtonDropdown from "./common/ButtonDropdown";

const chartData = [
  { name: "Jan", value1: 3000, value2: 2000 },
  { name: "Feb", value1: 4500, value2: 2800 },
  { name: "Mar", value1: 3200, value2: 6500 },
  { name: "Apr", value1: 4000, value2: 3500 },
  { name: "May", value1: 5500, value2: 4200 },
  { name: "Jun", value1: 4800, value2: 5800 },
];

export default function StatisticsSection() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-medium">Statistics</h2>
        <SelectTransactionButton />
      </div>
      <StatisticsContent />
    </div>
  );
}

function SelectTransactionButton() {
  const [openSelection, setOpenSelection] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<
    "all" | "income" | "expense"
  >("all");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest(".select-transaction-button")
      ) {
        setOpenSelection(false);
      }
    });
    return () => {
      document.removeEventListener("click", (e) => {
        if (
          e.target instanceof HTMLElement &&
          !e.target.closest(".select-transaction-button")
        ) {
          setOpenSelection(false);
        }
      });
    };
  }, []);

  return (
    <div className="relative select-transaction-button">
      <ButtonDropdown isOpen={openSelection} onOpenChange={setOpenSelection} align="right" trigger={
        <div
          onClick={() => setOpenSelection(true)}
          className="flex items-center gap-2 px-3 py-1 min-w-56 justify-center rounded-full border border-white/60 capitalize"
        >
          {selectedTransaction} Transactions{" "}
          <ChevronDown
            className={clsx(
              "size-4 transition-transform duration-200",
              openSelection ? "rotate-180" : "",
            )}
          />
        </div>
      }>
        <div
          className="h-full overflow-y-auto custom-scrollbar"
        >
          <div
            onClick={() => {
              setSelectedTransaction("all");
              setOpenSelection(false);
            }}
            className="w-full cursor-pointer py-2 px-4 rounded-md hover:bg-white/10 text-sm flex items-center gap-2 justify-start"
          >
            All Transactions
            {selectedTransaction === "all" && <CheckIcon className="size-4" />}
          </div>
          <div
            onClick={() => {
              setSelectedTransaction("income");
              setOpenSelection(false);
            }}
            className="w-full cursor-pointer py-2 px-4 rounded-md hover:bg-white/10 text-sm flex items-center gap-2 justify-start"
          >
            Income Transactions
            {selectedTransaction === "income" && <CheckIcon className="size-4" />}
          </div>
          <div
            onClick={() => {
              setSelectedTransaction("expense");
              setOpenSelection(false);
            }}
            className="w-full cursor-pointer py-2 px-4 rounded-md hover:bg-white/10 text-sm flex items-center gap-2 justify-start"
          >
            Expense Transactions
            {selectedTransaction === "expense" && (
              <CheckIcon className="size-4" />
            )}
          </div>
        </div>
      </ButtonDropdown>


    </div>
  );
}

function StatisticsContent() {
  return (
    <div className="w-full flex-1 bg-white/5 rounded-2xl backdrop-blur-2xl p-8 flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-medium text-lg">Top Contributors</p>
          <p className="text-white/70">
            Top half-year Earning and Expenses sources
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 text-white/70">
            Groceries
            <div className="size-2 rounded-full bg-cyan-400" />
          </div>
          <div className="flex items-center gap-1.5 text-white/70">
            Invest Corporate
            <div className="size-2 rounded-full bg-lime-400" />
          </div>
          <div className="flex items-center gap-1.5 text-white/70">
            Hobbies
            <div className="size-2 rounded-full bg-orange-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "rgba(255,255,255,0.3)",
                fontSize: 11,
                fontWeight: 500,
              }}
              dy={15}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 p-2 rounded-lg shadow-xl">
                      <p className="text-[10px] font-bold text-white">
                        {payload[0]?.value?.toLocaleString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value2"
              stroke="#f97316"
              strokeWidth={3}
              fill="url(#chartGradient)"
              animationDuration={1500}
            />
            <Area
              type="monotone"
              dataKey="value1"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth={2}
              strokeDasharray="6 6"
              fill="transparent"
              animationDuration={1500}
            />
            <ReferenceDot
              x="Mar"
              y={6500}
              r={6}
              fill="#fff"
              stroke="#f97316"
              strokeWidth={3}
              label={{
                position: "top",
                value: "18,256,598",
                fill: "#fff",
                fontSize: 10,
                fontWeight: "bold",
                offset: 10,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
