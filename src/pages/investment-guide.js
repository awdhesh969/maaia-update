import PageBanner from '@/components/Common/PageBanner';
import AboutSection from '@/components/InvestmentGuidePage/AboutSection';
import InvestWithMaaiaSection from '@/components/InvestmentGuidePage/InvestWithMaaiaSection';
import WhyInvestSection from '@/components/InvestmentGuidePage/WhyInvestSection';
import Layout from '@/components/Layout/index';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import apolloClient from '@/lib/apolloClient';
import { InvestmentGuideQuery } from '@/queries/InvestmentGuideQuery';
import { useQuery } from '@apollo/client';
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery';



function InvestmentGuide({ data, layout }) {
console.log("👉🏼👉🏼👉🏼 => InvestmentGuide => layout:", layout)
//   const { data, loading, error } = useQuery(InvestmentGuideQuery, {
//     client: apolloClient,
//     refetchWritePolicy: 'cache-and-network',
// });

  gsap.registerPlugin(ScrollTrigger)

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
        isDesktop && gsap.from('.firstSection', {
          scrollTrigger: {
            trigger: 'firstSection',
            scrub: 1,
            pin: true,
            // markers: true,
            pinSpacing: false,
            start: "top top",
            // snap: 1,
            end: "+=100%",
          },
          ease: "none"
        });

        isDesktop && gsap.from(".secondSection", {
          scrollTrigger: {
            trigger: ".secondSection",
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            endTrigger: '.topSec',
            // markers: true,
            // snap: 1 / 1,
          },
          ease: "none"
        });

        isDesktop && gsap.from(".thirdSection", {
          scrollTrigger: {
            trigger: ".thirdSection",
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            endTrigger: '.topSec',
            // markers: true,
            // snap: 1 / 1,
          },
          ease: "none"
        });

        isDesktop && gsap.from(".forthSection", {
          scrollTrigger: {
            trigger: ".forthSection",
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            endTrigger: '.topSec',
            // markers: true,
            // snap: 1 / 1,
          },
          ease: "none"
        });
      }
    );
  })

  return (
    <Layout headerBg={true} headerData={layout} footerData={layout?.footer}>
      <div className='firstSection lg:h-screen flex justify-center'>
        <PageBanner bgImg={data?.featuredImage?.node?.mediaItemUrl} mobBgImg={data?.featuredImage?.node?.mediaItemUrl} title={data?.title} />
      </div>
      <div className='secondSection lg:h-screen lg:overflow-hidden'>
        <AboutSection data={data?.investmentGuide} />
      </div>
      <div className='thirdSection'>
        <WhyInvestSection data={data?.investmentGuide} />
      </div>
      <div className='forthSection'>
        <InvestWithMaaiaSection data={data?.investmentGuide} />
      </div>
    </Layout>
  );
}

export default InvestmentGuide;



// export const getStaticProps = async () => {
//   try {
//     const { data } = await apolloClient.query({
//       query: InvestmentGuideQuery,
//     });

//     return {
//       props: {
//         data: data?.page || null,
//       },
//       revalidate: 1,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: null, // Return `null` if there's an error
//       },
//     };
//   }
// };


export const getServerSideProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: InvestmentGuideQuery,
    });

    const { data:layout } = await apolloClient.query({
      query: HeaderFooterQuery,
    });

    return {
      props: {
        data: data?.page || null,
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