'use client';

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
              Hi, I'm Zin Ko Naing
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
                className="bg-black text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-600 transition whitespace-nowrap"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className=" border-2 border-black text-black px-6 py-3 !rounded-button font-medium  transition whitespace-nowrap"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex space-x-4 ">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-700 hover:text-black"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0.2975C5.3725 0.2975 0 5.67 0 12.2975C0 17.68 3.43875 22.1675 8.205 23.715C8.805 23.82 9.025 23.455 9.025 23.1425C9.025 22.8575 9.015 22.1475 9.01 21.1975C5.6725 21.8975 4.9675 19.5 4.9675 19.5C4.4225 18.09 3.6325 17.7 3.6325 17.7C2.545 16.95 3.7175 16.965 3.7175 16.965C4.9225 17.05 5.555 18.2175 5.555 18.2175C6.6275 20.07 8.3925 19.56 9.07 19.245C9.1725 18.48 9.4825 17.955 9.825 17.655C7.145 17.355 4.345 16.2975 4.345 11.595C4.345 10.2875 4.8 9.2175 5.55 8.385C5.43 8.085 5.05 6.825 5.67 5.0975C5.67 5.0975 6.655 4.785 8.995 6.36C9.945 6.105 10.96 5.97 11.975 5.97C12.99 5.97 14.005 6.105 14.955 6.36C17.295 4.785 18.28 5.0975 18.28 5.0975C18.9 6.825 18.52 8.085 18.4 8.385C19.15 9.2175 19.605 10.2875 19.605 11.595C19.605 16.31 16.8 17.3475 14.115 17.64C14.555 18.045 14.945 18.825 14.945 20.055C14.945 21.765 14.935 22.965 14.935 23.1425C14.935 23.455 15.15 23.825 15.76 23.715C20.52 22.16 24 17.6775 24 12.2975C24 5.67 18.6275 0.2975 12 0.2975Z" />
                </svg>
              </a>

              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-700 hover:text-blue-600"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill=""
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>

              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
