import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }

  return (
    <div className="contacts-container" id='elerhetoseg'>
      <h1>Kapcsolat</h1>
      <div className="info-container">
        <p>
          Általános információ, időpontok foglalás:{' '}
          <a href="mailto:bastyamasszazs@gmail.com">bastyamasszazs@gmail.com</a>
        </p>
        <p className="telefon-address">
          <a href="tel:+36-30-555-5555">+36-30-555-5555</a>
          <p>4026 Debrecen, Kálvin tér 1.</p>
        </p>
        <p>Nyitvatartás: Hétfő, Kedd, 13:00-21:00 | Szerdától Vasárnapig 9:00-21:00</p>
    </div>
    <div className="contacts-map">
        <form ref={form} onSubmit={sendEmail}>
            <label>Név</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Üzenet</label>
            <textarea name="message" />
            <input type="submit" value="Küldés" className='button-reservation'/>
        </form>
        <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.7309260302989!2d21.   624668259620954!3d47.53183370595293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x47470e0b3ea91003%3A0xeca00ed14afe703d!2zRGVicmVjZW4sIEvDoWx2aW4gdMOpciAxLC0MDI 2!5e0!3m2!1shu!2shu!4v1725653461078!5m2!1shu!2shu"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Embed"
              className='map-frame'>
            </iframe>
         </div>
    
    </div>

    </div>
  );
}

export default Contact;
