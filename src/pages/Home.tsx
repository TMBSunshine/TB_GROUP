import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { HeroCarousel } from '../components/sections/HeroCarousel';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';

const features = [
  'Cutting-edge technology solutions',
  'Expert team with years of experience',
  'Local presence in Cameroon',
  '24/7 customer support',
  'Competitive pricing',
  'Quality guaranteed'
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Intro Section */}
      <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tb-pattern"></div>
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6">
                Welcome to TB Group
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Building Your Digital Future
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                TB Group is a dynamic startup company based in Douala, Cameroon, dedicated to 
                providing innovative technology solutions that transform businesses and improve lives. 
                From software development to IoT innovations, we're your partner in digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="/services">
                  Explore Our Services
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" href="/contact">
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose TB Group?
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-tb-pattern opacity-10"></div>
        </div>
        <Container className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss how TB Group can help you leverage technology to achieve your goals. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="https://wa.me/237678690828"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};