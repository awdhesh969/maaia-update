import React from 'react'

function PageBanner2({ bgImg, title = '', mobBgImg }) {
    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${bgImg})` }} className={` relative bg-cover h-[100vh] `}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent h-full'></div>

                <div className=''>
                    <h1 className='text-white text-6xl leading-tight absolute bottom-20 lg:left-20 left-5
                     uppercase font-bold'>{title}</h1>
                </div>

            </div>

            
        </div>
    )
}

export default PageBanner2