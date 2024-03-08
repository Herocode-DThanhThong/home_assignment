import React from "react";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="px-12 sm:px-[120px] py-8 shadow-md w-full">
      <div className="flex items-center flex-col gap-8 lg:justify-between lg:flex-row lg:gap-0">
        <img src={Logo} alt="" />
        <ul className="flex flex-wrap gap-6 justify-center sm:gap-8 lg:gap-[70px] items-center">
          <li className="cursor-pointer font-semibold text-sm text-[#333333]">
            Home
          </li>
          <li className="cursor-pointer font-semibold text-sm text-[#333333]">
            Services
          </li>
          <li className="cursor-pointer font-semibold text-sm text-[#333333]">
            Doctors
          </li>
          <li className="cursor-pointer font-semibold text-sm text-[#333333]">
            Products
          </li>
          <li className="cursor-pointer font-semibold text-sm text-[#333333]">
            Gallery
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
