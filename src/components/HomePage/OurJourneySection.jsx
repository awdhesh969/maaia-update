import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function OurJourneySection({ data }) {

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.loc--wrap',
    //             start: 'top 80%',
    //             // markers: true,
    //             end: 'bottom 100%',
    //             // scrub: 7,
    //             toggleActions: 'play none none reverse',
    //         }
    //     });

    //     const allLocationIcons = gsap.utils.toArray('.location_icon');

    //     allLocationIcons.forEach((icon, index) => {
    //         tl.from(icon, {
    //             xPercent: 100,
    //             opacity: 0,
    //             duration: 1,
    //             rotate: 75,
    //             ease: 'power2.inOut',
    //             // stagger: .5
    //         }, "-=0.15");
    //     });
    //     return;
    // }, []);
    return (

        <div className='bg-[#d3d4d0] py-20 loc--wrap lg:h-[50vh] flex'>
            <div className='container 2xl:px-10 m-auto lg:grid-cols-2 grid overflow-hidden'>
                <div className="lg:w-[90%] px-5 lg:px-0 lg:pb-0 pb-[60px]">
                    <p className="text-2xl font-satoshi lg:text-[28px] font-semibold uppercase mb-10 ---heading-journey">{data?.ourJourneySectionTitle}</p>
                    <p className='text-sm lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro'>{data?.ourJourneyText}</p>
                </div>
                <div data-aos="fade-left" className="mx-auto grid grid-cols-2 lg:flex gap-5">
                    {data?.countryList.map((item, index) => (
                        <div key={index} className='bg-black text-white p-5 rounded-full h-[167px] w-[167px] lg:h-32 lg:w-32 flex location_icon'>
                            <div className='m-auto'>
                                <img src={item?.countryImage?.node?.mediaItemUrl} className='mx-auto mb-1' alt="" srcSet="" />
                                <p className='text-xl lg:text-[16px] font-neueHaasUnicaPro font-semibold text-center'>{item.countryName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurJourneySection