'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'About', href: '#about' },
    { title: 'Reviews', href: '#reviews' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-forestgreen text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-orange transition-colors font-bebas tracking-wide">
          CARPETCO <span className="text-lg font-light opacity-80">Dukinfield</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="hover:text-orange transition-colors font-medium"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-orange transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed top-[72px] left-0 right-0 bg-forestgreen md:hidden shadow-lg animate-slide-down">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.title} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-4 hover:bg-orange/20 hover:text-orange transition-all font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
