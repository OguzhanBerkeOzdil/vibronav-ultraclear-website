/**
 * Component: Team
 * Purpose: Team page displaying research team members with canonical data
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateSEOData } from '../lib/seo';
import PageTitle from '../components/PageTitle';
import TeamCard from '../components/team/TeamCard';
import { MapPinIcon, AcademicCapIcon, UserGroupIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { teamData } from '../data/team';

const Team: React.FC = () => {
  const seoData = generateSEOData({
    title: 'Research Team - VibroNav & UltraClear Medical Technology Experts | AGH University',
    description: 'Meet our international research team of experts developing VibroNav and UltraClear technologies. Leading specialists in medical technology, signal processing, biomedical engineering, and healthcare innovation at AGH University.',
    keywords: ['research team', 'medical technology experts', 'biomedical engineering', 'signal processing', 'VibroNav team', 'UltraClear developers', 'healthcare innovation', 'AGH University research', 'medical device development', 'surgical technology experts', 'vibroacoustic navigation specialists'],
    url: '/team',
    type: 'website',
  });

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Team', href: '/team' }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.openGraph.title} />
        <meta property="og:description" content={seoData.openGraph.description} />
        <meta property="og:url" content={seoData.openGraph.url} />
        <meta property="og:type" content={seoData.openGraph.type} />
        <meta property="og:image" content={seoData.openGraph.image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seoData.twitter.card} />
        <meta name="twitter:title" content={seoData.twitter.title} />
        <meta name="twitter:description" content={seoData.twitter.description} />
        <meta name="twitter:image" content={seoData.twitter.image} />
      </Helmet>

      <div className="min-h-screen bg-neutral-light-50">
        {/* Page Title */}
        <PageTitle 
          title="Our Team" 
          breadcrumb={breadcrumb}
          fixedBg={true}
        />

        {/* Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Research Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our interdisciplinary team combines expertise in medical technology, signal processing, 
                and biomedical engineering to advance the frontiers of healthcare innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {teamData.team.map((member: any) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  expertise={member.expertise}
                  email={member.contact.email}
                  linkedin={member.links.linkedin}
                  github={member.links.github}
                  photo={member.assets.photo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Research Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team focuses on cutting-edge research areas that bridge engineering and medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BeakerIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Technology</h3>
                <p className="text-gray-600">Advanced medical devices and instrumentation for clinical applications.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Signal Processing</h3>
                <p className="text-gray-600">Digital signal processing and machine learning for biomedical applications.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Collaboration</h3>
                <p className="text-gray-600">Close partnerships with clinical experts and medical institutions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">International Network</h3>
                <p className="text-gray-600">Global collaborations with leading research institutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-8 opacity-90">
                We welcome curious minds seeking to make a real impact in healthcare technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/opportunities"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Opportunities
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
