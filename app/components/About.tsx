import { Facebook, Instagram } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue dark:text-gold-light">
          About Carpet Co
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-blue p-8 rounded-lg border border-blue-lightest dark:border-blue-light shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gold-dark dark:text-gold">Contact Information</h3>
              <div className="space-y-3 text-lg text-gray-900 dark:text-gray-300">
                <p><strong className="text-blue dark:text-gold-light">Address:</strong><br />Wild St, Dukinfield SK16 4DL</p>
                <p><strong className="text-blue dark:text-gold-light">Phone:</strong><br />0161 344 5377</p>
                <div className="mt-4 pt-4 border-t border-blue-lightest dark:border-blue-light">
                  <p className="mb-3"><strong className="text-blue dark:text-gold-light">Follow Us:</strong></p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61584835528881"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue dark:text-gold-light hover:text-gold-dark dark:hover:text-gold transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={28} />
                    </a>
                    <a
                      href="https://www.instagram.com/carpetcodukinfield"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue dark:text-gold-light hover:text-gold-dark dark:hover:text-gold transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-blue p-8 rounded-lg border border-blue-lightest dark:border-blue-light shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gold-dark dark:text-gold">Opening Hours</h3>
              <div className="space-y-2 text-lg text-gray-900 dark:text-gray-300">
                <p><strong className="text-blue dark:text-gold-light">Monday - Friday:</strong> 10am - 5pm</p>
                <p><strong className="text-blue dark:text-gold-light">Saturday - Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
