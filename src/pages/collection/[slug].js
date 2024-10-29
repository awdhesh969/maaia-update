import React, { useEffect, useState, useRef } from 'react'
import Layout from '@/components/Layout/index'
import PageBanner from '@/components/Common/PageBanner2.jsx'
import Overview from '@/components/DetailPage/Overview'
import Accessibility from '@/components/DetailPage/Accessibility'
import Ccc from '@/components/DetailPage/Ccc'
import Amenities from '@/components/DetailPage/Amenities'
import ModeSlider from '@/components/DetailPage/ModeSlider'
import FreeModeSlider from '@/components/DetailPage/FreeModeSlider'
import LastSlide from '@/components/DetailPage/LastSlide'
import { FaArrowRight } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { useRouter } from 'next/router'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { CollectionDetailPageQuery } from '@/queries/CollectionDetailPageQuery'
import apolloClient from '@/lib/apolloClient'
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function CollectionDetail({ data, layout }) {
  // console.log("👉🏼👉🏼👉🏼 => CollectionDetail => data:", data)


  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }, []);



  const overviewData = {
    title: "PROJECT OVERVIEW",
    details: [
      "G+8-storey building",
      "87 premium residences",
      "Distinctive architectural design",
      "Premium amenities",
      "Spacious living areas and balconies",
      "Well-connected location",
    ],
    imageUrl: '/assets/imgs/Rectangle10.png', // Relative path to the image
  }

  const accessibilityData = {
    title: "UNMATCHED ACCESSIBILITY",
    details: [
      { time: "2 mins", location: "Sheikh Zayed Road" },
      { time: "3 mins", location: "Hindu Temple & Gurudwara" },
      { time: "10 mins", location: "Expo City" },
      { time: "15 mins", location: "Palm Jumeirah" },
      { time: "15 mins", location: "Dubai Marina" },
      { time: "20 mins", location: "Palm Jebel Ali" },
      { time: "20 mins", location: "Al Maktoum International Airport" },
      { time: "25 mins", location: "Downtown Dubai" }
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509707!2d144.95373531561666!3d-37.81627944202498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zTWVsYm91cm5lIFZJQywg4KSw4KSu4KWH4KWB4KSy4KWN4KSmIOCksOCkleCkteCkviDgpLDgpLfgpKbgpL_gpLDgpK_gpYfgpLfgpLA!5e0!3m2!1sen!2sau!4v1633531477295!5m2!1sen!2sau',
  }



  const datas = [
    {
      image: '/assets/imgs/bg19.png',
      description: '19 units - 669 to 791 sq. ft.',
      beds: '1 Bedroom',
    },
    {
      image: '/assets/imgs/bg20.png',
      description: '66 units - 1,168 to 1,490 sq. ft.',
      beds: '2 Bedroom with Maid’s / Study',
    },
    {
      image: '/assets/imgs/bg21.png',
      description: '02 units - 2,049 to 2,242 sq. ft.',
      beds: '3 Bedroom',
    },
    {
      image: '/assets/imgs/bg22.png',
      description: 'OPTION TO HAVE CLOSED KITCHEN WITH ALL UNIT TYPES',
      beds: 'OTHERS',
    },
  ]



  const [headerBg, setheaderBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 10 && !headerBg) {
        setheaderBg(true);
      } else if (scrollPercent < 10 && headerBg) {
        setheaderBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerBg]);


  useGSAP(() => {
    const sections = document.querySelectorAll('.arraySlide');
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
        isDesktop && gsap.from(".firstSec", {
          scrollTrigger: {
            trigger: ".firstSec",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: "top top",
            // snap: 1.6 / 2,
            end: "100%",
          },
          ease: "none"
        });
        isDesktop && gsap.to(".mergeSec", {
          scrollTrigger: {
            trigger: ".mergeSec",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: "top top",
            // snap: 1 / 1,
            end: "+=130%",
            // markers: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
        });
        isDesktop && gsap.to(".belowMerge", {
          scrollTrigger: {
            trigger: ".belowMerge",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: "top top",
            // snap: 1 / 1,
            end: "+=130%",
            // markers: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
        });
        // gsap.to(".threeSec", {
        //   scrollTrigger: {
        //     trigger: ".threeSec",
        //     scrub: 1,
        //     pin: true,

        //     pinSpacing: false,
        //     start: "top top",
        //     snap: 1 / 1 ,
        //     end: "+=100%",

        //   },
        //   ease: "none",
        // });
        sections.forEach((section, index) => {
          isDesktop && gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              scrub: 1,
              pin: true,
              pinSpacing: false,
              start: "top top",
              // snap: 1 / 1,
              end: "+=100%",

            },
            ease: "none",

          });
        });

        return () => {
          mm.kill();
        };

      }
    );

  }, []);



  return (
    <Layout headerBg={headerBg} footerData={layout.footer} headerData={layout}>
      <div className='fixed h-20 bg-[#909389] bottom-0 left-0 right-0 z-20 lg:hidden '>
        <div className='flex justify-between container 2xl:px-10 m-auto px-5 py-2'>
          <div className='flex flex-col justify-between'>
            <div className='text-2xl font-bold'>
              {data?.collection?.title}
            </div>
            <div>
              HANDOVER: Q4 2024
            </div>
          </div>
          <div className='flex py-2 gap-2 my-auto px-3 text-white items-center bg-black'>
            Inquire Now
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='firstSec'>
        <PageBanner bgImg={data?.collection?.featuredImage?.node?.mediaItemUrl} mobBgImg={data?.collection?.featuredImage?.node?.mediaItemUrl} title={data?.collection?.title} />
      </div>

      <div className='mergeSec lg:h-[80vh]' >
        <div className='secondSec bg-white lg:h-[80vh]'>
          <Overview
            title={data?.collection?.collectionField?.overviewSectionTitle}
            details={data?.collection?.collectionField?.overviewText}
            imageUrl={data?.collection?.collectionField?.overviewImage?.node?.mediaItemUrl}
          />
        </div>
      </div>
      <div className='threeSec belowMerge bg-black lg:h-[50vh]'>
        <Ccc data={data?.collection?.collectionField} />
      </div>
      <div className='fourSec arraySlide lg:h-[100vh]'>
        <ModeSlider data={data?.collection?.collectionField}/>
      </div>
      <div className='fiveSec bg-white arraySlide lg:h-[100vh] lg:flex'>
        <Accessibility
          data={data?.collection?.collectionField}
          mapUrl={accessibilityData.mapUrl}
        />
      </div>
      <div className='sixSec arraySlide'>
        <Amenities data={data?.collection?.collectionField} />
      </div>

      <div className='sevenSec arraySlide' >
        <FreeModeSlider data={data?.collection?.collectionField} />
      </div>
      {/* <div className='lg:block hidden'>
      <SliderBanner2 data={data} />
      </div> */}
      <div className='relative'>
      <div className='absolute top-16 text-white text-[20px] z-10 left-[30px]'>UNIT TYPE & SIZES
      </div>
        <LastSlide data={data?.collection?.collectionField} />
      </div>
    </Layout>
  )
}

export default CollectionDetail

export async function getServerSideProps(context) {
  const { slug } = context.params;


  const { data } = await apolloClient.query({
    query: CollectionDetailPageQuery,
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

  return {
    props: {
      data: data,
      layout: layout || null,
    },
  };
}