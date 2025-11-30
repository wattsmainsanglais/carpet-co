interface GoogleMapProps {
  address?: string;
  embedUrl?: string;
  height?: string;
  className?: string;
}

export default function GoogleMap({
  address,
  embedUrl,
  height = '400px',
  className = ''
}: GoogleMapProps) {
  // Generate Google Maps embed URL from address (using simple iframe embed)
  const generateMapUrl = (addr: string) => {
    const encodedAddress = encodeURIComponent(addr);
    return `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;
  };

  // Use custom embedUrl if provided, otherwise generate from address
  const mapUrl = embedUrl || (address ? generateMapUrl(address) : null);

  if (!mapUrl) {
    return (
      <section className="py-20 bg-cream dark:bg-black">
        <div className="container mx-auto px-4">
          <div className={`bg-blue-lightest dark:bg-zinc-900 rounded-lg flex items-center justify-center ${className}`} style={{ height }}>
            <p className="text-gray-500 dark:text-gray-400">Map location not configured</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue dark:text-gold-light">
          Find Us
        </h2>
        <div className={`rounded-lg overflow-hidden border-2 border-blue-lightest dark:border-zinc-800 shadow-md ${className}`} style={{ height }}>
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
      </div>
    </section>
  );
}
