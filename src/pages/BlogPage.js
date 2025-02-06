import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Coming Soon",
      excerpt: "Our blog content is currently under development. Stay tuned for exciting updates, tech insights, and industry news.",
      author: "Lex Innovation Team",
      date: "2024",
      category: "Announcement",
      image: "/api/placeholder/400/300"
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
              Our
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Insights, updates, and stories from the Lex Innovation team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span className="text-blue-400">{post.category}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
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

export default BlogPage;