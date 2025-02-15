import React from 'react';

const Main2 = () => {
  const aboutData = [
    {
      title: 'About Us',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales vulputate arcu. Erat mi dolor vitae in. Consequat pellentesque sed vitae purus erat id in pretium. Sed cras fringilla lacinia tortor diam pretium. Ipsum amet faucibus tortor vulputate elementum tortor et dis pharetra. Rutrum amet diam pretium imperdiet elit sit.',
        'Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales vulputate arcu. Erat mi dolor vitae in. Consequat pellentesque sed vitae purus erat id in pretium. Sed cras fringilla lacinia tortor diam pretium. Ipsum amet faucibus tortor vulputate elementum tortor et dis pharetra. Rutrum amet diam pretium imperdiet elit sit. Lorem ipsum dolor sit amet consectetur.',
      ],
      buttonText: 'Know More',
      imgSrc: 'images/Rectangle 123.png',
    },
  ];

  return (
    <>
      <main className="w-full px-[27px]">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="max-w-[1140px] gap-6 lg:py-[152px] md:py-[100px] py-[50px] justify-center lg:justify-between flex m-auto flex-wrap-reverse"
          >
            {/* Text Section */}
            <div className="xl:max-w-[558px] lg:max-w-[450px] flex flex-col flex-wrap md:gap-5 gap-3 md:py-4 xl:py-0">
              <div className="md:text-[48px] text-[30px] font-bold leading-[52.8px] text-center lg:text-left">
                {item.title}
              </div>
              {item.paragraphs.map((paragraph, paraIndex) => (
                <div
                  key={paraIndex}
                  className="md:leading-[24px] md:text-[16px] text-[14px] opacity-[80%]"
                >
                  <p className="text-justify">{paragraph}</p>
                </div>
              ))}
              <div>
                <button className="border-[#1AD4D4] hover:bg-[#1AD4D4] hover:text-white border-2 text-[#1AD4D4] font-semibold leading-6 px-3 md:px-[40px] py-1 md:py-[18px] lg:mt-[10px] rounded-[6px]">
                  {item.buttonText}
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="xl:max-w-[558px] lg:max-w-[450px] md:max-w-[400px] max-w-[300px] max-h-full flex items-center">
              <img src={item.imgSrc} alt="About Us"/>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Main2;
