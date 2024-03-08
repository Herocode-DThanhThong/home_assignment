import React from "react";

const Contact = () => {
  return (
    <div className="mt-32 py-[60px] flex items-center flex-col bg-[#F2F5FF] relative">
      <h1 className="text-[32px] text-[#333333] font-bold text-center">
        Join Our Mailing List
      </h1>
      <p className="mt-[10px] mb-[50px] text-center text-[#666666] text-[20px]">
        Sign up to receive inspiration, product updates, <br /> and special
        offers from our team.
      </p>
      <div className="flex justify-center items-center flex-col sm:block sm:w-[486px] relative h-[70px]">
        <input
          type="text"
          className="py-[25px] pl-[25px] w-full h-full rounded-md border border-black text-[#011C42]"
          placeholder="example@gmail.com"
        />
        <button className="py-4 my-1 sm:my-0 rounded-md sm:py-[26px] px-[44px] text-white font-bold text-[16px] sm:absolute top-0 bottom-0 right-0 bg-[#054C73] sm:rounded-tr-md sm:rounded-br-md sm:rounded-tl-none sm:rounded-bl-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
