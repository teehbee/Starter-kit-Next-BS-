"use-client";

import Link from "next/link";
import { NavLink } from "@/components/reusable";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <nav role="navigation">
      <div className="container-fluid d-flex justify-content-between nav-container">
        <Link href="/" aria-label="Link til forsiden">
          Logo
        </Link>
        <div className="nav-desktop-and-menu-toggle d-flex align-items-center">
          <div className="nav-desktop-links d-none d-lg-block">
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/">
              Forside
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/underside-1">
              Underside 1
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/underside-2">
              Underside 2
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/underside-3">
              Underside 3
            </NavLink>
          </div>
          <div onClick={onMenuToggle} className="d-block d-lg-none menu-toggle" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
