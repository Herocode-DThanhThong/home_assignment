import React from "react";
import FreeDelivery from "../../assets/option-1.svg";
import Support from "../../assets/option-2.svg";
import Authentic from "../../assets/option-3.svg";

const Options = () => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-between items-center py-12 px-8 sm:px-[120px] gap-32 bg-[#F2F5FF]">
      <div className="flex gap-4">
        <img className="w-[70px]" src={FreeDelivery} alt="" />
        <div>
          <h1 className="font-semibold text-2xl text-[#333333]">
            Free Delivery
          </h1>
          <p className="text-[16px] text-[#333333]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="" src={Support} alt="" />
        <div>
          <h1 className="font-semibold text-2xl text-[#333333]">
            Support 24/7
          </h1>
          <p className="text-[16px] text-[#333333]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="" src={Authentic} alt="" />
        <div>
          <h1 className="font-semibold text-2xl text-[#333333]">
            100% Authentic
          </h1>
          <p className="text-[16px] text-[#333333]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;
