import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

import { FaMoon } from "react-icons/fa";
import useDarkMode from "../../asserts/useDarkMode";

function Navbar({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenuClick() {
    setOpenMenu(!openMenu);
  }
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <nav className="flex item-center ">
      <div className="flex item-center">
        <div className="text-[20px] font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <BsSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-[16px]">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : (
          <>
            <li className="btn-hover">Feature</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 p-8 text-center text-[13px] z-10 bg-purple-400 shadow-md rounded-[8px]">
            <li className="py-[8px] border-b hover:text-pink-300">Feature</li>
            <li className="py-[8px] border-b hover:text-pink-300">Menu</li>
            <li className="py-[8px] border-b hover:text-pink-300">Our Story</li>
            <li className="py-[8px] border-b hover:text-pink-300">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
