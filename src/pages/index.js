import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import AboutUsSection from "@/components/HomePage/AboutUsSection";
import CollectionSection from "@/components/HomePage/CollectionSection";
import OurJourneySection from "@/components/HomePage/OurJourneySection";
import MediaSection from "@/components/HomePage/MediaSection";
import apolloClient from '../lib/apolloClient';
import { HomePageQuery } from "@/queries/HomePageQuery";
import { HeaderQuery } from "@/queries/HeaderQuery";
import { HeaderFooterQuery } from "@/queries/HeaderFooterQuery";


gsap.registerPlugin(ScrollTrigger);


export default function Home({ data, posts, layout }) {

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
        gsap.from(".first", {
          scrollTrigger: {
            trigger: ".first",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: "top top",
            // snap: isDesktop ? 1 / 2 : 1 / 1,
            end: "+=100%",
            // onUpdate() {
            // console.log("Update")
            // }
          },
          ease: "none"
        });

        isMobile && gsap.from(".added_by_ad", {
          scrollTrigger: {
            trigger: ".added_by_ad",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // start: "top top",
            end: "+=100%",
            // markers: true,
            // snap: 1 / 1,
          },
          ease: "none"
        });

        gsap.from(".second", {
          scrollTrigger: {
            trigger: ".second",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            //start: "top top",
            end: "+=100%",
            // markers: true,
            // snap: 1 / 1,
          },
          ease: "none"
        });

        gsap.from(".secondPart", {
          scrollTrigger: {
            trigger: ".secondPart",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: isDesktop ? "top top" : "top top",
            end: "100%",
            // snap: 1,
          },
          ease: "none",
        });
        const third = gsap.utils.toArray('.third');
        third.forEach((el, index) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: "top top",
            end: isDesktop ? "+=100%" : "100%",
            // snap: 1/1,
          },
          ease: "none",
        });
        });
        gsap.from(".ourJourney", {
          scrollTrigger: {
            trigger: ".ourJourney",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: isDesktop ? "top top" : "top top",
            end: "100%",
            // snap: 1,
          },
          ease: "none",
        });

        isDesktop && gsap.from(".media", {
          scrollTrigger: {
            trigger: ".media",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: isDesktop ? "top top" : "top top",
            end: "100%",
            // snap: 1,
          },
          ease: "none",
        });

        gsap.from("footer", {
          scrollTrigger: {
            trigger: ".four",
            scrub: .01,
            pin: true,
            // pinSpacing: true,
            start: "top top",
            end: `${isDesktop ? 'bottom bottom' : 'top center'}`,
            // markers: true,
            // snap: 1 / 1,
            // onUpdate() {
            //   console.log("Update")
            // }
          },
          ease: "none",
          // height: isDesktop ? "100vh" : "auto"
        });

        return () => {
          mm.kill();
        };

      }
    );

  }, []);




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
  return (
    <Layout headerBg={headerBg} headerData={layout} footerData={layout?.footer}>
      <>
        <section className="h-slide first h-screen bg-black">
          <video className="relative h-full w-full object-cover hidden lg:block" controls={false} autoPlay muted loop>
            <source src={data?.heroVideo?.node?.mediaItemUrl || '/assets/video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="fixed top-0 left-0 h-full w-full object-cover lg:hidden" controls={false} autoPlay muted loop>
            <source src={data?.heroVideo?.node?.mediaItemUrl || '/assets/video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="fixed lg:left-[10vh] left-5 lg:bottom-[10vh] bottom-[15vh] text-white lg:text-6xl whitespace-pre-wrap text-3xl uppercase font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: data?.heroTitle }} /> */}
        </section>
        <section className="h-slide added_by_ad lg:hidden">
          <div className="bg-white lg:h-[50vh] h-screen flex">
            <div className="container 2xl:px-10 m-auto">
              <p className="lg:w-1/2 px-5 lg:px-0 text-[22px] leading-[27.11px] font-semibold font-satoshi">
                {data?.introductionText}
              </p>
            </div>
          </div>
        </section>
        <section className="h-slide second">
          <section className="h-slide">
            <div className="w-full">
              <div className="bg-white lg:h-[50vh] lg:flex hidden sticky top-0">
                <div className="container 2xl:px-10 m-auto">
                  <p className="lg:w-1/2 px-5 lg:px-0 text-[22px] leading-[27.11px] font-semibold font-satoshi">
                    {data?.introductionText}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full">
            <AboutUsSection data={data} />
          </div>
        </section>
        {
          data?.featuredCollectionHome?.length > 0 && data?.featuredCollectionHome.map((collection, index) => (
            <section key={index} className="h-slide third">
              <div className="w-full">
                <CollectionSection data={collection} />
              </div>
            </section>
          ))
        }
        {/* <section className="h-slide third">
          <div className="w-full">
            <CollectionSection data={data} />
          </div>
        </section> */}
        <section className="h-slide ourJourney">
          <div className="w-full">
            <OurJourneySection data={data} />
          </div>
        </section>
        {/* <section className="h-slide media sticky">
          <div className="w-full">
            <MediaSection data={data} posts={posts} />
          </div>
        </section> */}
      </>
    </Layout>
  );
}





export const getStaticProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: HomePageQuery,
    });
    const { data: layout } = await apolloClient.query({
      query: HeaderFooterQuery,
    });

    return {
      props: {
        data: data?.page?.homepage || null,
        posts: data?.posts || null, // Ensure that `data` is either the result or `null`
        layout: layout || null,
      },
      revalidate: 1,
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
