import Link from "next/link";
import { Accordion } from "react-bootstrap";
import Menu from "./Menu";
import Image from "next/image";
import { AxioLogoWebp } from "@/src/assets";
const Nav = ({ singleMenu }) => {
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link legacyBehavior href="/">
              <Image
                src={AxioLogoWebp}
                alt="Logo Axios Click"
                title="Logo Axios Click"
              />
            </Link>
          </div>
        </div>
        <Menu singleMenu={singleMenu} />
      </Accordion>
    </nav>
  );
};
export default Nav;
