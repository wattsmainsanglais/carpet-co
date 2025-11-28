import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-blue-darker pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.webp"
          alt="Carpet background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-lightest/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Image
            src="/carpet-co-blue.png"
            alt="CARPET Co. Dukinfield"
            width={500}
            height={180}
            priority
            className="w-full max-w-[200px] md:max-w-lg drop-shadow-xl rounded-2xl"
          />
        </div>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-sm text-blue-darker font-semibold">
          Carpet Fitters of Distinction
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#gallery"
            className="bg-blue hover:bg-blue-light text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            View Our Work
          </Link>
          <Link
            href="#contact"
            className="bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
