import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}