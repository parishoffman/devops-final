import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience in building web applications and digital experiences that people love. My journey in web development started when I was in college, and since then I've been constantly learning and improving my skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I specialize in JavaScript and its modern frameworks like React, Next.js, and Node.js. I'm also experienced in working with databases like MongoDB and PostgreSQL, and I'm comfortable with both SQL and NoSQL data models.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-md transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Replace with your about image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-lg">About Image</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;