import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import AnimatedSection from './AnimatedSection';
import PremiumCard from './PremiumCard';

export default function DoctorsSection() {
  const doctors = useQuery(api.doctors.list) || [];

  // Sample doctors data for demonstration
  const sampleDoctors = [
    {
      name: "Dr. Sandeep Deshmukh",
      specialty: "Nephro",
      qualification: "MBBS, MD, DM (Nephro)",
      experience: 10,
      description: "Leading nephrologist specializing in interventional nephrology and advanced kidney care.",
      availability: ["Mon-Fri: 9AM-5PM", "Sat: 9AM-1PM"]
    },
    {
      name: "Dr. Utpal Sharma",
      specialty: "Cardio",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: 12,
      description: "Leading cardiologist with expertise in interventional cardiology and cardiac surgery.",
      availability: ["Mon-Sat: 10AM-6PM", "Emergency: 24/7"]
    },
    {
      name: "Dr. Mohsin",
      specialty: "Critical care Specialist",
      qualification: "MBBS, IDCCM, CCEBDM(Diabetes),AHREF(Internal Medicine)",
      experience: 10,
      description: "Expert critical care specialist with extensive experience in managing critically ill patients with advanced life support.",
      availability: ["24/7 ICU Coverage", "Emergency Consultations"]
    },
    {
      name: "Dr. Arpita Mishra",
      specialty: "FMUHS PEDIATRIC CARDIO",
      qualification: "MBBS, DNB, MD",
      experience: 5,
      description: "Pediatric Nephrology (FMUHS) — Renal Medicine & Interventional Nephrology | MBBS, MD, DNB",
      availability: ["24/7 ICU Coverage", "Emergency Consultations"]
    }
  ];

  const displayDoctors = doctors.length > 0 ? doctors : sampleDoctors;

  const getSpecialtyGradient = (specialty: string) => {
    switch (specialty.toLowerCase()) {
      case 'cardiology':
        return 'from-red-500 to-rose-500';
      case 'nephrology':
        return 'from-blue-500 to-cyan-500';
      case 'cardiac surgery':
        return 'from-purple-500 to-pink-500';
      case 'critical care':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section id="doctors" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <span>👨‍⚕️</span>
              <span>Meet Our Specialists</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Our Expert <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Doctors</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet our team of highly qualified specialists dedicated to providing
              exceptional healthcare services with years of experience and expertise.
            </p>
          </AnimatedSection>
        </div>

        {/* Premium Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {displayDoctors.map((doctor, index) => (
            <AnimatedSection key={index} animation="zoom-in" delay={800 + index * 200}>
              <PremiumCard
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden"
                glowEffect={true}
                tiltEffect={true}
              >
                <div className="p-8">
                  {/* Doctor Header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${getSpecialtyGradient(doctor.specialty)} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-6 shadow-lg transform hover:scale-110 transition-transform duration-500`}>
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                      <p className={`bg-gradient-to-r ${getSpecialtyGradient(doctor.specialty)} bg-clip-text text-transparent font-bold text-lg mb-1`}>
                        {doctor.specialty}
                      </p>
                      <p className="text-gray-600 text-sm font-medium">{doctor.qualification}</p>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                    <span className="mr-2">⭐</span>
                    {doctor.experience}+ Years Experience
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {doctor.description}
                  </p>

                  {/* Availability */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Availability:</h4>
                    <div className="space-y-3">
                      {doctor.availability.map((time, timeIndex) => (
                        <div key={timeIndex} className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                          <span className="font-medium">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/25">
                      Book Appointment
                    </button>
                    <button className="px-6 py-4 border-2 border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:border-red-300 transition-all duration-500 transform hover:scale-105 group">
                      <svg className="w-6 h-6 group-hover:text-red-500 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </PremiumCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={1400}>
          <PremiumCard className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12 text-center text-white relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 text-6xl">🩺</div>
                <div className="absolute top-4 right-4 text-6xl">💊</div>
                <div className="absolute bottom-4 left-4 text-6xl">🫀</div>
                <div className="absolute bottom-4 right-4 text-6xl">🏥</div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">
                  Need to Consult a Specialist?
                </h3>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Our doctors are available for consultations, emergency care, and specialized treatments.
                  Book your appointment today for personalized healthcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-red-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-lg">
                    Schedule Consultation
                  </button>
                  <button className="border-3 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-500 transition-all duration-500 transform hover:scale-105">
                    Emergency Contact
                  </button>
                </div>
              </div>
            </div>
          </PremiumCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
