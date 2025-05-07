import React from 'react';
import { FiCode, FiLayout, FiGlobe, FiDatabase } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: "I help build and optimize your online presence. Website is the digital entry point into your business and a powerful revenue channel.",
    icon: <FiCode className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: "I design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.",
    icon: <FiLayout className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: "I improve your site's visibility on search engines, driving more organic traffic and potential customers to your business.",
    icon: <FiGlobe className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    id: 4,
    title: 'Database Design',
    description: "I create efficient, scalable database structures that ensure your application performs well even as your data grows.",
    icon: <FiDatabase className="text-blue-600 dark:text-blue-400" size={24} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
      </div>
    </section>
  );
};

export default Services;