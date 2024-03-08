import React from "react";
import FirstItemRange from "../../assets/range-1.png";
import SecondItemRange from "../../assets/range-2.png";
import ThirdItemRange from "../../assets/range-3.png";
const BrowseTheRannge = () => {
  return (
    <div className="py-[60px] px-16 sm:px-[128px] border-b border-b-[#D7D6D6]">
      <h1 className="text-[32px] text-[#333333] font-bold text-center">
        Browse The Range
      </h1>
      <p className="text-center text-[20px] text-[#666666] mt-[20px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center flex-wrap justify-center md:grid md:grid-cols-3 row-span-1 gap-5">
        <div>
          <img src={FirstItemRange} alt="" />
          <p className="text-center font-semibold text-2xl mt-[30px]">Dining</p>
        </div>
        <div>
          <img src={SecondItemRange} alt="" />
          <p className="text-center font-semibold text-2xl mt-[30px]">Living</p>
        </div>
        <div>
          <img src={ThirdItemRange} alt="" />
          <p className="text-center font-semibold text-2xl mt-[30px]">
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRannge;
