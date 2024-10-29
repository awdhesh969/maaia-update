import MediaCard from '@/components/Common/MediaCard';
import Layout from '@/components/Layout/index'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CollectionDetailPageQuery } from '@/queries/CollectionDetailPageQuery';
import { MediaDetailPageQuery } from '@/queries/MediaDetailPageQuery';
import apolloClient from '@/lib/apolloClient';
import { useQuery } from '@apollo/client';
import { MediaPageQuery } from '@/queries/MediaPageQuery';
import DynamicMediaCard from '@/components/Common/DynamicMediaCard';
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery';

function MediaDetail({ data, layout }) {

    const { data:recentPost, loading, error, fetchMore } = useQuery(MediaPageQuery, {
        variables: { first: 4, after: null },
        notifyOnNetworkStatusChange: true,
      });
    console.log("👉🏼👉🏼👉🏼 => MediaDetail => data:", recentPost)


    const router = useRouter();
    const { slug } = router.query;
    const displaySlug = slug && slug.length > 26 ? `${slug.substring(0, 26)}...` : slug;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Layout headerBg={true} headerData={layout} footerData={layout?.footer}>
            <div className='m-auto container 2xl:px-10'>
                <div className='lg:mx-20 mx-5'>
                    <div className='flex mt-[120px] lg:mt-[140px]'>
                        <Link href={'/'} className='font-bold'>Home</Link>
                        <FiChevronRight className='mt-[5px] opacity-40' />
                        <Link href={'/media'} className='font-bold'>Media</Link>
                        <FiChevronRight className='mt-[5px] opacity-40' />
                        <div className='font-bold opacity-40'>{data?.post?.title}</div>
                    </div>
                    <div className=' lg:mb-10 mb-5'>
                        <div className='text-[28px] lg:my-10 my-5 font-semibold'>{data?.post?.title}</div>
                        <div className='text-[22px] leading-[27.11px]' dangerouslySetInnerHTML={{ __html: data?.post?.excerpt }} />
                    </div>

                    <div className="flex my-5 justify-start gap-10">
                        <div className='flex gap-5'>
                            {
                                data?.post?.categories?.nodes?.map((item, index) => <>
                                    <div key={index} className='bg-[#909389] text-white px-2 py-1'>{item.name}</div>
                                </>
                                )
                            }
                        </div>
                        <div className='my-auto text-gray-400'>{new Date(data?.post?.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                    </div>
                    <div className='relative h-[200px] lg:h-[773px] w-[100wh] lg:mb-10 mb-5'>
                        <Image
                            src={data?.post?.featuredImage?.node?.mediaItemUrl}
                            layout='fill'
                            objectFit='cover'
                            alt='about us'
                        />
                    </div>
                    {
                        data?.post?.content && <div className='whitespace-pre-wrap' dangerouslySetInnerHTML={{ __html: data?.post?.content }} />
                    }
                    {/* <div className='text-[22px] leading-[27.11px] lg:mb-10 mb-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div> */}
                    {/* <div className='text-[16px] lg:mb-10 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatast non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatast non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> */}
                    {/* <div className='grid lg:grid-cols-2 lg:gap-20 gap-5 lg:mb-20 mb-5'>
                        <div className='text-[16px] order-2 lg:order-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatast non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatast non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
                        <div className='relative h-[200px] w-full order-1 lg:order-2 lg:h-[594px] lg:w-[100%]'>
                            <Image
                                src='/assets/imgs/bg15.png'
                                layout='fill'
                                objectFit='cover'
                                alt='about us'
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='bg-[#D3D4D0] py-20'>
                <div className='m-auto container 2xl:px-10 px-5 lg:px-0'>
                    <div className='mb-10 text-[28px] font-semibold'>Recent Media</div>
                    <Swiper
                        slidesPerView={4}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1.3,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {recentPost?.posts?.nodes.map((item, index) => (
                            <SwiperSlide key={index}>
                                <DynamicMediaCard date={item.date} link={item.slug} description={item.excerpt} img={item?.featuredImage?.node?.mediaItemUrl} index={index} location={item?.categories?.nodes[0].name} title={item?.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </Layout>
    )
}

export default MediaDetail





export async function getServerSideProps(context) {
    const { slug } = context.params;

    // console.log('Slug:', slug); // Log the slug on the server-side

    const { data } = await apolloClient.query({
        query: MediaDetailPageQuery,
        variables: { id: slug },
    });

    const { data: layout } = await apolloClient.query({
        query: HeaderFooterQuery,
      });
  

    if (!data) {
        return {
            notFound: true,
        };
    }

    if (!data.post) {
        return {
            notFound: true,
        };
    }


    return {
        props: {
            data: data,
            layout: layout || null,
        },
    };
}