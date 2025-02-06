import React from 'react';
import { FileText, Mail } from 'lucide-react';
import Footer from './components/Footer';
import Navigation from './components/Header';

const TermsOfService = () => {
  const sections = [
    {
      title: "Description of Service",
      content: [
        "The Platform allows users to connect their social media accounts, create and schedule posts, and access analytics from connected accounts. The Platform also features a personalised ChatGPT assistant for insights and recommendations."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to use the Platform only for lawful purposes.",
        "You must not misuse the Platform, including but not limited to, attempting to gain unauthorised access or transmitting any harmful code."
      ]
    },
    {
      title: "Account Connection",
      content: [
        "By connecting your social media accounts to the Platform, you grant us permission to access, manage, and retrieve data from these accounts as necessary to provide the services."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All content and materials on the Platform, including text, graphics, logos, and software, are the property of LEX Innovationor its licensors and are protected by copyright, trademark, and other intellectual property laws."
      ]
    },
    {
      title: "Disclaimer of Warranties",
      content: [
        "The Platform is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. LEX Innovationdoes not warrant that the Platform will be uninterrupted, error-free, or secure."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navigation />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
              <span className="block text-2xl md:text-3xl text-gray-400 mt-4">
                Platform Usage Agreement
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              By accessing or using the LEX InnovationSocial Media Management Platform, you agree to comply with and be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="mb-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
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
          <h2 className="text-3xl font-bold mb-6">Have Questions About Our Terms?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact our team for clarification on any of our terms and conditions.
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

export default TermsOfService;