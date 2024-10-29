import MediaCard from '@/components/Common/MediaCard'
import Layout from '@/components/Layout/index'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import { useQuery } from '@apollo/client';
import { MediaPageQuery, TotalMedia } from '@/queries/MediaPageQuery';
import DynamicMediaCard from '@/components/Common/DynamicMediaCard';
import apolloClient from '@/lib/apolloClient';
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery';


const itemsPerPage = 8;

gsap.registerPlugin(ScrollToPlugin);
function Media({ layout }) {
// console.log("👉🏼👉🏼👉🏼 => Media => layout:", layout)

  const { data, loading, error, fetchMore } = useQuery(MediaPageQuery, {
    variables: { first: itemsPerPage, after: null },
    // notifyOnNetworkStatusChange: true,
  });

  const { data: totalPost, error: terror } = useQuery(TotalMedia, {
    notifyOnNetworkStatusChange: true,
  });


  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }, []);



  const totalPages = Math.ceil(totalPost?.posts?.pageInfo?.total / itemsPerPage) || 0;


  const handlePrev = () => {
    if (currentPage > 1) {
      const { startCursor } = data.posts.pageInfo;
      setCurrentPage(currentPage - 1);
      fetchMore({
        variables: { before: startCursor, last: itemsPerPage },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            posts: {
              __typename: prevResult.posts.__typename,
              nodes: fetchMoreResult.posts.nodes,
              pageInfo: fetchMoreResult.posts.pageInfo,
            },
          };
        },
      });
    }
  };



  const handleNext = () => {
    if (currentPage < totalPages) {
      const { endCursor } = data.posts.pageInfo;
      setCurrentPage(currentPage + 1);
      fetchMore({
        variables: { after: endCursor, first: itemsPerPage },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            posts: {
              __typename: prevResult.posts.__typename,
              nodes: fetchMoreResult.posts.nodes,
              pageInfo: fetchMoreResult.posts.pageInfo,
            },
          };
        },
      });
    }
  };


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline();
    let mm = gsap.matchMedia(),
      breakPoint = 1000;
    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        let { isDesktop, isMobile, reduceMotion } = context.conditions;

        isDesktop && gsap.from(".secondSec", {
          scrollTrigger: {
            trigger: ".mediaSec",
            scrub: 2,
            pin: ".mediaSec",
            anticipatePin: 1,
            pinSpacing: false,
            start: "bottom +100% ",
            end: "+=90%",
            // snap: 1 /1,
            // markers: true,
          },
          ease: "none"
        });


        isDesktop && gsap.from('footer ', {
          // zIndex: 10,
          scrollTrigger: {
            trigger: 'footer',
            pin: true,
            start: 'bottom bottom',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            // markers: true,
            // snap: 1 / 1,
          },
        })
      }
    );
  })


  return (
    <Layout headerBg={true} headerData={layout} footerData={layout?.footer}>
      <div className='container 2xl:px-10 m-auto mediaSec lg:h-[230vh] lg:pt-[100px]'>
        <div className='lg:text-[60px] lg:mt-0 mt-24 text-[#151515] font-bold uppercase text-[40px] px-5 lg:px-0 font-satoshi'>
          media
        </div>
        <div className='grid lg:grid-cols-4 mt-10 mb-20 gap-10 px-5 lg:px-0'>
          {loading ?
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <div key={index} className='h-80 w-full bg-gray-400 animate-pulse' />
            ))
            :
            data?.posts?.nodes.map((item, index) => (
              <div key={index}>
                <DynamicMediaCard data={item} title={item.title} description={item.excerpt} date={item.date} index={index} link={`/media/${item.slug}`} location={item.categories.nodes[0].name} img={item.featuredImage?.node?.mediaItemUrl} />
              </div>
            ))}
        </div>
        {
          data?.posts?.pageInfo?.total === 0 && (
            <div className='flex justify-center'>
              <div className='text-[#151515] text-2xl'>No Media Found</div>
            </div>
          )
        }
        {
          totalPages > 1 && (
            <div className='flex justify-center gap-10'>
              <button
                onClick={handlePrev}
                disabled={!data?.posts?.pageInfo?.hasPreviousPage}
                className='bg-[#151515] text-white px-5 py-2'
              >
                Prev
              </button>

              <div className='bg-[#151515] text-white px-5 py-2'>
                {currentPage} / {totalPages}
              </div>

              <button
                onClick={handleNext}
                disabled={!data?.posts?.pageInfo?.hasNextPage}
                className='bg-[#151515] text-white px-5 py-2'
              >
                Next
              </button>
            </div>
          )}
      </div>
      <div className='mediaBottom'></div>
    </Layout>
  )
}

export default Media


export const getServerSideProps = async () => {
  try {
    const { data: layout } = await apolloClient.query({
      query: HeaderFooterQuery,
    });


    return {
      props: {
        layout: layout || null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        layout: null, // Return `null` if there's an error
      },
    };
  }
};