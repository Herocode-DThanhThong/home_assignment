import React from "react";
import GirlImage from "../../assets/girl.png";
import EllipseImage from "../../assets/ellipse-green.png";

const BeautifyYourSpace = () => {
  return (
    <div className="py-[60px] flex items-center gap-14 bg-[#F2F5FF] relative">
      <div className="flex-1 pl-[160px]">
        <h1 className="text-[32px] text-[#333333] font-bold">
          Beautify Your Space
        </h1>
        <p className="mt-5 mb-[30px] text-[20px]">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button className="bg-[#054C73] py-[24px] px-[57px] uppercase text-white rounded-full">
          learn more
        </button>
      </div>
      <div className="pr-[200px]">
        <div className="bg-gray-300 z-10 relative">
          <img src={GirlImage} alt="" />
        </div>
        <div className="absolute top-[250px] bottom-[250px] right-[135px] z-[1]">
          <img src={EllipseImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeautifyYourSpace;
