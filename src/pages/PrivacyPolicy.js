import React from 'react';
import { Shield, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you create an account, we may collect personal information such as your name, email address, and account credentials.",
        "Social Media Data: When you connect your social media accounts, we may collect data from these accounts, including posts, analytics, and other related information.",
        "Usage Data: We collect information about your interactions with the Platform, such as access times, pages viewed, and IP address."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide, operate, and maintain the Platform.",
        "To improve, personalise, and expand our services.",
        "To communicate with you, including for customer service, updates, and marketing.",
        "To analyse usage and trends to improve the Platform.",
        "To protect against fraudulent or unauthorised activity."
      ]
    },
    {
      title: "Your Data Protection Rights",
      content: [
        "The right to access.",
        "The right to rectification.",
        "The right to erasure.",
        "The right to restrict processing.",
        "The right to data portability.",
        "The right to object."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
              <span className="block text-2xl md:text-3xl text-gray-400 mt-4">
                Your Privacy Matters to Us
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              LEX Innovationis committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    <p key={idx} className="text-gray-400">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We're here to help with any questions or concerns.
          </p>
          <a 
            href="mailto:info@soluzent.com" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>

     <Footer />
    </div>
  );
};

export default PrivacyPolicy;