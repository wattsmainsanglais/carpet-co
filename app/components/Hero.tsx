import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.webp"
          alt="Carpet background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-burgundy-light/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Image
            src="/Carpertco copy.webp"
            alt="CARPET Co. Dukinfield"
            width={500}
            height={180}
            priority
            className="w-full max-w-[200px] md:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </div>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md text-white font-semibold">
          Carpet Fitters of Distinction
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#gallery"
            className="bg-teal hover:bg-teal-light text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            View Our Work
          </Link>
          <Link
            href="#contact"
            className="bg-burgundy-light hover:bg-burgundy-lighter text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
