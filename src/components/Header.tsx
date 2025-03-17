"use client";
import Logo from "./Logo";
import NavDesk from "./nav/NavDesk";
import NavMobile from "./nav/NavMobile";

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Logo />

        {/* nav & btn */}
        <NavDesk />

        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
