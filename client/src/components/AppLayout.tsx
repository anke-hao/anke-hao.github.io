import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./AppLayout.css";

const AppLayout = () => (
  <div className="site-shell">
    <Navbar />
    <main className="site-main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AppLayout;
