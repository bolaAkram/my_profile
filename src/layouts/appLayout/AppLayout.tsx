import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AppLayout = () => {
  return (
    <div className="bg-[#0F172B] min-h-screen text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
