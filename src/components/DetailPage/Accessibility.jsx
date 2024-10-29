import React from 'react'

function Accessibility({ data, mapUrl }) {
  return (
    <div className='container 2xl:px-10 m-auto px-5 lg:px-0 py-20'>
      <div className='flex flex-col lg:flex-row lg:gap-14 gap-10'>
        <div className='w-full lg:w-[40%] flex flex-col gap-8'>
          <h2 className='text-[28px] uppercase font-semibold'>{data?.unmatchedAccessibilitySectionHeading}</h2>
          <div className='text-[18px] leading-relaxed flex flex-col gap-4'>
            {data?.nearByPlaces && data?.nearByPlaces.map((detail, index) => (
              <div className='flex gap-5' key={index}>
                <span className='text-gray-500 lg:text-[16px]'>{detail.placeDuration}</span>{' '}
                <span className='lg:text-[16px]'>{detail.nearbyPlace}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full lg:w-[60%] h-96 lg:h-auto'>
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default Accessibility
