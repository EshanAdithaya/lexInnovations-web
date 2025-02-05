import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Globe, Shield, Cpu } from 'lucide-react';

const PremiumLexWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'products', 'clients', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      title: "Enterprise AI",
      description: "Transform your business with cutting-edge AI solutions",
      icon: <Cpu className="w-12 h-12" />,
      stats: ["99.9% Uptime", "24/7 Support", "Enterprise-grade"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions",
      icon: <Globe className="w-12 h-12" />,
      stats: ["Global CDN", "Auto-scaling", "Multi-region"]
    },
    {
      title: "Cyber Security",
      description: "Advanced protection for your digital assets",
      icon: <Shield className="w-12 h-12" />,
      stats: ["ISO 27001", "Zero Trust", "Real-time Monitor"]
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "250+", label: "Projects Delivered" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-black/90 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-12">
              <div className="relative group">
                <img src="/api/placeholder/40/40" alt="Logo" className="h-10 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden md:flex gap-8">
                {['Products', 'Clients', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative text-sm font-medium transition-colors
                      ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-white'}
                    `}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300
                      ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`} 
                    />
                  </a>
                ))}
              </div>
            </div>
            
            <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full 
              hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Start Project
              <ArrowRight className="w-4 h-4" />
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black">
            <div className="px-6 py-4 space-y-4">
              {['Products', 'Clients', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700">
                Start Project
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl space-y-8 opacity-0 animate-fade-in">
            <h1 className="text-7xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Elevating Digital
              </span>
              <br />
              Experiences
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-2xl">
              We craft exceptional software solutions that drive innovation and business growth
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-blue-600 rounded-full overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold">Our Solutions</h2>
            <p className="text-xl text-gray-400">Enterprise-grade software for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800
                hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative space-y-6">
                  <div className="text-blue-400">{product.icon}</div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-gray-400">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {stat}
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn more 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 
                  group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold">Let's Build Together</h2>
            <p className="text-xl text-gray-400">Transform your ideas into reality with our expert team</p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Phone />, text: "078-6859581" },
                { icon: <Mail />, text: "contact@lexinnovations.com" },
                { icon: <MapPin />, text: "Your Location" }
              ].map((item, index) => (
                <div key={index} className="group bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800
                  hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>

            <button className="mt-12 group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full 
              hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <span className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
              <div className="flex gap-6">
                {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-gray-400">© 2025 Lex Innovations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumLexWebsite;