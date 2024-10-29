import Link from 'next/link'
import React, { useState } from 'react'
import Email from '../../../public/assets/svgs/Email'
import Location from '../../../public/assets/svgs/Location'
import { IoArrowForwardOutline } from 'react-icons/io5'
import Loading from '../Common/Loading'
import axios from 'axios'
import CelebrateAnimation from '../Common/CelebrateAnimation'
import { set } from 'nprogress'


function Footer({ data }) {
    // console.log("👉🏼👉🏼👉🏼 => Footer => data:", data)
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showCelebration, setShowCelebration] = useState(false);
    // const { data, loading, error } = useQuery(FooterQuery, {
    //     client: apolloClient,
    //     refetchWritePolicy: 'cache-and-network',
    // });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`/api/newsletter`, {
                email: email,
                "list_ids": [3],
                "list_status": "subscribed"
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'username': 'Runtime_123',
                    'password': process.env.NEXT_PUBLIC_EMAIL_SUBSCRIBERS_API_KEY,
                },
            });
            if (response.data.success === true) {
                setMessage('Thank you for subscribing to our newsletter.');
                setShowCelebration(true);
                setTimeout(() => {
                    setShowCelebration(false);
                    setEmail('');
                    setLoading(false);
                    setMessage('');
                }, 3000);
            } else {
                setMessage(response.data.message_text);
                setTimeout(() => {
                    setEmail('');
                    setLoading(false);
                    setMessage('');
                }, 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setMessage('Failed to submit. Please try again later.');
            setTimeout(() => {
                setEmail('');
                setLoading(false);
                setMessage('');
            }, 3000);
        }
    };

    

    return (
        <div className="container 2xl:px-10 m-auto py-20 px-5 lg:px-0">
            <div className="grid lg:grid-cols-4 gap-2 text-white">
                <div className=" order-3 lg:order-1">
                    <Link href='/'>
                        <img src={data?.footerField?.footerLogo?.node?.mediaItemUrl} className='mb-10 w-[190px] lg:w-[230px] lg:h-[52.49px] h-[43.36px]' alt="logo" />
                    </Link>
                    <p className='pb-10 text-[16px]'>{data?.footerField?.footerText}</p>
                    <div className="lg:hidden">
                        <div className="flex gap-5">
                            {
                                data?.footerField?.socialMedia && data?.footerField?.socialMedia.map((item, index) => (
                                    <Link target="_blank" rel='' key={index} href={item.socialUrl || '/'} className='bg-[#909389] h-10 w-10 flex hover:bg-white hover:text-black hover:duration-200 hover:scale-110'>
                                        <div className='m-auto text-xl'>
                                            <img src={item?.socialIcon?.node?.mediaItemUrl} alt="" />
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex gap-10 py-10'>
                        {
                            data?.footerField?.footerTermsAndPrivacyLink.map((item, index) => (
                                <Link href={item.linkUrl} key={index}>{item.linkLabel}</Link>
                            ))
                        }
                    </div>
                    <div className='text-sm'>{data?.footerField?.copyrightText}</div>
                </div>
                <div className="flex order-2 mb-[60px] lg:mb-0">
                    <div className='lg:mx-auto'>
                        <div className='text-[#909389] lg:mb-16 mb-6 uppercase'>{data?.footerField?.quickLinksHeading}</div>
                        {
                            data?.footerField?.quickLink && data?.footerField?.quickLink.map((item, index) => (
                                <div key={index} className='my-2 text-[16px] footer-items'>
                                    <Link href={item?.quickLinkUrl || '/'} className=''>
                                        {item.quickLinkTitle}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="hidden lg:block lg:order-3 lg:mr-10">
                    <div className='text-[#909389] mb-16 uppercase'>{data?.footerField?.getInTouchHeading}</div>
                    <div className='flex gap-4 mb-6'>
                        <div className="mt-[6px]">
                            <Email />
                        </div>
                        <div className=''>
                            <div>Email</div>
                            <div className='text-[#909389]'>{data?.footerField?.emailAddress}</div>
                        </div>
                    </div>

                    <div className='flex gap-4 mb-6'>
                        <div className="">
                            <Location />
                        </div>
                        <div className=''>
                            <div>Head Office</div>
                            <div className='text-[#909389]'>{data?.footerField?.haedOffice}</div>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className="">
                            <Location />
                        </div>
                        <div className=''>
                            <div>Office Hours:</div>
                            <div className='text-[#909389] whitespace-pre-wrap'>{data?.footerField?.officeHours}</div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-4 relative">
                    <div className='text-[#909389] lg:mb-16 mb-6'>{data?.footerField?.newsletterHeading}</div>
                    <CelebrateAnimation className={`-mt-10 duration-500 h-36 ${showCelebration?'opacity-1':'opacity-0'}  w-full`} />
                    {
                        loading ?
                            <div className='lg:h-36 h-[50vh] flex'>
                                <div className='m-auto'>
                                    {
                                        message !== '' ?
                                            <div className='text-black[#0C0C0C80] text-lg font-neueHaasUnicaPro'>
                                                {message}
                                            </div>
                                            :
                                            <Loading />
                                    }
                                </div>
                            </div>
                            :
                            <div className='mb-20'>
                                <input value={email} type="text" placeholder='Enter your email address' className='bg-[#FFFFFF14] border border-[#909389] focus:outline-none px-5 py-2 w-full text-[#909389]' onChange={(e) => setEmail(e.target.value)} />
                                <button onClick={handleSubmit} type="submit" className='flex gap-1 w-full bg-[#909389] justify-center py-2'>
                                    <div className='text-black text-xl font-semibold'>Subscribe</div>
                                    <IoArrowForwardOutline className='text-black text-2xl my-auto -rotate-45' />
                                </button>
                            </div>
                    }
                    <div dangerouslySetInnerHTML={{ __html: data?.footerField?.social }} />
                    <div className="lg:block hidden">
                        <div className="flex gap-5">
                            {
                                data?.footerField?.socialMedia && data?.footerField?.socialMedia.map((item, index) => (
                                    <Link target="_blank" rel='' key={index} href={item.socialUrl || '/'} className='h-10 w-10 flex hover:bg-white hover:text-black duration-500 hover:duration-200 hover:scale-110'>
                                        <div className='m-auto text-xl'>
                                            <img src={item?.socialIcon?.node?.mediaItemUrl} alt="" />
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer