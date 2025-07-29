/**
 * Component: ContactGrid
 * Purpose: Contact-related components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/contact/ContactGrid.tsx
import React from 'react';
import ContactCard, { ContactCardProps } from './ContactCard';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

const ContactGrid: React.FC = () => {
  // Use the same SVG icon for all contact cards
  const commonIcon = <BuildingOffice2Icon className="w-7 h-7" />;

  const contactData: ContactCardProps[] = [
    {
      title: 'AGH Kraków, Poland',
      addressLines: [
        'Department of Biocybernetics and Biomedical Engineering',
        'AGH University of Science and Technology',
        'Kraków, Poland',
        'Head: Prof. Piotr Augustyniak'
      ],
      contacts: [
        { name: 'Katarzyna Heryan, mgr inż.' },
        { 
          name: 'Prof. Michael Friebe, PhD', 
          email: 'friebe@agh.edu.pl', 
          linkedin: 'https://www.linkedin.com/in/michaelfriebe' 
        }
      ],
      icon: commonIcon
    },
    {
      title: 'Giessen, Germany',
      addressLines: [
        'Interventional Radiology',
        'Justus-Liebig-University',
        'Giessen, Germany'
      ],
      contacts: [
        { name: 'Prof. Gabriele Krombach' }
      ],
      icon: commonIcon
    },
    {
      title: 'Essen, Germany',
      addressLines: [
        'Health Economics & Entrepreneurial Validation',
        'FOM University of Applied Sciences',
        'Center for Innovation, Business Development & Entrepreneurship',
        'Essen, Germany'
      ],
      website: 'https://www.fom.de/',
      icon: commonIcon
    },
    {
      title: 'Magdeburg, Germany',
      addressLines: [
        'Technical Support',
        'SURAG GmbH',
        'Magdeburg, Germany',
        '(Axel Boese and Alfredo Illanes)'
      ],
      website: 'https://surag-medical.com/',
      icon: commonIcon
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark-900 mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-neutral-dark-600 max-w-3xl mx-auto">
            We have offices and collaborations across Europe. Get in touch with the location most relevant to your inquiry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {contactData.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
