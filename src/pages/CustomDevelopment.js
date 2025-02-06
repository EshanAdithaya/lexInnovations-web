import React from 'react';
import { Code, Database, Layout, TabletSmartphone , CheckCircle, Users, ArrowRight, Github } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';
const CustomDevelopment = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Web Applications",
      description: "Custom web applications built with modern frameworks and responsive design principles."
    },
    {
      icon: <TabletSmartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Scalable database architecture and optimization for high-performance applications."
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs built with modern security standards."
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "PHP", ".NET Core"]
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    }
  ];

  const benefits = [
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions built to grow with your business"
    },
    {
      title: "Agile Development",
      description: "Iterative development with regular updates and feedback"
    },
    {
      title: "Security First",
      description: "Built-in security measures and best practices"
    },
    {
      title: "Performance Optimized",
      description: "Fast, efficient, and reliable applications"
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
              Custom Software
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Transforming your unique business requirements into powerful, scalable software solutions.
            </p>
            <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help bring your ideas to life.
          </p>
          <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomDevelopment;