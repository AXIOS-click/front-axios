import { stickyNav } from "@/src/utils";
import { FC, useEffect } from "react";
import DefaultHeader from "./DefaultHeader";

interface HeaderProps {
  header: number;
  singleMenu?: boolean;
  dark?: boolean;
}

const Header: FC<HeaderProps> = ({ header, singleMenu, dark }) => {
  useEffect(() => {
    stickyNav();
  }, []);
  return <DefaultHeader singleMenu={singleMenu} dark={dark} />;
};
export default Header;
