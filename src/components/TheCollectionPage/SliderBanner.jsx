import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

function SliderBanner({ img, mobimg, title, location, link,launchingText }) {
  return (
    <div
      className={`bg-cover bg-center h-screen py-20 w-full relative`}
      style={{
        backgroundImage: `url(${img})`, // Default to desktop image
      }}
    >
      {/* Hidden on mobile, show on large screens */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`, // Desktop image
        }}
      />

      {/* Show on mobile, hidden on large screens */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mobimg})`, // Mobile image
        }}
      />

      <div className="absolute bg-gradient-to-t from-black to-transparent left-0 right-0 bottom-0 top-0" />

      {/* <div className="absolute lg:left-[10vh] left-5 lg:top-[10vh] right-5 top-[10vh] text-white">
        <div className="text-3xl uppercase leading-relaxed">
          {title || 'The Collection'} 
        </div>
      </div> */}

      <div className="absolute lg:left-[10vh] left-5 lg:bottom-[10vh] right-5 bottom-[10vh] text-white">
        <div className="lg:text-6xl text-3xl uppercase font-bold leading-relaxed">
          {title || 'La Cle'} {/* Using location prop with a fallback */}
        </div>
        <div className="lg:text-xl lg:mt-5 mt-2 text-3xl uppercase leading-relaxed lg:text-[22px] font-neueHaasUnicaPro">
          {location || 'Al Furjan'} {/* Reusing location prop */}
        </div>
        <div className="lg:mt-5 mt-2 flex gap-10 justify-between lg:justify-start capitalize">
          <span className="my-auto lg:text-[16px] leading-[27.11px] font-neueHaasUnicaPro">
           {launchingText}
          </span>
          <Link href={link}>
            <MdOutlineArrowOutward className="my-auto text-3xl bg-black cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
