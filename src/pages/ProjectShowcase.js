import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Code, Database, Cloud, Lock, Search, Monitor } from 'lucide-react';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Updated filter labels
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ongoing', label: 'Ongoing' },      // Changed from 'web'
    { id: 'handovered', label: 'Handovered' }, // Changed from 'ai'
    { id: 'maintenance', label: 'Maintenance' }, // Changed from 'cloud'
    { id: 'others', label: 'Others' }         // Changed from 'security'
  ];

  // Update project categories to match new filter IDs
  const projects = [
    {
      id: 1,
      title: 'Shradda IVR System',
      description: 'Sri Lanka Mobitel ISP based Customized IVR System',
      image: 'https://pawsome-testing.sgp1.digitaloceanspaces.com/f52624b0-63f3-4c4f-95d3-534e2bc02c20-WhatsApp_Image_2025-01-05_at_22.47.44_427d31e1-removebg-preview.png',
      category: ['ongoing', 'IVR'],  // Changed from 'web'
      tech: ['React', 'DigitalOrcen', 'nest js', 'Mysql', 'nginx'],
      features: [
        'Custom Audio track upload',
        'payment system for GSM call subscription',
        'Admin Dashboard for schedule audios',
        'Advanced analytics dashboard'
      ],
      results: {
        efficiency: '+45%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'PetDoc',
      description: 'Multivendor pet care marketplace with AI-driven recommendations',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FScreenshot%202025-04-06%20163227.png?alt=media&token=10b05c29-7db6-46f8-ac50-d509ad026ad1',
      category: ['others', 'maintenance'],  // Changed from 'security', 'cloud'
      tech: ['Go', 'Kubernetes', 'Azure', 'Hyperledger'],
      features: [
        'Zero-trust architecture',
        'Real-time fraud detection',
        'Multi-region deployment',
        'Regulatory compliance'
      ],
      results: {
        security: '99.99%',
        uptime: '99.999%',
        transactions: '1M+/day'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 3,
      title: 'Soluzent LMS',
      description: 'Software as service made LMS for educational institutions',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FScreenshot%202025-04-06%20163428.png?alt=media&token=e8319c8a-4e00-4e66-a830-b835a02d7189',
      category: ['handovered', 'maintenance'],  // Changed from 'ai', 'cloud'
      tech: ['Python', 'PyTorch', 'GCP', 'MongoDB'],
      features: [
        'Demand forecasting',
        'Route optimization',
        'Inventory management',
        'Supplier analytics'
      ],
      results: {
        accuracy: '94%',
        savings: '$2.5M',
        efficiency: '+60%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 4,
      title: 'Orimi Sasaki Nihon Gakuin',
      description: 'Custom tailor made Website to manage the school',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FScreenshot%202025-04-06%20163645.png?alt=media&token=33259e2e-95c8-4f62-83d2-acb92c2cc7d7',
      category: ['ongoing', 'IVR'],  // Changed from 'web'
      tech: ['React', 'DigitalOcean', 'Nest.js', 'MySQL', 'Nginx'],
      features: [
        'Custom Audio track upload',
        'Payment system for GSM call subscription',
        'Admin Dashboard for schedule audios',
        'Advanced analytics dashboard'
      ],
      results: {
        efficiency: '+45%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 5,
      title: 'Gemify',
      description: 'Smart Gem Multivendor Marketplace',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FScreenshot%202025-04-06%20163036.png?alt=media&token=8acbc3e5-78bc-488f-89db-546104703189',
      category: ['ongoing', 'ecommerce'],  // Changed from 'web'
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      features: [
        'Gem marketplace with filters',
        'Auction system',
        'Multivendor configuration',
        'Admin dashboard'
      ],
      results: {
        vendors: '20+',
        listings: '500+'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 6,
      title: 'Fit Club',
      description: 'Gym Management System with virtual coaching',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FScreenshot%202025-04-06%20162906.png?alt=media&token=716675d4-8809-4823-8f4a-9b83e40c8a94',
      category: ['ongoing', 'health'],  // Changed from 'web'
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Nest.js', 'PHP', 'Firebase'],
      features: [
        'Membership management',
        'Online scheduling',
        'Virtual coaching',
        'Meal plan customization',
        'Attendance tracking',
        'Product sales'
      ],
      results: {
        users: '1000+',
        efficiency: '+50%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 7,
      title: 'Recipe App',
      description: 'Social recipe sharing mobile application',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FWhatsApp%20Image%202025-04-06%20at%2016.26.08_7c175608.jpg?alt=media&token=8ecad0ef-d043-4d55-865e-67c798d236ed',
      category: ['handovered', 'food'],  // Changed from 'mobile'
      tech: ['Java', 'Gradle', 'XML', 'Firebase'],
      features: [
        'Recipe browsing',
        'User contributions',
        'Google login integration',
        'Admin management',
        'Push notifications'
      ],
      results: {
        recipes: '200+',
        users: '300+'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 8,
      title: 'Car Care',
      description: 'Complete car service management application',
      image: 'https://pawsome-testing.sgp1.digitaloceanspaces.com/ac121b9e-5ffb-45d3-b26b-0a83cd804ef7-lex__1_-removebg-preview.png',
      category: ['others', 'automotive'],  // Changed from 'software'
      tech: ['Java', 'Maven', 'MySQL'],
      features: [
        'Parts inventory',
        'Vehicle repair tracking',
        'Service scheduling',
        'POS integration',
        'Stock management',
        'User management'
      ],
      results: {
        efficiency: '+60%',
        inventory: '1000+ parts'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 9,
      title: 'BypassLink',
      description: 'BypassLink is a web application that allows users to bypass link shorteners',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FScreenshot%202025-04-06%20165747.png?alt=media&token=411f7eed-c03b-446b-afaf-25f9725dc627',
      category: ['others', 'automotive'],  // Changed from 'software'
      tech: ['Java', 'Maven', 'MySQL'],
      features: [
        'Parts inventory',
        'Vehicle repair tracking',
        'Service scheduling',
        'POS integration',
        'Stock management',
        'User management'
      ],
      results: {
        efficiency: '+60%',
        inventory: '1000+ parts'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    }
    ,
    {
      id: 9,
      title: 'BypassLink AI Chat',
      description: 'BypassLink is a web application that allows users to bypass link shorteners ai Chat bot',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2Fbypasslinkbot.png?alt=media&token=b2269390-fbfb-4645-ae68-951247ee5f1b',
      category: ['others', 'automotive'],  // Changed from 'software'
      tech: ['Java', 'Maven', 'MySQL'],
      features: [
        'Parts inventory',
        'Vehicle repair tracking',
        'Service scheduling',
        'POS integration',
        'Stock management',
        'User management'
      ],
      results: {
        efficiency: '+60%',
        inventory: '1000+ parts'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 10,
      title: 'MateCeylone',
      description: 'Coconut based product selling website',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2Fmateceylone.png?alt=media&token=21637f2a-aa11-4da1-abbe-91e20dc48531',
      category: ['others', 'automotive'],  // Changed from 'software'
      tech: ['Java', 'Maven', 'MySQL'],
      features: [
        'Parts inventory',
        'Vehicle repair tracking',
        'Service scheduling',
        'POS integration',
        'Stock management',
        'User management'
      ],
      results: {
        efficiency: '+60%',
        inventory: '1000+ parts'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 11,
      title: 'Voice AI',
      description: 'Voice AI is a web application that allows users to communicate voaice commands amnmd designed for reciptionists',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FvoiceAssistance.png?alt=media&token=62b130fa-77f4-42aa-9f0a-2d42a96286c8',
      category: ['others', 'automotive'],  // Changed from 'software'
      tech: ['Java', 'Maven', 'MySQL'],
      features: [
        'Parts inventory',
        'Vehicle repair tracking',
        'Service scheduling',
        'POS integration',
        'Stock management',
        'User management'
      ],
      results: {
        efficiency: '+60%',
        inventory: '1000+ parts'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 12,
      title: "God's Eye",
      description: 'Smart Emergency Response System for Drivers',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FGODSEye.jpg?alt=media&token=1071abde-a31b-44bf-956c-a2e98a8f64a6',
      category: ['ongoing', 'automotive'],
      tech: ['React Native', 'IoT', 'Firebase', 'Node.js'],
      features: [
        'Emergency detection system',
        'Automatic alert to emergency services',
        'Real-time location tracking',
        'Driver health monitoring',
        'Accident prevention analytics'
      ],
      results: {
        efficiency: '+80%',
        response: '-45% time'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 13,
      title: 'VTV Mobile',
      description: 'Official App for VTV Mobile Network',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FVTV.jpg?alt=media&token=d3b13ff8-9e80-4431-94f5-a7f56a34efdc',
      category: ['handovered', 'mobile'],
      tech: ['Flutter', 'Dart', 'Firebase', 'RESTful APIs'],
      features: [
        'Real-time account management',
        'Usage statistics tracking',
        'Easy top-up options',
        'Exclusive offers and promotions',
        'Payment history'
      ],
      results: {
        users: '50K+',
        ratings: '4.7/5'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 14,
      title: 'VNN 24',
      description: 'Live News Streaming Platform for VNN 24 Sri Lanka',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FVNN.jpg?alt=media&token=0b8d0fe0-cdb7-437c-954a-11b035b96f00',
      category: ['handovered', 'media'],
      tech: ['React Native', 'Node.js', 'AWS MediaLive', 'MongoDB'],
      features: [
        'Live news streaming',
        'Breaking news notifications',
        'Video-on-demand archive',
        'Low-latency playback',
        'Offline viewing options'
      ],
      results: {
        views: '100K+/day',
        retention: '+65%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 15,
      title: 'Salt n Pepper',
      description: 'Dating App for 50+ Singles',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FsltNpper.jpg?alt=media&token=5d85b328-7da3-4fdc-96fb-493791d97a4f',
      category: ['ongoing', 'social'],
      tech: ['React Native', 'Firebase', 'Node.js', 'Express'],
      features: [
        'Age-appropriate matching algorithm',
        'Simple swipe interface',
        'Enhanced privacy controls',
        'Interest-based connections',
        'Video chat integration'
      ],
      results: {
        matches: '5K+/week',
        engagement: '+40%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 16,
      title: 'Nearby Chat',
      description: 'Bluetooth-Based Local Chat App',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FNchat.jpg?alt=media&token=3924d518-17a3-4347-89ab-fc13bad2b8ad',
      category: ['handovered', 'communication'],
      tech: ['Android', 'Java', 'Bluetooth API', 'Nearby Share'],
      features: [
        'No internet required',
        'Proximity-based chat',
        'User discovery',
        'Message encryption',
        'Group chat capabilities'
      ],
      results: {
        distance: 'Up to 100m',
        messages: '10K+/day'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 17,
      title: 'AR Furniture App',
      description: 'Augmented Reality E-Commerce for Furniture Stores',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2FARApp.jpg?alt=media&token=92e1339b-5d2a-40c2-9bef-549df2612ca2',
      category: ['maintenance', 'ecommerce'],
      tech: ['ARKit', 'ARCore', 'Unity', 'React Native'],
      features: [
        'Real-space furniture visualization',
        'Accurate size scaling',
        'Product catalog integration',
        'In-app purchasing',
        'Room scanning technology'
      ],
      results: {
        conversion: '+35%',
        returns: '-25%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 18,
      title: 'Social Media SaaS',
      description: 'AI-Powered Social Media Management Platform',
      image: 'https://pawsome-testing.sgp1.digitaloceanspaces.com/ac121b9e-5ffb-45d3-b26b-0a83cd804ef7-lex__1_-removebg-preview.png',
      category: ['ongoing', 'saas'],
      tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS'],
      features: [
        'Multi-platform management',
        'Automated content scheduling',
        'AI content suggestions',
        'Analytics dashboard',
        'Team collaboration tools'
      ],
      results: {
        efficiency: '+60%',
        engagement: '+45%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 19,
      title: 'SLIIT Open Day Management System',
      description: 'Event Management System for Open Day Registrations (Phase 1)',
      image: 'https://pawsome-testing.sgp1.digitaloceanspaces.com/ac121b9e-5ffb-45d3-b26b-0a83cd804ef7-lex__1_-removebg-preview.png',
      category: ['handovered', 'education'],
      tech: ['React', 'Express', 'MySQL', 'Docker'],
      features: [
        'Attendee registration',
        'QR code check-in',
        'Real-time attendance tracking',
        'Data analytics',
        'Event scheduling'
      ],
      results: {
        registrations: '1200+',
        processing: '-65% time'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    }
    ,
    {
      id: 20,
      title: 'Mhchem',
      description: 'LMS and Cooperate website for Mhchem',
      image: 'https://firebasestorage.googleapis.com/v0/b/crypto-app-aebfd.appspot.com/o/profile_images%2Fmhchem.png?alt=media&token=445f0907-f94a-4af3-867b-3d0c800841b0',
      category: ['handovered', 'education'],
      tech: ['React', 'Express', 'MySQL', 'Docker'],
      features: [
        'Attendee registration',
        'Real-time attendance tracking',
        'Data analytics',
        'Event scheduling'
      ],
      results: {
        registrations: '1200+',
        processing: '-65% time'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  // Update the CategoryIcon component to match new categories
  const CategoryIcon = ({ category }) => {
    switch(category) {
      case 'ongoing': return <Monitor className="w-5 h-5" />;  // Was 'web'
      case 'handovered': return <Database className="w-5 h-5" />;  // Was 'ai'
      case 'maintenance': return <Cloud className="w-5 h-5" />;  // Was 'cloud'
      case 'others': return <Lock className="w-5 h-5" />;  // Was 'security'
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Latest{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge technology solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300
                ${activeFilter === filter.id 
                  ? 'bg-blue-600 border-blue-500 text-white' 
                  : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-white'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              {/* Project Image */}
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 " />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map(cat => (
                    <span key={cat} className="flex items-center gap-1 text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                      <CategoryIcon category={cat} />
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-sm text-gray-400">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                  <a 
                    href={project.links.case_study}
                    className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Case Study
                  </a>
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.links.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;