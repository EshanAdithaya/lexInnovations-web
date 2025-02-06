import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const solutions = ['Custom Development', 'Enterprise AI', 'Cloud Services', 'DevOps'];
  const company = ['About Us', 'Careers', 'Blog', 'Contact'];
  
  return (
    <footer className="py-12 border-t border-gray-800" aria-label="Footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://pawsome-testing.sgp1.digitaloceanspaces.com/ac121b9e-5ffb-45d3-b26b-0a83cd804ef7-lex__1_-removebg-preview.png" 
              alt="Company Logo" 
              className="h-10" 
            />
            <p className="text-gray-400">
              Building tomorrow's software solutions with cutting-edge technology and expertise.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => {
                let href;
                switch (item) {
                  case 'About Us':
                    href = '/aboutus';
                    break;
                  case 'Careers':
                    href = '/career';
                    break;
                  case 'Blog':
                    href = '/blog';
                    break;
                  case 'Contact':
                    href = '/contact';
                    break;
                }
                return (
                  <li key={index}>
                    <a href={href} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="GitHub" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 LEX INNOVATION. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="/privacypolicy" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/termsofservice" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;