import React from 'react';

const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Experience & Education
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Work Experience */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-3">
                <i className="ri-briefcase-4-fill ri-lg text-primary"></i>
              </div>
              Work Experience
            </h3>

            {/** Experience Item 1 */}
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">Senior Frontend Developer</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2023 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">TechVision Solutions, London</p>
              <p className="text-gray-600 mb-4">
                Led the frontend development team for enterprise SaaS applications, improving
                performance by 40%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Redux
                </span>
              </div>
            </div>

            {/** Experience Item 2 */}
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">Full Stack Developer</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2020 - 2023</span>
              </div>
              <p className="text-gray-600 mb-2">Innovate Digital, Manchester</p>
              <p className="text-gray-600 mb-4">
                Developed and maintained e-commerce platforms and content management systems for
                major retail clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                  MongoDB
                </span>
              </div>
            </div>

            {/** Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">Junior Web Developer</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2018 - 2020</span>
              </div>
              <p className="text-gray-600 mb-2">WebCraft Agency, London</p>
              <p className="text-gray-600 mb-4">
                Built responsive websites and implemented UI designs for various clients across
                different industries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  WordPress
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-3">
                <i className="ri-graduation-cap-fill ri-lg text-primary"></i>
              </div>
              Education
            </h3>

            {/** Education Item 1 */}
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">MSc in Computer Science</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2016 - 2018</span>
              </div>
              <p className="text-gray-600 mb-2">University College London</p>
              <p className="text-gray-600 mb-4">
                Specialized in Human-Computer Interaction and Web Technologies. Graduated with
                Distinction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  UI/UX Research
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  Web Architecture
                </span>
              </div>
            </div>

            {/** Education Item 2 */}
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">BSc in Software Engineering</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2013 - 2016</span>
              </div>
              <p className="text-gray-600 mb-2">University of Manchester</p>
              <p className="text-gray-600 mb-4">
                First Class Honours. Final year project: Developing an Accessible Web Application
                Framework.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Software Design
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                  Algorithms
                </span>
              </div>
            </div>

            {/** Certification Item */}
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">Professional Certifications</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Various industry-recognized certifications in web development and cloud
                technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  AWS Certified Developer
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Google Cloud Associate
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  MongoDB Certified Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
