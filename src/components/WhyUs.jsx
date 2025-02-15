import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      imgSrc: 'images/1.png',
      title1: 'Exclusive',
      title2: 'Property',
      link: '#exclusive-property',
    },
    {
      imgSrc: 'images/2.png',
      title1: 'VirtualTour',
      title2: '& Site',
      link: '#virtual-tour',
    },
    {
      imgSrc: 'images/3.png',
      title1: '0 %',
      title2: 'Brokerage',
      link: '#brokerage',
    },
    {
      imgSrc: 'images/4.png',
      title1: 'Constant',
      title2: 'Communication',
      link: '#communication',
    },
    {
      imgSrc: 'images/5.png',
      title1: 'Online',
      title2: 'Booking',
      link: '#online-booking',
    },
  ];

  return (
    <>
      <main className="w-full bg-[#BAF2F2] py-[43px]">
        <div className="max-w-[1140px] m-auto flex flex-col gap-[32px] items-center">
          <div className="text-center">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[48px] sm:leading-[56px] md:leading-[64px] font-bold">
              Why US?
            </h1>
          </div>

          <div className="flex lg:gap-[31px] gap-5 justify-center px-2 xl:px-0 flex-wrap">
            {reasons.map((reason, index) => (
              <a
                key={index}
                href={reason.link}
                className="bg-white md:max-w-[203px] max-w-[350px] min-w-[200px] md:max-h-[181px] max-h-[150px] md:px-[48px] rounded-[16px] py-[20px] flex flex-col items-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="md:pb-[32px] pb-1">
                  <img src={reason.imgSrc} className="max-w-[40px] max-h-[40px]" alt={reason.title1} />
                </div>
                <div>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[28px] lg:leading-[33.6px]">
                    {reason.title1}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[28px] lg:leading-[33.6px]">
                    {reason.title2}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default WhyUs;
