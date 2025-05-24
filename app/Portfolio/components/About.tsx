import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <img
              alt="John Anderson"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
              src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20male%20software%20developer%20in%20his%20early%2030s%2C%20casual%20smart%20attire%2C%20friendly%20smile%2C%20natural%20lighting%2C%20clean%20background%2C%20high%20quality%20professional%20headshot%2C%20modern%20tech%20office%20environment&amp;width=600&amp;height=600&amp;seq=portrait1&amp;orientation=squarish"
            />
          </div>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Full Stack Developer based in London
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with over 5 years of experience creating web applications
              that deliver exceptional user experiences. My journey in tech began during my Computer
              Science studies at University College London, where I discovered my love for building
              digital solutions.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in JavaScript ecosystems, with expertise in React for frontend and
              Node.js for backend development. I'm constantly exploring new technologies and
              methodologies to enhance my skill set and deliver better solutions.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you'll find me hiking in nature, experimenting with photography,
              or contributing to open-source projects. I believe in writing clean, maintainable code
              and creating applications that make a positive impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className=" bg-black border-2 border-white text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-600 transition flex items-center whitespace-nowrap"
                href="#"
              >
                <i className="ri-download-line ri-lg mr-2"></i> Download Resume
              </a>
              <a
                className="bg-white border-black border-2 border-gray-300 text-gray-700 px-6 py-3 !rounded-button font-medium hover:bg-gray-50 transition whitespace-nowrap"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
