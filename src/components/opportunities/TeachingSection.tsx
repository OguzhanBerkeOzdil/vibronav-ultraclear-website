/**
 * Component: TeachingSection
 * Purpose: Opportunities page components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/opportunities/TeachingSection.tsx
import React from 'react';
import { buildAssetUrl } from '../../config/site';

const TeachingSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark-900 mb-6">
            Teaching
          </h2>
          <h3 className="text-xl lg:text-2xl text-primary-600 font-medium mb-8">
            Innovation Generation: Teaching the Skills to Solve Global Challenges
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Block 1 */}
            <div>
              <h4 className="text-xl font-semibold text-neutral-dark-900 mb-4">
                Why Innovation Skills are Crucial
              </h4>
              <p className="text-neutral-dark-600 leading-relaxed">
                Innovation Generation methodology and application to solve global big challenges is, in my opinion, the most important skill we need to teach students. While depth in individual areas of study is important, the ability to apply knowledge in real-world contexts and combine exponential technologies to create societal value is paramount. This requires:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-dark-600">
                <li>• Empathy</li>
                <li>• Problem Analysis</li>
                <li>• Problem-Solving Skills</li>
                <li>• Teamwork</li>
                <li>• An Innovation Framework</li>
              </ul>
              <p className="mt-4 text-neutral-dark-600 leading-relaxed">
                Many of these skills are not taught at university.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h4 className="text-xl font-semibold text-neutral-dark-900 mb-4">
                Our Teaching Experience
              </h4>
              <p className="text-neutral-dark-600 leading-relaxed">
                This semester, students at AGH University of Krakow (Healthtech Innovation Generation) and FOM University of Applied Sciences for Economics and Management (Fundamentals in Digital Health) excelled by presenting innovative ideas after diving deep into the problem space.
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-6">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildAssetUrl("assets/images/msc_eng_opportunities_&_teaching_page/teaching_1.jpg")}
                alt="Teaching Innovation at AGH University"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
              <img
                src={buildAssetUrl("assets/images/msc_eng_opportunities_&_teaching_page/teaching_2.jpg")}
                alt="Students presenting innovative solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Content Blocks */}
        <div className="mt-16 space-y-12">
          {/* Block 3 */}
          <div>
            <h4 className="text-xl font-semibold text-neutral-dark-900 mb-4">
              Our Teaching Philosophy
            </h4>
            <p className="text-neutral-dark-600 leading-relaxed mb-6">
              Innovation Generation skills should be the core of our study programs, not just an introductory course. By doing so, we can also stimulate entrepreneurship.
            </p>
            <p className="text-neutral-dark-600 leading-relaxed mb-4">
              In the field of health, our focus areas include:
            </p>
            <ul className="space-y-2 text-neutral-dark-600 mb-6">
              <li>• Health Democratization</li>
              <li>• Patient Empowerment</li>
              <li>• Health Transformation towards Preventive Medicine</li>
              <li>• Healthy Longevity</li>
            </ul>
            <p className="text-neutral-dark-600 leading-relaxed">
              We believe in a bottom-up investment approach.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h4 className="text-xl font-semibold text-neutral-dark-900 mb-4">
              Our Methodologies and Principles
            </h4>
            <p className="text-neutral-dark-600 leading-relaxed mb-4">
              We integrate purpose-driven methods such as:
            </p>
            <ul className="space-y-2 text-neutral-dark-600">
              <li>🎯 Purpose Alliance – Launchpad Health Framework</li>
              <li>🧭 OpenExO – Abundance Creation with the EXO Canvas</li>
              <li> Syntropic World – Project and Company Creation with a Future Orientation</li>
            </ul>
          </div>

          {/* Block 5 */}
          <div>
            <h4 className="text-xl font-semibold text-neutral-dark-900 mb-4">
              Collaborations and Thanks
            </h4>
            <p className="text-neutral-dark-600 leading-relaxed mb-4">
              We collaborate with various entities and people, including:
            </p>
            <ul className="space-y-2 text-neutral-dark-600">
              <li>• FOM-CIBE – Center of Innovation, Business Dev. & Entrepreneurship</li>
              <li>• MedEcon Ruhr GmbH</li>
              <li>• INKA Application Driven Research</li>
              <li>• Meerkat Holding</li>
              <li>• 5P FUTURE OF HEALTH</li>
              <li>• Xponential Ecosystem</li>
              <li>• 10xD</li>
              <li>• THE HEALTH CAPTAINS CLUB – LEADERSHIP FOR SUSTAINABLE HEALTH. NAVIGATING TOWARDS ONE HEALTH TOGETHER</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
