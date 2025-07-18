import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="homeSwiper"
      >
        <SwiperSlide>
          <div className="slider-image-container">
            <Image 
              src='/images/edificio-oficina-nyc.png' 
              alt='Oficina/Edificio NYC'
              fill
              priority={true}
              quality={85}
              sizes="(max-width: 320px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-image-container">
            <Image 
              src='/images/oficina-nyc.jpeg' 
              alt='Oficinas NYC'
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 320px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-image-container">
            <Image 
              src='/images/garita-vigilancia.jpeg' 
              alt='Garita vigilancia'
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 320px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-image-container">
            <Image 
              src='/images/guardias.jpg' 
              alt='Vigilancia'
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 320px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .homeSwiper {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .slider-image-container {
          position: relative;
          width: 100%;
          height: 50vh;
          min-height: 250px;
          max-height: 500px;
          overflow: hidden;
        }

        .homeSwiper :global(.swiper-pagination-bullet) {
          opacity: 0.7;
        }

        .homeSwiper :global(.swiper-pagination-bullet-active) {
          opacity: 1;
        }

        .homeSwiper :global(.swiper-button-next),
        .homeSwiper :global(.swiper-button-prev) {
          color: #fff;
          width: 40px;
          height: 40px;
        }

        .homeSwiper :global(.swiper-button-next::after),
        .homeSwiper :global(.swiper-button-prev::after) {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .slider-image-container {
            height: 35vh;
            min-height: 200px;
            max-height: 350px;
          }

          .homeSwiper :global(.swiper-button-next),
          .homeSwiper :global(.swiper-button-prev) {
            width: 35px;
            height: 35px;
          }
          
          .homeSwiper :global(.swiper-button-next::after),
          .homeSwiper :global(.swiper-button-prev::after) {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .slider-image-container {
            height: 30vh;
            min-height: 180px;
            max-height: 280px;
          }

          .homeSwiper :global(.swiper-button-next),
          .homeSwiper :global(.swiper-button-prev) {
            display: none;
          }
          
          .homeSwiper :global(.swiper-pagination) {
            bottom: 10px;
          }
        }

        @media (max-width: 360px) {
          .slider-image-container {
            height: 25vh;
            min-height: 140px;
            max-height: 230px;
          }
        }

        @media (max-width: 320px) {
          .homeSwiper {
            width: 100%;
            margin: 0;
            padding: 0;
          }
          
          .slider-image-container {
            height: 22vh;
            min-height: 120px;
            max-height: 200px;
            width: 100%;
          }

          .homeSwiper :global(.swiper-button-next),
          .homeSwiper :global(.swiper-button-prev) {
            display: none;
          }
          
          .homeSwiper :global(.swiper-pagination) {
            bottom: 8px;
          }
          
          .homeSwiper :global(.swiper-pagination-bullet) {
            width: 6px;
            height: 6px;
            margin: 0 3px;
          }

        }
        

        @media (max-width: 280px) {
          .slider-image-container {
            height: 20vh;
            min-height: 100px;
            max-height: 180px;
          }
          
          .homeSwiper :global(.swiper-pagination-bullet) {
            width: 5px;
            height: 5px;
            margin: 0 2px;
          }
        }

        @media (min-width: 1200px) {
          .slider-image-container {
            height: 60vh;
            max-height: 600px;
          }
        }
      `}</style>
    </>
  );
}