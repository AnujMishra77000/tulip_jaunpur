export default function ServicesSection() {
  const services = [
    {
      category: "Heart Care",
      icon: "🫀",
      services: [
        {
          name: "Angioplasty & Stenting",
          description: "Minimally invasive procedure to open blocked arteries",
          features: ["24/7 Emergency", "Latest Technology", "Expert Surgeons"]
        },
        {
          name: "Cardiac Surgery",
          description: "Advanced heart surgeries including bypass and valve replacement",
          features: ["State-of-art OT", "ICU Support", "Post-op Care"]
        },
        {
          name: "Preventive Cardiology",
          description: "Comprehensive heart health checkups and prevention programs",
          features: ["Health Screening", "Lifestyle Counseling", "Risk Assessment"]
        }
      ]
    },
    {
      category: "Kidney Care",
      icon: "🫘",
      services: [
        {
          name: "Hemodialysis",
          description: "Advanced dialysis facility with modern machines",
          features: ["Clean Environment", "Trained Staff", "Flexible Timings"]
        },
        {
          name: "Kidney Transplant",
          description: "Complete kidney transplantation services",
          features: ["Pre-transplant Care", "Surgery", "Follow-up Support"]
        },
        {
          name: "Stone Treatment",
          description: "Non-invasive kidney stone removal procedures",
          features: ["ESWL", "Laser Treatment", "Minimal Pain"]
        }
      ]
    },
    {
      category: "Emergency Care",
      icon: "🚨",
      services: [
        {
          name: "24/7 Emergency",
          description: "Round-the-clock emergency medical services",
          features: ["Trauma Care", "Ambulance Service", "Critical Care"]
        },
        {
          name: "ICU Services",
          description: "Advanced intensive care with monitoring systems",
          features: ["Ventilator Support", "Cardiac Monitoring", "Expert Staff"]
        },
        {
          name: "Diagnostic Services",
          description: "Complete diagnostic facilities available 24/7",
          features: ["Lab Tests", "Imaging", "Quick Reports"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services with advanced medical technology 
            and expert care for all your health needs.
          </p>
        </div>

        {/* Services by Category */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Additional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: "🩺", name: "General Medicine" },
              { icon: "🦴", name: "Orthopedics" },
              { icon: "👁️", name: "Ophthalmology" },
              { icon: "🦷", name: "Dental Care" },
              { icon: "🧠", name: "Neurology" },
              { icon: "👶", name: "Pediatrics" },
              { icon: "🤰", name: "Gynecology" },
              { icon: "🫁", name: "Pulmonology" }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-sm font-medium">{service.name}</div>
              </div>
            ))}
          </div>
          <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
