import React from 'react'
import { IoArrowUpOutline } from 'react-icons/io5';
import HighRent from '../../../public/assets/svgs/HighRent';
import StrategicLocation from '../../../public/assets/svgs/StrategicLocation';
import EconomicGrowth from '../../../public/assets/svgs/EconomicGrowth';
import TaxFreeInvestement from '../../../public/assets/svgs/TaxFreeInvestement';
import LifeStyle from '../../../public/assets/svgs/LifeStyle';
import Safety from '../../../public/assets/svgs/Safety';

function WhyInvestSection({ data }) {
    const [isHovered, setIsHovered] = React.useState(null);
    const datas = [
        {
            icon: <HighRent />,
            title: 'High Rental Yields',
            content: 'Compared to other major cities, Dubai offers attractive rental yields, typically ranging from 5% to 9%. The city’s large expatriate population drives high demand for rental properties, ensuring a steady income stream for investors interested in rental property investment.'
        },
        {
            icon: <StrategicLocation />,
            title: 'Strategic Location',
            content: 'Dubai is a tax-free city, which means that investors can enjoy 100% of their rental income without having to pay any taxes.'
        },
        {
            icon: <EconomicGrowth />,
            title: 'Economic Growth',
            content: 'Dubai boasts a diversified economy with strong sectors in tourism, trade, finance, and logistics, making it a reliable destination for long-term investments.'
        },
        {
            icon: <TaxFreeInvestement />,
            title: 'Tax-Free Investment',
            content: 'Dubai has 0% property and capital gains tax. This tax-free environment allows investors to maximize their returns without the burden of annual property taxes.'
        },
        {
            icon: <LifeStyle />,
            title: 'Lifestyle & Infrastructure',
            content: 'Great weather, advanced road and metro connectivity, world-class healthcare facilities, top-tier educational institutions, and numerous entertainment options.'
        },
        {
            icon: <Safety />,
            title: 'Safety',
            content: <div>One of the safest cities in the world.* <br />*As per NUMBEO Global Safety Index by City 2024</div>
        }
    ]
    return (
        <div className='bg-[#010101] py-[140px] lg:py-0 lg:h-screen flex'>
            <div className="container 2xl:px-10 m-auto">
                <div className='text-white text-[30px] mb-[80px] lg:mb-[40px] px-5 lg:px-0 lg:text-[28px] font-satoshi'>{data?.whyInvestInDubaiSectionTitle}</div>
                <div className="grid lg:grid-cols-3 gap-10 px-5 lg:px-0">
                    {
                        data?.whyInvestInDubai.map((item, index) => (
                            <div onMouseOver={() => setIsHovered(index)} onMouseOut={() => setIsHovered(null)} className='border border-[#FFFFFF1F] h-[294px] lg:h-[250px] relative overflow-hidden' key={index}>
                                <div className={`absolute top-0 left-0 w-full h-full bg-white transition-all duration-500 ${isHovered === index ? '' : 'translate-y-[100%]'}`}></div>
                                <div className={`h-10 w-10 lg:h-8 lg:w-8 flex ${isHovered === index ? 'bg-black text-white' : 'bg-white text-black'} duration-300 absolute right-6 top-8`}>
                                    <IoArrowUpOutline className={`m-auto text-2xl duration-500 ${isHovered === index ? '-rotate-180' : ''}`} />
                                </div>
                                <div className={`font-satoshi absolute duration-700 text-[22px] mb-4 left-6 ${isHovered === index ? 'text-black top-8 font-semibold' : 'text-white top-[200px] lg:top-[145px]'}`}>{item.blockTitle}</div>
                                <div className={`absolute duration-300 ${isHovered === index ? 'opacity-0' : 'opacity-1'} left-6 top-8`}>
                                    {
                                        item.whyInvestIcon ? <img src={item?.whyInvestIcon?.node
                                            ?.mediaItemUrl} alt="" srcSet="" /> : null
                                    }
                                </div>
                                <div className={`absolute duration-300 ${isHovered === index ? 'opacity-1' : 'opacity-0'} left-6 right-6 bottom-8 lg:text-[16px] lg:leading-[21px] font-neueHaasUnicaPro`}>{item.whyInvestBlockText}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyInvestSection