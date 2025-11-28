export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue">
          About Carpet Co
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-blue-lightest shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gold-dark">Contact Information</h3>
              <div className="space-y-3 text-lg text-gray-900">
                <p><strong className="text-blue">Address:</strong><br />Wild St, Dukinfield SK16 4DL</p>
                <p><strong className="text-blue">Phone:</strong><br />0161 344 5377</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-blue-lightest shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gold-dark">Opening Hours</h3>
              <div className="space-y-2 text-lg text-gray-900">
                <p><strong className="text-blue">Monday - Friday:</strong> 10am - 5pm</p>
                <p><strong className="text-blue">Saturday - Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
