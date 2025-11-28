import Image from 'next/image';
import { readdirSync } from 'fs';
import path from 'path';

async function getScreenshots() {
  const publicDir = path.join(process.cwd(), 'public');
  try {
    const files = readdirSync(publicDir);
    const screenshots = files
      .filter(file => file.startsWith('work') && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')))
      .slice(0, 12) // Get first 12 screenshots
      .map((file, index) => ({
        id: index,
        filename: file,
        path: `/${file}`,
        alt: `Carpet installation ${index + 1}`
      }));
    return screenshots;
  } catch (error) {
    console.error('Error reading screenshots:', error);
    return [];
  }
}

export default async function Gallery() {
  const screenshots = await getScreenshots();

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue">
          Our Work
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a look at some of our recent carpet fitting projects. Quality workmanship and attention to detail in every installation.
        </p>

        {screenshots.length === 0 ? (
          <p className="text-center text-gray-500">No screenshots available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="relative aspect-video bg-blue-lightest rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={screenshot.path}
                  alt={screenshot.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
