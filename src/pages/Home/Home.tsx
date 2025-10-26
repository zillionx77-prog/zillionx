import { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import ServicesHm from './components/ServicesHm';
import PortfolioHm from './components/PortfolioHm';
import AboutContactHm from './components/AboutContactHm';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50">
          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-sky-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-sky-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-500 rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>

          {/* Animated Icons */}
          <Sparkles className="absolute top-32 right-32 text-sky-400 animate-spin opacity-20" size={24} style={{ animationDuration: '8s' }} />
          <Zap className="absolute bottom-32 left-32 text-blue-400 animate-bounce opacity-20" size={20} />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0e7ff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3Ccircle cx=%2253%22 cy=%227%22 r=%221%22/%3E%3Ccircle cx=%227%22 cy=%2253%22 r=%221%22/%3E%3Ccircle cx=%2253%22 cy=%2253%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        {/* Mouse Following Gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Animated Title */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>We</span>{' '}
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>Grow</span>{' '}
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>Your</span>{' '}
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>Business</span>
              </h1>
              <span className="text-sky-500 block text-3xl sm:text-4xl md:text-6xl font-bold">
                Digitally
              </span>
            </div>

            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              Creative strategies, powerful campaigns & measurable results.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <button
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
              >
                Get Started
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Play size={20} />
                Our Services
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {[
              { number: '30+', label: 'Projects Completed' },
              { number: '20+', label: 'Happy Clients' },
              { number: '4+', label: 'Years Experience' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500 mb-2 animate-pulse">{stat.number}</div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
      <ServicesHm />
      <PortfolioHm />
      <AboutContactHm />
    </>
  );
};

export default Home;