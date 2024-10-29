import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function ModeSlider({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    // Sample slide data
    const slides = [
        {
            image: '/assets/imgs/pool.png',
            title: 'Family-Friendly Environment',
            description: 'Numerous parks, playgrounds, and communal spaces where neighbors can connect and children can play safely.'
        },
        {
            image: '/assets/imgs/banner-detail.png',
            title: 'Luxury Living',
            description: 'Experience the pinnacle of luxury living with world-class amenities and breathtaking views.'
        },
        // Add more slides as needed
    ];

    return (
        <div className="relative">
            <Swiper
                cssMode={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {data?.sliderWithText && data?.sliderWithText.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className=''>
                            <div style={{ backgroundImage: `url(${slide.sliderImage?.node?.mediaItemUrl})` }} className={`bg-cover h-[95vh]`}>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent h-full'></div>
                                <div className='container 2xl:px-10 relative mx-auto h-full px-5 lg:px-0'>
                                    <div className='absolute bottom-20'>
                                        <h1 className='text-white text-[22px] mb-5 '>{slide.sliderHeading}</h1>
                                        <p className='text-white w-[75%] text-[16px] lg:w-[80%]'>{slide.sliderTextContent}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className='container 2xl:px-10 relative mx-auto'>
                <div className="absolute bottom-32 transform -translate-y-1/2 right-5 lg:right-0 z-10 cursor-pointer bg-black p-2" ref={prevRef}>
                    <FaArrowLeft className="text-xl text-white" />
                </div>
                <div className="absolute bottom-20 transform -translate-y-1/2 right-5 lg:right-0 z-10 cursor-pointer bg-black p-2" ref={nextRef}>
                    <FaArrowRight className="text-xl text-white" />
                </div>
                <div className="absolute lg:left-0 left-5 -top-16 z-10">
                    <div className="flex gap-1">
                        {
                            data?.sliderWithText && data?.sliderWithText.map((_, index) => (
                                <div key={index} className={`h-2 duration-500 rounded-full mx-1 ${activeIndex === index ? 'bg-white w-8' : 'bg-gray-300 w-2'}`}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeSlider;
