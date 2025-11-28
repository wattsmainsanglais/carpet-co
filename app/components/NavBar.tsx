'use client'

import Link from 'next/link';
import Image from 'next/image';
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
    <nav className="fixed top-0 w-full bg-white border-b border-blue-lightest z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/carpet-co-blue.png"
            alt="CARPET Co. Dukinfield"
            width={220}
            height={80}
            priority
            className="h-16 md:h-20 w-auto rounded-xl"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="relative text-blue hover:text-gold transition-colors font-medium group"
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue hover:text-gold transition-colors"
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
            className="fixed inset-0 bg-blue-dark/30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed top-[80px] left-0 right-0 bg-white md:hidden shadow-lg animate-slide-down border-t border-blue-lightest">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.title} className="border-b border-blue-lightest">
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-4 text-blue hover:bg-gold-lightest hover:text-gold-dark transition-all font-medium"
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
