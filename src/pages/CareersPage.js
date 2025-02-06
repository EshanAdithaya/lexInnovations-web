import React from 'react';
import { Users, Code, Laptop, Globe, Coffee, Book, Heart, Zap } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Sri Lanka',
      type: 'Full-time',
      description: 'Looking for an experienced full-stack developer to join our core product team.',
      requirements: [
        'Experience with React, Node.js, and modern web technologies',
        'Strong understanding of software architecture and design patterns',
        '5+ years of professional development experience'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Sri Lanka',
      type: 'Full-time',
      description: 'Seeking a creative designer to shape the future of our product interfaces.',
      requirements: [
        'Strong portfolio demonstrating web and mobile design',
        'Experience with Figma and modern design tools',
        '3+ years of product design experience'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Sri Lanka',
      type: 'Full-time',
      description: 'Join us to build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with AWS, Docker, and Kubernetes',
        'Strong knowledge of CI/CD practices',
        'Background in automation and infrastructure as code'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Remote First',
      description: 'Work from anywhere in the world, with flexible hours'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible time off and respect for personal time'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Learning Budget',
      description: 'Annual budget for courses, books, and conferences'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance coverage'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Latest Equipment',
      description: 'High-end hardware and software setup'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Team Retreats',
      description: 'Annual company retreats for team bonding'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team of
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Innovators
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Help us build the future of technology. We're always looking for talented individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="text-blue-400">{position.department}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{position.location}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{position.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-400 mb-4">{position.description}</p>

                <div className="space-y-2">
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;