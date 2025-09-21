import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/zillionx/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    {label: 'Web Development', href: '/services'},
    {label: 'App Development', href: '/services'},
    {label: 'Digital Marketing', href: '/services'},
    {label: 'Social Media Marketing', href: '/services'},
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohanlee', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1 relative z-10">
            <div className="text-2xl font-bold text-sky-500 mb-4 flex items-center gap-2 transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <Sparkles className="animate-spin" size={24} />
              ZillionX
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-ping"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed transform hover:scale-105 transition-transform duration-300 cursor-default">
              Your Digital Growth Partner. We help businesses thrive in the digital world 
              through innovative solutions and strategic campaigns.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Mail size={18} className="text-sky-500" />
                <span className="text-gray-300">zillionx77@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Phone size={18} className="text-sky-500" />
                <span className="text-gray-300">+91 89392-96343</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <MapPin size={18} className="text-sky-500" />
                <span className="text-gray-300">4/127 Bharathiyar street</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-sky-500 transition-all duration-300 transform hover:scale-110 hover:translate-x-2"
                >
                  {link.label}
                </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 transform hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {service.label}
                </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4 transform hover:scale-105 transition-transform duration-300 cursor-default">
              Subscribe to our newsletter for the latest digital marketing insights.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 transform focus:scale-105 hover:shadow-lg"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-gray-300 mb-4 lg:mb-0 flex items-center gap-2 transform hover:scale-105 transition-transform duration-300 cursor-default">
              © 2025 ZillionX. All Rights Reserved.
              <Heart className="text-red-500 animate-pulse" size={16} />
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-300 group-hover:text-white transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;