import React from 'react'

function Ccc({data}) {
  return (
    <div className='bg-black mx-auto font-neueHaasUnicaPro lg:h-[50vh] flex flex-col'>
        <div className='container 2xl:px-10 m-auto px-5 lg:px-0 py-20 lg:py-0 text-white' >
          <div className='lg:w-[80%]' dangerouslySetInnerHTML={{__html:data.aboutText}} />
        {/* <h2 className='font-semibold text-[22px]'>AL FURJAN</h2>
        <p className=' lg:text-[16px]'>Culture. Community. Connectivity.</p>

        <p className='mt-10 lg:text-[16px] leading-[27.11px]'>At MAAIA, we embrace a holistic approach to conscious living, aligning our initiatives with global and local sustainability goals.  Our commitment to mindful construction aligns with both global and local sustainability goals, ensuring that our residents contribute to a greater vision by choosing to invest in our projects.</p> */}
        
        </div>
    </div>
  )
}

export default Ccc