import TopStats from "./TopStats";
import StatisticsSection from "./StatisticsSection";
import GoalsCard from "./GoalsCard";
import BusinessCard from "./BusinessCard";

export default function MainDashboard() {
  return (
    <div className="lg:flex-1 w-full overflow-y-auto custom-scrollbar lg:h-full shrink-0 flex flex-col gap-8 pb-2">
      <h1 className="text-4xl font-bold">My Dashboard</h1>
      <TopStats />
      <StatisticsSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GoalsCard />
        <BusinessCard />
      </div>
    </div>
  );
}
