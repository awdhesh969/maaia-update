import Image from 'next/image'
import React from 'react'
import HighEndEnimities from '../../../public/assets/svgs/HighEndEnimities'
import Sought from '../../../public/assets/svgs/Sought'
import HighReturn from '../../../public/assets/svgs/HighReturn'
import OnTimeDelivery from '../../../public/assets/svgs/OnTimeDelivery'
import Batch from '../../../public/assets/svgs/Batch'
import Layouts from '../../../public/assets/svgs/Layouts'
import CustomerCare from '../../../public/assets/svgs/CustomerCare'
import Sustainability from '../../../public/assets/svgs/Sustainability'

function InvestWithMaaiaSection({ data }) {

    const datas = [
        {
            icon: <HighEndEnimities />,
            title: "High-end amenities",
        },
        {
            icon: <Sought />,
            title: "Sought-after locations in Dubai",
        },
        {
            icon: <HighReturn />,
            title: "High return on investment",
        },
        {
            icon: <OnTimeDelivery />,
            title: "On-time delivery",
        },
        {
            icon: <Batch />,
            title: "High-quality materials and finishes",
        },
        {
            icon: <Layouts />,
            title: "Spacious layouts",
        },
        {
            icon: <CustomerCare />,
            title: "Transparent and reliable customer care",
        },
        {
            icon: <Sustainability />,
            title: "Sustainability",
        },
    ]
    return (
        <div className='bg-[#D3D4D0] py-[140px] px-5 lg:px-0 lg:py-0 lg:h-screen flex flex-col'>
            <div className="container 2xl:px-10 m-auto grid lg:grid-cols-2 mb-10 lg:mb-8">
                <div>
                    <div className='font-satoshi font-semibold text-[28px] mb-10 lg:mb-5'>{data?.investWithMaaiyaTitle}</div>
                    <div className="lg:w-[80%] font-neueHaasUnicaPro lg:text-[16px] leading-[27.11px] mb-10 lg:mb-0 whitespace-pre-wrap">{data?.investWithMaaiaText}</div>
                </div>
                <div className='relative max-h-[500px] h-[500px] lg:h-auto w-[100%] justify-end'>
                    <Image src={data?.investWithMaaiaImage?.node?.mediaItemUrl} className='lg:block hidden' layout='fill' objectFit='contain' />
                    <Image src={data?.investWithMaaiaImage?.node?.mediaItemUrl} className='lg:hidden' layout='fill' objectFit='cover' />

                </div>
            </div>
            <div className="grid lg:grid-cols-8 container 2xl:px-10 m-auto">
                {
                    data?.iconWithText.map((item, index) => (
                        <div className='border border-[#0000001F] relative flex lg:flex-col p-5 gap-5' key={index}>
                            <div className='my-auto'>
                                <img src={item?.investWithMaaiaIcon?.node?.mediaItemUrl} alt="" srcSet="" />
                            </div>
                            <div className='font-satoshi text-[16px] my-auto font-semibold'>{item.investWithMaaiaText}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InvestWithMaaiaSection