import React from 'react';
import { Calendar, Users, Briefcase, Mail, Bell } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const CareersPage = () => {
  // Keep your data structures for when the page fully launches
  const openPositions = [
    // Your existing positions...
  ];

  const benefits = [
    // Your existing benefits...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />

      {/* Coming Soon Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Careers
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              We're building an amazing team to shape the future of technology.
              Our careers page is under construction, but we're always looking for talented individuals.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Launching April 2025</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Multiple positions opening soon</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Remote-first culture</span>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-400" />
                  Get notified when we launch
                </h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Notify Me
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  We'll only use your email to notify you about career opportunities.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                Interested in joining our team before the official launch? 
                <a href="mailto:careers@lexinnovations.com" className="text-blue-400 ml-1 hover:underline">
                  Email us your resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;