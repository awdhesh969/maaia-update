import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DesignAndArchitecture from '../../../public/assets/svgs/DesignAndArchitecture';
import Sustainaibilities from '../../../public/assets/svgs/Sustainaibilities';
import Cummunities from '../../../public/assets/svgs/Cummunities';
import CustomerExperience from '../../../public/assets/svgs/CustomerExperience';
import Ethos from '../../../public/assets/svgs/Ethos';
import InvestmentStrategies from '../../../public/assets/svgs/InvestmentStrategies';

// Import required modules

function Slides({ data }) {
    // Create a reference for the swiper instance
    const swiperRef = useRef(null);
    const [isHovered, setIsHovered] = React.useState(null);
    const [activeSlide, setActiveSlide] = React.useState(0);

    const datas = [
        {
            icon: <DesignAndArchitecture />,
            title: "Design and Architecture",
            description: "MAAIA creates healthy, high-functioning communities by prioritizing comfort, convenience, and connectivity. We design our communities with the intention of uplifting the larger neighborhoods. Our designs feature walkability, green spaces, and easy access to amenities, promoting social, physical, and emotional well-being.",
        },
        {
            icon: <Sustainaibilities />,
            title: "Sustainability",
            description: "Taking a holistic approach to sustainability, MAAIA integrates residents as active participants in environmental initiatives, allowing them to contribute to a larger objective while seamlessly incorporating eco-friendly practices into their daily lives.",
        },
        {
            icon: <Cummunities />,
            title: "Community Development",
            description: "MAAIA creates healthy, high-functioning communities by prioritizing comfort, convenience, and connectivity. We design our communities with the intention of uplifting the larger neighborhoods. Our designs feature walkability, green spaces, and easy access to amenities, promoting social, physical, and emotional well-being.",
        },
        {
            icon: <CustomerExperience />,
            title: "Customer Experience",
            description: "Transforming the customer experience by offering personalized service, transparency, and a focus on long-term satisfaction, MAAIA ensures that every interaction with customers is meaningful, engaging, and tailored to their unique needs and preferences.",
        },
        {
            icon: <Ethos />,
            title: "Ethos",
            description: "Infusing projects with a European ethos of excellence, craftsmanship, and timeless quality, MAAIA sets them apart in the market.",
        },
        {
            icon: <InvestmentStrategies />,
            title: "Investment Strategy",
            description: "MAAIA provides investors with opportunities that align with their values and goals, offering solutions that deliver both financial returns and positive social and environmental impact to all stakeholders in the real estate value chain. ",
        }
    ]

    return (
        <div className='lg:h-screen flex bg-white'>
        <div className='container 2xl:px-10 m-auto px-5 lg:px-0 py-5 lg:py-10'>
            <div className='flex gap-10 flex-col lg:flex-row lg:justify-between'>
                <div className='lg:w-1/4 mb-10 lg:mb-0'>
                    <h2 className='text-lg font-semibold lg:text-[22px] font-satoshi'>{data?.decodingTheDifferenceTitle}</h2>
                    <p className='mt-10 text-base lg:text-[16px] whitespace-pre-wrap leading-[27.11px] font-neueHaasUnicaPro'>
                       {data?.decodingTheDifferenceText}
                    </p>
                </div>

                <div className='lg:w-3/4 w-full'>
                    <div className='flex justify-between mb-6'>
                        <div className='text-lg px-4 font-semibold font-satoshi lg:text-[22px]'>
                           {data?.decodingTheDifferenceRightSideHeading}
                        </div>

                        <div className='hidden lg:block'>
                            <div className="flex gap-4">
                                <FaArrowLeft onClick={() => swiperRef.current?.slidePrev()} className="p-3 bg-[#151515] rounded text-white text-5xl cursor-pointer" />

                                <FaArrowRight onClick={() => swiperRef.current?.slideNext()} className="p-3 bg-[#151515] rounded text-white text-5xl cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        className={`mySwiper`}
                        breakpoints={{
                            1024: { slidesPerView: 3.5, spaceBetween: 10 }, // 4 slides on large screens
                            600: { slidesPerView: 2, spaceBetween: 10 }, // 2 slides on medium screens
                            0: { slidesPerView: 1, spaceBetween: 10 }, // 1 slide on small screens
                        }}
                    >
                        {
                            data?.thoughtfulReworkingSlider.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div onMouseOver={() => setIsHovered(index)} onMouseOut={() => setIsHovered(null)} className='h-[400px] z-50'>
                                        <div className={`overflow-hidden h-full relative bg-[#D3D4D0] p-6 flex flex-col justify-between`}>
                                            <div className='flex justify-start'>
                                                <img src={item?.sliderCardIcon?.node?.mediaItemUrl} alt="" srcSet="" />
                                            </div>
                                            <div className={`absolute duration-500 bottom-[45px] pr-6 ${isHovered != index && 'translate-y-[100%]'}`}>
                                                <h3 className='text-lg font-semibold mb-6  font-satoshi'>{item.sliderCardTitle}</h3>
                                                <p className={`text-sm font-neueHaasUnicaPro`}>
                                                    {item.slideCardText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


                    <div className='flex justify-between my-2 lg:hidden'>
                        <div className="flex gap-2">
                            {
                                data?.thoughtfulReworkingSlider.map((item, index) => (
                                    <div key={index} className={`h-1 my-auto duration-500 rounded-full ${activeSlide === index ? 'bg-[#909389] w-4' : 'bg-[#909389] w-1'}`}></div>
                                ))
                            }
                        </div>

                        <div className="flex gap-4">
                            <FaArrowLeft onClick={() => swiperRef.current?.slidePrev()} className="p-3 bg-[#151515] rounded text-white text-5xl cursor-pointer" />

                            <FaArrowRight onClick={() => swiperRef.current?.slideNext()} className="p-3 bg-[#151515] rounded text-white text-5xl cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Slides;
