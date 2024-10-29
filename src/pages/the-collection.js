import PageBanner from '@/components/Common/PageBanner'
import Layout from '@/components/Layout/index'
import SliderBanner from '@/components/TheCollectionPage/SliderBanner'
import { useGSAP } from '@gsap/react';
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CollectionPageQuery } from '@/queries/CollectionPageQuery';
import apolloClient from '@/lib/apolloClient';
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery';



gsap.registerPlugin(ScrollTrigger);


function TheCollection({ data, layout }) {
  // console.log("👉🏼👉🏼👉🏼 => TheCollection => data:", data)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
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

        const section = gsap.utils.toArray('.sliderV');
        isDesktop && section.forEach((el, i) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: el,
              scrub: 1,
              pin: true,
              pinSpacing: false,
              start: "top top",
              // snap: 1,
              end: "+=100%",
            },
            ease: "none"
          });
        });
      }
    );
  }, []);
  return (
    <Layout footerData={layout?.footer} headerData={layout} headerBg={true}>
      <section className='first sliderV lg:h-screen flex justify-center'>
        <PageBanner bgImg={data?.page?.featuredImage?.node?.mediaItemUrl || '/assets/imgs/bg11.png'} mobBgImg={'/assets/imgs/bg13.png'} title={data?.page?.title} />
      </section>
      {
        data?.collections?.nodes.map((item, index) => {
          // console.log("👉🏼👉🏼👉🏼 => data?.collections?.nodes.map => data:", data)
          return (
            <div key={index} className='sliderV'>
              <SliderBanner img={item?.featuredImage?.node?.mediaItemUrl} title={item.title} mobimg={'/assets/imgs/bg12.png'} launchingText={item?.collectionField?.launchingSoon ? item?.collectionField?.launchingSoonText : item?.collectionField?.launchingSoonText||'View Details'} link={item?.collectionField?.launchingSoon ? `/the-collection` : `/collection/${item?.slug}`} location={item.collectionField?.collectionLocation} />
            </div>
          )
        })
      }
    </Layout>
  )
}

export default TheCollection


export const getServerSideProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: CollectionPageQuery,
    });

    const { data: layout } = await apolloClient.query({
      query: HeaderFooterQuery,
    });


    return {
      props: {
        data: data || null,
        layout: layout || null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null, // Return `null` if there's an error
      },
    };
  }
};