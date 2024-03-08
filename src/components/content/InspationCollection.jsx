import React from "react";
import FirstItemCollection from "../../assets/collection-1.png";
import SecondItemCollection from "../../assets/collection-2.png";
import ThirdItemCollection from "../../assets/collection-3.png";

const InspationCollection = () => {
  return (
    <div className="py-[60px] px-16 sm:px-[148px]">
      <h1 className="text-[32px] text-[#333333] font-bold text-center">
        Inspiration Collection
      </h1>
      <p className="text-center text-[20px] text-[#666666] mt-[20px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center flex-wrap justify-center md:grid md:grid-cols-3 row-span-1 gap-10">
        <div className="md:pt-10">
          <img src={FirstItemCollection} alt="" />
        </div>
        <div className="md:pb-10">
          <img src={SecondItemCollection} alt="" />
        </div>
        <div className="md:pt-10">
          <img src={ThirdItemCollection} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InspationCollection;
