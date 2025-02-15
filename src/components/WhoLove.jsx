import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const WhoLove = () => {
    const testimonials = [
        {
            id: 1,
            imgSrc: '/images/girl.png',
            name: 'Dianne Russell',
            position: "CEO, Let's Connect",
            feedback:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            starSrc: '/images/star.png',
        },
        {
            id: 2,
            imgSrc: '/images/boy.png',
            name: 'Pushpa Kumar Arora',
            position: "CEO, Let's Connect",
            feedback:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            starSrc: '/images/star.png',
        },
        {
            id: 3,
            imgSrc: '/images/girl.png',
            name: 'Amanda Smith',
            position: 'Founder, Techies',
            feedback:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu justo vel mauris efficitur viverra at vitae lorem.',
            starSrc: '/images/star.png',
        },
        {
            id: 4,
            imgSrc: '/images/boy.png',
            name: 'John Doe',
            position: 'CTO, Innovators',
            feedback:
                'Proin vel nunc et velit faucibus hendrerit non eget nulla. Morbi quis arcu dictum, faucibus odio vel, molestie arcu.',
            starSrc: '/images/star.png',
        },
    ];

    return (
        <main className="w-full md:py-[110px] py-[80px]">
            <div className="max-w-[1140px] px-[22px] m-auto">
                {/* Heading Section */}
                <div className="flex md:gap-4 flex-col md:pb-[50px]  text-center">
                    <p className="text-[#1AD4D4] font-normal text-base leading-[24px]">
                        TESTIMONIALS
                    </p>
                    <h1 className="md:text-[48px] text-[30px] leading-[52.8px] font-semibold md:font-bold">
                        Folks Who Love Us!
                    </h1>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        768: {
                            slidesPerView: 2, 
                        },
                    }}
                    pagination={{ clickable: true }}
                    navigation ={false}
                    loop={false}
                    className="testimonial-swiper   "
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex relative justify-center items-center w-full md:max-w-[558px] min-h-[400px] max-h-[400px]  mx-auto px-[50px] border-[1px] border-[#BAF2F2] rounded-[16px] bg-white mb-[60px] ">
                                <img
                                    src={testimonial.imgSrc}
                                    className="absolute top-[-3%] w-[100px] lg:top-[-11%] left-3  h-[110px] rounded-full object-cover hidden md:block"
                                    alt={testimonial.name}
                                />
                                <div className="flex  md:pt-[86px] relative  flex-col gap-9 ">
                                    <p className="font-normal leading-[24px] text-[#3D3D3D] text-center">
                                        {testimonial.feedback}
                                    </p>
                                    <hr className="max-w-[456px] border-[1px] border-[#BAF2F2] " />
                                    <div className="flex justify-between pb-[40px] flex-col md:flex-row items-center">
                                        <div>
                                            <h1 className="font-bold leading-[28px] text-[20px]">
                                                {testimonial.name}
                                            </h1>
                                            <p className="text-[#999999] text-[14px] leading-[21.7px]">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                        <img
                                            src={testimonial.starSrc}
                                            className="w-[100px] h-[20px]"
                                            alt="Rating"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
};

export default WhoLove;


