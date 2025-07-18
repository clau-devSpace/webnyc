import { useState, useEffect } from 'react';

export const useNavbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  // Effect para el scroll del navbar
  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para el scroll suave
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

  return {
    navBackground,
    handleSmoothScroll
  };
};