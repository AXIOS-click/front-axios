import Link from "next/link";

import { FC, Fragment } from "react";

interface MenuProps {
  singleMenu?: boolean;
}

const Menu: FC<MenuProps> = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li className="dropdown">
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
    </ul>
  );
};
