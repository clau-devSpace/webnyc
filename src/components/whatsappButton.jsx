import React from "react";
import { Whatsapp } from "react-bootstrap-icons";

export default function WhatsAppBoton(){
    const estilos1 = {
        position: 'fixed',
        right: '20px',
        bottom: '30px',
        zIndex: '1000',
        textAlign: 'right',
        alignItems: 'right',
    };

    const estilos2 = {
        fontSize: '60px',
        color: '#ff6b35',
        cursor: 'pointer'
    };

    const phoneNumber = "2974438169";
    const message = "Hola. Me interesa obtener más información, por favor.";

    return (
      <>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          style={estilos1}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp style={estilos2} />
        </a>
      </>
    );
}