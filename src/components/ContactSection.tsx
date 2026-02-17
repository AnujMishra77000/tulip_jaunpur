import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-red-500">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, emergency care, or any questions
            about our healthcare services. We're here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tulip Hospital is committed to providing exceptional healthcare services.
                Contact us for appointments, emergency care, or general inquiries.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: "📍",
                  title: "Address",
                  details: ["Tulip Hospital", "Medical Complex, Jaunpur", "Uttar Pradesh, India"]
                },
                {
                  icon: "📞",
                  title: "Phone Numbers",
                  details: ["+91 8853557222 (General)", "+91 8853557222 (Emergency)", "+91 8853557222 (Appointments)"]
                },
                {
                  icon: "✉️",
                  title: "Email",
                  details: ["info@tuliphospital.com", "emergency@tuliphospital.com", "appointments@tuliphospital.com"]
                },
                {
                  icon: "🕒",
                  title: "Working Hours",
                  details: ["Emergency: 24/7", "OPD: 8:00 AM - 8:00 PM", "Visiting Hours: 4:00 PM - 7:00 PM"]
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{contact.title}</h4>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Section */}
            <div className="bg-red-500 text-white p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">🚨 Emergency Care</h4>
              <p className="mb-4">For medical emergencies, call immediately:</p>
              <div className="text-2xl font-bold">+91 8853557222</div>
              <p className="text-sm text-red-100 mt-2">Available 24/7 with ambulance service</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="nephrology">Nephrology</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="general">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Or call us directly for immediate assistance
              </p>
              <div className="text-red-500 font-semibold mt-2">+91 8853557222</div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <h4 className="text-xl font-semibold mb-2">Hospital Location</h4>
              <p>Interactive map will be integrated here</p>
              <p className="text-sm mt-2">Tulip Hospital, Medical Complex, Jaunpur, UP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
