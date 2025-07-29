/**
 * Component: FAQAccordion
 * Purpose: Opportunities page components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/opportunities/FAQAccordion.tsx
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const FAQAccordion: React.FC = () => {
  const faqs = [
    {
      question: "Who can apply for MSc/Eng thesis opportunities?",
      answer: "Students enrolled in Master's or Engineering programs at AGH University of Science and Technology are eligible to apply. We also welcome applications from students at partner universities through exchange programs."
    },
    {
      question: "Can I propose my own research topic?",
      answer: "Yes! While we have predefined project opportunities, we encourage students to propose their own research topics that align with our research areas. Please contact us with your proposal and we'll discuss the feasibility and supervision options."
    },
    {
      question: "How long does a typical thesis project take?",
      answer: "MSc thesis projects typically take 6-9 months to complete, while Engineering thesis projects usually require 4-6 months. The duration depends on the complexity of the project and your availability."
    },
    {
      question: "Do I need prior experience in medical technology?",
      answer: "While prior experience is beneficial, it's not mandatory. We provide comprehensive training and support. However, strong programming skills and basic knowledge of signal processing or machine learning are highly recommended."
    },
    {
      question: "Are there opportunities for international collaboration?",
      answer: "Absolutely! Many of our projects involve collaboration with international partners, including universities and research institutions in Germany, Poland, and other European countries. This provides excellent networking opportunities."
    }
  ];

  return (
    <section className="py-16 bg-neutral-light-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-dark-600">
            Get answers to common questions about our thesis opportunities
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="bg-white rounded-lg shadow-sm border border-neutral-light-200">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset">
                    <h3 className="text-lg font-semibold text-neutral-dark-900">
                      {faq.question}
                    </h3>
                    <ChevronDownIcon
                      className={clsx(
                        'h-5 w-5 text-neutral-dark-500 transition-transform duration-200',
                        open ? 'rotate-180' : ''
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6">
                    <p className="text-neutral-dark-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
