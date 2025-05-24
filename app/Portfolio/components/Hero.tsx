import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const type = () => {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        setTypedText(currentTitle.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(currentTitle.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && typedText === currentTitle) {
        setIsDeleting(true);
        setTypingSpeed(1500); // Pause at the end
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
        setTypingSpeed(500); // Pause before typing next
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIndex, typingSpeed, titles]);

  return (
    <section className="hero-section min-h-screen flex items-center pt-16" id="home">
      <div className="hero-overlay w-full h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm John Anderson
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-gray-700 mb-2 flex items-center">
              <span>{typedText}</span>
              <span className="typing-cursor ml-1">|</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Specializing in building exceptional digital experiences with React, Node.js, and
              modern web technologies. Let's bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-600 transition whitespace-nowrap"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="bg-white border-2 border-primary text-primary px-6 py-3 !rounded-button font-medium hover:bg-blue-50 transition whitespace-nowrap"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex space-x-4">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
                href="#"
              >
                <i className="ri-github-fill ri-lg text-gray-700"></i>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
                href="#"
              >
                <i className="ri-linkedin-fill ri-lg text-gray-700"></i>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
                href="#"
              >
                <i className="ri-twitter-x-fill ri-lg text-gray-700"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
