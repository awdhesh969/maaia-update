import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Link from 'next/link';
import DynamicMediaCard from '../Common/DynamicMediaCard';

function MediaSection({data, posts}) {
    // console.log("👉🏼👉🏼👉🏼 => MediaSection => posts:", posts)
    const datas = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '/assets/imgs/bg7.png',
            location: 'Dubai',
            pubslihOn: '2 Aug, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '/assets/imgs/bg6.png',
            location: 'Dubai',
            pubslihOn: '2 Aug, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '/assets/imgs/bg5.png',
            location: 'Dubai',
            pubslihOn: '2 Aug, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '/assets/imgs/bg4.png',
            location: 'Dubai',
            pubslihOn: '2 Aug, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum metus. Aenean vel sapien odio. Proin nec ultrices sapien. Nullam nec rhoncus nunc'
        },
    ]

    return (
        <div className='bg-white'>
            <div className='m-auto container 2xl:px-10 px-5 lg:px-0'>
                <div className='flex pt-20 pb-10 justify-between'>
                    <div className='text-2xl my-auto uppercase line-clamp-1 font-semibold lg:text-[28px] font-satoshi'>{data?.mediaSectionTitle}</div>
                    <Link href={'/media'} className="flex gap-3 bg-black my-auto w-fit py-2 px-2 text-white cursor-pointer hover:scale-105 duration-500 lg:text-[16px] font-neueHaasUnicaPro">
                        See All <MdOutlineArrowOutward className="my-auto text-xl" />
                    </Link>
                </div>

                <div className='pb-10 grid lg:grid-cols-4 gap-10'>

                    {posts?.nodes.map((item, index) => (
                        <div key={index}>
                            <DynamicMediaCard title={item.title} description={item.excerpt} date={item.date} index={index} link={`/media/${item.slug}`} location={item.categories.nodes[0].name} img={item.featuredImage?.node?.mediaItemUrl} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MediaSection