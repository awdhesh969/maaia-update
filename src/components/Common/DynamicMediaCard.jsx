import Link from 'next/link'
import React from 'react'

function DynamicMediaCard({ title, index, description, date, link, location, img }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };


  return (
    <Link href={link} key={index}>
      <div className='w-full bg-gray-500 h-[250px] relative'>
        <img src={img} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className="flex my-5 justify-between">
        <div className='bg-[#909389] text-white px-2 py-1 lg:text-[16px] font-neueHaasUnicaPro'>{location}</div>
        <div className='my-auto text-gray-400 lg:text-[16px] font-neueHaasUnicaPro'>{formatDate(date)}</div>
      </div>
      <h3 className='text-xl mb-2 font-semibold line-clamp-1 lg:text-[22px] font-satoshi'>{title}</h3>
      <div className='line-clamp-2 lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro' dangerouslySetInnerHTML={{ __html: description }} />
    </Link>
  )
}

export default DynamicMediaCard