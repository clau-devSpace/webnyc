
const GoogleMapEmbed = () => {
  // Estilos CSS embebidos para manejar los breakpoints
  const responsiveStyles = `
    .responsive-map {
      width: 100%;
      max-width: 850px;
      height: 400px;
      border-radius: 8px;
      border: 0;
    }
    
    @media (max-width: 600px) {
      .responsive-map {
        height: 250px;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.5936536632967!2d-67.48856812422584!3d-45.859431235184076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde45453f78edf0d%3A0xe95241b7a8748174!2sEspa%C3%B1a%201055%2C%20U9000%20Comodoro%20Rivadavia%2C%20Chubut!5e0!3m2!1ses!2sar!4v1749958353449!5m2!1ses!2sar"
        className="responsive-map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de ubicación NYC Seguridad"
      />
    </>
  );
};

export default GoogleMapEmbed;