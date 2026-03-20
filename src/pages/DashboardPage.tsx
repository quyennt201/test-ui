import MainDashboard from "../components/MainDashboard";
import SidebarDashboard from "../components/SidebarDashboard";

export default function DashboardPage() {
  return (
    <div className="rounded-4xl backdrop-blur-md p-10 bg-white/5 border border-white/10 w-full max-w-6xl h-full max-h-[1000px] overflow-y-auto custom-scrollbar flex flex-col lg:flex-row gap-6 relative z-10">
      <MainDashboard />
      <SidebarDashboard />
    </div>
  );
}
