export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forestgreen text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Screenshot Showcase</h3>
            <p className="text-sm text-gray-300 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#home" className="hover:text-orange transition-colors">
              Home
            </a>
            <a href="#gallery" className="hover:text-orange transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-orange transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-orange transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Screenshot Showcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
