import Header from "@/src/layout/Header/Header";
import SideBar from "@/src/layout/Header/SideBar";
import Footer from "@/src/layout/footer/Footer";
import React, { FC } from "react";

interface LayoutProps {
  children: any;
  header?: number;
  footer?: number;
  singleMenu?: boolean;
  dark?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, header, footer, singleMenu, dark }) => {
  return (
    <div className="page-wrapper">
      {/* <Header header={header} singleMenu={singleMenu} dark={dark} /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
