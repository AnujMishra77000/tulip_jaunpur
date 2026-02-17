import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '../hooks/useScrollAnimation';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxOffset = useParallax();

  const slides = [
    {
      title: "Leading Heart Care in Jaunpur",
      subtitle: "Advanced cardiac treatments with compassionate care",
      image: "🫀"
    },
    {
      title: "Expert Kidney Specialists",
      subtitle: "Comprehensive nephrology services and dialysis",
      image: "🫘"
    },
    {
      title: "First Super Specialty Hospital",
      subtitle: "Pioneering healthcare excellence in Jaunpur District",
      image: "🏥"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-600 via-pink-600 to-red-800"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Premium Floating Medical Icons */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              <div className="text-white/5 text-4xl transform hover:scale-110 transition-transform duration-500">
                {['🫀', '🫘', '🩺', '💊', '🏥', '⚕️'][Math.floor(Math.random() * 6)]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
        <AnimatedSection animation="zoom-in" delay={200}>
          <div className="mb-8">
            <div className="text-9xl mb-8 animate-pulse transform hover:scale-110 transition-transform duration-500">
              {slides[currentSlide].image}
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent animate-gradient-x">
                Tulip Hospital
              </span>
            </h1>

            <div className="h-24 mb-10">
              <AnimatedSection animation="fade-up" delay={400}>
                <h2 className="text-3xl md:text-5xl font-bold text-white/95 mb-4 tracking-wide">
                  {slides[currentSlide].title}
                </h2>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={600}>
                <p className="text-xl md:text-2xl text-white/85 font-light">
                  {slides[currentSlide].subtitle}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Premium CTA Buttons */}
        <AnimatedSection animation="fade-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative overflow-hidden bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold">Book Appointment</span>
            </button>
            <button className="group relative overflow-hidden border-3 border-white text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              <span className="relative z-10 group-hover:text-red-600 transition-colors duration-500">Emergency Care</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </AnimatedSection>

        {/* Premium Stats with Glass Effect */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "50+", label: "Expert Doctors", icon: "👨‍⚕️" },
              { number: "10,000+", label: "Happy Patients", icon: "😊" },
              { number: "24/7", label: "Emergency Care", icon: "🚨" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  {stat.label}
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Premium Slide Indicators */}
        <AnimatedSection animation="fade-in" delay={1200}>
          <div className="flex justify-center space-x-3 mt-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden transition-all duration-500 ${index === currentSlide
                    ? 'w-12 h-4 bg-white rounded-full'
                    : 'w-4 h-4 bg-white/40 rounded-full hover:bg-white/60'
                  }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
}
