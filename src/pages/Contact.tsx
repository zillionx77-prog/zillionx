import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'zillionx77@gmail.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 89392-96343',
      description: 'Mon-Sat from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '4/127 Bharathiyar street,porur rd,kovur,ch-128',
      description: 'Kovur, CH 600128'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9am - 6pm',
      description: 'Weekend support available'
    }
  ];

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8 animate-fade-in-up animation-delay-300"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            Ready to take your business to the next level? Get in touch with us today and let's
            discuss how we can help you achieve your digital marketing goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-sky-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sky-500 font-semibold mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. Web development projects typically take 4-8 weeks, while marketing campaigns can show results within 2-4 weeks."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes! We work with startups, small businesses, and large enterprises. Our solutions are scalable and tailored to meet your specific needs and budget."
              },
              {
                question: "What's included in your pricing?",
                answer: "Our pricing includes strategy development, implementation, ongoing optimization, and regular reporting. We provide transparent pricing with no hidden fees."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely! We offer ongoing support and maintenance for all our services. Our team is available to help you succeed long after project completion."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;