import React from "react";
import FirstItemWork from "../../assets/work-1.png";
import SecondItemWork from "../../assets/work-2.png";
import ThirdItemWork from "../../assets/work-3.png";
const HowItWorks = () => {
  return (
    <div className="py-[60px] px-16 sm:px-[128px]">
      <h1 className="text-[32px] text-[#333333] font-bold text-center">
        How It Works
      </h1>
      <p className="text-center text-[20px] text-[#666666] mt-[20px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-wrap items-center justify-center xl:grid xl:grid-cols-3 row-span-1 gap-5">
        <div className="flex flex-col items-center">
          <div className="w-[381px] h-[445px] overflow-hidden">
            <img src={FirstItemWork} alt="" className="rounded-md" />
            <div className="mx-auto w-[90px] h-[90px] rounded-tl-full  rounded-tr-full p-[15px] -translate-y-1/2 bg-white">
              <div className="bg-black rounded-full w-[60px] h-[60px]">
                <p className="font-bold text-2xl text-white text-center p-3">
                  1.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center font-semibold text-2xl mt-[30px]">
            Purchase Securely
          </p>
          <p className="text-center text-[16px] text-[#666666] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[381px] h-[445px] overflow-hidden">
            <img src={SecondItemWork} alt="" className="rounded-md" />
            <div className="mx-auto w-[90px] h-[90px] rounded-tl-full  rounded-tr-full p-[15px] -translate-y-1/2 bg-white">
              <div className="bg-black rounded-full w-[60px] h-[60px]">
                <p className="font-bold text-2xl text-white text-center p-3">
                  2.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center font-semibold text-2xl mt-[30px]">
            Ships From Warehouse
          </p>
          <p className="text-center text-[16px] text-[#666666] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[381px] h-[445px] overflow-hidden">
            <img src={ThirdItemWork} alt="" className="rounded-md" />
            <div className="mx-auto w-[90px] h-[90px] rounded-tl-full  rounded-tr-full p-[15px] -translate-y-1/2 bg-white">
              <div className="bg-black rounded-full w-[60px] h-[60px]">
                <p className="font-bold text-2xl text-white text-center p-3">
                  3.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center font-semibold text-2xl mt-[30px]">
            Style Your Room
          </p>
          <p className="text-center text-[16px] text-[#666666] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
