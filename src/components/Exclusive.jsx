import React from 'react'

const Exclusive = () => {
  return (
    <>
      <div className='w-full lg:py-[152px]  md:py-[110px] py-[80px]'>

        <div className='max-w-[1140px] m-auto px-[22px]'>

          <div className="flex justify-between items-center">
            <div className='flex flex-col md:flex-row md:gap-3'>
              <h1 className="font-bold lg:text-[48px] md:text-[38px] text-[30px] lg:leading-[52.8px]">Exclusive </h1>
              <h1 className="font-bold lg:text-[48px] md:text-[38px] text-[30px] lg:leading-[52.8px]">Properties </h1>
            </div>
            <a href="#" className="text-[#1AD4D4] font-bold leading-[24px] text-[16px] hover:text-[#3c7b7b]">Sell All</a>
          </div>


          <main className='mt-[52px] flex-wrap justify-center md:flex-nowrap  md:flex-row flex gap-6'>

            <div className='flex flex-col gap-[24px]'>

              <div className='relative  group overflow-hidden'>
                <img src="images/R01.png" className='md:w-full w-[600px] bg-black bg-opacity-0 hover:bg-opacity-30 md:h-auto h-[250px] transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute bottom-0 left-0 right-0  p-4  '>
                  <h1 className='font-bold  md:text-[30px] lg:text-[36px] text-[25px] lg:leading-[46.8px] text-[#F5F5F5]'>Passcode Big Life</h1>
                  <h1 className='font-bold   md:text-[30px] lg:text-[36px] text-[25px] lg:leading-[46.8px] text-[#F5F5F5]'>City</h1>
                  <button className="border-white text-[14px] md:text-[16px] hover:bg-[#cae6e638] hover:text-white border-2 text-white md:font-semibold leading-6 mt-4 px-3 lg:px-[40px]  md:px-[27px]  py-1 lg:py-[18px] md:py-[12px] rounded-[6px]">
                    Know More
                  </button>
                </div>
              </div>
              


              <div className='relative group overflow-hidden'>
                <img src="images/R02.png" className='md:w-full w-[600px] bg-black bg-opacity-0 hover:bg-opacity-30  md:h-auto h-[230px] transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h1 className='font-bold  md:text-[30px] lg:text-[36px] text-[25px] lg:leading-[46.8px] text-[#F5F5F5]'>Passcode Bi Life City</h1>
                  <button className="border-white text-[14px] md:text-[16px] hover:bg-[#cae6e638] hover:text-white border-2 text-white md:font-semibold leading-6 mt-4 px-3 lg:px-[40px]  md:px-[27px]  py-1 lg:py-[18px] md:py-[12px] rounded-[6px]">
                    Know More
                  </button>
                </div>
              </div>


            </div>

            <div className='flex flex-col gap-6'>

              <div className='relative group overflow-hidden'>
                <img src="images/R02.png" className='md:w-full w-[600px] bg-black bg-opacity-0 hover:bg-opacity-30  md:h-auto h-[230px] transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute bottom-0 left-0 right-0 p-4  '>
                  <h1 className='font-bold  md:text-[30px] lg:text-[36px] text-[25px] lg:leading-[46.8px] text-[#F5F5F5]'>Passcode Bi Life City</h1>
                  <button className="border-white text-[14px] md:text-[16px] hover:bg-[#cae6e638] hover:text-white border-2 text-white md:font-semibold leading-6 mt-4 px-3 lg:px-[40px]  md:px-[27px]  py-1 lg:py-[18px] md:py-[12px] rounded-[6px]">
                    Know More
                  </button>
                </div>
              </div>


              <div className='relative group overflow-hidden'>
                <img src="images/R01.png" className='md:w-full w-[600px] bg-black bg-opacity-0 hover:bg-opacity-30  md:h-auto h-[250px] transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute bottom-0 left-0 right-0 p-4 '>
                  <h1 className='font-bold md:text-[30px] lg:text-[36px] text-[25px] lg:leading-[46.8px] text-[#F5F5F5]'>Passcode Big Life</h1>
                  <h1 className='font-bold md:text-[30px] lg:text-[36px] text-[25px] lg:leading-[46.8px] text-[#F5F5F5]'>City</h1>
                  <button className="border-white text-[14px] md:text-[16px] hover:bg-[#cae6e638] hover:text-white border-2 text-white md:font-semibold leading-6 mt-4 px-3 lg:px-[40px]  md:px-[27px]  py-1 lg:py-[18px] md:py-[12px] rounded-[6px]">
                    Know More
                  </button>
                </div>
              </div>

            </div>

          </main>


        </div>
      </div>
    </>
  )
}

export default Exclusive

