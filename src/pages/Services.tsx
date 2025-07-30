import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Cpu, 
  Car, 
  Wrench, 
  BarChart3, 
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    features: [
      'Custom Web Applications',
      'Desktop Software Solutions',
      'API Development & Integration',
      'Database Design & Management',
      'Legacy System Modernization'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Professional websites that drive engagement and deliver results.',
    features: [
      'Business Landing Pages',
      'E-commerce Platforms',
      'Portfolio & Online CVs',
      'Tracking & Analytics Sites',
      'CMS Development'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS & Android Native Apps',
      'Cross-platform Solutions',
      'Progressive Web Apps (PWA)',
      'App Store Optimization',
      'App Maintenance & Updates'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Smart technology solutions for agriculture and industrial automation.',
    features: [
      'Agricultural Robots (AgriBots)',
      'Drone Systems & Automation',
      'Smart Sensor Networks',
      'Industrial IoT Solutions',
      'Remote Monitoring Systems'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Car,
    title: 'Car Sales',
    description: 'Quality vehicles with professional sales service and customer support.',
    features: [
      'New & Used Vehicle Sales',
      'Vehicle Inspection Services',
      'Financing Assistance',
      'Trade-in Evaluations',
      'Extended Warranty Options'
    ],
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Wrench,
    title: 'Car Maintenance',
    description: 'Expert automotive repair and maintenance services for all vehicle types.',
    features: [
      'Regular Maintenance Services',
      'Diagnostic & Repair',
      'Engine & Transmission Work',
      'Electrical System Repair',
      'Emergency Roadside Assistance'
    ],
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: BarChart3,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to help your business leverage digital solutions.',
    features: [
      'Technology Strategy Planning',
      'Digital Transformation',
      'System Architecture Design',
      'Security Assessments',
      'Performance Optimization'
    ],
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Settings,
    title: 'Business Computerization',
    description: 'Complete digital transformation and process automation for modern businesses.',
    features: [
      'Business Process Automation',
      'ERP System Implementation',
      'Digital Workflow Solutions',
      'Data Management Systems',
      'Staff Training & Support'
    ],
    color: 'from-teal-500 to-teal-600'
  }
];

export const Services: React.FC = () => {
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive growth in the digital age.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full group cursor-pointer">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-200"
                    href="/contact"
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', description: 'Building your solution with regular updates' },
              { step: '04', title: 'Delivery', description: 'Launch, testing, and ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss your project and explore how TB Group can help you 
              achieve your business objectives with the right technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Contact Us Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="https://wa.me/237678690828"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                WhatsApp Now
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};