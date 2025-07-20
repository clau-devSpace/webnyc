import React from "react";
import Head from "next/head";
import styles from './seguridadFisica.module.css';
import Header from "../components/header";
import CtaSection from "../components/ctaButton";
import WhatsAppBoton from "../components/whatsappButton";
import Image from 'next/image';

export default function SeguridadElectronica(){
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SecurityService",
        "name": "Servicios de Seguridad Electrónica",
        "description": "Equipos de seguridad de alta tecnología con monitoreo remoto las 24 horas. Sistemas de alarmas, cámaras IP, control de accesos biométrico y totem vigilador virtual.",
        "provider": {
            "@type": "Organization",
            "name": "NYC Seguridad",
            "areaServed": "Comodoro Rivadavia, Chubut, Argentina"
        },
        "serviceType": [
            "Sistemas de Alarmas Inteligentes",
            "Cámaras de Seguridad IP",
            "Control de Accesos Biométrico",
            "Totem Vigilador Virtual",
            "Monitoreo Remoto 24/7"
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

    return(
        <>
            <Head>
                <title>Seguridad Electrónica | Monitoreo 24/7</title>
                <meta
                    name="description"
                    content="Equipos de seguridad electrónica de alta tecnología: sistemas de alarmas inteligentes, cámaras IP, control de accesos biométrico y totem vigilador virtual. Monitoreo remoto las 24 horas."
                />
                <meta
                    name="keywords"
                    content="seguridad electrónica, sistemas de alarmas, cámaras IP, CCTV, control de accesos, monitoreo remoto, totem vigilador, alarmas inteligentes"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Seguridad Electrónica - Sistemas de Alarmas y Cámaras IP"
                />
                <meta
                    property="og:description"
                    content="Equipos de seguridad de alta tecnología con monitoreo remoto las 24 horas. Sistemas de alarmas inteligentes, cámaras IP y control de accesos biométrico."
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/control-biometrico.webp" />
                <link rel="canonical" href="https://nycseguridad.com.ar/seguridad-electronica" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>

            <WhatsAppBoton />
            <Header 
                title="Seguridad Electrónica"
                description="Equipos de seguridad de alta tecnología con monitoreo remoto las 24 horas del día, los 365 días del año."
                backgroundImage="/images/control-biometrico.jpg"
            />

            {/* Service Overview Section */}
            <section className={styles.serviceOverview}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <div className={styles.overviewText}>
                            <h2>Tecnología Avanzada</h2>
                            <p>Nuestros sistemas de seguridad electrónica incorporan la más avanzada tecnología para brindar protección integral y monitoreo continuo. Desde sistemas de alarmas inteligentes hasta cámaras de alta definición con análisis de video, ofrecemos soluciones que se adaptan a las necesidades específicas de cada cliente.</p>
                            <p>Trabajamos con equipos de última generación que permiten el control y monitoreo remoto desde cualquier lugar del mundo, garantizando una respuesta inmediata ante cualquier eventualidad.</p>
                            <div className={styles.overviewFeatures}>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureIcon}>📱</span>
                                    <span className={styles.featureText}>Monitoreo Remoto</span>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureIcon}>🔔</span>
                                    <span className={styles.featureText}>Alertas Inteligentes</span>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureIcon}>🎥</span>
                                    <span className={styles.featureText}>Video HD</span>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureIcon}>🌐</span>
                                    <span className={styles.featureText}>Acceso Online</span>
                                </div>
                                <div className={`${styles.featureItem} ${styles.specificItem}`}>
                                    <span className={styles.featureIcon}>🤖</span>
                                    <span className={`${styles.featureText} ${styles.specificText}`}>Recorridas Programadas con Robots Autónomos</span>
                                </div>
                                <div className={styles.featureItem}>
                                    <span className={styles.featureIcon}>
                                        <Image 
                                            className={styles.dron} 
                                            width={24}
                                            height={24}
                                            src="/images/dron-de-seguridad.webp"
                                            alt="Dron de seguridad"
                                            sizes="24px"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span className={styles.featureText}>Vigilancia Aérea con Drones</span>
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
                        <p>Servicios de Seguridad Electrónica adaptados a diferentes sectores y necesidades</p>
                    </div>
                    
                    <div className={styles.servicesClean}>
                        {/* Servicio 1 - Sistema de Alarmas */}
                        <div className={styles.serviceRow}>
                            <div className={styles.serviceContent}>
                                <h4>Sistemas de Alarmas Inteligentes</h4>
                                <p className={styles.serviceDescription}>Tecnología de última generación para la detección temprana de intrusos y protección integral de su propiedad.</p>
                                
                                <ul className={styles.serviceFeatures}>
                                    <li>Sensores de movimiento de alta precisión</li>
                                    <li>Activación y desactivación mediante códigos personalizados</li>
                                    <li>Notificaciones inmediatas a dispositivos móviles</li>
                                    <li>Integración con sistemas de monitoreo 24/7</li>
                                </ul>
                            </div>
                            <div>
                                <Image 
                                    src="/images/alarma-seguridad.webp" 
                                    alt="Sistema de alarmas" 
                                    width={400}
                                    height={300}
                                    className={styles.serviceImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Servicio 2 - Video Cámaras */}
                        <div className={styles.serviceRow}>
                            <div className={styles.serviceContent}>
                                <h4>Cámaras de Seguridad</h4>
                                <p className={styles.serviceDescription}>Cámaras de seguridad IP y CCTV con acceso remoto para monitoreo continuo desde cualquier lugar del mundo.</p>
                                
                                <ul className={styles.serviceFeatures}>
                                    <li>Cámaras IP de alta definición</li>
                                    <li>Sistemas CCTV con grabación continua</li>
                                    <li>Acceso remoto desde PC y dispositivos móviles</li>
                                    <li>Visión nocturna y detección de movimiento</li>
                                </ul>
                            </div>
                            <div>
                                <Image 
                                    src="/images/camara-seguridad.webp" 
                                    alt="Cámaras de seguridad"
                                    width={400}
                                    height={300}
                                    className={styles.serviceImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Servicio 3 - Control de Accesos */}
                        <div className={styles.serviceRow}>
                            <div className={styles.serviceContent}>
                                <h4>Totem Vigilador Virtual</h4>
                                <p className={styles.serviceDescription}>Nuestro Totem de Seguridad combina tecnologías avanzadas y un diseño robusto para brindar máxima seguridad. Características destacadas:</p>
                                
                                <ul className={styles.serviceFeatures}>
                                    <li>Vigilador en vivo</li>
                                    <li>Pantalla HD integrada</li>
                                    <li>Audio bidireccional</li>
                                    <li>Activación Automática</li>
                                    <li>Control de acceso</li>
                                    <li>Respuesta inmediata</li>
                                </ul>
                                
                                <p className={styles.serviceAdditional}>Ofrecemos variados sistemas de control de accesos: tarjetas, huellas dactilares, teclados, molinetes, etc., en conjunto con software de última generación que dan soporte y registro escrito sobre los movimientos del lugar, garantizando un control total de los accesos.</p>
                            </div>
                            <div>
                                <Image 
                                    src="/images/totem-de-seguridad.webp" 
                                    alt="Totem de Seguridad" 
                                    width={400}
                                    height={300}
                                    className={`${styles.serviceImage} ${styles.totem}`}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className={styles.serviceRow}>
                            <div className={styles.serviceContent}>
                                <h4>Control de Accesos Biométrico y Digital</h4>
                                <p className={styles.serviceDescription}>Sistemas avanzados de control de acceso con múltiples métodos de identificación y software de gestión integral.</p>
                                
                                <ul className={styles.serviceFeatures}>
                                    <li>Sistemas de tarjetas inteligentes</li>
                                    <li>Lectores de huellas dactilares</li>
                                    <li>Reconocimiento facial</li>
                                </ul>
                            </div>
                            <div>
                                <Image 
                                    src="/images/control-biometrico.webp" 
                                    alt="Control de accesos" 
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