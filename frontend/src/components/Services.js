import React from 'react';
import { FiLayout, FiCode, FiServer, FiSmartphone } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
    icon: <FiLayout className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications using React, Next.js, and modern CSS frameworks.',
    icon: <FiCode className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side solutions with Node.js, Express, and MongoDB.',
    icon: <FiServer className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications using React Native for iOS and Android.',
    icon: <FiSmartphone className="text-blue-600 dark:text-blue-400" size={24} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses and individuals establish a strong online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  {service.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;