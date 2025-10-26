import React, { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Users, Target, Sparkles, CheckCircle } from 'lucide-react';

const AboutContactHm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    'Web Development',
    'App Development',
    'Paid Ads (Google/Facebook)',
    'Social Media Marketing',
    // 'SEO Optimization',
    // 'Brand Strategy',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹5,000',
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000+',
    'Let\'s discuss'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Handle form submission here
  //   setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="text-center animate-fade-in-up">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <div className="animate-spin w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-sky-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* About Us */}
          <div
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="flex items-center mb-6">
              <Users className="text-sky-500 mr-3 animate-bounce" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-sky-600 bg-clip-text text-transparent">
                About Us
              </h2>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hidden">
              About Us
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed transform hover:scale-105 transition-transform duration-300 cursor-default">
              ZillionX is a creative digital marketing agency helping businesses grow online.
              We specialize in web development, app solutions, social media growth, and
              ROI-driven ad campaigns.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed transform hover:scale-105 transition-transform duration-300 cursor-default">
              Our team of passionate professionals combines creativity with data-driven
              strategies to deliver exceptional results that exceed expectations and drive
              sustainable business growth.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Clock, label: 'Years Experience', value: '4+', color: 'from-sky-500 to-blue-600' },
                { icon: Target, label: 'Global Clients', value: '20+', color: 'from-blue-500 to-sky-600' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 transform hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-pulse`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Phone size={20} className="text-sky-500" />
                <span className="text-gray-700">+91 89392-96343</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Mail size={20} className="text-sky-500" />
                <span className="text-gray-700">zillionx77@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <MapPin size={20} className="text-sky-500" />
                <span className="text-gray-700">4/127 Bharathiyar street,porur rd,kovur,ch-128</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            id="contact"
            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-1000 delay-300 transform relative overflow-hidden ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              } ${isFormFocused ? 'ring-2 ring-sky-500 shadow-2xl scale-105' : ''}`}
            onFocus={() => setIsFormFocused(true)}
            onBlur={() => setIsFormFocused(false)}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center mb-6 relative z-10">
              <Sparkles className="text-sky-500 mr-3 animate-spin" size={32} />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-sky-600 bg-clip-text text-transparent">
                Contact Us
              </h2>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 hidden">
              Contact Us
            </h2>

            <p className="text-gray-600 mb-8 relative z-10">
              Ready to start your project? Get in touch with us today and let's discuss
              how we can help grow your business digitally.
            </p>

            {/* <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105 hover:shadow-md"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105 hover:shadow-md"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105 hover:shadow-md resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl animate-pulse"
              >
                Send Message
                <Send size={20} />
              </button>
            </form> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContactHm;