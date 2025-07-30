import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions that drive progress.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their needs and exceed expectations.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Quality is at the heart of everything we do, from code to customer service.'
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We strive to create solutions that make a positive difference in our community.'
  }
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '2+', label: 'Years Experience' },
  { number: '8', label: 'Core Services' }
];

export const About: React.FC = () => {
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
              About TB Group
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We are a dynamic startup company dedicated to transforming businesses 
              through innovative technology solutions in Cameroon and beyond.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  TB Group was founded with a vision to bridge the technology gap in Cameroon 
                  and provide world-class digital solutions to businesses across Africa. 
                  What started as a small team of passionate developers has grown into a 
                  comprehensive technology partner.
                </p>
                <p>
                  Based in the vibrant city of Douala, we combine local market knowledge 
                  with global technology standards to deliver solutions that truly make a 
                  difference. Our diverse portfolio spans software development, mobile 
                  applications, IoT innovations, and automotive services.
                </p>
                <p>
                  Today, we're proud to serve clients across various industries, helping 
                  them leverage technology to achieve their business objectives and stay 
                  competitive in an increasingly digital world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="TB Group Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <Target size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses and communities in Cameroon and across Africa with 
                  innovative technology solutions that drive growth, efficiency, and digital 
                  transformation. We strive to be the bridge between cutting-edge technology 
                  and practical business needs.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <Eye size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become the leading technology solutions provider in Central Africa, 
                  recognized for our innovation, quality, and impact on digital transformation. 
                  We envision a future where technology serves as a catalyst for economic 
                  growth and social progress.
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with 
              clients, partners, and the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                    <value.icon size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};