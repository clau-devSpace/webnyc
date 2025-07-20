import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
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
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <div className="slider-image-container special-img-class">
            <img 
              src='/images/edificio-oficina-nyc.webp' 
              alt='Oficina/Edificio NYC'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                // Mostrar placeholder si la imagen no carga
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjM1MCIgeT0iMjAwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5Ij5JbWFnZW4gbm8gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-image-container special-img-class">
            <img 
              src='/images/oficina-nyc.webp' 
              alt='Oficinas NYC'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjM1MCIgeT0iMjAwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5Ij5JbWFnZW4gbm8gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-image-container special-img-class">
            <img 
              src='/images/garita-vigilancia.webp' 
              alt='Garita vigilancia'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjM1MCIgeT0iMjAwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5Ij5JbWFnZW4gbm8gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slider-image-container special-img-class">
            <img 
              src='/images/guardias.webp' 
              alt='Vigilancia'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onError={(e) => {
                console.error('Error loading image:', e.target.src);
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjM1MCIgeT0iMjAwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5Ij5JbWFnZW4gbm8gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .homeSwiper {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slider-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .special-img-class{
          border-radius: 8px;
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
      `}</style>
    </div>
  );
}