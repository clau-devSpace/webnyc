import Image from 'next/image';
import styles from './header.module.css';

function Header({ 
  title, 
  description,
  backgroundImage,
  className,
  // Props para Next Image
  imageAlt = "Background image",
  imagePriority = false,
  imageQuality = 75
}) {
  // Determinar qué clase CSS usar
  const getSectionClass = () => {
    let classes = [styles.pageHeaderSection];
    
    if (className) {
      if (styles[className]) {
        classes.push(styles[className]);
      } else {
        classes.push(className);
      }
    }
    
    return classes.join(' ');
  };

  return (
    <section className={getSectionClass()}>
      
      {/* Imagen de fondo usando Next Image */}
      <div className={styles.imageContainer}>
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority={imagePriority}
          quality={imageQuality}
          className={`${styles.backgroundImage} ${className ? styles[className] || className : ''}`}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.pageHeaderContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Header;