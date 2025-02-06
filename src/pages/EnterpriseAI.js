import React from 'react';
import { Brain, Bot, BarChart, Search, Cpu, Database, Lightning, Shield } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const EnterpriseAI = () => {
  const solutions = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents for customer service and internal support."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Data-driven insights for better business decisions and forecasting."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Advanced text analysis and understanding for document processing."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Custom ML models for specific business challenges."
    }
  ];

  const capabilities = [
    {
      title: "Data Processing",
      items: [
        "Large-scale data processing",
        "Real-time analytics",
        "Data cleaning and preparation",
        "Feature engineering"
      ]
    },
    {
      title: "AI Models",
      items: [
        "Deep learning",
        "Neural networks",
        "Computer vision",
        "Natural language understanding"
      ]
    },
    {
      title: "Integration",
      items: [
        "API development",
        "Cloud deployment",
        "Legacy system integration",
        "Monitoring and analytics"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Financial Services",
      description: "Implemented fraud detection system with 99.9% accuracy",
      metrics: "+45% efficiency"
    },
    {
      title: "Healthcare",
      description: "Diagnostic assistance system for medical imaging",
      metrics: "90% faster analysis"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance system for equipment",
      metrics: "-30% downtime"
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
              Enterprise
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Harness the power of artificial intelligence to transform your business operations and decision-making.
            </p>
            <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Explore AI Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <Shield className="w-4 h-4 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <div className="text-blue-400 font-bold">{study.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how AI can drive innovation in your organization.
          </p>
          <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseAI;