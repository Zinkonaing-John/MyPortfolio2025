import React from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description:
        'Leading the development of enterprise-level web applications. Implementing modern architectures and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2019 - 2021',
      description:
        'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Git'],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Creative Web Solutions',
      period: '2018 - 2019',
      description:
        'Built responsive and interactive user interfaces for various web applications. Optimized performance and user experience.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Work Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
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

export default Experience;
