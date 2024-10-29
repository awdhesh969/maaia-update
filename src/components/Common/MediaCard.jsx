import Link from 'next/link'
import React from 'react'

function MediaCard({data, index}) {
  return (
    <Link href={`/media/${data.title}`} key={index}>
    <div className='w-full bg-gray-500 h-[250px] relative'>
      <img src={data.img} alt={data.title} className='w-full h-full object-cover' />
    </div>
    <div className="flex my-5 justify-between">
      <div className='bg-[#909389] text-white px-2 py-1 lg:text-[16px] font-neueHaasUnicaPro'>{data.location}</div>
      <div className='my-auto text-gray-400 lg:text-[16px] font-neueHaasUnicaPro'>{data.pubslihOn}</div>
    </div>
    <h3 className='text-xl mb-2 font-semibold line-clamp-1 lg:text-[22px] font-satoshi'>{data.title}</h3>
    <p className='line-clamp-2 lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro'>{data.description}</p>
  </Link>
  )
}

export default MediaCard