import React from 'react'

function BannerDescription({data}) {
  return (
    <div className='container 2xl:px-10 mx-auto px-5 lg:px-0 my-20'>
        <div className='w-full lg:w-[70%]'>
          <div className='text-[26px] font-medium leading-[35.1px] text-left lg:text-[28px] font-satoshi lg:font-bold'>
             {data?.opWeAreMaaiaSectionTitle}
          </div>
          <div className='text-[18px] font-normal leading-[27.11px] text-left font-neueHaasUnicaPro lg:text-[16px]'>
              <div className='mt-10 whitespace-pre-wrap'>
                 {data?.opWeAreMaaiaText}
              </div>
          </div>
        </div>
    </div>
  )
}

export default BannerDescription
