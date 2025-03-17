import links from "@/config/links";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";

const NavDesk = () => {
  return (
    <nav className="hidden xl:flex items-center gap-12">
      <ul className="flex items-center">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 after:text-accent last:after:content-none"
          >
            <ScrollLink
              spy
              smooth
              to={link.path}
              className="cursor-pointer"
              activeClass="text-accent"
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
      {/* btn */}
      <button
        type="button"
        className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] bg-white flex items-center justify-between min-w-[200px] group cursor-pointer"
      >
        <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
          Get a quote
        </div>
        <div className="w-11 h-11 bg-primary flex items-center justify-center">
          <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
        </div>
      </button>
    </nav>
  );
};

export default NavDesk;
