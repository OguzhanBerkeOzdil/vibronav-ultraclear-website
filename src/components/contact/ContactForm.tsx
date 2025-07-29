/**
 * Component: ContactForm
 * Purpose: Contact form component with validation
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/contact/ContactForm.tsx
import React, { useState } from 'react';
import { ChevronDownIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const subjects = [
  'General Inquiry',
  'Research Collaboration',
  'Press / Media'
];

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    subject: subjects[0],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create mailto URL with form data
    const subject = encodeURIComponent(`${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
${formData.organization ? `Organization: ${formData.organization}\n` : ''}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim());
    
    const mailtoUrl = `mailto:healthtech@agh.edu.pl?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoUrl;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: subjects[0],
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-light-200">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-neutral-dark-900 mb-3">Send us a Message</h3>
        <p className="text-neutral-dark-600">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-dark-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={clsx(
                'w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none',
                errors.name 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-neutral-light-300 bg-neutral-light-50 hover:border-neutral-light-400 focus:bg-white'
              )}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-dark-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={clsx(
                'w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none',
                errors.email 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-neutral-light-300 bg-neutral-light-50 hover:border-neutral-light-400 focus:bg-white'
              )}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Organization Field */}
        <div>
          <label htmlFor="contact-organization" className="block text-sm font-semibold text-neutral-dark-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="contact-organization"
            name="organization"
            value={formData.organization}
            onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
            className="w-full px-4 py-3 border-2 border-neutral-light-300 bg-neutral-light-50 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none hover:border-neutral-light-400 focus:bg-white"
            placeholder="Your university, company, or organization"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold text-neutral-dark-700 mb-2">
            Subject *
          </label>
          <div className="relative">
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full px-4 py-3 border-2 border-neutral-light-300 bg-neutral-light-50 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none hover:border-neutral-light-400 focus:bg-white appearance-none"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-dark-400 pointer-events-none" />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-dark-700 mb-2">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={(e) => {
              const newValue = e.target.value.slice(0, 500); // Limit to 500 characters
              setFormData(prev => ({ ...prev, message: newValue }));
            }}
            className={clsx(
              'w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none resize-none',
              errors.message 
                ? 'border-red-300 bg-red-50' 
                : 'border-neutral-light-300 bg-neutral-light-50 hover:border-neutral-light-400 focus:bg-white'
            )}
            placeholder="Tell us about your inquiry, research interests, or how we can help you..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message}</p>
          )}
          <p className="mt-2 text-sm text-neutral-dark-500">
            {formData.message.length}/500 characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg text-white transition-all duration-200 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            <PaperAirplaneIcon className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
