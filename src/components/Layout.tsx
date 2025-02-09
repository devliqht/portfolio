import { Outlet } from "react-router-dom";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";

const Layout = () => {
  return (
    <div className="p-1">
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;