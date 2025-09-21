import { Link } from 'react-router-dom';
import { Users, Target, Award, Lightbulb, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your business growth and success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and use cutting-edge technologies to give you a competitive edge.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build long-term partnerships based on trust and transparency.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy to execution and support.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ years in digital marketing with expertise in scaling businesses from startup to enterprise level.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer and tech visionary with experience building scalable web and mobile applications.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer specializing in brand identity and user experience design.'
    },
    {
      name: 'David Thompson',
      role: 'Marketing Strategist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data-driven marketer with proven track record of creating campaigns that deliver exceptional ROI.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            About ZillionX
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8 animate-fade-in-up animation-delay-300"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            We're a passionate team of digital marketing experts dedicated to helping businesses 
            thrive in the digital landscape through innovative strategies and cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-sky-500 mb-8"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2020, ZillionX emerged from a simple belief: every business deserves 
                to succeed in the digital world. What started as a small team of passionate 
                marketers and developers has grown into a full-service digital marketing agency 
                trusted by businesses worldwide.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We've helped over 150 businesses transform their digital presence, from startups 
                looking to make their mark to established companies seeking to innovate and grow. 
                Our approach combines creativity with data-driven strategies to deliver results 
                that matter.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to push boundaries, embrace new technologies, and most 
                importantly, help our clients achieve their dreams through the power of 
                digital marketing.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-sky-500 mb-6 flex justify-center">
                  <value.icon size={48} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in digital marketing, 
              development, and creative design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-sky-500 font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Projects Completed', description: 'Successful campaigns delivered' },
              { number: '98%', label: 'Client Satisfaction', description: 'Happy clients who trust us' },
              { number: '4+', label: 'Years Experience', description: 'In digital marketing' },
              { number: '24/7', label: 'Support', description: 'Always here when you need us' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help your business grow and achieve its digital marketing goals.
          </p>
          <Link 
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white text-sky-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Get In Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;