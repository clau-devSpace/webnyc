import React from "react";
import Head from "next/head";
import styles from './seguridadFisica.module.css';
import Header from "../components/header";
import CtaSection from "../components/ctaButton";
import WhatsAppBoton from "../components/whatsappButton";
import Image from 'next/image';

export default function SeguridadFisica(){
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SecurityService",
        "name": "Servicios de Seguridad Física",
        "description": "Servicios profesionales de seguridad física, vigilancia corporativa, protección de barrios cerrados y seguridad industrial las 24 horas.",
        "provider": {
            "@type": "Organization",
            "name": "NYC Seguridad",
            "areaServed": "Buenos Aires, Argentina"
        },
        "serviceType": [
            "Seguridad Corporativa",
            "Vigilancia de Barrios Cerrados", 
            "Seguridad Industrial",
            "Protección Ejecutiva"
        ],
        "availableChannel": {
            "@type": "ServiceChannel",
            "availableLanguage": "es",
            "serviceLocation": {
                "@type": "Place",
                "address": "Comodoro Rivadavia, Chubut, Argentina"
            }
        }
    }
    return (
      <>
        <Head>
          <title>
            Servicios de Seguridad Física - Vigilancia 24/7 | Protección
            Profesional
          </title>
          <meta
            name="description"
            content="Servicios profesionales de seguridad física: vigilancia y seguridad corporativa, protección de barrios cerrados y seguridad industrial. Personal certificado disponible 24/7. Solicita cotización."
          />
          <meta
            name="keywords"
            content="seguridad física, vigilancia 24 horas, protección corporativa,barrios cerrados, seguridad industrial, guardias de seguridad"
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Servicios de Seguridad Física - Vigilancia 24/7"
          />
          <meta
            property="og:description"
            content="Protección confiable con personal altamente capacitado y tecnología avanzada. Custodia y vigilancia profesional las 24 horas."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/guardias-camioneta.webp" />
          <link rel="canonical" href="https://nycseguridad.com.ar/seguridad-fisica" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>

        <WhatsAppBoton />
        <Header
          title="Seguridad Física"
          description="Protección confiable con personal altamente capacitado y tecnología avanzada. Custodia y vigilancia profesional las 24 horas del día, los 365 días del año."
          backgroundImage="/images/guardias-camioneta.webp"
        />

        {/* Service Overview Section */}
        <section className={styles.serviceOverview}>
          <div className={styles.container}>
            <div className={styles.overviewContent}>
              <div className={styles.overviewText}>
                <h2>Protección Integral</h2>
                <p>
                  Nuestro servicio de seguridad física está diseñado para
                  brindar la máxima protección a personas, propiedades y
                  activos. Contamos con un equipo de profesionales altamente
                  entrenados y certificados que operan bajo los más estrictos
                  protocolos de seguridad.
                </p>
                <p>
                  Utilizamos tecnología de última generación combinada con
                  técnicas tradicionales de vigilancia para garantizar una
                  cobertura completa y efectiva en todos los entornos donde
                  prestamos nuestros servicios.
                </p>
                <div className={styles.overviewFeatures}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🎯</span>
                    <span className={styles.featureText}>
                      Vigilancia Especializada
                    </span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>⚡</span>
                    <span className={styles.featureText}>
                      Respuesta Inmediata
                    </span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>📋</span>
                    <span className={styles.featureText}>
                      Protocolos Certificados
                    </span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>🔒</span>
                    <span className={styles.featureText}>
                      Controles de Accesos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Diseño Horizontal */}
        <section className={styles.servicesSection} id="servicios">
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h3>Nuestras Especialidades</h3>
              <p>
                Servicios de seguridad física adaptados a diferentes sectores y
                necesidades
              </p>
            </div>

            <div className={styles.servicesClean}>
              {/* Servicio 1 - Seguridad Corporativa */}
              <div className={styles.serviceRow}>
                <div className={styles.serviceContent}>
                  <h4>Seguridad Corporativa de Alto Nivel</h4>
                  <p className={styles.serviceDescription}>
                    Protección a Empresas y Locaciones Corporativas
                  </p>

                  <ul className={styles.serviceFeatures}>
                    <li>Personal calificado y con entrenamiento continuo</li>
                    <li>Vigilancia de instalaciones corporativas</li>
                    <li>Protección ejecutiva personalizada</li>
                    <li>Seguridad especializada para eventos</li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/seguridad-fisica-1.webp"
                    alt="Seguridad Corporativa, monitoreo"
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Servicio 2 - Barrios Cerrados */}
              <div className={styles.serviceRow}>
                <div className={styles.serviceContent}>
                  <h4>
                    Protección integral para barrios cerrados y urbanizaciones
                    privadas
                  </h4>
                  <p className={styles.serviceDescription}>
                    Servicios especializados que garantizan la tranquilidad y
                    seguridad de las familias en comunidades residenciales
                    exclusivas.
                  </p>

                  <ul className={styles.serviceFeatures}>
                    <li>Vigilancia perimetral las 24 horas del día</li>
                    <li>Control de acceso vehicular y peatonal</li>
                    <li>Patrullajes internos programados y aleatorios</li>
                    <li>Monitoreo de sistemas de alarmas</li>
                  </ul>

                  <p className={styles.serviceAdditional}>
                    Nuestro equipo especializado en seguridad residencial cuenta
                    con protocolos específicos para entornos familiares,
                    garantizando discreción y eficiencia en cada intervención.
                    Trabajamos en coordinación con las administraciones de los
                    barrios para mantener los más altos estándares de seguridad.
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/garita-vigilancia.webp"
                    alt="Garita de Vigilancia en Barrios Cerrados"
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Servicio 3 - Industria y Comercios */}
              <div className={styles.serviceRow}>
                <div className={styles.serviceContent}>
                  <h4>Soluciones para Empresas e Industrias</h4>
                  <p className={styles.serviceDescription}>
                    Soluciones personalizadas para empresas petroleras y de
                    energía
                  </p>

                  <ul className={styles.serviceFeatures}>
                    <li>Vigilancia industrial con personal certificado</li>
                    <li>Protección de mercadería y activos de alto valor</li>
                    <li>Control riguroso de personal y contratistas</li>
                    <li>Control de pérdidas</li>
                  </ul>

                  <p className={styles.serviceAdditional}>
                    Entendemos que cada industria tiene sus particularidades y
                    riesgos específicos. Por eso desarrollamos planes de
                    seguridad personalizados que se integran perfectamente con
                    los procesos operativos de cada cliente, sin interrumpir la
                    productividad.
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/guardias.webp"
                    alt="Guardias de seguridad y vigilancia"
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </>
    );
}