import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping experience built with React and Stripe.',
    image: '/placeholder-1.jpg',
    tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A sleek portfolio website for a creative photographer showcasing their work.',
    image: '/placeholder-2.jpg',
    tags: ['React', 'Next.js', 'CSS Grid'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com',
  },
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
    <section id="work" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div 
                className="relative h-48 lg:h-64 overflow-hidden"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="flex space-x-4 justify-center">
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                        >
                          Live Demo
                        </a>
                        <a 
                          href={project.sourceLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm font-medium rounded-md transition-colors"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;