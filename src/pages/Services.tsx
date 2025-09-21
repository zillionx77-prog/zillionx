import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, BarChart3, Share2, ArrowRight, CheckCircle, Clapperboard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'SEO Optimization',
        'Performance Optimization',
        'E-commerce Solutions',
        'CMS Integration'
      ],
      // price: 'Starting from ₹2,999'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: [
        'iOS & Android Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Analytics Integration'
      ],
      // price: 'Starting from ₹4,999'
    },
    {
      icon: BarChart3,
      title: 'Paid Ads (Google/Facebook)',
      description: 'Strategic advertising campaigns that maximize ROI and reach your target audience effectively.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'Campaign Optimization',
        'A/B Testing',
        'Conversion Tracking',
        'Monthly Reporting'
      ],
      // price: 'Starting from ₹1,500/month'
    },
    {
      icon: Clapperboard,
      title: 'Video Editing',
      description: 'Professional video editing services to create engaging, polished, and platform-ready content that captures attention and tells your story.',
      features: [
        'Cutting, Trimming & Merging Clips',
        'Transitions & Motion Effects',
        'Color Correction & Grading',
        'Subtitles & Captions',
        'Background Music & Sound Enhancement',
        'Video Optimization for Social Media Platforms'
      ],
      // price: 'Starting from ₹999/month'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategies to build your brand presence and engage with customers.',
      features: [
        'Content Strategy',
        'Social Media Management',
        'Community Building',
        'Influencer Partnerships',
        'Analytics & Reporting',
        'Brand Monitoring'
      ],
      // price: 'Starting from ₹999/month'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8 animate-fade-in-up animation-delay-300"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            We provide comprehensive digital marketing solutions designed to help your business grow, 
            engage customers, and achieve measurable results in today's competitive digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-sky-500 group-hover:text-sky-600 transition-colors duration-300 flex-shrink-0">
                    <service.icon size={56} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle size={16} className="text-sky-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-sky-500">
                        {service.price}
                      </div>
                      <Link 
                        to="/contact"
                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                      >
                        Get Quote <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project's success from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business goals and target audience' },
              { step: '02', title: 'Strategy', description: 'We develop a customized digital marketing strategy' },
              { step: '03', title: 'Implementation', description: 'We execute the plan with precision and expertise' },
              { step: '04', title: 'Optimization', description: 'We continuously monitor and improve performance' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <Link 
            to="/contact"
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Services;