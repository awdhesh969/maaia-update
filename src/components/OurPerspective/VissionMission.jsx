import React from 'react'
import Image from 'next/image'
import VissionImg from "../../../public/assets/imgs/Rectangle9.png"
function VissionMission() {
    return (
        <div className="w-full bg-black mx-auto text-white">
            <div className='container 2xl:px-10 mx-auto px-5 lg:px-0 py-20'>
                <div className='gap-10 grid lg:grid-cols-2'>
                    <div className="relative w-full h-[326px] lg:max-h-[250px]">
                        <Image
                            src={VissionImg}
                            alt="Vision Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className='justify-between flex flex-col'>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold lg:text-[22px] font-satoshi">OUR VISION</h2>
                            <p className="mt-2 text-base lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro">
                                To develop spaces that inspire residents, make owners proud, and provide lasting value for investors.
                            </p>
                        </div>

                        <div className=''>
                            <h2 className="text-xl font-semibold font-satoshi lg:text-[22px]">OUR MISSION</h2>
                            <p className="mt-2 text-base leading-[27.11px] lg:text-[16px] font-neueHaasUnicaPro">
                                To craft spaces that elevate living experiences and align with the growth and development goals of the UAE.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default VissionMission