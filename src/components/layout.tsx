import { LAYOUTPROPS } from "@/utils/types";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: LAYOUTPROPS) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
