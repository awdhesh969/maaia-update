import React from 'react'
import Image from 'next/image'

function Overview({ title, details, imageUrl }) {
  return (
    <div className='container 2xl:px-10 mx-auto px-5 lg:px-0 py-20'>
      <div className='flex gap-14 lg:gap-10 flex-col lg:flex-row'>
        <div className='w-full lg:w-[35%] flex flex-col gap-10 font-neueHaasUnicaPro'>
          <h2 className='text-[28px]'>{title}</h2>
          <div className='text-[22px] leading-[40px] h-full flex flex-col justify-between whitespace-pre-wrap'>
            {/* {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))} */}
            {details}
          </div>
        </div>

        <div className='w-full lg:w-[65%] h-96 lg:h-80 relative'>
          <Image src={imageUrl} alt={"img"} layout='fill' />
        </div>
      </div>
    </div>
  )
}

export default Overview
