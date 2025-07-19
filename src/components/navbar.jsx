import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useNavbar } from '../hooks/useNavbar';
import styles from './navbar.module.css';

const Navbar = () => {
  const { navBackground, handleSmoothScroll } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (e, target) => {
    handleSmoothScroll(e, target);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = (e, target) => {
    e.preventDefault();
    handleSmoothScroll(e, target);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleSectionNavigation = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    if (router.pathname === "/") {
      // Si estamos en la página principal, hacer scroll directamente
      handleSmoothScroll(e, sectionId);
    } else {
      // Si estamos en otra página, navegar y luego hacer scroll
      router.push("/").then(() => {
        // Usar setTimeout para asegurar que el DOM esté listo
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      });
    }
  };

  // Nueva función para manejar el click en "Servicios"
  const handleServiciosClick = (e) => {
    e.preventDefault();
    // Solo toggle del dropdown en mobile
    if (window.innerWidth <= 768) {
      toggleDropdown();
    }
    // En desktop no hace nada, solo muestra el dropdown con hover
  };

  // Limpiar estado cuando cambia la ruta
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={styles.navbar}
      style={{
        background: '#ff8435 !important', 
      }}
    >
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>
          <img src='/images/logotipo-colornuevo.png' className={styles.logotipo} alt='logo'/>
        </a>
    
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>

           <li className={styles.navItem}>
            <a href="#nosotros" onClick={(e) => handleSectionNavigation(e, '#nosotros')}>
              Nosotros
            </a>
           </li>
          
          <li className={`${styles.navItem} ${styles.hasDropdown} ${isDropdownOpen ? styles.dropdownOpen : ''}`}>
            <a 
              href="#servicios" 
              onClick={handleServiciosClick}
            >
              Servicios
            </a>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/seguridad-fisica" onClick={handleLinkClick}>
                 Seguridad Física
                </Link>
              </li>
               <li>
                <Link href="/seguridad-electronica" onClick={handleLinkClick}>
                 Seguridad Electrónica
                </Link>
              </li>
              <li>
                <Link href="/investigaciones" onClick={handleLinkClick}>
                 Investigaciones
                </Link>
              </li>
            </ul>
          </li>
          
          <li className={styles.navItem}>
            <Link href="/contacto" onClick={handleLinkClick}>
             Contacto
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;