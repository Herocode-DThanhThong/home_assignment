import React from "react";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="px-12 sm:px-[120px] py-8 shadow-md w-full">
      <div className="flex items-center flex-col gap-8 lg:justify-between lg:flex-row lg:gap-0">
        <img src={Logo} alt="" />
        <ul className="flex flex-wrap gap-6 justify-center sm:gap-12 items-center">
          <li className="cursor-pointer font-semibold text-sm">Home</li>
          <li className="cursor-pointer font-semibold text-sm">Services</li>
          <li className="cursor-pointer font-semibold text-sm">Doctors</li>
          <li className="cursor-pointer font-semibold text-sm">Products</li>
          <li className="cursor-pointer font-semibold text-sm">Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
