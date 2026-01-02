import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-[#0F172B] min-h-screen text-white">
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};

export default AppLayout;
