/**
 * Component: TeamCard
 * Purpose: Individual team member card component
 * Author: Oğuzhan Berke Özdil
 * Last edit: 28 July 2025
 */

// Team page refactor – 3-col layout, cleaned copy, icons fixed – July 26, 2025
import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { buildAssetUrl } from '../../config/site';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  email: string;
  linkedin?: string;
  github?: string;
  photo?: string | null;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  name, 
  role, 
  bio, 
  expertise, 
  email, 
  linkedin, 
  github,
  photo 
}) => {
  // Generate initials for avatar fallback
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  // Use provided photo or fallback to internal mapping
  const getImagePath = (name: string): string | null => {
    if (photo !== undefined) {
      return photo;
    }
    
    // Fallback to internal mapping for backward compatibility
    const imageMap: { [key: string]: string | null } = {
      "Prof. Michael Friebe, PhD": buildAssetUrl("assets/images/team_page/Michael Friebe.jpg"),
      "Katarzyna Heryan, MSc Eng.": buildAssetUrl("assets/images/team_page/Katarzyna Heryan.jpg"), 
      "Dominik Rzepka, PhD": buildAssetUrl("assets/images/team_page/Dominik Rzepka.jpg"),
      "Katharina Steeg, PhD student": buildAssetUrl("assets/images/team_page/Katharina Steeg.jpeg"),
      "Oğuzhan Berke Özdil": buildAssetUrl("assets/images/team_page/OguzhanBerkeOzdil.png"),
      "Hamza Oran": buildAssetUrl("assets/images/team_page/Hamza Oran.jpg"),
      "Witold Serwatka": buildAssetUrl("assets/images/team_page/Witold Serwatka.jpg"),
      "Juliusz Stefański": null // No image available
    };
    return imageMap[name] || null;
  };

  const imagePath = getImagePath(name);
  
  return (
    <article className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        {/* Profile Image - Larger size (96px) */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          {imagePath ? (
            <img
              src={imagePath}
              alt={`${name} profile photo`}
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <span 
            className={`text-2xl font-bold text-slate-600 ${imagePath ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}
          >
            {initials}
          </span>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-3">{role}</p>
          
          <p className="text-sm text-slate-600 leading-relaxed mb-4 text-left">
            {bio}
          </p>
          
          {/* Expertise chips */}
          <div className="text-left mb-4">
            <p className="text-xs font-medium text-slate-500 mb-2">Expertise:</p>
            <div className="flex flex-wrap gap-1">
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Social icons */}
          <div className="flex justify-center space-x-3">
            <a
              href={`mailto:${email}`}
              className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
              aria-label={`Email ${name}`}
            >
              <EnvelopeIcon className="w-4 h-4" />
            </a>
            
            {linkedin && (
              <a
                href={linkedin}
                className="text-slate-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label={`${name} LinkedIn profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            
            {github && (
              <a
                href={github}
                className="text-slate-400 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label={`${name} GitHub profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TeamCard;
