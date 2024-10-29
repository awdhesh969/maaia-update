import React from 'react'

function PageBanner({ bgImg, title = '', mobBgImg }) {
    function formatTitle(title) {
        return title.replace(' ', '\n');
    }
    return (
        <div className='container 2xl:px-10 m-auto px-5 lg:px-0 py-[100px] lg:py-0'>
            <div style={{ backgroundImage: `url(${bgImg})` }} className={`bg-cover h-[70vh] bg-center py-20 lg:block hidden relative`}>
                <div>
                    <h1 className='text-white text-6xl whitespace-pre-wrap leading-tight absolute bottom-20 left-20 uppercase font-bold'>{formatTitle(title)}</h1>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${mobBgImg ? mobBgImg : bgImg})` }} className={`bg-cover h-[70vh] bg-center py-20 lg:hidden relative`}>
                <h1 className='text-white text-4xl leading-tight absolute bottom-4 left-4 uppercase font-bold'>{title}</h1>
            </div>
        </div>
    )
}

export default PageBanner