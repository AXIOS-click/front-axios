import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";
import { FC } from "react";
import { AxioLogoWebp } from "@/src/assets";
import Image from "next/image";

interface DefaultHeaderProps {
  singleMenu?: boolean;
  dark?: boolean;
}

const DefaultHeader: FC<DefaultHeaderProps> = ({ singleMenu, dark }) => {
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper p-2">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <Image
                    src={AxioLogoWebp}
                    alt="Logo Axios Click"
                    title="Logo Axios Click"
                    width={150}
                    height={32}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              {/* <Nav singleMenu={singleMenu} /> */}
              {/* Main Menu End*/}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
