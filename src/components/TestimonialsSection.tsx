import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Verma",
      treatment: "Heart Surgery",
      rating: 5,
      review: "Excellent care and treatment. The doctors at Tulip Hospital saved my life with their expertise in cardiac surgery. The staff was very supportive throughout my recovery.",
      date: "2024-01-15"
    },
    {
      name: "Sunita Devi",
      treatment: "Kidney Dialysis",
      rating: 5,
      review: "Best dialysis facility in Jaunpur. Clean environment, modern machines, and caring staff. I've been coming here for 6 months and always feel comfortable.",
      date: "2024-01-10"
    },
    {
      name: "Amit Kumar",
      treatment: "Emergency Care",
      rating: 5,
      review: "Quick response during emergency. The 24/7 emergency service is excellent. They handled my father's heart attack with great care and professionalism.",
      date: "2024-01-05"
    },
    {
      name: "Priya Singh",
      treatment: "Preventive Checkup",
      rating: 5,
      review: "Comprehensive health checkup with detailed reports. The doctors explained everything clearly and provided excellent preventive care advice.",
      date: "2023-12-28"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Patient <span className="text-red-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our patients about their experience with our healthcare services 
            and the quality of care they received at Tulip Hospital.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-6xl">❝</div>
              <div className="absolute bottom-4 right-4 text-6xl">❞</div>
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].review}"
              </blockquote>

              {/* Patient Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-red-500 font-medium">
                    {testimonials[currentTestimonial].treatment}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {new Date(testimonials[currentTestimonial].date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-red-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-red-500' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Review Preview */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.review.substring(0, 100)}..."
              </p>

              {/* Patient Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-red-500 text-xs">{testimonial.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-white/90 mb-6">
              Help others by sharing your experience with our healthcare services
            </p>
            <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
