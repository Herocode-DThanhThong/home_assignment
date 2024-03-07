import React from "react";
import WallDecalBackground from "../../assets/mockup-wall-decal-background.png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={WallDecalBackground} alt="" />
      <div className="absolute left-[710px] top-[155px] bottom-[151px] right-[90px] w-[643px] h-[443px] bg-[#DFE9F4] rounded-md pt-[37px] pl-[39px] pr-[45px] pb-[41px] shadow-md">
        <div>
          <span className="text-[#333333] text-shadow font-semibold text-[16px] mb-[20px] tracking-widest filter drop-shadow-2xl">
            New Arrival
          </span>
          <h1 className="text-[52px] text-[#054C73] font-bold">
            Discover Our <br />
            New Collection
          </h1>
          <p className="text-[#333333] mt-2 mb-6 text-[18px] leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <button className="bg-[#054C73] py-[25px] px-[72px] uppercase text-white rounded-full font-bold">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
