import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SliderCompanies() {
  const [windowWidth, setWindowWidth] = useState(1024); 
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {

    setIsClient(true);
    
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    { src: '/images/novomet-logo.png', alt: "Novomet" },
    { src: '/images/pecom_color_logotipo.webp', alt: "Pecom" },
    { src: '/images/logoEnergiadelSur.webp', alt: "Energia del Sur" },
    { src: '/images/supercanal-logo.webp', alt: "Supercanal S.A" },
    { src: '/images/logo-crane.webp', alt: "Crane" },
    { src: '/images/Ulterra-logo.webp', alt: "Ulterra" },
    { src: '/images/Grupo Dragon_ Logo Negro.webp', alt: "Grupo Dragon" },
    { src: '/images/geovial.webp', alt: "Geovial" }
  ];

  const getSlidesPerView = () => {
    if (windowWidth >= 1024) return 5;
    if (windowWidth >= 768) return 4;
    if (windowWidth >= 640) return 3;
    return 2;
  };

  const slidesPerView = getSlidesPerView();

  if (!isClient) {
    return <div style={{ height: '300px' }} />; 
  }

   const specialLogos = {
      1:'logoEspecial2',
      2:'logoEspecial',
      3:'logoEspecial',
      6:'logoEspecial',
      4:'logoEspecial2',
      5:'logoEspecial2',
      7:'logoEspecial2'
      }
  
  return (
    <>
      <h2 className="sliderTittle">Empresas que nos eligen</h2>
      <div className="sliderContainer">
        <div 
          className="sliderTrack"
          style={{
            '--slides-per-view': slidesPerView,
            '--total-slides': logos.length * 2,
          }}
        >
          
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="slideItem">
              <div className={`logoContainer ${specialLogos[index] || ''}`}>
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  fill
                  className="logoEmpresa"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                    
                  }}
                />
              </div>
            </div>
          ))}
          
         
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="slideItem">
              <div className={`logoContainer ${specialLogos[index] || ''}`}>
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  fill
                  className="logoEmpresa"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sliderTittle {
          font-size: 2.5rem;
          align-items: center;
          text-align: center;
          justify-content: center;
          padding-top: 4rem;
          color: #2D2D2D;
        }

        .sliderContainer {
          width: 100%;
          max-width: 100%;
          margin: 50px auto 0;
          overflow: hidden;
          position: relative;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .sliderTrack {
          display: flex;
          width: calc(var(--total-slides) * (100% / var(--slides-per-view)));
          animation: slideInfinite 20s linear infinite;
        }

        .slideItem {
          flex: 0 0 calc(100% / var(--total-slides));
          display: flex;
          justify-content: center;
          align-items: center;
          height: 150px;
          padding: 0 15px;
          box-sizing: border-box;
          margin-bottom: 4rem;
        }

        .logoContainer {
          position: relative;
          width: 100%;
          max-width: 240px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .logoContainer.logoEspecial {
          max-width: 280px;
          height: 160px;
        }

        .logoContainer.logoEspecial2{
          max-width: 180px;
          height: 80px;
        }

        .slideItem:hover .logoContainer {
          transform: scale(1.05);
        }

        .logoContainer :global(.logoEmpresa) {
          object-fit: contain !important;
          object-position: center !important;
        }

        @keyframes slideInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2)); 
          }
        }

        
        @media (max-width: 768px) {
          .sliderTittle {
            font-size: 2rem;
            padding-top: 3rem;
          }

          .sliderContainer {
            padding: 0 15px;
            margin: 40px auto 0;
          }

          .slideItem {
            height: 130px;
            padding: 0 12px;
            margin-bottom: 3rem;
          }

          .logoContainer {
            max-width: 200px;
            height: 120px;
          }

          .logoContainer.logoEspecial {
            max-width: 240px;
            height: 140px;
          }

          .sliderTrack {
            animation-duration: 18s; 
          }
        }

       
        @media (max-width: 640px) {
          .sliderTittle {
            font-size: 1.8rem;
            padding-top: 2.5rem;
          }

          .sliderContainer {
            padding: 0 10px;
            margin: 30px auto 0;
          }

          .slideItem {
            height: 120px;
            padding: 0 8px;
            margin-bottom: 2rem;
          }

          .logoContainer {
            max-width: 180px;
            height: 110px;
          }

          .logoContainer.logoEspecial2{
            max-width: 180px;
            height: 90px;
          }

          .sliderTrack {
            animation-duration: 16s;
          }
        }

   
        @media (max-width: 480px) {
          .sliderTittle {
            font-size: 1.6rem;
            padding-top: 2rem;
          }

          .sliderContainer {
            padding: 0 8px;
            margin: 25px auto 0;
          }

          .slideItem {
            height: 110px;
            padding: 0 6px;
            margin-bottom: 1.5rem;
          }

          .logoContainer {
            max-width: 130px;
            height: 75px;
          }

          .logoContainer.logoEspecial2 {
            max-width: 150px;
            height: 70px;
          }

          .sliderTrack {
            animation-duration: 15s;
          }
        }

        
        @media (max-width: 360px) {
          .sliderTittle {
            font-size: 1.4rem;
            padding-top: 1.5rem;
          }

          .sliderContainer {
            padding: 0 5px;
            margin: 20px auto 0;
          }

          .slideItem {
            height: 100px;
            padding: 0 4px;
            margin-bottom: 1rem;
          }

          .logoContainer {
            max-width: 160px;
            height: 100px;
          }

          .logoContainer.logoEspecial2 {
            max-width: 150px;
            height: 70px;
          }

          .sliderTrack {
            animation-duration: 14s;
          }
        }

        
        @media (max-width: 320px) {
          .sliderTittle {
            font-size: 1.3rem;
            padding-top: 1rem;
          }

          .sliderContainer {
            padding: 0 3px;
            margin: 15px auto 0;
          }

          .slideItem {
            height: 90px;
            padding: 0 2px;
            margin-bottom: 0.5rem;
          }

          .logoContainer {
            max-width: 140px;
            height: 90px;
          }

          .logoContainer.logoEspecial {
            max-width: 180px;
            height: 110px;
          }

          .sliderTrack {
            animation-duration: 12s;
          }
        }
      `}</style>
    </>
  );
}