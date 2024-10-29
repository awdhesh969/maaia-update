import React from 'react';
import Pool from '../../../public/assets/svgs/Pool';
import Star from '../../../public/assets/svgs/Star';
import KidsPool from '../../../public/assets/svgs/KidsPool';
import Garden from '../../../public/assets/svgs/Garden';
import Dumble from '../../../public/assets/svgs/Dumble';
import Gender from '../../../public/assets/svgs/Gender';
import Steam from '../../../public/assets/svgs/Steam';
import RooftopGarden from '../../../public/assets/svgs/RooftopGarden';
import Jogging from '../../../public/assets/svgs/Jogging';
import Yoga from '../../../public/assets/svgs/Yoga';
import Barbique from '../../../public/assets/svgs/Barbique';

function Amenities({ data }) {
  const amenities = [
    { text: '5-star reception space', icon: <Star /> },
    { text: '5m long pool, sunken bar', icon: <Pool /> },
    { text: 'Leisure area, kids pool', icon: <KidsPool /> },
    { text: 'Landscaped garden', icon: <Garden /> },
    { text: '3500 sq. ft fully equipped gym', icon: <Dumble /> },
    { text: 'Separate areas for ladies and gents', icon: <Gender /> },
    { text: 'Sauna and Steam rooms', icon: <Steam /> },
    { text: 'Rooftop garden', icon: <RooftopGarden /> },
    { text: '200m jogging loop', icon: <Jogging /> },
    { text: 'Yoga area', icon: <Yoga /> },
    { text: 'Barbecue area', icon: <Barbique /> },
  ];

  return (
    <div className='bg-black mx-auto font-satoshi'>
      <div className='container 2xl:px-10 mx-auto px-5 lg:px-0 py-20 text-white'>
        <div className='mb-8'>
          <h2 className='text-[28px] font-medium leading-[40.5px] text-left mb-8'>{data?.happinessSectionHeading}</h2>
          <p className='text-[22px] font-medium leading-[32.4px] text-left'>{data.happinessSubheading}</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {data?.amenities && data?.amenities.map((amenity, index) => (
            <div key={index} className='border border-zinc-800 p-4 text-left'>
              {/* <Image src={amenity.imgSrc} alt={amenity.text} className='mb-4 h-8 w-8 '/> */}
              <div className='mb-4'>
                <img src={amenity.amenitiesIcon.node.mediaItemUrl} alt="" srcSet="" className='h-8 w-8' />
              </div>
              <p className='text-[16px] font-medium lg:w-[80%]'>{amenity.amenitiesText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Amenities
