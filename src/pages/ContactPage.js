import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://pawsome.soluzent.com/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: ['eshangunathilaka10@gmail.com'],
          subject: `New Contact Form Submission from ${formData.name} (Lex website)`,
          htmlContent: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `
        })
      });

      if (response.status === 201) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+94 71 335 8701', '+94 76 605 7574'],
      action: 'tel:94713358701'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['thisitha@lexinnovation.com', 'eshan@lexinnovation.com'],
      action: 'mailto:thisitha@lexinnovation.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['73/L Temple Road, Ganemulla'],
      // action: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Monday - Friday', '9:00 AM - 6:00 PM'],
      action: null
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
              Let's Start a
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="text-blue-400 mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400">{detail}</p>
                  ))}
                </div>
                {info.action && (
                  <a 
                    href={info.action}
                    className="inline-flex items-center gap-2 text-blue-400 mt-4 hover:text-blue-300 transition-colors"
                  >
                    Contact us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
              <div className="aspect-video w-full bg-gray-900 rounded-lg">
                {/* Replace with actual map implementation */}
                {/* <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Interactive Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

      <Footer />
    </div>
  );
};

export default ContactPage;