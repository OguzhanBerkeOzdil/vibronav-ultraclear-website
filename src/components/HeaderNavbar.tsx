/**
 * Component: HeaderNavbar
 * Purpose: Main navigation bar with responsive menu and project submenu
 * Author: Oğuzhan Berke Özdil
 * Last edit: 26 July 2025
 */

// Uses Heroicons v2 (MIT License © Tailwind Labs). See /licenses/heroicons.txt
// Uses Headless UI (MIT License © Tailwind Labs). See /licenses/headlessui.txt
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useScroll } from '../hooks/useScroll';
import clsx from 'clsx';
import { buildAssetUrl } from '../config/site';

const HeaderNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Blog', href: '/blog', current: location.pathname.startsWith('/blog') },
    { name: 'Team', href: '/team', current: location.pathname === '/team' },
    { 
      name: 'Projects', 
      href: '#projects', 
      current: false,
      submenu: [
        { name: 'VibroNav', href: '/projects/vibronav', description: 'Advanced vibrational navigation system' },
        { name: 'UltraClear', href: '/projects/ultraclear', description: 'Next-generation signal processing' }
      ]
    },
    { name: 'MSc/Eng Opportunities & Teaching', href: '/opportunities', current: location.pathname === '/opportunities' },
    { name: 'Publications', href: '/publications', current: location.pathname === '/publications' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <Disclosure as="nav" className={clsx(
      'fixed left-0 right-0 z-40 transition-all duration-300',
      scrolled 
        ? 'top-0 bg-white/95 backdrop-blur-md shadow-medium' 
        : 'top-[48px] sm:top-[60px] bg-white'
    )}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="flex-shrink-0">
                    <img
                      className="h-8 sm:h-10 lg:h-[50px] w-auto object-contain"
                      src={buildAssetUrl("assets/images/logo.png")}
                      alt="HealthTech Innovation Lab"
                    />
                  </Link>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-12">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.submenu ? (
                      <div className="relative">
                        <button
                          className={clsx(
                            'group inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200',
                            item.current
                              ? 'text-primary-500 border-b-2 border-primary-500'
                              : 'text-neutral-dark-700 hover:text-primary-500'
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                        
                        {/* Dropdown Menu - Opens on Hover */}
                        <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-strong ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-3 text-sm transition-colors duration-200 text-neutral-dark-700 hover:bg-neutral-light-50 hover:text-primary-700"
                              >
                                <div className="font-medium">{subItem.name}</div>
                                <div className="text-xs text-neutral-dark-500 mt-1">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.href.startsWith('/') ? (
                        <Link
                          to={item.href}
                          className={clsx(
                            'px-3 py-2 text-sm font-medium transition-colors duration-200',
                            item.current
                              ? 'text-primary-500 border-b-2 border-primary-500'
                              : 'text-neutral-dark-700 hover:text-primary-500'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={clsx(
                            'px-3 py-2 text-sm font-medium transition-colors duration-200',
                            item.current
                              ? 'text-primary-500 border-b-2 border-primary-500'
                              : 'text-neutral-dark-700 hover:text-primary-500'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center">
                <Disclosure.Button
                  className={clsx(
                    'inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
                    'text-neutral-dark-700 hover:text-primary-500 hover:bg-neutral-light-50'
                  )}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {!open ? (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition
            enter="transition-all duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all duration-300 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <Disclosure.Panel className="lg:hidden bg-white shadow-strong">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.href.startsWith('/') ? (
                      <Disclosure.Button
                        as={Link}
                        to={item.href}
                        className={clsx(
                          'block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                          item.current
                            ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500'
                            : 'text-neutral-dark-700 hover:bg-neutral-light-50 hover:text-primary-500'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        as="a"
                        href={item.href}
                        className={clsx(
                          'block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                          item.current
                            ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500'
                            : 'text-neutral-dark-700 hover:bg-neutral-light-50 hover:text-primary-500'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    )}
                    {item.submenu && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Disclosure.Button
                            key={subItem.name}
                            as={Link}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-neutral-dark-600 hover:text-primary-500 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default HeaderNavbar;
