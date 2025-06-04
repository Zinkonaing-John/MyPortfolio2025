import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: { name: string; color: string }[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'A full-featured online store with product catalog, shopping cart, and secure checkout.',
      image: 'file.svg',
      categories: ['frontend', 'fullstack', 'mobile', 'api', 'opensource'],
      technologies: [
        { name: 'React', color: 'blue' },
        { name: 'Node.js', color: 'green' },
        { name: 'MongoDB', color: 'purple' },
        { name: 'Stripe', color: 'yellow' },
      ],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasts with location detection and 7-day predictions.',
      image: 'file.svg',
      categories: ['frontend', 'mobile'],
      technologies: [
        { name: 'React Native', color: 'blue' },
        { name: 'Redux', color: 'purple' },
        { name: 'Weather API', color: 'green' },
      ],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasts with location detection and 7-day predictions.',
      image: 'file.svg',
      categories: ['frontend', 'mobile'],
      technologies: [
        { name: 'React Native', color: 'blue' },
        { name: 'Redux', color: 'purple' },
        { name: 'Weather API', color: 'green' },
      ],
      demoLink: '#',
      codeLink: '#',
    },

    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasts with location detection and 7-day predictions.',
      image: 'file.svg',
      categories: ['frontend', 'mobile'],
      technologies: [
        { name: 'React Native', color: 'blue' },
        { name: 'Redux', color: 'purple' },
        { name: 'Weather API', color: 'green' },
      ],
      demoLink: '#',
      codeLink: '#',
    },

    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasts with location detection and 7-day predictions.',
      image: 'file.svg',
      categories: ['api', 'mobile'],
      technologies: [
        { name: 'React Native', color: 'blue' },
        { name: 'Redux', color: 'purple' },
        { name: 'Weather API', color: 'green' },
      ],
      demoLink: '#',
      codeLink: '#',
    },

    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasts with location detection and 7-day predictions.',
      image: 'file.svg',
      categories: ['full stack', 'mobile'],
      technologies: [
        { name: 'React Native', color: 'blue' },
        { name: 'Redux', color: 'purple' },
        { name: 'Weather API', color: 'green' },
      ],
      demoLink: '#',
      codeLink: '#',
    },
    // Add more projects here...
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'api', label: 'API' },
    { id: 'opensource', label: 'Open Source' },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.categories.includes(activeFilter)
  );

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">My Projects</h2>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`project-filter px-5 py-2 !rounded-full font-medium whitespace-nowrap transition ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                  src={project.image}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-${tech.color}-100 text-${tech.color}-600 text-xs font-medium rounded-full`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    className="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap"
                    href={project.demoLink}
                  >
                    Live Demo
                  </a>
                  <a
                    className="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap"
                    href={project.codeLink}
                  >
                    <i className="ri-github-fill ri-lg mr-1"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
