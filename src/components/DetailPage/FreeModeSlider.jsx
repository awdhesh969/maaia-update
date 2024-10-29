import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

import Image from 'next/image';

const images = [
    { src: '/assets/imgs/slide-img-1.png', caption: 'Clean, breathable, and spacious layouts.' },
    { src: '/assets/imgs/slide-img-2.png', caption: 'Intuitive floor plans ensure seamless flow between rooms.' },
    { src: '/assets/imgs/slide-img-1.png', caption: 'Clean, breathable, and spacious layouts.' },
];

function FreeModeSlider({data}) {
    return (
        <div className='bg-neutral-300 py-10 lg:p-0 md:py-20 lg:flex lg:flex-col lg:justify-center lg:h-screen items-center'>
            <div className='container 2xl:px-10 mx-auto px-5 lg:px-0'>
                <div className='font-satoshi mb-8 md:mb-12'>
                    <h1 className='mb-3 md:mb-5 text-[28px] font-satoshi font-semibold uppercase'>{data?.craftedForStyleHeading}</h1>
                    <p className='text-[22px] font-medium'>{data?.craftedForStyleSubheading}</p>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1.5, spaceBetween: 20 },
                        640: { slidesPerView: 2.5, spaceBetween: 30 },
                        1024: { slidesPerView: 2, spaceBetween: 40 },
                    }}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {data?.architectureSlider&&data?.architectureSlider.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col w-full'>
                                <div className='relative w-full' style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                                    <Image
                                        src={image.architectureImage.node.mediaItemUrl}
                                        alt={`Slide ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className='absolute top-0 left-0'
                                    />
                                </div>
                                <p className='float-left text-[16px] mt-2'>{image.architectureText}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default FreeModeSlider;
