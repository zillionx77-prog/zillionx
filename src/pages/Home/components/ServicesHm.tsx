import { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, BarChart3, Share2, Sparkles, TrendingUp } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const ServicesHm = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.'
    },
    {
      icon: BarChart3,
      title: 'Paid Ads',
      description: 'Strategic Google and Facebook ad campaigns that maximize ROI and drive qualified traffic to your business.'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategies that build brand awareness and foster community engagement.'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-sky-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-sky-500 mr-3 animate-spin" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-sky-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <TrendingUp className="text-sky-500 ml-3 animate-bounce" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hidden">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer group relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${hoveredCard === index ? 'ring-2 ring-sky-500' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {navigate('/services');
                window.scrollTo(0, 0);
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-xl relative z-10">
                  <service.icon 
                    size={32} 
                    className="text-sky-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-110" 
                  />
                  {hoveredCard === index && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-sky-500 transition-colors duration-300 relative z-10 transform group-hover:scale-105">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl animate-pulse"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHm;