export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tulip Hospital</h3>
                <p className="text-gray-400">Heart & Kidney Specialists</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Jaunpur District's first super specialty hospital providing advanced 
              cardiac and nephrology care with state-of-the-art facilities and 
              expert medical professionals.
            </p>

            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  <span className="text-sm">📱</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Doctors',
                'Services',
                'Departments',
                'Emergency Care',
                'Patient Portal',
                'Health Checkups',
                'Insurance'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">Tulip Hospital</p>
                  <p className="text-gray-400 text-sm">Medical Complex, Jaunpur</p>
                  <p className="text-gray-400 text-sm">Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-red-500">📞</span>
                <div>
                  <p className="text-gray-300">+91-XXXX-XXXX-XX</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-red-500">✉️</span>
                <p className="text-gray-300">info@tuliphospital.com</p>
              </div>
            </div>

            {/* Emergency Button */}
            <div className="mt-6">
              <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors w-full">
                🚨 Emergency: Call Now
              </button>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Our Specialties</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🫀 Cardiology',
              '🫘 Nephrology',
              '🩺 Critical Care',
              '🦴 Orthopedics',
              '👁️ Ophthalmology',
              '🧠 Neurology',
              '👶 Pediatrics',
              '🤰 Gynecology'
            ].map((specialty) => (
              <span
                key={specialty}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tulip Hospital. All rights reserved. | First Super Specialty Hospital in Jaunpur District
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
