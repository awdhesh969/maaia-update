import React, { useState } from 'react'
import ClipContent from '../Common/ClipContent';

function AboutSection({ data }) {
  const datas = [
    {
      title: 'Investing in Off-Plan Properties',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas aliquet. Nullam nec nunc nec nunc.'
    },
    {
      title: 'Lower Prices & Flexible Payments',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas aliquet. Nullam nec nunc nec nunc.'
    },
    {
      title: 'High Potential Returns',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas aliquet. Nullam nec nunc nec nunc.'
    },
    {
      title: 'Rental Income Potential',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas aliquet. Nullam nec nunc nec nunc.'
    },
    {
      title: 'Safe & Secure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas aliquet. Nullam nec nunc nec nunc.'
    },
    {
      title: 'Wide Variety of Options',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas aliquet. Nullam nec nunc nec nunc.'
    }
  ];

  // Initial state with all items collapsed
  const [showItems, setShowItems] = useState(Array(data?.realEstateAccordion.length).fill(false));

  // Toggle the visibility of an item
  const toggleItem = (index) => {
    setShowItems(prevState =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };
  return (
    <div className='mx-auto container 2xl:px-10 grid lg:grid-cols-2 lg:gap-40 gap-10 my-20 px-5 lg:px-0'>
      <div className='lg:w-[90%]'>
        <div className='font-satoshi text-[30px] font-semibold mb-5 lg:text-[28px]'>{data?.realEstateSectionHeading}</div>
        <div className='font-neueHaasUnicaPro leading-[35px] text-[22px]'>{data?.realEstateSectionText}</div>
      </div>
      <div className=''>
        {
          data?.realEstateAccordion.map((item, index) => (
            <ClipContent
              key={index}
              title={item.accordionTitle}
              content={item.accordionText}
              id={index}  // use index as id
              showItems={showItems}
              toggleItem={toggleItem}
            />
          ))
        }
      </div>
    </div>
  )
}

export default AboutSection