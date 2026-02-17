export default function SpecialtiesSection() {
  const specialties = [
    {
      icon: "🫀",
      title: "Cardiology",
      description: "Comprehensive heart care including interventional cardiology, cardiac surgery, and preventive care.",
      services: ["Angioplasty", "Bypass Surgery", "Pacemaker Implantation", "Heart Valve Repair"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "🫘",
      title: "Nephrology",
      description: "Complete kidney care from diagnosis to advanced treatments including dialysis and transplantation.",
      services: ["Hemodialysis", "Peritoneal Dialysis", "Kidney Transplant", "Stone Treatment"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🩺",
      title: "Critical Care",
      description: "Advanced ICU facilities with 24/7 monitoring and life support systems.",
      services: ["ICU Care", "Ventilator Support", "Cardiac Monitoring", "Emergency Medicine"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-500">Specialties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in specialized medical care with state-of-the-art facilities 
            and expert medical professionals in Jaunpur District.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {specialty.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {specialty.description}
                </p>
                
                {/* Services */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                  {specialty.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className={`w-full mt-6 bg-gradient-to-r ${specialty.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Need Specialized Care?</h3>
            <p className="text-xl mb-6 text-white/90">
              Our expert team is ready to provide you with the best possible care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors">
                Emergency: +91-XXXX-XXXX
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
