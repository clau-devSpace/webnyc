
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Camera, Locate, Search} from 'lucide-react';
import GoogleMapEmbed from '../components/map';
import WhatsAppBoton from '../components/whatsappButton';
import CtaSection from '../components/ctaButton';
import Link from 'next/link';
import Head from "next/head";
import Slider from "../components/sliderPictures";
import SliderCompanies from "../components/sliderCompanies";
import { useAnimateOnScroll } from '@/hooks/animate';


const SecurePro = () => {
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useAnimateOnScroll();

  const ImagenFondoNYC = "/images/fondo-pantalla-principal.webp";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "NYC Seguridad - Servicios de Seguridad Privada",
    "description": "Empresa líder en seguridad privada con 23 años de experiencia. Ofrecemos seguridad física, electrónica e investigaciones profesionales.",
    "provider": {
      "@type": "Organization",
      "name": "NYC Seguridad",
      "url": "https://nycseguridad.com.ar",
      "logo": "https://nycseguridad.com.ar/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "España 1055",
        "addressLocality": "Comodoro Rivadavia",
        "addressRegion": "Chubut",
        "addressCountry": "AR"
      },
      "telephone": "+54-297-443-8169",
      "areaServed": "Comodoro Rivadavia, Chubut, Argentina",
      "foundingDate": "2001"
    },
    "serviceType": [
      "Seguridad Física",
      "Seguridad Electrónica",
      "Investigaciones Privadas",
      "Monitoreo 24/7",
      "Control de Accesos"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "availableLanguage": "es",
      "serviceLocation": {
        "@type": "Place",
        "address": "España 1055, Comodoro Rivadavia, Chubut, Argentina"
      }
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            animateStats();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateStats = () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach((stat) => {
    const finalValue = stat.textContent;
    if (finalValue.includes('+')) {
      const numValue = parseInt(finalValue.replace('+', ''));
      animateValue(stat, 0, numValue, 2000, '+', true); 
    } else if (finalValue.includes('%')) {
      const numValue = parseInt(finalValue.replace('%', ''));
      animateValue(stat, 0, numValue, 2000, '%', false);
    } else {
      return;
    }
  });
};

const animateValue = (element, start, end, duration, symbol = '', isPrefix = false) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    
    // Aplicar el símbolo como prefijo o sufijo según corresponda
    if (isPrefix) {
      element.textContent = symbol + currentValue;
    } else {
      element.textContent = currentValue + symbol;
    }
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
   <>

    <Head>
        <title>NYC Seguridad | Empresa de Seguridad Privada</title>
        <meta
          name="description"
          content="NYC es una Empresa líder en seguridad privada con 23 años de experiencia. Ofrecemos seguridad física, electrónica, investigaciones y monitoreo 24/7. Protección profesional para empresas e industrias."
        />
        <meta
          name="keywords"
          content="seguridad privada, empresa seguridad, seguridad física, seguridad electrónica, investigaciones privadas, monitoreo 24/7, vigilancia, control accesos"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="NYC Seguridad - Empresa de Seguridad Privada"
        />
        <meta
          property="og:description"
          content="Empresa líder en seguridad privada con 23 años de experiencia. Seguridad física, electrónica, investigaciones y monitoreo 24/7."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nycseguridad.com.ar" />
        <meta property="og:image" content="https://nycseguridad.com.ar/images/fondo-pantalla-principal.jpg" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="NYC Seguridad" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NYC Seguridad - Empresa de Seguridad Privada" />
        <meta name="twitter:description" content="Empresa líder en seguridad privada con 23 años de experiencia." />
        <meta name="twitter:image" content="https://nycseguridad.com.ar/images/fondo-pantalla-principal.jpg" />
        
        <link rel="canonical" href="https://nycseguridad.com.ar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

    <div>
      {/* Hero Section */}
      <WhatsAppBoton />
      <section className="hero" id="inicio" style={{
         backgroundImage: `url(${ImagenFondoNYC})`
      }}>
        <div className="hero-content">
          <h1 className='animate-item'>Seguridad Integral</h1>
         {/*  <p className="hero-subtitle">Protección Profesional 24/7</p>*/}
          <p>En <strong>NYC</strong> Brindamos servicios de seguridad privada con los más altos estándares de calidad y profesionalismo.</p>
          <a href="#servicios" className="cta-boton" onClick={(e) => handleSmoothScroll(e, '#servicios')}>
            Conocer Servicios
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="servicios">
        <div className="container container-tarjetas">
          <div className="section-title">
            <h2 className='nuestros-servicios'>Nuestros Servicios</h2>
          </div>
          <div className="services-grid animate-item" data-animation="animate__fadeInLeft">
            <div className="service-card">
              <h2 className='h2-cards'>NYC</h2>
              <div className="service-icon">
                <ShieldCheck size={40} />
              </div>
              <h3>Seguridad <span className='letra-naranja'>F</span>ísica</h3>
              <p>Servicios de Seguridad Física especializados según tus necesidades</p>
              <div className='background-detalles'>
              <p><Link className='detalles' href="/seguridad-fisica">Detalles</Link></p>
              </div>
            </div>
             <div className="service-card">
              <h2 className='h2-cards'>NYC</h2>
              <div className="service-icon">
                <Camera size={40} />
              </div>
              <h3>Seguridad <span className='letra-naranja'>E</span>lectrónica</h3>
              <p>Seguridad Electrónica con Tecnologías de calidad e innovadoras</p>
              <div className='background-detalles'>
               <p><Link className='detalles' href="/seguridad-electronica">Detalles</Link></p>
              </div>
            </div>
            <div className="service-card">
              <h2 className='h2-cards'>NYC</h2>
              <div className="service-icon">
               <Search size={40}/>
              </div>
              <h3><span className='letra-naranja'>I</span>nvestigaciones</h3>
              <p>Investigaciones adaptadas a diversas situaciones</p>
              <div className='background-detalles'>
              <p><Link className='detalles' href="/investigaciones">Detalles</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="nosotros">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2><span className='nyc-about'>Sobre </span>NYC</h2>
              <p>Con 23 años de experiencia en el sector de la seguridad, <strong>NYC es una empresa líder</strong> que se dedica a brindar soluciones integrales de protección a empresas e industrias.</p>
              <p>Nuestro equipo está formado por profesionales altamente capacitados y certificados, comprometidos con la excelencia en el servicio y la innovación constante en tecnologías de seguridad.</p>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Personal Calificado</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Tecnología Avanzada</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Respuesta Inmediata</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Soporte 24/7</span>
                </div>
                 <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Reducción de Costos</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Estudios de Seguridad</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">+23</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+500</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Atención Continua</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Profesionalismo</span>
            </div>
          </div>
        </div>
      </section>

      <section className='swiperSection'>
       <SliderCompanies />
      </section>
      
      {/* Map Section */}
      <section className="map-section" id="contacto">
        <div className="map-container">
          <div className="section-tittle">
            <h2 className='section-tittle-h2'>Nuestra Ubicación</h2>
             <h3 className='direccion'><Locate className='locate'/>España 1055, Comodoro Rivadavia, Chubut.</h3>
          </div>
            <div className="map-placeholder">
              <GoogleMapEmbed />
            </div>
        </div>
      </section>

      <CtaSection />
      
    </div>
   </>
   
  );
};

export default SecurePro;