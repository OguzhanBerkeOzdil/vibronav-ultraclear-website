/**
 * Component: ContactCard
 * Purpose: Contact-related components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/contact/ContactCard.tsx
import React from 'react';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  UserIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

export interface ContactCardProps {
  title: string;
  addressLines: string[];
  contacts?: {
    name: string;
    role?: string;
    email?: string;
    linkedin?: string;
  }[];
  phone?: string;
  email?: string;
  website?: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  addressLines,
  contacts,
  phone,
  email,
  website,
  icon
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
      {/* Icon and Title */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center mb-4">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-neutral-dark-900">
          {title}
        </h3>
      </div>

      {/* Content - fills remaining space */}
      <div className="flex flex-col flex-1 space-y-4">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <MapPinIcon className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <span className="sr-only">Address</span>
            {addressLines.map((line, index) => (
              <p key={index} className="text-sm text-neutral-dark-600 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Contacts */}
        {contacts && contacts.length > 0 && (
          <div className="flex items-start space-x-3">
            <UserIcon className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <span className="sr-only">Contacts</span>
              {contacts.map((contact, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <p className="text-sm font-medium text-neutral-dark-700">
                    {contact.name}
                  </p>
                  {contact.role && (
                    <p className="text-xs text-neutral-dark-500">
                      {contact.role}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center text-xs text-primary-600 hover:text-primary-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 rounded"
                      >
                        <EnvelopeIcon className="w-3 h-3 mr-1" />
                        <span className="sr-only">Email </span>
                        Email
                      </a>
                    )}
                    {contact.linkedin && (
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary-600 hover:text-primary-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 rounded"
                      >
                        <LinkIcon className="w-3 h-3 mr-1" />
                        <span className="sr-only">LinkedIn profile for {contact.name}</span>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Phone */}
        {phone && (
          <div className="flex items-center space-x-3">
            <PhoneIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-sm text-neutral-dark-600 hover:text-primary-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 rounded"
            >
              <span className="sr-only">Phone number: </span>
              {phone}
            </a>
          </div>
        )}

        {/* General Email */}
        {email && (
          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <a
              href={`mailto:${email}`}
              className="text-sm text-neutral-dark-600 hover:text-primary-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 rounded break-all"
            >
              <span className="sr-only">Email: </span>
              {email}
            </a>
          </div>
        )}

        {/* Website */}
        {website && (
          <div className="flex items-center space-x-3 pt-2">
            <GlobeAltIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"
            >
              <span className="sr-only">Visit website: </span>
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
