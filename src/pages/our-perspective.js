import PageBanner from '@/components/Common/PageBanner.jsx'
import BannerDescription from '@/components/OurPerspective/BannerDescription'
import VissionMission from '@/components/OurPerspective/VissionMission'
import Slides from '@/components/OurPerspective/Slides'
import Living from '@/components/OurPerspective/Living'
import Leadership from '@/components/OurPerspective/Leadership'
import OurTeam from '@/components/OurPerspective/OurTeam'
import Layout from '@/components/Layout/index';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react'
import { OurPerspectiveQuery } from '@/queries/OurPerspectiveQuery'
import apolloClient from '@/lib/apolloClient'
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery'

function OurPerspective({ data, layout }) {
  // console.log("👉🏼👉🏼👉🏼 => OurPerspective => data:", data)
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
        isDesktop && gsap.from(".secondSec", {
          scrollTrigger: {
            trigger: ".topSec",
            scrub: 1,
            pin: ".topSec",
            anticipatePin: 1,
            pinSpacing: false,
            start: "bottom +120% ",
            end: "+=175%",
            // snap: 1 / 2,
            // markers: true,
          },
          ease: "none"
        });
        isDesktop && gsap.from('.ThirdSec', {
          scrollTrigger: {
            trigger: '.ThirdSec',
            pin: true,
            // endTrigger: '.FourSec',
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            // snap: 1 / 1,
            // markers: true
          },
        })
        isDesktop && gsap.from('.FourSec ', {
          scrollTrigger: {
            trigger: '.FourSec',
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            endTrigger: '.topSec',
            // markers: true,
            // snap: 1 / 1,
          },
        })
        isDesktop && gsap.from('.fifthSec ', {
          // zIndex: "1",
          scrollTrigger: {
            trigger: '.fifthSec',
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=102%',
            scrub: 1,
            // markers: true,
            // snap: 1 / 1,
          },
        })
        isDesktop && gsap.from('.SixSec ', {
          scrollTrigger: {
            trigger: '.SixSec',
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=185%',
            scrub: 1,
            // markers: true,
            // snap: 1 / 2,
          },
        })
        isDesktop && gsap.from('.SevenSec ', {
          // zIndex: 10,
          scrollTrigger: {
            trigger: '.SevenSec',
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            scrub: 1,
            // markers: true,
            // snap: 1 / 1,
          },
        })

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
      <div className='topSec lg:h-[150vh]' >
        <PageBanner bgImg={data?.featuredImage?.node?.mediaItemUrl} mobBgImg={'/assets/imgs/bg13.png'} title={data?.title} />
        <div className='secondSec'>
          <BannerDescription data={data?.ourPerspective} />
        </div>
      </div>
      <div className='ThirdSec'>
        <VissionMission />
      </div>
      <div className='FourSec'>
        <Slides data={data?.ourPerspective} />
      </div>
      <div className='fifthSec bg-black lg:flex lg:justify-center lg:items-center'>
        <Living data={data?.ourPerspective} />
      </div>
      <div className='SixSec lg:h-screen'>
        <Leadership data={data?.ourPerspective} />
      </div>
      <div className='SevenSec lg:h-screen bg-white'>
        <OurTeam data={data?.ourPerspective} />
      </div>
    </Layout>
  )
}

export default OurPerspective




export const getServerSideProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: OurPerspectiveQuery,
    });

    const { data: layout } = await apolloClient.query({
      query: HeaderFooterQuery,
    });

    return {
      props: {
        data: data?.page || null, // Ensure that `data` is either the result or `null`
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
