import React from "react";
import NavDrawer from "./NavDrawer";

function Layout({ children }) {
  return <NavDrawer>{children}</NavDrawer>;
}

export default Layout;
