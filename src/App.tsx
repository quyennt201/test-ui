import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-6 overflow-hidden">
      <DashboardPage />

      <div className="h-screen w-full fixed inset-0">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230617/pngtree-orange-and-black-gradient-background-with-3d-rendered-abstract-waves-image_3620350.jpg"
          alt=""
          className="size-full object-cover brightness-50"
        />
      </div>
    </div>
  );
}
