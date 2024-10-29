import React from 'react';
import Earth from '../../../public/assets/svgs/Earth';
import Leaf from '../../../public/assets/svgs/Leaf';
import Compass from '../../../public/assets/svgs/Compass';
import CummunityIntegration from '../../../public/assets/svgs/CummunityIntegration';
import Energy from '../../../public/assets/svgs/Energy';

function Living({data}) {
    // const data = [
    //     {
    //         icon: <Earth />,
    //         title: 'Global Sustainability Practices',
    //         description: `Adhering to UN\'s Sustainable Development Goals`,
    //     },
    //     {
    //         icon: <Leaf />,
    //         title: 'National Best Practices',
    //         description: 'Adhering to UAE\'s Green Agenda 2030',
    //     },
    //     {
    //         icon: <Compass />,
    //         title: 'Vastu Compliant Layouts & Well-being Design',
    //         description: 'Designing spaces that align with Vastu principles for optimal energy flow.',
    //     },
    //     {
    //         icon: <CummunityIntegration />,
    //         title: 'Community Integration',
    //         description: 'Creating spaces that foster a sense of community and connection among residents.',
    //     },
    //     {
    //         icon: <Energy />,
    //         title: 'Energy & Water Efficiency',
    //         description: 'Using energy-efficient systems and water-saving technologies for positive impact.',
    //     },

    // ]

    const numberOfData = data?.consciousLivingFeatures.length;

    const [isHovered, setIsHovered] = React.useState(null);
    return (
        <div className='w-full bg-black mx-auto text-white z-10'>
            <div className='container 2xl:px-10 mx-auto px-5 py-20 lg:px-0'>

                <div className='w-full lg:w-[70%]'>
                    <div className='text-[23px] leading-[35.1px] text-left lg:text-[28px] font-satoshi'>
                       {data?.consciousLivingSectionHaeding}
                    </div>
                    <div className='text-[15px] lg:text-[16px] font-normal leading-[27.11px] text-left mb-10 font-neueHaasUnicaPro'>
                        <div className='mt-10'>
                          {data?.consciousLivingText}
                        </div>
                    </div>
                </div>

                {/* Grid Design as per image */}
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        data?.consciousLivingFeatures.map((item, i) => (
                            <div onMouseOver={() => setIsHovered(i)} onMouseOut={() => setIsHovered(null)} key={i} className={`flex h-32 gap-6 items-center p-6 border-b border-l border-[#393939] relative overflow-hidden border-r ${i < 3 && 'lg:border-t'} ${i == 0 && 'border-t'} ${(i + 1) % 3 === 0 ? 'lg:border-r' : i == numberOfData - 1 ? 'border-r' : 'lg:border-r-0'}`}>
                                <div className={`${isHovered === i ? 'translate-y-[0%]':'translate-y-[100%]'} absolute  duration-700 top-0 left-0 w-full h-full bg-[#D9D9D980]`} />
                                <div className='flex justify-center items-center border border-[#393939] h-20 lg:w-20 w-[30%]'>
                                    <img src={item?.consciousLivingIcon?.node?.mediaItemUrl} alt="" srcSet="" />
                                </div>
                                <div className=' w-[70%] lg:w-auto'>
                                    <div className='text-md font-semibold mb-2 font-satoshi'>{item.consciousLivingTitle}</div>
                                    <div className='text-xs text-gray-400 font-neueHaasUnicaPro'>{item.consciousLivingText}</div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
}

export default Living;
