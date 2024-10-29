import React from 'react';
import Image from 'next/image';
import Ceo from '../../../public/assets/imgs/Rectangle-10.png';
import linkedin from '../../../public/assets/imgs/linkedin-logo.png';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function Leadership({data}) {
  return (
    <div className='w-full bg-[rgba(144,147,137,1)] mx-auto text-black'>
      <div className='container 2xl:px-10 mx-auto px-5 lg:px-0'>
        <div className='grid lg:grid-cols-2 py-20 gap-20'>
          <div className='relative w-full h-[598px] order-2 lg:order-1'>
            <Image src={Ceo} alt='CEO' layout="fill" objectFit="cover" />
          </div>
          <div className='order-1 lg:order-2'>
            <h2 className='text-[30px] font-satoshi lg:text-[28px] uppercase'>{data?.leadershipSectionTitle}</h2>
            <div className='text-[200px] font-satoshi'>
              “
            </div>
            <p className='mb-10 -mt-32 lg:-mt-36 whitespace-pre-wrap lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro'>
             {data?.profileText}
            </p>
            <div className='flex gap-20 justify-between lg:justify-start'>
              <div className='my-auto'>
                <p className='font-semibold text-base'>{data?.profileName}</p>
                <p className='text-sm'>{data?.designation}</p>
              </div>
              <div className='flex justify-center items-center'>
                <Link target="_blank" rel="noopener noreferrer" href={data?.profileSocialIconUrl||'/our-perspective'}>
                  {/* <FaLinkedin className='text-4xl my-auto' /> */}
                  <img src={data?.profileSocialIcon?.node?.mediaItemUrl} alt="" srcSet="" />
                </Link>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Leadership;
