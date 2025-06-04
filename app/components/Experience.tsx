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
              Project Experience
            </h3>

            {/** Experience Item 1 */}
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800"> Frontend Developer</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2025 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">Vision College of Jeonju</p>
              <p className="text-gray-600 mb-4">
                엔터프라이즈급 SaaS 애플리케이션의 프론트엔드 개발팀을 리드하며 Next.js 기반 UI
                성능을 최적화하였고, 이를 통해 전체 애플리케이션 성능을 약 40% 향상시키는 성과를
                달성하였습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Next.js
                </span>
              </div>
            </div>

            {/** Experience Item 2 */}
            <div className="relative pl-8 pb-12 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">Full Stack Developer</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2024 - 2025</span>
              </div>
              <p className="text-gray-600 mb-2">Innovate Digital, Manchester</p>
              <p className="text-gray-600 mb-4">
                저는 최신 웹 애플리케이션을 개발하는 데 열정을 가진 풀스택 개발자 지망생입니다.
                Next.js를 활용한 프론트엔드 개발과 Spring Boot 기반의 백엔드 API 구축에 능숙하며,
                데이터베이스는 MySQL을 사용하여 안정적인 데이터 관리를 수행합니다. 프론트와 백엔드를
                통합하여 사용자 친화적인 서비스를 만드는 것을 즐기며, 인증 처리, REST API 설계, 배포
                등도 꾸준히 학습하고 있습니다. 실용적이고 가치 있는 소프트웨어를 만드는 개발자가
                되는 것이 제 목표입니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                  Spring Boot
                </span>
              </div>
            </div>

            {/** Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="mb-1 flex items-center">
                <h4 className="text-lg font-semibold text-gray-800">Junior Web Developer</h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2024 - 2025</span>
              </div>
              <p className="text-gray-600 mb-2">Vision College of Jeonju</p>
              <p className="text-gray-600 mb-4">
                다양한 산업 분야의 클라이언트를 위해 반응형 웹사이트를 구축하고, UI 디자인을
                효과적으로 구현하여 사용자 경험을 향상시켰습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  React
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
                <h4 className="text-lg font-semibold text-gray-800">
                  Bachelor of English Language(Third Year Student)
                </h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2017 - 2020</span>
              </div>
              <p className="text-gray-600 mb-2">West Yangon University, Myanmar</p>
              <p className="text-gray-600 mb-4">
                영어를 전공하면서 문학, 언어, 커뮤니케이션에 깊은 관심을 가지고 공부해왔습니다. 영어
                언어와 문학을 통해 비판적 사고, 글쓰기, 그리고 분석 능력을 키워온 경험이 있습니다.
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
                <h4 className="text-lg font-semibold text-gray-800">
                  Bechlor in Software Engineering
                </h4>
                <span className="ml-auto text-sm font-medium text-gray-500">2024 - 2026</span>
              </div>
              <p className="text-gray-600 mb-2">Vision College Of Jeonju</p>
              <p className="text-gray-600 mb-4">
                업 연구로는 접근성 높은 웹 애플리케이션 프레임워크 개발을 수행하고있습니다. 그동안
                여러 팀 프로젝트에 참여하며 UI/UX 디자인과 풀스택 개발 경험을 쌓아왔고, 현재는
                캡스톤 디자인 팀을 이끌고 있습니다.
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
              <p className="text-gray-600 mb-4">certifications</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  Teaching Certificate
                </span>

                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  React Certified Developer
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
