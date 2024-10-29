import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function SliderBanner2({data}) {




  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  useGSAP(() => {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = dots.length;
    let slideWidth = document.querySelector('.slide').offsetWidth;
    let currentIndex = 0;
    const texts = gsap.utils.toArray('.headTxt');
    const descText = gsap.utils.toArray('.descText');descText

    // Function to update slide width dynamically
    function updateSlideWidth() {
      slideWidth = document.querySelector('.slide').offsetWidth;
      ScrollTrigger.refresh(); // Refresh ScrollTrigger to recalculate dimensions
    }

    // Update the slider position and dot state
    function updateSlider() {
      gsap.to(slides, {
        x: -currentIndex * slideWidth,
        duration: 0.5,
        ease: "power1.inOut"
      });
      updateDots();
      animateText();
    }

    // Update dot states
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    // Initialize slider
    updateSlider();

    // Dot click event
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
      });
    });

    function animateText() {
      texts.forEach((text, index) => {
        if (index === currentIndex) {
          gsap.to(text, {
            opacity: 1,
            x: 0,
            delay: 0.5,
            textOverflow: 'clip',
            width: 'auto',
            duration: 1,
            color: 'white',
            ease: "power2.out"
          });
        } else {
          gsap.set(text, {
            textOverflow: 'hidden',
            x: 50,
            width: '0px',
            opacity: 0,
            textWrap: 'nowrap',
            color: 'transparent'
          });
        }
      });
      descText.forEach((text, index) => {
        if (index === currentIndex) {
          gsap.to(text, {
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 1,
            ease: "power2.out"
          });
        } else {
          gsap.set(text, {
            textOverflow: 'hidden',
            y: 50,
            opacity: 0,
          });
        }
      });
    }

    // ScrollTrigger to pin slider and handle updates
    ScrollTrigger.create({
      trigger: '.slider',
      pin: true,
      start: 'top top',
      // snap: {
      //   snapTo: 1 / (totalSlides - 1), // Snap to each slide
      //   duration: { min: 0.2, max: 0.5 }, // Optional: Adjust snapping duration
      //   delay: 0.1, // Optional: Add delay to snap
      //   ease: "power1.inOut"
      // },
      end: () => `+=${(slideWidth * totalSlides) - slideWidth / 2}`, // Snap to the end of the slider
      scrub: true, // Synchronize scroll movement with animation
      // markers: true, // Optional: Add markers to see where pinning starts and ends
      onUpdate: (self) => {
        const scrollProgress = self.progress * (totalSlides - 1);
        const newIndex = Math.floor(scrollProgress);

        // Update only if index changes to prevent excessive updates
        if (newIndex !== currentIndex) {
          currentIndex = newIndex;
          setActiveIndex(newIndex);
          updateSlider();
        }
      }
    });

    // Listen for window resize to adjust slide width
    window.addEventListener('resize', updateSlideWidth);

  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {
          data.map((slide, index) => (
            <div key={index} className="slide relative">
              <div style={{ backgroundImage: `url(${slide.image})` }} className="bg-cover h-screen">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent h-full"></div>
                <div className="container 2xl:px-10 relative mx-auto h-full px-5 lg:px-0 font-satoshi">
                  <div className="absolute top-16 text-white text-[20px]">UNIT TYPE & SIZES</div>
                  <div className="absolute bottom-20 inline-flex flex-col justify-start items-start">
                    <div className="headTxt inline-block bg-gray-300 p-2 mb-5 rounded-sm text-center text-white">{slide.beds}</div>
                    <p className="text-white descText block">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="absolute right-0 bottom-20">
        <div className="dots">
          {
            data.map((_, index) => (
              <div key={index} onClick={()=>setActiveIndex(index)} className={`dot ${activeIndex === index ? 'active w-8' : 'w-3'} h-3 duration-700 rounded-full`} data-index={index}></div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SliderBanner2;
