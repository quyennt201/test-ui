import { formatCurrency, formatDate } from "../lib/ultils";
import Avatar from "./Avatar";
import { ArrowRightIcon } from "lucide-react";

interface TransactionItemProps {
  title: string;
  amount: number;
  date: Date;
  name: string;
  avatar?: string;
}

const transactionItems: TransactionItemProps[] = [
  {
    title: "Janunary Salary",
    amount: 22222,
    date: new Date(),
    name: "Akeem Jamiud",
  },
  {
    title: "Febunary Salary",
    amount: 22222,
    date: new Date(),
    name: "Akeem Jamiud",
  },
  {
    title: "March Salary",
    amount: 22222,
    date: new Date(),
    name: "Akeem Jamiud",
  },
  {
    title: "April Salary",
    amount: 22222,
    date: new Date(),
    name: "Akeem Jamiud",
  },
];

export default function MonthTransaction() {
  return (
    <div className="flex flex-col gap-4 flex-1 overflow-hidden">
      <h2 className="text-2xl font-medium">Month Transaction</h2>
      <div className="flex flex-col gap-4 flex-1 overflow-y-auto custom-scrollbar">
        {transactionItems.map((item) => (
          <TransactionItem key={item.title} {...item} />
        ))}
      </div>
      <button className="py-2.5 px-5  group text-white/80 bg-white/5 backdrop-blur-xl rounded-xl flex items-center justify-between gap-2">
        <span>See all transactions</span>
        <span className="size-6 flex items-center justify-center bg-white rounded-full text-black group-hover:translate-x-1 transition-transform duration-100">
          <ArrowRightIcon className="size-4 group-hover:scale-125 transition-transform duration-100" />
        </span>
      </button>
    </div>
  );
}

function TransactionItem({
  title,
  amount,
  date,
  name,
  avatar,
}: TransactionItemProps) {
  return (
    <div className="glass py-3 px-5">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex flex-1 overflow-hidden items-center gap-2">
          <Avatar
            src={
              avatar ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdGxIw_PI6WCH5NriYeGJIGgMwLVorNmMkD9oJEcpmA&s"
            }
          />
          <p className="flex-1 truncate">{name}</p>
        </div>
        <p className="text-sm text-white/70">{title}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-white/70">{formatDate(date)}</p>
        <div className="py-1 px-3 rounded-full bg-primary text-white text-sm">
          ${formatCurrency(amount)}
        </div>
      </div>
    </div>
  );
}
