import React from 'react';
import { GitBranch, Terminal, RefreshCcw, Settings, Monitor, Shield, Check, ArrowRight } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const DevOpsServices = () => {
  const services = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "CI/CD Pipeline",
      description: "Automated build, test, and deployment pipelines for faster delivery."
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitoring & Logging",
      description: "Comprehensive system monitoring and log management."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Integration",
      description: "Security best practices integrated into the development lifecycle."
    }
  ];

  const tools = [
    {
      category: "CI/CD",
      items: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"]
    },
    {
      category: "Container & Orchestration",
      items: ["Docker", "Kubernetes", "Helm", "Docker Compose"]
    },
    {
      category: "Monitoring",
      items: ["Prometheus", "Grafana", "ELK Stack", "New Relic"]
    },
    {
      category: "Infrastructure",
      items: ["Terraform", "Ansible", "CloudFormation", "Puppet"]
    }
  ];

  const benefits = [
    {
      title: "Faster Delivery",
      description: "Reduce time-to-market with automated pipelines"
    },
    {
      title: "Improved Quality",
      description: "Automated testing and quality checks"
    },
    {
      title: "Cost Efficiency",
      description: "Optimized resource utilization"
    },
    {
      title: "Enhanced Security",
      description: "Security-first approach to development"
    }
  ];

  const features = [
    "Automated CI/CD pipelines",
    "Infrastructure automation",
    "Container orchestration",
    "Monitoring and alerting",
    "Log aggregation",
    "Security scanning",
    "Performance optimization",
    "Disaster recovery"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Modern DevOps
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Streamline your development and operations with automated, secure, and scalable solutions.
            </p>
            <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Start Your DevOps Journey
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tools & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{tool.category}</h3>
                <ul className="space-y-2">
                  {tool.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <Check className="w-4 h-4 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how DevOps can improve your development workflow.
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

export default DevOpsServices;