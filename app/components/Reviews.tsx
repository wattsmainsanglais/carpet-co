import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "Absolute 5-star service! I went in on a Tuesday evening, chose exactly what I wanted, and was offered a fantastic price. By Friday, they were already fitting it! We were working on a tight schedule, but when we called to explain, they managed to accommodate us even earlier than planned. They even went above and beyond by giving my dad a lift to the barber when he was running late. Top-notch team and outstanding service—thank you so much!",
      author: "Harry"
    },
    {
      text: "Absolutely delighted with our stair runner with bespoke edging. Brilliant experience from start to finish from a trusted family company. A pleasure to deal with and fantastic attention to detail. Excellent quality carpet and service.",
      author: "Jane"
    },
    {
      text: "Quality carpets. Great service from start to finish. Really friendly family run business where nothing is too much trouble. Can't recommend these guys enough they've been fantastic!!",
      author: "Rachel"
    },
    {
      text: "Absolutely fantastic! We have got fitted second carpet from Bill and his sons and I will not go anywhere else anymore. They are all very friendly and working hard and fast and doing super excellent job and beyond. Thank you so much again!",
      author: "Petra"
    },
    {
      text: "Excellent service and price!! Would highly recommend! Thank you Carpet Co!",
      author: "Amy"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue dark:text-gold-light">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-cream dark:bg-blue p-6 rounded-lg border border-blue-lightest dark:border-blue-light shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
              <p className="text-blue dark:text-gold-light font-semibold">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
