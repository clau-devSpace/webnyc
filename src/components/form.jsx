import React, { useState, useEffect } from 'react';
import styles from './form.module.css';
import { EMAIL_CONFIG } from '../config/emailjsConfig';

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitType, setSubmitType] = useState(''); // 'success' o 'error'
  const [emailjs, setEmailjs] = useState(null);
  
  useEffect(() => {
    import('@emailjs/browser').then((emailjsModule)=> {
    const emailjsInstance = emailjsModule.default;
    emailjsInstance.init(EMAIL_CONFIG.USER_ID);
    setEmailjs(emailjsInstance);
  });

}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!emailjs){
      console.log('Emailjs no esta cargando');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');

    try {

      // Preparar los datos para EmailJS
      const templateParams = {
        from_name: `${formData.nombre} ${formData.apellido}`,
        from_email: formData.email,
        phone: formData.telefono,
        company: formData.empresa || 'No especificada',
        service: formData.servicio || 'No especificado',
        message: formData.mensaje,
        // Variables adicionales que puedes usar en tu template
        full_name: `${formData.nombre} ${formData.apellido}`,
        first_name: formData.nombre,
        last_name: formData.apellido,
        to_email: 'info@nycseguridad.com.ar' // Tu email de destino
      };

      // Enviar email
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email enviado exitosamente:', response);
       // Mostrar mensaje de éxito
      setSubmitMessage('✅ ¡Consulta enviada correctamente! Te responderemos a la brevedad.');
      setSubmitType('success');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        mensaje: ''
      });

    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitMessage('❌ Error al enviar la consulta. Por favor, inténtalo nuevamente.');
      setSubmitType('error');
    } finally {
      setIsSubmitting(false);
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitType('');
      }, 5000);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.title}>Envianos tu Consulta</h2>
      
      {submitMessage && (
        <div className={`${styles.formMessage} ${styles[submitType]}`}>
          {submitMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>Nombre *</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              className={styles.input}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="apellido" className={styles.label}>Apellido *</label>
            <input 
              type="text" 
              id="apellido" 
              name="apellido" 
              value={formData.apellido}
              onChange={handleChange}
              className={styles.input}
              required 
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefono" className={styles.label}>Teléfono *</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              className={styles.input}
              required 
            />
          </div>
        </div>
        
        <div className={`${styles.formRow} ${styles.fullWidth}`}>
          <div className={styles.formGroup}>
            <label htmlFor="empresa" className={styles.label}>Empresa</label>
            <input 
              type="text" 
              id="empresa" 
              name="empresa" 
              value={formData.empresa}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
       
        <div className={`${styles.formRow} ${styles.fullWidth}`}>
          <div className={styles.formGroup}>
            <label htmlFor="servicio" className={styles.label}>Servicio de Interés</label>
            <select 
              id="servicio" 
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Seleccione un servicio</option>
              <option value="seguridad-fisica">Seguridad Física</option>
              <option value="seguridad-electrónica">Seguridad Electrónica</option>
              <option value="investigaciones">Investigaciones</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>
       
        <div className={`${styles.formRow} ${styles.fullWidth}`}>
          <div className={styles.formGroup}>
            <label htmlFor="mensaje" className={styles.label}>Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Contanos sobre tu consulta o requerimiento específico..."
              required
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.loadingSpinner}></span>
              Enviando...
            </>
          ) : (
            'Enviar Consulta'
          )}
        </button>
       
      </form>
    </div>
  );
}