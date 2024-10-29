import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/imgs/Logo.png'
import Link from 'next/link';
import apolloClient from '@/lib/apolloClient';
import { HeaderQuery } from '@/queries/HeaderQuery';
import { useQuery } from '@apollo/client';
import { revalidatePath } from 'next/cache';




function Header({ headerBg = false, data }) {
    // const { data, loading, error } = useQuery(HeaderQuery, {
    //     client: apolloClient,
    //     refetchWritePolicy: 'cache-and-network',
    // });
    // console.log("👉🏼👉🏼👉🏼 => Header => data:", data)

    const [isOpen, setIsOpen] = React.useState(false)
    const [isHover, setIsHover] = React.useState(null)
    // const [isSticky, setIsSticky] = React.useState(true);
    // const [LastScrollTop, setLastScrollTop] = React.useState(0);
    // React.useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //         if (scrollTop > LastScrollTop) {
    //             setIsSticky(false);
    //         } else {
    //             setIsSticky(true);
    //         }
    //         setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [LastScrollTop]);
    const datas = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Our Perspective',
            link: '/our-perspective'
        },
        {
            title: 'The Collection',
            link: '/the-collection'
        },
        {
            title: 'Investment Guide',
            link: '/investment-guide'
        },
        {
            title: 'Connect',
            link: '/connect'
        },
        {
            title: 'Media',
            link: '/media'
        }
    ]

    return (
        <div className=''>
            <div className={`flex justify-between p-5 lg:px-10 fixed duration-500 left-0 right-0 top-0 z-10 mx-auto ${headerBg ? 'bg-white' : ''}`}>
                <div className='my-auto'>
                    <Link href='/'>
                        {data?.siteLogo && <Image src={data?.siteLogo} style={{ filter: headerBg ? '' : 'invert(1)' }} alt="MAAIA" className='duration-500' width={150} height={150} />
                        }
                    </Link>
                </div>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className={`${headerBg ? 'bg-black' : ''} fixed top-5 right-10 z-50 cursor-pointer h-9 w-9`}>
                <div className={`${isOpen ? 'top-1/2 left-1 right-1 -mt-[2px] -rotate-45' : 'top-2 left-1 right-1'} h-1 absolute duration-700 transform origin-center rounded-full bg-white`} />
                <div className={`${isOpen ? 'bottom-1/2 rotate-45 left-1 right-1 -mb-[2px]' : 'bottom-2 left-1/2 right-1'} h-1 absolute duration-700 origin-center transform rounded-full bg-white`} />
            </div>
            <div className={`lg:w-[30%] w-[100%] bg-black backdrop-blur-md duration-500 bg-opacity-50 h-screen fixed right-0 justify-between lg:pt-10 lg:pb-10 pt-[15vh] pb-10 bottom-0 top-0 z-20 flex flex-col ${isOpen ? '' : 'translate-x-[100%]'} text-white`}>
                <div className="pl-10 h-[80%] flex flex-col justify-between">
                    <div className='mb-10 lg:text-base text-2xl'>Menu</div>
                    {
                        data && data?.menuItems && data?.menuItems?.edges && data?.menuItems?.edges.map((item, index) => (
                            <div key={index} className='my-2 py-2' onMouseOver={() => setIsHover(index)} onMouseOut={() => setIsHover(null)}>
                                <Link onClick={()=>setIsOpen(false)} href={item?.node?.path.replace('/wordpress', '')} className='lg:text-2xl text-4xl flex gap-3'>
                                    <div className={`h-1 bg-white ${isHover == index ? 'w-10' : 'w-0'} my-auto duration-700`} />
                                    {item?.node?.label}
                                </Link>
                            </div>
                        ))}
                </div>
                <div className='text-center text-lg lg:text-base'>Copyright © {new Date().getFullYear()} MAAIA. All rights reserved.</div>

            </div>
        </div>
    )
}

export default Header


