import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram,
  Clock,
  Send
} from 'lucide-react';
import { ContactForm } from '../components/sections/ContactForm';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['+237 678690828', '+237 657982834'],
    action: 'tel:+237678690828'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['tbgroupservises@gmail.com'],
    action: 'mailto:tbgroupservises@gmail.com'
  },
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['Makepe St. Tropez', 'Douala, Cameroon'],
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
    action: '#'
  }
];

const socialLinks = [
  {
    icon: MessageCircle,
    name: 'WhatsApp',
    handle: '+237 678690828',
    url: 'https://wa.me/237678690828',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@tb.group.io',
    url: 'https://www.instagram.com/tb.group.io?igsh=OWlqenN4aXN3bmxh',
    color: 'from-pink-500 to-purple-600'
  },
  {
    icon: MessageCircle,
    name: 'Telegram',
    handle: '+237 657982834',
    url: 'https://t.me/+237657982834',
    color: 'from-blue-500 to-blue-600'
  }
];

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tb-pattern opacity-10"></div>
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ready to start your project? Let's discuss how TB Group can help 
              transform your business with innovative technology solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-shadow">
                  <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                    <info.icon size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Connect With Us
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white group-hover:scale-110 transition-transform`}>
                        <social.icon size={24} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {social.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Find Us Here
                </h3>
                
                {/* Google Maps Embed */}
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7526!2d9.7680556!3d4.0619444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnNDMuMCJOIDnCsDQ2JzA1LjAiRQ!5e0!3m2!1sen!2scm!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TB Group Location"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        TB Group Office
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Makepe St. Tropez<br />
                        Douala, Cameroon
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    href="https://wa.me/237678690828?text=Hello%20TB%20Group!%20I%20would%20like%20to%20visit%20your%20office."
                    icon={MessageCircle}
                    className="w-full"
                  >
                    Get Directions via WhatsApp
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};