import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye, Star, Award } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const PortfolioHm = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'Web Development',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
    },
    {
      title: 'App Development',
      category: 'App Development',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg'
    },
    {
      title: 'Paid Ads',
      category: 'Paid Ads',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
    },
    {
      title: 'Video Editing',
      category: 'Video Editing',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg'
    },
    {
      title: 'Social Media',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-24 h-24 bg-sky-200/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="text-sky-500 mr-3 animate-bounce" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-sky-600 bg-clip-text text-transparent">
              Our Work
            </h2>
            <Star className="text-yellow-500 ml-3 animate-spin" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hidden">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital projects and campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${hoveredProject === index ? 'ring-4 ring-sky-500/50' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 z-10"></div>

              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                onClick={() => {
                  navigate(`/portfolio?category=${project.category}`);
                  window.scrollTo(0, 0);
                }}>
                <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <h3 className="text-xl font-semibold mb-2 animate-pulse">{project.title}</h3>
                  {/* <p className="text-sky-300 mb-4">{project.category}</p> */}

                  <div className="flex items-center justify-center space-x-4">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg" onClick={() => {
                      navigate(`/portfolio?category=${project.category}`);
                      window.scrollTo(0, 0);
                    }}>
                      <Eye size={20} />
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-white text-lg font-semibold flex items-center">
                  {project.title}
                  {hoveredProject === index && (
                    <Star className="ml-2 text-yellow-400 animate-spin" size={16} />
                  )}
                </h3>
                {/* <p className="text-sky-300 text-sm">{project.category}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <button className="border-2 border-sky-500 text-sky-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl"
            onClick={() => {
              navigate('/portfolio');
              window.scrollTo(0, 0);
            }}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHm;