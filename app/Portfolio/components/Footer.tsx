import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Consulting', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'ri-github-fill',
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: 'ri-twitter-fill',
      url: 'https://twitter.com/yourusername',
    },
    {
      name: 'Instagram',
      icon: 'ri-instagram-fill',
      url: 'https://instagram.com/yourusername',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Your Name</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className={`${link.icon} ri-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Your Name. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
