import React from "react";
import FirstImageShopInstagram from "../../assets/IG-1.jpg";
import SecondImageShopInstagram from "../../assets/IG-2.jpg";
import ThirdImageShopInstagram from "../../assets/IG-3.jpg";
import FourImageShopInstagram from "../../assets/IG-4.jpg";

const Footer = () => {
  return (
    <div className="lg:flex-row flex-col pt-[50px] pb-[90px] px-[120px] bg-[#03344F] flex gap-6">
      <div className="flex-1">
        <h1 className="font-bold text-[24px] text-white">Beauty Care</h1>
        <p className="text-left text-[16px] text-white my-3 leading-10">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <h1 className="font-bold text-[24px] text-white">Follow Us</h1>
      </div>

      <div className="py-1">
        <h1 className="font-bold text-[24px] mb-6 text-white">
          Instagram Shop
        </h1>
        <div className="flex flex-wrap items-center lg:grid lg:grid-cols-4 gap-5">
          <img className="rounded-md" src={FirstImageShopInstagram} alt="" />
          <img className="rounded-md" src={SecondImageShopInstagram} alt="" />
          <img className="rounded-md" src={ThirdImageShopInstagram} alt="" />
          <img className="rounded-md" src={FourImageShopInstagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
