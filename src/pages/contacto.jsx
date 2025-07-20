import React from 'react';
import styles from './contacto.module.css';
import { MapPin, PhoneCall, Mail, Clock} from 'lucide-react';
import Form from'../components/form.jsx';
import GoogleMapEmbed from '../components/map'; 
import Header from '../components/header.jsx';
import CtaSection from '../components/ctaButton';
import WhatsAppBoton from '../components/whatsappButton';

export default function Contacto() {
  return (
    <>
      <WhatsAppBoton />
      <Header
        title="Contacto"
        description="Contáctate con nosotros para recibir asesoramiento personalizado sobre nuestros servicios de seguridad. Nuestro equipo está disponible para responder todas tus consultas."
        backgroundImage='/images/fondo-pantalla-principal.webp'
        className={styles.estilosImagenContacto}
      />

      {/* Contact Section */}
      <section className={styles.infoSection}>
        <div className={styles.mainContainer}>
          <div className={styles.infoGrid}>
            <div className={styles.infoPanel}>
              <h2>Información de Contacto</h2>

              <div className={styles.infoConsolidated}>
                {[
                  {
                    title: "Oficina Central",
                    content: (
                      <p>
                        España 1055
                        <br />
                        U9000 - Comodoro Rivadavia, Chubut
                      </p>
                    ),
                    icon: <MapPin />,
                  },
                  {
                    title: "Teléfonos",
                    content: (
                      <>
                        <p>
                          <a href="tel:4467937">4467937</a>
                        </p>
                        <p>
                          <a href="tel:2974438169">2974438169</a>
                        </p>
                      </>
                    ),
                    icon: <PhoneCall />,
                  },
                  {
                    title: "Email",
                    content: (
                      <p>
                        <a href="mailto:info@nycseguridad.com.ar">
                          info@nycseguridad.com.ar
                        </a>
                      </p>
                    ),
                    icon: <Mail />,
                  },
                ].map(({ title, content, icon }, index) => (
                  <div className={styles.infoItem} key={index}>
                    <div className={styles.infoIcon} aria-hidden="true">
                      <span>{icon}</span>
                    </div>
                    <div className={styles.infoDetails}>
                      <h3>{title}</h3>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mainContainer}>
          <div className={styles.sectionTitle}>
            <h2>Nuestra Ubicación</h2>
            <h3 className={styles.direccion}>España 1055, Comodoro Rivadavia, Chubut.</h3>
          </div>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};