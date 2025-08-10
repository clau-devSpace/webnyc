import { useEffect } from 'react';

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateItems = document.querySelectorAll('.animate-item');

    if (animateItems.length === 0) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.getAttribute('data-animation');
          entry.target.style.opacity = 1;
          entry.target.classList.add('animate__animated', animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animateItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      animateItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
};