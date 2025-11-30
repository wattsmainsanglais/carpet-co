export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark dark:bg-blue-darker text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold font-bebas tracking-wide text-gold-light">CARPET Co. Dukinfield</h3>
            <p className="text-sm text-blue-lightest dark:text-gray-400 mt-2">
              Carpet Fitters of Distinction
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#home" className="hover:text-gold-light transition-colors">
              Home
            </a>
            <a href="#gallery" className="hover:text-gold-light transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-gold-light transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gold-light transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-blue-lighter/20 dark:border-blue-light/20 mt-6 pt-6 text-center text-sm text-blue-lightest dark:text-gray-400">
          <p>&copy; {currentYear} CARPET Co. Dukinfield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
