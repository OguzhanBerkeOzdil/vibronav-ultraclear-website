/**
 * Component: GoogleMapEmbed
 * Purpose: Contact-related components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/contact/GoogleMapEmbed.tsx
import React from 'react';

const GoogleMapEmbed: React.FC = () => {
  return (
    <section className="mt-16 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full h-[300px] sm:h-[420px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8947548!2d19.913317516!3d50.066227079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1dd0d8b5a7%3A0x9ab7cb0b7db7c96!2sCzarnowiejska%2036%2C%2030-054%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1642525200000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AGH Kraków Location Map"
            aria-label="Map showing the location of AGH University in Kraków, Poland at Czarnowiejska 36"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMapEmbed;
