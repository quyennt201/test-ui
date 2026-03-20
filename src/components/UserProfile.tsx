import {
  ArrowDownLeft,
  ArrowRightLeftIcon,
  FileText,
  Plus,
} from "lucide-react";
import ActionCard from "./ActionCard";
import Avatar from "./Avatar";
import VisaCard from "./VisaCard";
import Notification from "./Notification";
import MoreButton from "./MoreButton";

export default function UserProfile() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Notification />
        <MoreButton />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="relative">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&s"
            className="size-20"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-nowrap py-1 px-3 bg-black/50 text-white text-xs rounded-[10px] flex items-center justify-center">
            Exclusive Card
          </div>
        </div>
        <p className="text-white/80 font-lg">Emmanuella Takureea</p>
      </div>

      <div className="flex justify-between px-2">
        <ActionCard icon={ArrowRightLeftIcon} label="Transfer" />
        <ActionCard icon={ArrowDownLeft} label="Receive" />
        <ActionCard icon={FileText} label="Bill" />
        <ActionCard icon={Plus} label="Top up" />
      </div>

      <VisaCard
        name="Emmanuella Takureea"
        expiredDate="09/27"
        totalBalance={74330}
      />
    </div>
  );
}
