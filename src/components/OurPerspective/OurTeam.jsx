import React, { useState } from 'react';
import Image from 'next/image';
import LinkedIn from '../../../public/assets/svgs/LinkedIn';
import { IoArrowUpOutline } from 'react-icons/io5';
import Link from 'next/link';

function OurTeam({ data }) {
    const [activeMember, setActiveMember] = useState(null);

    const toggleBio = (index) => {
        setActiveMember(index === activeMember ? null : index);
    };

    return (
        <div className=' bg-white h-full flex'>
            <div className="container 2xl:px-10 m-auto px-5 lg:px-0 py-5 lg:py-10">
                <div className="grid lg:grid-cols-8">
                    <div className="mb-5 lg:mb-0 col-span-1">
                        <h2 className="text-lg font-semibold font-satoshi uppercase text-[30px] lg:text-[28px]">{data?.ourTeamSectionTitle}</h2>
                    </div>

                    <div className="col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center gap-5">
                        {data?.ourTeams.map((member, index) => (
                            <div
                                key={index}
                                className="relative w-[100%] h-[400px] overflow-hidden"
                            >
                                <Image
                                    src={member.teamProfileImage?.node?.mediaItemUrl}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className={`filter grayscale transition-transform duration-300 ${activeMember === index ? '' : ''}`}
                                />
                                <div className="absolute right-4 bottom-4 left-4 text-white z-[2]">
                                    <Link target="_blank" rel="noopener noreferrer" href={member?.teamSocialProfileUrl || "/our-perspective"}>
                                        <div className={`duration-700 ${activeMember != index && 'backdrop-blur-[8px] bg-[#0000003D]'}`}>
                                            <div className='flex justify-between px-4 py-2'>
                                                <div>
                                                    <p className="text-lg">{member.teamName}</p>
                                                    <p className="text-sm">{member.teamDesignation}</p>
                                                </div>
                                                <div className="my-auto">
                                                    {/* <LinkedIn /> */}
                                                    <img src={member?.teamSocialProfileIcon?.node?.mediaItemUrl} alt="" srcSet="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className={`backdrop-blur-[8px] bg-[#0000003D] absolute top-4 right-4 text-white overflow-hidden duration-700 cursor-pointer ${activeMember === index ? 'left-4 bottom-4' : 'lg:left-[65%] left-[72%] bottom-[89%]'}`} onClick={() => toggleBio(index)}>
                                    <div className={`px-4 py-2 duration-[400ms] text-sm ${activeMember === index ? 'opacity-1' : 'opacity-0'}`}>
                                        {member.teamBio}
                                    </div>
                                    <IoArrowUpOutline className={`absolute text-white duration-1000 text-xs right-2 ${activeMember === index ? 'top-[73%]' : 'top-2 rotate-180'}`} />
                                    <div className={`text-white top-[5px] right-6 duration-1000 text-xs absolute ${activeMember !== index ? 'opacity-1' : "opacity-0 -translate-x-[100%]"}`}>View Bio</div>
                                    <div className={`text-white top-[72%] right-6 duration-300 text-xs absolute ${activeMember === index ? 'opacity-1' : "opacity-0 translate-x-[100%]"}`}>Close</div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default OurTeam;
