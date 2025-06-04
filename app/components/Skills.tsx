import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                <i className="ri-layout-line ri-2x text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <SkillItem icon="ri-html5-fill" color="text-orange-500" name="HTML5" />
              <SkillItem icon="ri-css3-fill" color="text-blue-500" name="CSS3" />
              <SkillItem icon="ri-javascript-fill" color="text-yellow-500" name="JavaScript" />
              <SkillItem icon="ri-reactjs-fill" color="text-blue-400" name="React" />
              <SkillItem icon="ri-vuejs-fill" color="text-green-500" name="Vue.js" />
              <SkillItem icon="ri-tailwind-css-fill" color="text-blue-400" name="Tailwind" />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                <i className="ri-server-line ri-2x text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Backend</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <SkillItem icon="ri-nodejs-fill" color="text-green-600" name="Node.js" />
              <SkillItem icon="ri-server-fill" color="text-gray-700" name="Express" />
              <SkillItem icon="ri-database-2-fill" color="text-blue-600" name="MongoDB" />
              <SkillItem icon="ri-database-fill" color="text-orange-500" name="MySQL" />
              <SkillItem icon="ri-code-s-slash-line" color="text-blue-500" name="Python" />
              <SkillItem icon="ri-fire-fill" color="text-orange-500" name="Firebase" />
            </div>
          </div>

          {/* Tools/DevOps Skills */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4">
                <i className="ri-tools-fill ri-2x text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Tools/DevOps</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <SkillItem icon="ri-git-branch-fill" color="text-orange-600" name="Git" />
              <SkillItem icon="ri-github-fill" color="text-gray-800" name="GitHub" />
              <SkillItem icon="ri-box-3-fill" color="text-blue-500" name="Docker" />
              <SkillItem icon="ri-terminal-box-fill" color="text-gray-700" name="CI/CD" />
              <SkillItem icon="ri-exchange-line" color="text-green-600" name="REST API" />
              <SkillItem icon="ri-test-tube-fill" color="text-red-500" name="Testing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillItemProps {
  icon: string;
  color: string;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, color, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
        <i className={`${icon} ri-2x ${color}`}></i>
      </div>
      <span className="text-sm text-gray-600">{name}</span>
    </div>
  );
};

export default Skills;
