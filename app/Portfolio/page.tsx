import React from 'react';

const PortfolioShowcase: React.FC = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<body class="bg-gray-50">
<!-- Navigation -->
<nav class="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
<div class="container mx-auto px-6 py-4 flex justify-between items-center">
<a class="text-2xl font-['Pacifico'] text-primary" href="#">John A.</a>
<div class="hidden md:flex space-x-8">
<a class="text-gray-800 hover:text-primary font-medium transition" href="#home">Home</a>
<a class="text-gray-800 hover:text-primary font-medium transition" href="#about">About</a>
<a class="text-gray-800 hover:text-primary font-medium transition" href="#skills">Skills</a>
<a class="text-gray-800 hover:text-primary font-medium transition" href="#projects">Projects</a>
<a class="text-gray-800 hover:text-primary font-medium transition" href="#experience">Experience</a>
<a class="text-gray-800 hover:text-primary font-medium transition" href="#contact">Contact</a>
</div>
<button class="md:hidden flex items-center justify-center w-10 h-10">
<i class="ri-menu-line ri-lg"></i>
</button>
</div>
</nav>
<!-- Hero Section -->
<section class="hero-section min-h-screen flex items-center pt-16" id="home">
<div class="hero-overlay w-full h-full flex items-center">
<div class="container mx-auto px-6">
<div class="max-w-2xl">
<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Hi, I'm John Anderson
                    </h1>
<div class="text-2xl md:text-3xl font-medium text-gray-700 mb-2 flex items-center">
<span id="typed-text">Full Stack Developer</span>
<span class="typing-cursor ml-1">|</span>
</div>
<p class="text-lg text-gray-600 mb-8 max-w-xl">
                        Specializing in building exceptional digital experiences with React, Node.js, and modern web technologies. Let's bring your ideas to life.
                    </p>
<div class="flex flex-wrap gap-4">
<a class="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#projects">
                            View Projects
                        </a>
<a class="bg-white border-2 border-primary text-primary px-6 py-3 !rounded-button font-medium hover:bg-blue-50 transition whitespace-nowrap" href="#contact">
                            Contact Me
                        </a>
</div>
<div class="mt-10 flex space-x-4">
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition" href="#">
<i class="ri-github-fill ri-lg text-gray-700"></i>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition" href="#">
<i class="ri-linkedin-fill ri-lg text-gray-700"></i>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition" href="#">
<i class="ri-twitter-x-fill ri-lg text-gray-700"></i>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- About Me Section -->
<section class="py-20 bg-white" id="about">
<div class="container mx-auto px-6">
<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">About Me</h2>
<div class="flex flex-col md:flex-row items-center gap-12">
<div class="md:w-2/5">
<img alt="John Anderson" class="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover" src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20male%20software%20developer%20in%20his%20early%2030s%2C%20casual%20smart%20attire%2C%20friendly%20smile%2C%20natural%20lighting%2C%20clean%20background%2C%20high%20quality%20professional%20headshot%2C%20modern%20tech%20office%20environment&amp;width=600&amp;height=600&amp;seq=portrait1&amp;orientation=squarish"/>
</div>
<div class="md:w-3/5">
<h3 class="text-2xl font-semibold text-gray-800 mb-4">Full Stack Developer based in London</h3>
<p class="text-gray-600 mb-6">
                        I'm a passionate developer with over 5 years of experience creating web applications that deliver exceptional user experiences. My journey in tech began during my Computer Science studies at University College London, where I discovered my love for building digital solutions.
                    </p>
<p class="text-gray-600 mb-6">
                        I specialize in JavaScript ecosystems, with expertise in React for frontend and Node.js for backend development. I'm constantly exploring new technologies and methodologies to enhance my skill set and deliver better solutions.
                    </p>
<p class="text-gray-600 mb-8">
                        When I'm not coding, you'll find me hiking in nature, experimenting with photography, or contributing to open-source projects. I believe in writing clean, maintainable code and creating applications that make a positive impact.
                    </p>
<div class="flex flex-wrap gap-4">
<a class="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-600 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-download-line ri-lg mr-2"></i> Download Resume
                        </a>
<a class="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 !rounded-button font-medium hover:bg-gray-50 transition whitespace-nowrap" href="#contact">
                            Get in Touch
                        </a>
</div>
</div>
</div>
</div>
</section>
<!-- Skills Section -->
<section class="py-20 bg-gray-50" id="skills">
<div class="container mx-auto px-6">
<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">My Tech Stack</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Frontend Skills -->
<div class="bg-white p-8 rounded-lg shadow-sm">
<div class="flex items-center mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
<i class="ri-layout-line ri-2x text-primary"></i>
</div>
<h3 class="text-xl font-semibold text-gray-800">Frontend</h3>
</div>
<div class="grid grid-cols-3 gap-6">
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-html5-fill ri-2x text-orange-500"></i>
</div>
<span class="text-sm text-gray-600">HTML5</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-css3-fill ri-2x text-blue-500"></i>
</div>
<span class="text-sm text-gray-600">CSS3</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-javascript-fill ri-2x text-yellow-500"></i>
</div>
<span class="text-sm text-gray-600">JavaScript</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-reactjs-fill ri-2x text-blue-400"></i>
</div>
<span class="text-sm text-gray-600">React</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-vuejs-fill ri-2x text-green-500"></i>
</div>
<span class="text-sm text-gray-600">Vue.js</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-tailwind-css-fill ri-2x text-blue-400"></i>
</div>
<span class="text-sm text-gray-600">Tailwind</span>
</div>
</div>
</div>
<!-- Backend Skills -->
<div class="bg-white p-8 rounded-lg shadow-sm">
<div class="flex items-center mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
<i class="ri-server-line ri-2x text-green-600"></i>
</div>
<h3 class="text-xl font-semibold text-gray-800">Backend</h3>
</div>
<div class="grid grid-cols-3 gap-6">
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-nodejs-fill ri-2x text-green-600"></i>
</div>
<span class="text-sm text-gray-600">Node.js</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-server-fill ri-2x text-gray-700"></i>
</div>
<span class="text-sm text-gray-600">Express</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-database-2-fill ri-2x text-blue-600"></i>
</div>
<span class="text-sm text-gray-600">MongoDB</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-database-fill ri-2x text-orange-500"></i>
</div>
<span class="text-sm text-gray-600">MySQL</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-python-fill ri-2x text-blue-500"></i>
</div>
<span class="text-sm text-gray-600">Python</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-fire-fill ri-2x text-orange-500"></i>
</div>
<span class="text-sm text-gray-600">Firebase</span>
</div>
</div>
</div>
<!-- Tools/DevOps Skills -->
<div class="bg-white p-8 rounded-lg shadow-sm">
<div class="flex items-center mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4">
<i class="ri-tools-fill ri-2x text-purple-600"></i>
</div>
<h3 class="text-xl font-semibold text-gray-800">Tools/DevOps</h3>
</div>
<div class="grid grid-cols-3 gap-6">
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-git-branch-fill ri-2x text-orange-600"></i>
</div>
<span class="text-sm text-gray-600">Git</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-github-fill ri-2x text-gray-800"></i>
</div>
<span class="text-sm text-gray-600">GitHub</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-docker-fill ri-2x text-blue-500"></i>
</div>
<span class="text-sm text-gray-600">Docker</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-terminal-box-fill ri-2x text-gray-700"></i>
</div>
<span class="text-sm text-gray-600">CI/CD</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-rest-api-fill ri-2x text-green-600"></i>
</div>
<span class="text-sm text-gray-600">REST API</span>
</div>
<div class="flex flex-col items-center">
<div class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition">
<i class="ri-test-tube-fill ri-2x text-red-500"></i>
</div>
<span class="text-sm text-gray-600">Testing</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Projects Section -->
<section class="py-20 bg-white" id="projects">
<div class="container mx-auto px-6">
<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">My Projects</h2>
<!-- Project Filters -->
<div class="flex flex-wrap justify-center gap-3 mb-12">
<button class="project-filter px-5 py-2 !rounded-full bg-primary text-white font-medium whitespace-nowrap" data-filter="all">All</button>
<button class="project-filter px-5 py-2 !rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition whitespace-nowrap" data-filter="frontend">Frontend</button>
<button class="project-filter px-5 py-2 !rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition whitespace-nowrap" data-filter="fullstack">Full Stack</button>
<button class="project-filter px-5 py-2 !rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition whitespace-nowrap" data-filter="mobile">Mobile</button>
<button class="project-filter px-5 py-2 !rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition whitespace-nowrap" data-filter="api">API</button>
<button class="project-filter px-5 py-2 !rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition whitespace-nowrap" data-filter="opensource">Open Source</button>
</div>
<!-- Projects Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
<!-- Project 1 -->
<div class="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" data-category="frontend,fullstack">
<div class="h-56 overflow-hidden">
<img alt="E-commerce Platform" class="w-full h-full object-cover object-top transition duration-500 hover:scale-105" src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20icon%2C%20search%20functionality%2C%20minimalist%20UI%2FUX%20design%2C%20high%20quality%20screenshot%20of%20web%20application&amp;width=600&amp;height=400&amp;seq=proj1&amp;orientation=landscape"/>
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-800 mb-2">E-commerce Platform</h3>
<p class="text-gray-600 mb-4">A full-featured online store with product catalog, shopping cart, and secure checkout.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">React</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Node.js</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">MongoDB</span>
<span class="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">Stripe</span>
</div>
<div class="flex gap-3">
<a class="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#">Live Demo</a>
<a class="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-github-fill ri-lg mr-1"></i> Code
                            </a>
</div>
</div>
</div>
<!-- Project 2 -->
<div class="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" data-category="frontend,mobile">
<div class="h-56 overflow-hidden">
<img alt="Weather App" class="w-full h-full object-cover object-top transition duration-500 hover:scale-105" src="https://readdy.ai/api/search-image?query=mobile%20weather%20app%20interface%20showing%20forecast%2C%20temperature%20graphs%2C%20location%20search%2C%20clean%20modern%20UI%20design%2C%20mobile%20app%20screenshot%20with%20weather%20icons%20and%20data%20visualization&amp;width=600&amp;height=400&amp;seq=proj2&amp;orientation=landscape"/>
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-800 mb-2">Weather Forecast App</h3>
<p class="text-gray-600 mb-4">Real-time weather forecasts with location detection and 7-day predictions.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">React Native</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">Redux</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Weather API</span>
</div>
<div class="flex gap-3">
<a class="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#">Live Demo</a>
<a class="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-github-fill ri-lg mr-1"></i> Code
                            </a>
</div>
</div>
</div>
<!-- Project 3 -->
<div class="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" data-category="fullstack,api">
<div class="h-56 overflow-hidden">
<img alt="Task Manager" class="w-full h-full object-cover object-top transition duration-500 hover:scale-105" src="https://readdy.ai/api/search-image?query=task%20management%20application%20interface%20with%20kanban%20board%2C%20task%20cards%2C%20progress%20tracking%2C%20user%20assignments%2C%20clean%20modern%20UI%20design%2C%20project%20management%20dashboard%20screenshot&amp;width=600&amp;height=400&amp;seq=proj3&amp;orientation=landscape"/>
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-800 mb-2">Task Management System</h3>
<p class="text-gray-600 mb-4">Collaborative task tracker with Kanban boards, assignments, and progress tracking.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Vue.js</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Express</span>
<span class="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">PostgreSQL</span>
<span class="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">Socket.io</span>
</div>
<div class="flex gap-3">
<a class="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#">Live Demo</a>
<a class="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-github-fill ri-lg mr-1"></i> Code
                            </a>
</div>
</div>
</div>
<!-- Project 4 -->
<div class="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" data-category="api,opensource">
<div class="h-56 overflow-hidden">
<img alt="RESTful API Service" class="w-full h-full object-cover object-top transition duration-500 hover:scale-105" src="https://readdy.ai/api/search-image?query=API%20documentation%20interface%20with%20code%20samples%2C%20endpoint%20listings%2C%20authentication%20methods%2C%20developer%20portal%20design%2C%20clean%20technical%20documentation%20layout%2C%20API%20reference%20screenshot&amp;width=600&amp;height=400&amp;seq=proj4&amp;orientation=landscape"/>
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-800 mb-2">RESTful API Service</h3>
<p class="text-gray-600 mb-4">Open-source API for content management with authentication and rate limiting.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Node.js</span>
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Express</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">JWT</span>
<span class="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">Swagger</span>
</div>
<div class="flex gap-3">
<a class="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#">Live Demo</a>
<a class="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-github-fill ri-lg mr-1"></i> Code
                            </a>
</div>
</div>
</div>
<!-- Project 5 -->
<div class="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" data-category="frontend,opensource">
<div class="h-56 overflow-hidden">
<img alt="Data Visualization Dashboard" class="w-full h-full object-cover object-top transition duration-500 hover:scale-105" src="https://readdy.ai/api/search-image?query=data%20visualization%20dashboard%20with%20charts%2C%20graphs%2C%20analytics%20panels%2C%20interactive%20filters%2C%20business%20intelligence%20UI%2C%20clean%20modern%20dashboard%20design%20with%20data%20metrics%20and%20KPIs&amp;width=600&amp;height=400&amp;seq=proj5&amp;orientation=landscape"/>
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-800 mb-2">Data Visualization Dashboard</h3>
<p class="text-gray-600 mb-4">Interactive charts and graphs for business analytics with customizable widgets.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">React</span>
<span class="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full">D3.js</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Chart.js</span>
<span class="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">Firebase</span>
</div>
<div class="flex gap-3">
<a class="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#">Live Demo</a>
<a class="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-github-fill ri-lg mr-1"></i> Code
                            </a>
</div>
</div>
</div>
<!-- Project 6 -->
<div class="project-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" data-category="mobile,fullstack">
<div class="h-56 overflow-hidden">
<img alt="Social Network App" class="w-full h-full object-cover object-top transition duration-500 hover:scale-105" src="https://readdy.ai/api/search-image?query=social%20media%20mobile%20app%20interface%20with%20user%20profiles%2C%20post%20feed%2C%20messaging%20features%2C%20clean%20modern%20UI%20design%2C%20social%20networking%20application%20screenshot%20with%20engagement%20metrics&amp;width=600&amp;height=400&amp;seq=proj6&amp;orientation=landscape"/>
</div>
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-800 mb-2">Social Network App</h3>
<p class="text-gray-600 mb-4">Mobile social platform with profiles, posts, real-time chat, and notifications.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">React Native</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">GraphQL</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">Apollo</span>
<span class="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">Firebase</span>
</div>
<div class="flex gap-3">
<a class="px-4 py-2 bg-primary text-white !rounded-button text-sm font-medium hover:bg-blue-600 transition whitespace-nowrap" href="#">Live Demo</a>
<a class="px-4 py-2 bg-gray-100 text-gray-700 !rounded-button text-sm font-medium hover:bg-gray-200 transition flex items-center whitespace-nowrap" href="#">
<i class="ri-github-fill ri-lg mr-1"></i> Code
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Experience Section -->
<section class="py-20 bg-gray-50" id="experience">
<div class="container mx-auto px-6">
<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">Experience &amp; Education</h2>
<div class="flex flex-col md:flex-row gap-12">
<!-- Work Experience -->
<div class="md:w-1/2">
<h3 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
<div class="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-3">
<i class="ri-briefcase-4-fill ri-lg text-primary"></i>
</div>
                        Work Experience
                    </h3>
<!-- Experience Item 1 -->
<div class="relative pl-8 pb-12 border-l-2 border-gray-200">
<div class="absolute -left-2 top-0 w-6 h-6 bg-primary rounded-full"></div>
<div class="mb-1 flex items-center">
<h4 class="text-lg font-semibold text-gray-800">Senior Frontend Developer</h4>
<span class="ml-auto text-sm font-medium text-gray-500">2023 - Present</span>
</div>
<p class="text-gray-600 mb-2">TechVision Solutions, London</p>
<p class="text-gray-600 mb-4">Led the frontend development team for enterprise SaaS applications, improving performance by 40%.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">React</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">TypeScript</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Redux</span>
</div>
</div>
<!-- Experience Item 2 -->
<div class="relative pl-8 pb-12 border-l-2 border-gray-200">
<div class="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
<div class="mb-1 flex items-center">
<h4 class="text-lg font-semibold text-gray-800">Full Stack Developer</h4>
<span class="ml-auto text-sm font-medium text-gray-500">2020 - 2023</span>
</div>
<p class="text-gray-600 mb-2">Innovate Digital, Manchester</p>
<p class="text-gray-600 mb-4">Developed and maintained e-commerce platforms and content management systems for major retail clients.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Vue.js</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Node.js</span>
<span class="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">MongoDB</span>
</div>
</div>
<!-- Experience Item 3 -->
<div class="relative pl-8 border-l-2 border-gray-200">
<div class="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
<div class="mb-1 flex items-center">
<h4 class="text-lg font-semibold text-gray-800">Junior Web Developer</h4>
<span class="ml-auto text-sm font-medium text-gray-500">2018 - 2020</span>
</div>
<p class="text-gray-600 mb-2">WebCraft Agency, London</p>
<p class="text-gray-600 mb-4">Built responsive websites and implemented UI designs for various clients across different industries.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">HTML/CSS</span>
<span class="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">JavaScript</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">WordPress</span>
</div>
</div>
</div>
<!-- Education -->
<div class="md:w-1/2">
<h3 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
<div class="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-3">
<i class="ri-graduation-cap-fill ri-lg text-primary"></i>
</div>
                        Education
                    </h3>
<!-- Education Item 1 -->
<div class="relative pl-8 pb-12 border-l-2 border-gray-200">
<div class="absolute -left-2 top-0 w-6 h-6 bg-primary rounded-full"></div>
<div class="mb-1 flex items-center">
<h4 class="text-lg font-semibold text-gray-800">MSc in Computer Science</h4>
<span class="ml-auto text-sm font-medium text-gray-500">2016 - 2018</span>
</div>
<p class="text-gray-600 mb-2">University College London</p>
<p class="text-gray-600 mb-4">Specialized in Human-Computer Interaction and Web Technologies. Graduated with Distinction.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">UI/UX Research</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">Web Architecture</span>
</div>
</div>
<!-- Education Item 2 -->
<div class="relative pl-8 pb-12 border-l-2 border-gray-200">
<div class="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
<div class="mb-1 flex items-center">
<h4 class="text-lg font-semibold text-gray-800">BSc in Software Engineering</h4>
<span class="ml-auto text-sm font-medium text-gray-500">2013 - 2016</span>
</div>
<p class="text-gray-600 mb-2">University of Manchester</p>
<p class="text-gray-600 mb-4">First Class Honours. Final year project: Developing an Accessible Web Application Framework.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Software Design</span>
<span class="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">Algorithms</span>
</div>
</div>
<!-- Certification Item -->
<div class="relative pl-8 border-l-2 border-gray-200">
<div class="absolute -left-2 top-0 w-6 h-6 bg-gray-300 rounded-full"></div>
<div class="mb-1 flex items-center">
<h4 class="text-lg font-semibold text-gray-800">Professional Certifications</h4>
</div>
<p class="text-gray-600 mb-4">Various industry-recognized certifications in web development and cloud technologies.</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">AWS Certified Developer</span>
<span class="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Google Cloud Associate</span>
<span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">MongoDB Certified Developer</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonials Section -->
<section class="py-20 bg-white">
<div class="container mx-auto px-6">
<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">What People Say</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Testimonial 1 -->
<div class="bg-gray-50 p-8 rounded-lg relative">
<div class="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
<i class="ri-double-quotes-l ri-lg"></i>
</div>
<p class="text-gray-600 mb-6 italic">
                        "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him an invaluable team member."
                    </p>
<div class="flex items-center">
<div class="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="Sarah Johnson" class="w-full h-full object-cover" src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20tech%20executive%2C%2040s%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&amp;width=100&amp;height=100&amp;seq=test1&amp;orientation=squarish"/>
</div>
<div>
<h4 class="text-gray-800 font-semibold">Sarah Johnson</h4>
<p class="text-gray-500 text-sm">CTO, TechVision Solutions</p>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div class="bg-gray-50 p-8 rounded-lg relative">
<div class="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
<i class="ri-double-quotes-l ri-lg"></i>
</div>
<p class="text-gray-600 mb-6 italic">
                        "Working with John was a pleasure. He transformed our concept into a beautiful, functional website that exceeded our expectations and significantly improved user engagement."
                    </p>
<div class="flex items-center">
<div class="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="Michael Roberts" class="w-full h-full object-cover" src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20business%20owner%2C%2030s%2C%20casual%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&amp;width=100&amp;height=100&amp;seq=test2&amp;orientation=squarish"/>
</div>
<div>
<h4 class="text-gray-800 font-semibold">Michael Roberts</h4>
<p class="text-gray-500 text-sm">Founder, Innovate Digital</p>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div class="bg-gray-50 p-8 rounded-lg relative">
<div class="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
<i class="ri-double-quotes-l ri-lg"></i>
</div>
<p class="text-gray-600 mb-6 italic">
                        "John's technical expertise and collaborative approach made our project a success. He's not just a developer but a problem solver who understands business needs."
                    </p>
<div class="flex items-center">
<div class="w-12 h-12 rounded-full overflow-hidden mr-4">
<img alt="Emily Chen" class="w-full h-full object-cover" src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20product%20manager%2C%20mid%2030s%2C%20smart%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&amp;width=100&amp;height=100&amp;seq=test3&amp;orientation=squarish"/>
</div>
<div>
<h4 class="text-gray-800 font-semibold">Emily Chen</h4>
<p class="text-gray-500 text-sm">Product Manager, WebCraft</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Contact Section -->
<section class="py-20 bg-gray-50" id="contact">
<div class="container mx-auto px-6">
<h2 class="text-3xl font-bold text-center text-gray-900 mb-16">Get In Touch</h2>
<div class="flex flex-col md:flex-row gap-12">
<!-- Contact Info -->
<div class="md:w-2/5">
<h3 class="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
<p class="text-gray-600 mb-8">
                        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                    </p>
<div class="space-y-6">
<div class="flex items-start">
<div class="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-4 mt-1">
<i class="ri-mail-line ri-lg text-primary"></i>
</div>
<div>
<h4 class="text-gray-800 font-semibold mb-1">Email</h4>
<a class="text-gray-600 hover:text-primary transition" href="mailto:john.anderson@example.com">john.anderson@example.com</a>
</div>
</div>
<div class="flex items-start">
<div class="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-4 mt-1">
<i class="ri-map-pin-line ri-lg text-primary"></i>
</div>
<div>
<h4 class="text-gray-800 font-semibold mb-1">Location</h4>
<p class="text-gray-600">London, United Kingdom</p>
<p class="text-gray-500 text-sm">GMT/BST Time Zone</p>
</div>
</div>
<div class="flex items-start">
<div class="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-4 mt-1">
<i class="ri-links-line ri-lg text-primary"></i>
</div>
<div>
<h4 class="text-gray-800 font-semibold mb-1">Social Profiles</h4>
<div class="flex space-x-3 mt-2">
<a class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition" href="#">
<i class="ri-github-fill ri-lg text-gray-700"></i>
</a>
<a class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition" href="#">
<i class="ri-linkedin-fill ri-lg text-gray-700"></i>
</a>
<a class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition" href="#">
<i class="ri-twitter-x-fill ri-lg text-gray-700"></i>
</a>
<a class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition" href="#">
<i class="ri-codepen-fill ri-lg text-gray-700"></i>
</a>
</div>
</div>
</div>
</div>
</div>
<!-- Contact Form -->
<div class="md:w-3/5">
<form class="bg-white p-8 rounded-lg shadow-sm">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label class="block text-gray-700 font-medium mb-2" for="name">Your Name</label>
<input class="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary text-gray-700" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label class="block text-gray-700 font-medium mb-2" for="email">Your Email</label>
<input class="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary text-gray-700" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div class="mb-6">
<label class="block text-gray-700 font-medium mb-2" for="subject">Subject</label>
<input class="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary text-gray-700" id="subject" placeholder="Project Inquiry" type="text"/>
</div>
<div class="mb-6">
<label class="block text-gray-700 font-medium mb-2" for="message">Message</label>
<textarea class="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary text-gray-700" id="message" placeholder="Your message here..." rows="5"></textarea>
</div>
<div class="flex items-center mb-6">
<input class="custom-checkbox" id="consent" type="checkbox"/>
<label class="ml-3 text-gray-600 text-sm" for="consent">I agree to the storage and processing of my personal data as described in the Privacy Policy.</label>
</div>
<button class="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-600 transition whitespace-nowrap" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
<div class="container mx-auto px-6">
<div class="flex flex-col md:flex-row justify-between items-center">
<div class="mb-8 md:mb-0">
<a class="text-2xl font-['Pacifico'] text-white mb-2 inline-block" href="#">John A.</a>
<p class="text-gray-400 max-w-xs">
                        Creating exceptional digital experiences with modern web technologies.
                    </p>
</div>
<div class="flex flex-col items-center md:items-end">
<div class="flex space-x-4 mb-4">
<a class="text-gray-400 hover:text-white transition" href="#">
<i class="ri-github-fill ri-lg"></i>
</a>
<a class="text-gray-400 hover:text-white transition" href="#">
<i class="ri-linkedin-fill ri-lg"></i>
</a>
<a class="text-gray-400 hover:text-white transition" href="#">
<i class="ri-twitter-x-fill ri-lg"></i>
</a>
<a class="text-gray-400 hover:text-white transition" href="#">
<i class="ri-codepen-fill ri-lg"></i>
</a>
</div>
<p class="text-gray-500 text-sm">
                        © 2025 John Anderson. All rights reserved.
                    </p>
<p class="text-gray-500 text-sm mt-1">
                        Built with <span class="text-red-400">❤</span> using React &amp; Tailwind CSS
                    </p>
</div>
</div>
<div class="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between">
<div class="flex flex-wrap gap-4 mb-4 md:mb-0">
<a class="text-gray-400 hover:text-white transition" href="#home">Home</a>
<a class="text-gray-400 hover:text-white transition" href="#about">About</a>
<a class="text-gray-400 hover:text-white transition" href="#skills">Skills</a>
<a class="text-gray-400 hover:text-white transition" href="#projects">Projects</a>
<a class="text-gray-400 hover:text-white transition" href="#experience">Experience</a>
<a class="text-gray-400 hover:text-white transition" href="#contact">Contact</a>
</div>
<a class="text-gray-400 hover:text-white transition flex items-center" href="#home">
                    Back to Top <i class="ri-arrow-up-line ri-lg ml-1"></i>
</a>
</div>
</div>
</footer>
<!-- Scripts -->
<script id="typing-effect">
        document.addEventListener('DOMContentLoaded', function() {
            const titles = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];
            const typedTextElement = document.getElementById('typed-text');
            let titleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            function type() {
                const currentTitle = titles[titleIndex];
                
                if (isDeleting) {
                    typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentTitle.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // Pause at the end
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                    typingSpeed = 500; // Pause before typing next
                }
                
                setTimeout(type, typingSpeed);
            }
            
            setTimeout(type, 1000);
        });
    </script>
<script id="project-filter">
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.project-filter');
            const projectCards = document.querySelectorAll('.project-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Update active button
                    filterButtons.forEach(btn => {
                        btn.classList.remove('bg-primary', 'text-white');
                        btn.classList.add('bg-gray-100', 'text-gray-700');
                    });
                    this.classList.remove('bg-gray-100', 'text-gray-700');
                    this.classList.add('bg-primary', 'text-white');
                    
                    // Filter projects
                    projectCards.forEach(card => {
                        const categories = card.getAttribute('data-category').split(',');
                        
                        if (filterValue === 'all' || categories.includes(filterValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>
<script id="smooth-scroll">
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
<script id="form-validation">
        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.querySelector('form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const nameInput = document.getElementById('name');
                    const emailInput = document.getElementById('email');
                    const messageInput = document.getElementById('message');
                    const consentCheckbox = document.getElementById('consent');
                    
                    let isValid = true;
                    
                    // Simple validation
                    if (!nameInput.value.trim()) {
                        nameInput.style.borderColor = '#ef4444';
                        isValid = false;
                    } else {
                        nameInput.style.borderColor = '#d1d5db';
                    }
                    
                    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                        emailInput.style.borderColor = '#ef4444';
                        isValid = false;
                    } else {
                        emailInput.style.borderColor = '#d1d5db';
                    }
                    
                    if (!messageInput.value.trim()) {
                        messageInput.style.borderColor = '#ef4444';
                        isValid = false;
                    } else {
                        messageInput.style.borderColor = '#d1d5db';
                    }
                    
                    if (!consentCheckbox.checked) {
                        consentCheckbox.style.borderColor = '#ef4444';
                        isValid = false;
                    } else {
                        consentCheckbox.style.borderColor = '#d1d5db';
                    }
                    
                    if (isValid) {
                        // Here you would normally send the form data to your server
                        alert('Thank you for your message! I will get back to you soon.');
                        contactForm.reset();
                    }
                });
            }
        });
    </script>
</body>`,
      }}
    />
  );
};

export default PortfolioShowcase;
