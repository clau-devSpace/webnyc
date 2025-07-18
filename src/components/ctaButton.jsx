import styles from './ctaButton.module.css';

const CtaSection = () => {
  const handleWhatsAppClick = () => {
    //Agregar analitics
    console.log('Botón de WhatsApp clickeado');
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          ¿Necesitas servicios de seguridad profesional?
        </h2>
        
        <p className={styles.ctaDescription}>
          Con más de 23 años de experiencia, ofrecemos soluciones de seguridad 
          personalizadas para empresas e industrias. Contáctanos para una consulta 
          gratuita.
        </p>

        <a 
          href="https://wa.me/2974438169" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.ctaButton}
          onClick={handleWhatsAppClick}
        >
          <span className={styles.ctaButtonContent}>
            <span className={styles.ctaButtonText}>Contáctanos</span>
          </span>
          <span className={styles.ctaButtonOverlay}></span>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;