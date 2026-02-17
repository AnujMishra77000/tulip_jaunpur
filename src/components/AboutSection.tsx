import AnimatedSection from './AnimatedSection';
import PremiumCard from './PremiumCard';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="slide-right" delay={200}>
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>🏥</span>
                <span>About Our Hospital</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                About <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Tulip Hospital</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Tulip Hospital stands as the first super specialty hospital in Jaunpur District, 
                pioneering advanced healthcare with a focus on cardiac and nephrology care. 
                Our state-of-the-art facility combines cutting-edge technology with compassionate 
                medical expertise.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={800}>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                With over 15 years of dedicated service, we have established ourselves as the 
                region's most trusted healthcare provider, offering comprehensive medical solutions 
                under one roof.
              </p>
            </AnimatedSection>

            {/* Premium Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🫀",
                  title: "Heart Specialists",
                  description: "Advanced cardiac care and surgery",
                  gradient: "from-red-500 to-rose-500"
                },
                {
                  icon: "🫘",
                  title: "Kidney Care",
                  description: "Complete nephrology and dialysis services",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "🏥",
                  title: "Super Specialty",
                  description: "First in Jaunpur District",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: "⚡",
                  title: "24/7 Emergency",
                  description: "Round-the-clock critical care",
                  gradient: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <AnimatedSection key={index} animation="zoom-in" delay={1000 + index * 200}>
                  <PremiumCard 
                    className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100"
                    glowEffect={true}
                    tiltEffect={true}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </PremiumCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Premium Visual Element */}
          <AnimatedSection animation="slide-left" delay={400}>
            <div className="relative">
              <PremiumCard 
                className="bg-gradient-to-br from-red-500 via-pink-500 to-red-600 rounded-3xl p-10 text-white shadow-2xl"
                glowEffect={true}
              >
                <div className="text-center mb-10">
                  <div className="text-7xl mb-6 animate-pulse">🏥</div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/95 text-lg leading-relaxed">
                    To provide world-class healthcare services with compassion, 
                    innovation, and excellence in every aspect of patient care.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "15+", label: "Years of Excellence", icon: "⭐" },
                    { number: "50+", label: "Medical Experts", icon: "👨‍⚕️" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </PremiumCard>

              {/* Premium Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full animate-float opacity-80 blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-float opacity-60 blur-sm" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-rose-400 to-red-400 rounded-full animate-float opacity-70 blur-sm" style={{ animationDelay: '1s' }}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
