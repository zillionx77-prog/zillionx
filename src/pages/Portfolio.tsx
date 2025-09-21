import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import suslon from '../Images/susalon.png';
import pooWeb from '../Images/pooWeb.png';
import pooApp from '../Images/pooApp.png';
import sqWeb from '../Images/sqNowWeb.png';
import sqApp from '../Images/sqNowApp.png';
import paidAd from '../Images/paidAd.jpg';
import videEd from '../Images/videEd.jpg';

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (category) {
      setFilter(category);
    }
  }, [category]);

  const projects = [
    {
      title: 'Susilon Beauty Art Studio',
      category: 'Web Development',
      image: suslon,
      description: 'A professional website showcasing services, portfolio, and booking options to boost online presence and customer engagement.',
      technologies: ['React', 'Redux'],
      results: '300% increase in online sales',
      link: 'https://susilonthebeautyartsutdio.com/'
    },
    {
      title: 'Pookadai App',
      category: 'App Development',
      image: pooApp,
      description: 'A comprehensive e-commerce ecosystem including customer app, web platform, delivery tracking, purchase management, and packing solutions for flower retail business.',
      technologies: ['React Native', 'Redux', 'PHP', 'MySQL', 'Razorpay'],
      results: '10K+ downloads',
      link: 'https://play.google.com/store/apps/details?id=com.Kapiital.Pookadai&hl=en'
    },
    {
      title: 'Pookadai web',
      category: 'Web Development',
      image: pooWeb,
      description: 'A comprehensive e-commerce ecosystem including customer app, web platform, delivery tracking, purchase management, and packing solutions for flower retail business.',
      technologies: ['React', 'Redux', 'PHP', 'MySQL', 'Razorpay'],
      results: '300% increase in online sales',
      link: 'https://pookadai.co.in/'
    },
    {
      title: 'SquareNow web',
      category: 'Web Development',
      image: sqWeb,
      description: 'A Loan Management Application that collaborates with NBFCs, MFIs, and global financial institutions of various sizes and sectors, leveraging technology to optimize business performance.',
      technologies: ['React', 'Redux', 'PHP', 'MySQL', 'Razorpay'],
      results: '300% increase in online sales',
      link: 'https://squarenow.in/contact.html'
    },
    {
      title: 'SquareNow App',
      category: 'App Development',
      image: sqApp,
      description: 'A Loan Management Application that collaborates with NBFCs, MFIs, and global financial institutions of various sizes and sectors, leveraging technology to optimize business performance.',
      technologies: ['React Native', 'Redux', 'PHP', 'MySQL', 'Razorpay'],
      results: '10K+ downloads',
      link: 'https://play.google.com/store/apps/details?id=com.kapiitalkapslock.SquareNow&hl=en_IN'
    },
    {
      title: 'Restaurant Chain Campaign',
      category: 'Paid Ads',
      image: paidAd,
      description: 'Multi-platform advertising campaign for a national restaurant chain.',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics'],
      results: '400% ROI increase',
      link: 'https://portfolio-ads-pm.my.canva.site/'
    },
    {
      title: 'Post-production',
      category: 'Video Editing',
      image: videEd,
      description: 'Professional video editing services to create engaging, polished, and platform-ready content that captures attention and tells your story.',
      technologies: ['Davinci Resolve', 'Adobe Premiere Pro', 'Adobe After Effect'],
      results: '400% ROI increase',
      link: 'https://drive.google.com/drive/folders/1aEJrD8gVh9jGSnaFWqdD7dLxjKH3U0QJ'
    },
    {
      title: 'Fashion Brand Social',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete social media strategy and management for luxury fashion brand.',
      technologies: ['Instagram', 'TikTok', 'Content Creation'],
      results: '200% follower growth',
      // link: ''
    }
  ];

  const categories = ['All', 'Web Development', 'App Development', 'Paid Ads', 'Video Editing', 'Social Media'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const onViewProject = () => {
    console.log('ads');
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our Portfolio
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-8 animate-fade-in-up animation-delay-300"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            Explore our successful projects and see how we've helped businesses achieve their digital goals
            through innovative solutions and strategic marketing campaigns.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === category
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                      onClick={() => project.link ? window.open(project.link, '_blank') : onViewProject}>
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="border-t pt-4">
                    <p className="text-sky-600 font-semibold text-sm">
                      📈 {project.results}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '200%', label: 'Average ROI Increase' },
              { number: '20+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project and see how we can help you achieve your goals.
          </p>
          <Link 
            to="/contact"
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Portfolio;