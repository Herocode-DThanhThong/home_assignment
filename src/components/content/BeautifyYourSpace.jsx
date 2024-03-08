import React from "react";
import GirlImage from "../../assets/girl.png";
import EllipseImage from "../../assets/ellipse-green.png";

const BeautifyYourSpace = () => {
  return (
    <div className="lg:flex-row flex-col py-[60px] flex items-center gap-14 bg-[#F2F5FF] relative">
      <div className="flex-1 lg:pl-[160px]">
        <h1 className="lg:text-left text-center text-[32px] text-[#333333] font-bold">
          Beautify Your Space
        </h1>
        <p className="lg:text-left text-center mt-5 mb-[30px] text-[20px]">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="lg:block flex justify-center">
          <button className="bg-[#054C73] py-[24px] px-[57px] uppercase text-white rounded-full">
            learn more
          </button>
        </div>
      </div>
      <div className="flex justify-between lg:pr-[200px] lg:block">
        <div className="bg-gray-300 z-10 relative">
          <img src={GirlImage} alt="" />
        </div>
        <div className="absolute top-1/2 bottom-1/2 lg:top-[250px] lg:bottom-[250px] right-[135px] z-[1]">
          <img src={EllipseImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeautifyYourSpace;
