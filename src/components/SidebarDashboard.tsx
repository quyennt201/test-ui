import UserProfile from "./UserProfile";
import MonthTransaction from "./MonthTransaction";

export default function SidebarDashboard() {
  return (
    <div className="w-[360px] flex flex-col gap-8">
      <UserProfile />
      <MonthTransaction />
    </div>
  );
}
