import React from 'react';
import { Cloud, Server, Shield, Globe, Database, Lock, RefreshCcw, Zap } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const CloudServices = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Secure and scalable infrastructure solutions on leading cloud platforms."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Managed database services with high availability and performance."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Services",
      description: "Advanced security measures and compliance solutions."
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Disaster Recovery",
      description: "Robust backup and recovery solutions for business continuity."
    }
  ];

  const platforms = [
    {
      name: "Amazon Web Services",
      features: ["EC2", "S3", "RDS", "Lambda", "CloudFront"]
    },
    {
      name: "Microsoft Azure",
      features: ["Virtual Machines", "Azure SQL", "App Service", "Functions"]
    },
    {
      name: "Google Cloud",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Run"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized infrastructure for maximum speed and efficiency"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Advanced security protocols and compliance measures"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Worldwide infrastructure for global reach"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Efficient resource utilization and cost management"
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
              Enterprise Cloud
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Scalable, secure, and reliable cloud solutions for modern businesses.
            </p>
            <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Explore Solutions
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

      {/* Cloud Platforms */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cloud Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <Shield className="w-4 h-4 text-blue-400" />
                      {feature}
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Cloud Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-400 flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss your cloud migration strategy.
          </p>
          <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudServices;