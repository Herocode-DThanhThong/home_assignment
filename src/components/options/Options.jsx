import React from "react";
import FreeDelivery from "../../assets/option-1.svg";
import Support from "../../assets/option-2.svg";
import Authentic from "../../assets/option-3.svg";

const Options = () => {
  return (
    <div className="py-12 px-[120px] grid grid-cols-3 gap-32 bg-[#F2F5FF]">
      <div className="flex gap-4">
        <img className="w-[55px] h-[55px]" src={FreeDelivery} alt="" />
        <div>
          <h1 className="font-semibold text-2xl">Free Delivery</h1>
          <p className="text-[16px] text-[#333333]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="w-[55px] h-[55px]" src={Support} alt="" />
        <div>
          <h1 className="font-semibold text-2xl">Support 24/7</h1>
          <p className="text-[16px] text-[#333333]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="w-[55px] h-[55px]" src={Authentic} alt="" />
        <div>
          <h1 className="font-semibold text-2xl">100% Authentic</h1>
          <p className="text-[16px] text-[#333333]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;
