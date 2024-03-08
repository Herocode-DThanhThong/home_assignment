import React from "react";
import WallDecalBackground from "../../assets/mockup-wall-decal-background.png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={WallDecalBackground} alt="" />
      <div className="lg:absolute lg:w-[643px] lg:top-16 xl:top-[155px] lg:right-[90px] bg-[#DFE9F4] rounded-md pt-[37px] pl-[39px] pr-[45px] pb-[41px] shadow-md">
        <div>
          <p className="lg:text-left text-center text-[#333333] text-shadow font-semibold text-[16px] mb-[20px] tracking-widest filter drop-shadow-2xl">
            New Arrival
          </p>
          <h1 className="lg:text-left text-center text-[52px] text-[#054C73] font-bold">
            Discover Our <br />
            New Collection
          </h1>
          <p className="lg:text-left text-center text-[#333333] mt-2 mb-[30px] text-[18px] leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div className="flex justify-center lg:block">
          <button className="lg:text-left text-center bg-[#054C73] py-[25px] px-[72px] uppercase text-white rounded-full font-bold">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
