import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const contactInfo = [
    { icon: Phone, text: '+237 678690828 / 657982834', href: 'tel:+237678690828' },
    { icon: Mail, text: 'tbgroupservises@gmail.com', href: 'mailto:tbgroupservises@gmail.com' },
    { icon: MapPin, text: 'Makepe St. Tropez, Douala, Cameroon', href: '#' },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/tb.group.io?igsh=OWlqenN4aXN3bmxh',
      label: 'Instagram'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/237678690828',
      label: 'WhatsApp'
    },
  ];

  const services = [
    'Software Development',
    'Website Development',
    'Mobile App Development',
    'IoT Solutions',
    'Car Sales & Maintenance',
    'IT Consulting'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tb-pattern opacity-5"></div>
      
      <Container className="relative">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Logo size="large" />
                <span className="text-2xl font-bold">Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                TB Group is a dynamic startup company specializing in software development, 
                mobile apps, IoT solutions, and business computerization services in Cameroon.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="/services" 
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <info.icon size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <a 
                      href={info.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TB Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};