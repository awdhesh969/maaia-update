import PageBanner from '@/components/Common/PageBanner'
import Layout from '@/components/Layout/index'
import React, { useEffect } from 'react'
import Email from '../../public/assets/svgs/Email'
import Location from '../../public/assets/svgs/Location'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ConnectPageQuery } from '@/queries/ConnectPageQuery'
import apolloClient from '@/lib/apolloClient'
import axios from 'axios'
import { HeaderFooterQuery } from '@/queries/HeaderFooterQuery'
import Loading from '@/components/Common/Loading'

function ContactUs({ data, layout }) {

  const [isLoading, setIsLoading] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [broker, setBroker] = React.useState('');


  const isEmptyForm = email === '' || message === '' || name === '' || phone === '' || broker === '';

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const socialMedia = [
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com'
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com'
    },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com'
    }
  ]


  gsap.registerPlugin(ScrollTrigger)
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
            start: "bottom +100% ",
            end: "+=100%",
            // snap: 1 / 1,
            // markers: true,
          },
          ease: "none"
        });
        isDesktop && gsap.from('.ThirdSec', {
          scrollTrigger: {
            trigger: '.ThirdSec',
            pin: true,
            start: 'top top',
            pinSpacing: false,
            end: '+=100%',
            // scrub: 1,
            // snap: 1,
            // markers: true
          },
        })
      }
    );
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('phone-number', `${phone}`);
    formData.append('broker-investor', broker);
    formData.append('your-message', message);
    formData.append('_wpcf7_unit_tag', 'wpcf7-f202-p2-o1');
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_FORM_URL}/contact-form-7/v1/contact-forms/202/feedback`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setResponseMessage(response?.data?.message);
      setEmail('');
      setName('');
      setPhone('');
      setMessage('');
      setBroker('');
      setTimeout(() => {
        setIsLoading(false);
        setResponseMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting the form', error);
      setResponseMessage('Something went wrong. Please try again later.');
      setEmail('');
      setName('');
      setPhone('');
      setMessage('');
      setBroker('');
      setTimeout(() => {
        setIsLoading(false);
        setResponseMessage('');
      }, 3000);
    }
  };




  return (
    <Layout headerBg={true} headerData={layout} footerData={layout?.footer}>
      <div className='topSec lg:h-[150vh]'>
        <PageBanner bgImg={data?.featuredImage?.node?.mediaItemUrl} mobBgImg={'/assets/imgs/bg16.png'} title={data?.title} />
        <div className='secondSec lg:h-screen'>
          <div className='container 2xl:px-10 m-auto px-5 lg:px-0'>
            <div className='mt-20 text-[28px] font-semibold font-satoshi mb-10'>
              {data?.contactPage?.contactHeadingText}
            </div>
            <div className='mt-20 whitespace-pre-wrap text-[22px] leading-[35px] font-neueHaasUnicaPro mb-20 lg:w-[80%]'>
              {data?.contactPage?.contactAboutLongText}
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='ThirdSec lg:h-screen lg:flex lg:flex-col bg-[#D3D4D0] py-[140px] lg:py-0 px-5 lg:px-0'>
          <div className='container 2xl:px-10 m-auto lg:grid grid-cols-2'>
            <div>
              <div className='font-satoshi text-[28px] font-semibold lg:mb-10 mb-16'>Get in Touch</div>
              <div className='grid lg:grid-cols-2 mt-10'>
                <div className='flex gap-4 lg:my-3 my-6'>
                  <div className="mt-[6px]">
                    <Email isBlack />
                  </div>
                  <div className='font-neueHaasUnicaPro'>
                    <div className='font-semibold'>Phone</div>
                    <div className='text-[#0C0C0C80] mt-1'>{data?.contactPage?.contactNumber}</div>
                  </div>
                </div>
                <div className='flex gap-4 lg:my-3 my-6'>
                  <div className="mt-[6px]">
                    <Email isBlack />
                  </div>
                  <div className='font-neueHaasUnicaPro'>
                    <div className='font-semibold'>Email</div>
                    <div className='text-[#0C0C0C80] mt-1'>{data?.contactPage?.contactEmail}</div>
                  </div>
                </div>
              </div>

              <div className='grid lg:grid-cols-2 gap-x-5 mr-10'>
                <div className='flex gap-4 mb-6'>
                  <div className="">
                    <Location isBlack />
                  </div>
                  <div className='font-neueHaasUnicaPro'>
                    <div className='font-semibold'>Head Office</div>
                    <div className='text-[#0C0C0C80] mt-1 whitespace-pre-wrap'>{data?.contactPage?.contactHeadOffice}</div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className="">
                    <Location isBlack />
                  </div>
                  <div className='font-neueHaasUnicaPro'>
                    <div className='font-semibold'>Office Hours:</div>
                    <div className='text-[#0C0C0C80] mt-1 whitespace-pre-wrap'>{data?.contactPage?.contactOfficeHours}</div>
                  </div>

                </div>
                <div className='font-neueHaasUnicaPro'>
                  <div className='mt-10 font-bold text-[20px]'>
                    Follow us on
                  </div>
                  <div className='text-[#909389] mb-4  my-2'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit
                  </div>
                  <div className="mb-20 lg:mb-0">
                    <div className="flex gap-5">
                      {
                        socialMedia.map((item, index) => (
                          <Link target="_blank" rel='' key={index} href={item.link} className='bg-[#010101] text-[#909389] h-10 w-10 flex hover:bg-[#909389] hover:text-[#010101]'>
                            <div className='m-auto text-xl'>
                              {item.icon}
                            </div>
                          </Link>
                        ))
                      }
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className=''>
              <div className='font-satoshi font-bold text-[28px] mb-4'>
                Inquiry Form
              </div>
              <div className='text-[#0C0C0C80] text-lg lg:text-[16px] font-neueHaasUnicaPro mb-10'>Fill out the form below, and a member of our team will get back to you</div>
              {
                isLoading ?
                  <div className='lg:h-[80%] h-[50vh] flex'>
                    <div className='m-auto'>
                      {
                        responseMessage !== '' ?
                          <div className='text-black[#0C0C0C80] text-lg font-neueHaasUnicaPro'>
                            {responseMessage}
                          </div>
                          :
                          <Loading />
                      }
                    </div>
                  </div>
                  :
                  <div className='grid lg:grid-cols-2 gap-10'>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='border-b pb-2 border-[#01010124] bg-transparent text-[#0C0C0C80] focus:outline-none text-[18px]' placeholder='Name *' />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-b pb-2 border-[#01010124] bg-transparent text-[#0C0C0C80] focus:outline-none text-[18px]' placeholder='Email *' />
                    <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} className='border-b pb-2 border-[#01010124] bg-transparent text-[#0C0C0C80] focus:outline-none text-[18px]' placeholder='Phone Number *' />
                    <select value={broker} onChange={(e) => setBroker(e.target.value)} className='border-b pb-2 border-[#01010124] bg-transparent focus:outline-none text-[18px]'>
                      <option value="">Are you a Broker or Investor?</option>
                      <option value="broker">broker</option>
                      <option value="investor">investor</option>
                    </select>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='border-b pb-2 lg:col-span-2 border-[#01010124] bg-transparent text-[#0C0C0C80] focus:outline-none text-[18px] h-[150px] lg:h-32' placeholder='Message'></textarea>
                    <button disabled={isEmptyForm} onClick={handleSubmit} type='submit' className={`bg-[#010101] text-white text-[18px] py-2 px-8 flex justify-between hover:scale-105 duration-500 ${isEmptyForm && 'cursor-not-allowed'}`}>Submit <MdOutlineArrowOutward className="my-auto text-xl rotate-45 lg:rotate-0" /></button>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs



export const getStaticProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: ConnectPageQuery,
      fetchPolicy: 'network-only',
    });
    const { data: layout } = await apolloClient.query({
      query: HeaderFooterQuery,
      fetchPolicy: 'network-only',
    });

    return {
      props: {
        data: data?.page || null,
        layout: layout || null,
      },
      revalidate: 0, // Revalidate every 1 second
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
      revalidate: 0, // Revalidate every 1 second even if there's an error
    };
  }
};



// export const getServerSideProps = async () => {
//   try {
//     const { data } = await apolloClient.query({
//       query: ConnectPageQuery,
//     });
//     const { data: layout } = await apolloClient.query({
//       query: HeaderFooterQuery,
//       fetchPolicy: 'no-cache',
//     });

//     return {
//       props: {
//         data: data?.page || null,
//         layout: layout || null,
//       },
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

// export const revalidate = 1

