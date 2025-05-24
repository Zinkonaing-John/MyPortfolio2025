import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Solutions Inc.',
      image:
        'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20female%20product%20manager%20in%20business%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20high%20quality%20headshot&amp;width=200&amp;height=200&amp;seq=test1&amp;orientation=square',
      content:
        'Working with this developer was an absolute pleasure. Their attention to detail and commitment to delivering high-quality code made our project a success. I would highly recommend them for any development work.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Innovations',
      image:
        'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20male%20CTO%20in%20business%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20high%20quality%20headshot&amp;width=200&amp;height=200&amp;seq=test2&amp;orientation=square',
      content:
        'The developer demonstrated exceptional technical skills and problem-solving abilities. They consistently delivered solutions that exceeded our expectations and helped us achieve our business goals.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Creative Web Solutions',
      image:
        'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20female%20UX%20designer%20in%20casual%20business%20attire%2C%20friendly%20pose%2C%20modern%20office%20background%2C%20high%20quality%20headshot&amp;width=200&amp;height=200&amp;seq=test3&amp;orientation=square',
      content:
        'Collaborating with this developer was seamless. They understood our design vision perfectly and implemented it with precision. Their technical expertise and communication skills made the development process smooth and efficient.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Client Testimonials</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6"
              />
              <p className="text-gray-600 text-lg mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          >
            <i className="ri-arrow-left-s-line ri-xl"></i>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          >
            <i className="ri-arrow-right-s-line ri-xl"></i>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
