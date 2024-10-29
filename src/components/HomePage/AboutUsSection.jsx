import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdOutlineArrowOutward } from 'react-icons/md'

function AboutUsSection({ data }) {
    return (
        <>

            <div style={{backgroundImage:`url(${data?.sectionBackgroundImage?.node?.mediaItemUrl})`}} className={` bg-cover bg-center py-20 lg:py-28 w-full lg:h-full h-screen sticky top-0`}>
                <div className="container 2xl:px-10 m-auto text-white grid lg:grid-cols-4 gap-10 px-5 lg:px-0">
                    <div>
                        <p className="uppercase mb-10 lg:text-[28px] text-4xl font-satoshi">Our philosophy</p>
                        <div className="hidden lg:block">
                            <Link href={data?.ourPhilosophyButtonUrl} className='flex gap-3 bg-black w-fit py-2 px-4 cursor-pointer hover:scale-105 duration-500 lg:text-[16px] font-neueHaasUnicaPro'>
                                {data?.ourPhilosophyButtonText} <MdOutlineArrowOutward className="my-auto text-xl" />
                            </Link>
                        </div>
                    </div>
                    <div />
                    {
                        data?.ourPhilosophy.map((item, index) => (
                            <div key={index} className="">
                                <p className="uppercase mb-10 lg:mb-5 2xl:mb-10 lg:text-xl text-2xl font-satoshi lg:text-[22px]">{item?.ourPhilosophyHeading}</p>
                                <p className="lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro">{item?.ourPhilosophyText}</p>
                            </div>
                        ))}
                    <div className="lg:hidden mt-10">
                        <Link href="/our-perspective" className="flex gap-3 bg-black w-fit py-2 px-2 cursor-pointer hover:scale-105 duration-500">
                            About Us <IoIosArrowRoundForward className="my-auto text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection