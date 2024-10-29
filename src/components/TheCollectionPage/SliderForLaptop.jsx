import React, { useRef } from 'react'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';





function SliderForLaptop() {
    const wrapperRef = useRef(null);
    const navRef = useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const data = [
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '1 Bedroom',
        },
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '2 Bedroom with beds',
        },
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '3 Bedroom',
        },
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '2 Bedroom',
        },
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '3 Bedroom',
        },
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '2 Bedroom',
        },
        {
            image: '/assets/imgs/banner-detail.png',
            description: '19 units - 669 to 791 sq. ft.',
            unit: 'UNIT TYPE & SIZES',
            beds: '1 Bedroom',
        },
    ]



    useGSAP(() => {
        const sections = gsap.utils.toArray(".slide", wrapperRef.current);
        const numSections = sections.length - 1;
        const snapVal = 1 / numSections;
        let lastIndex = 0;
        const navLis = navRef.current.querySelectorAll("li");


        gsap.to(sections, {
            xPercent: -100 * numSections,
            ease: "none",
            scrollTrigger: {
                trigger: wrapperRef.current,
                pin: true,
                scrub: true,
                // snap: snapVal,
                end: () => "+=" + (wrapperRef.current.offsetWidth - window.innerWidth),
                onUpdate: (self) => {
                    const newIndex = Math.round(self.progress / snapVal);
                    if (newIndex !== lastIndex) {
                        setActiveIndex(newIndex);
                        lastIndex = newIndex;
                    }
                },
            },
        });

        navLis.forEach((anchor, i) => {
            anchor.addEventListener("click", function (e) {
                gsap.to(window, {
                    scrollTo: {
                        y: i * window.innerWidth,
                        autoKill: false,
                    },
                    duration: 1,
                });
            });
        });
    }, [])
    return (
        <>
            <div className='m-auto overflow-hidden relative'>
                <nav ref={navRef} className='absolute right-10 top-[75%]'>
                    <ul className="dot-nav  flex gap-2">
                        {data.map((_, i) => (
                            <li key={i} className={`${activeIndex == i ? "is-active w-6" : "w-3"} h-3 bg-white duration-500 cursor-pointer rounded-full`}><span></span></li>
                        ))}
                    </ul>
                </nav>
                <div ref={wrapperRef} className="wrapper whitespace-nowrap inline-block">
                    {data.map((slide, i) => (
                        <div style={{ backgroundImage: `url(${slide.image})` }} key={i} className="slide bg-cover w-[100vw] inline-block relative h-screen">
                            <div className="absolute bg-gradient-to-t from-black/80 to-transparent left-0 top-0 bottom-0 right-0" />

                            <div className="m-auto container 2xl:px-10 relative px-5 lg:px-0 font-satoshi">
                                <div className='absolute top-16 text-white text-[20px]'>{slide.unit}
                                </div>
                                <div className='absolute top-[70vh] w-full'>
                                    {/* <div className='bg-gray-400 p-1 text-lg text-white mb-5 w-24 rounded-sm text-center'>{slide.beds}</div> */}
                                    {/* <p className='text-white w-[75%] lg:w-[80%]'>{slide.description}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='continer m-auto fixed left-[3%] top-[70vh] w-full'>
                    <div className='bg-gray-400 p-1 text-lg text-white mb-5 w-fit duration-700 rounded-sm text-center'> {data[activeIndex].beds}</div>
                    <p className='text-white w-[75%] lg:w-[80%]'>description</p>
                </div>
            </div>

        </>
    )
}

export default SliderForLaptop