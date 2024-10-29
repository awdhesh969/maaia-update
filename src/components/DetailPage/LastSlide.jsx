import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function LastSlide({ data }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const swiperRef = useRef(null);

    return (
        <div className='relative'>
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="mySwiper relative"
            >
                {data?.uniteTypeAndSizes&&data?.uniteTypeAndSizes.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className=''>
                            <div style={{ backgroundImage: `url(${slide?.bedroomImage?.node?.mediaItemUrl})` }} className={`bg-cover h-[95vh] lg:h-screen`}>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent h-full'></div>
                                <div className='container 2xl:px-10 relative mx-auto h-full px-5 lg:px-0 font-satoshi'>

                                    {/* <div className='absolute top-16 text-white text-[20px]'>UNIT TYPE & SIZES
                                    </div> */}

                                    <div className='absolute bottom-20 w-full text-white'>
                                        <div className='bg-[#909389] p-2 mb-5 w-fit rounded-sm text-center'>{slide.typesOfBedroom}</div>
                                        <p className=' w-[75%] lg:w-[80%]'>{slide.unitAndSizes}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className='absolute bottom-24 right-[10%] z-10'>
                    <div className="flex gap-1">
                        {
                            data?.uniteTypeAndSizes&&data?.uniteTypeAndSizes.map((_, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => swiperRef.current.slideTo(index)} // Navigate to the corresponding slide
                                    className={`lg:h-2 h-1 duration-500 cursor-pointer rounded-full mx-1 ${activeIndex === index ? 'bg-white lg:w-8 w-4' : 'bg-gray-300 w-1 lg:w-2'}`}
                                ></div>
                            ))
                        }
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default LastSlide;
