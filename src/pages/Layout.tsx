/** 13-Setting Up Routing */

import { Outlet } from "react-router-dom";
import NavBar from "../components/6-NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
