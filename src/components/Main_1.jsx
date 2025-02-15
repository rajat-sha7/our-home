import React from "react";

const Main1 = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <main className="max-w-[1440px]  w-full flex flex-col md:py-8 lg:py-0  md:flex-row justify-center items-center md:justify-between">

          {/* Text Section */}
          <div className="flex flex-col px-4 xl:pl-[150px] md:pl-[50px] py-8 md:py-0 w-full md:w-1/2 bg-cover bg-center bg-[url(/images/Rectangle 138.png)] lg:bg-none">
            <div className="flex flex-col justify-center gap-2 bg-white bg-opacity-80 p-4 md:p-0">
              <p className="text-[#060101] opacity-[40%] leading-[36px] font-medium text-center md:text-left">
                Home Buying Will Never Be The Same
              </p>
              <h1 className="text-[32px] md:text-[45px] lg:text-[64px] leading-[36px] md:leading-[70.4px] font-bold text-center md:text-left">
                Find Your Dream
              </h1>

              <div className="flex gap-2 items-center justify-center md:justify-start">
                <span className="text-[32px] md:text-[45px] lg:text-[64px] leading-[36px] md:leading-[70.4px] font-bold">
                  Home
                </span>
                <img
                  className="w-[90px] h-[33px] md:w-[181px] md:h-[66.15px] rounded-[36px] md:rounded-[72.69px] border-[0.75px] md:border-[1.45px] border-[#BAF2F2]"
                  src="/images/Rectangle 368.png"
                  alt="Home"
                />
              </div>

              <p className="leading-6 text-[16px] opacity-[80%] font-normal text-center md:text-left">
                India's first consumer-centric real estate buying platform
              </p>

              <div className="flex md:gap-[16px] gap-[10px]  md:mt-[50px] mt-[20px] justify-center md:justify-start">
                <button className="bg-[#1AD4D4] hover:bg-[#3c7b7b] text-white md:text-[16px] text-[14px] font-semibold leading-6 px-4 md:px-[40px] py-2 md:py-[18px] rounded-[6px]">
                  Know more
                </button>
                <button className="border-[#1AD4D4] hover:bg-[#3c7b7b] hover:text-white border-2 text-[#1AD4D4] font-semibold leading-6 px-4 md:px-[40px] py-2 md:py-[18px] rounded-[6px]">
                  See works
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block relative lg:flex items-center justify-center w-full md:w-[39%] lg:w-[50%]">
            <div className="absolute top-[75%] right-[70%]">
              <img src="images/f.png" alt="" />
            </div>
            <img
              className="w-full lg:max-w-[712px] md:py-[73px] m-auto h-auto"
              src="/images/Rectangle 138.png"
              alt="Real Estate"
            />
          </div>

        </main>
      </div>
    </>
  );
};

export default Main1;
