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
  Settings 
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    color: 'text-blue-500'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Responsive, modern websites that drive results',
    color: 'text-green-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    color: 'text-purple-500'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Smart devices and agricultural automation systems',
    color: 'text-orange-500'
  },
  {
    icon: Car,
    title: 'Car Sales',
    description: 'Quality vehicles with professional service',
    color: 'text-red-500'
  },
  {
    icon: Wrench,
    title: 'Car Maintenance',
    description: 'Expert automotive repair and maintenance services',
    color: 'text-yellow-500'
  },
  {
    icon: BarChart3,
    title: 'IT Consulting',
    description: 'Strategic technology guidance for your business',
    color: 'text-indigo-500'
  },
  {
    icon: Settings,
    title: 'Business Computerization',
    description: 'Digital transformation and process automation',
    color: 'text-teal-500'
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-tb-pattern"></div>
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full text-center group cursor-pointer">
                <div className={`inline-flex p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 group-hover:scale-110 transition-transform duration-200 ${service.color}`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};