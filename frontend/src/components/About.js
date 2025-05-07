import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hello! I'm a passionate software developer with expertise in full-stack web development. I enjoy building applications that solve real-world problems and provide seamless user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My technical skills include proficiency in JavaScript, React, Node.js, and various cloud technologies. I'm particularly interested in creating scalable and maintainable code that follows best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">My Expertise</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Frontend Development</li>
                  <li>Backend Architecture</li>
                  <li>Responsive Design</li>
                  <li>DevOps & CI/CD</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Education</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>B.S. Computer Science</li>
                  <li>Full-Stack Certification</li>
                  <li>AWS Cloud Practitioner</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-md transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Profile image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-lg">Your Profile Image</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'TailwindCSS', 'MongoDB', 'Git', 'AWS', 'Docker'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;