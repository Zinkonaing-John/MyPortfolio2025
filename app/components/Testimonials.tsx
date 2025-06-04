import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him an invaluable team member.',
      name: 'Sarah Johnson',
      title: 'CTO, TechVision Solutions',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20tech%20executive%2C%2040s%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=test1&orientation=squarish',
    },
    {
      quote:
        'Working with John was a pleasure. He transformed our concept into a beautiful, functional website that exceeded our expectations and significantly improved user engagement.',
      name: 'Michael Roberts',
      title: 'Founder, Innovate Digital',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20business%20owner%2C%2030s%2C%20casual%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=test2&orientation=squarish',
    },
    {
      quote:
        "John's technical expertise and collaborative approach made our project a success. He's not just a developer but a problem solver who understands business needs.",
      name: 'Emily Chen',
      title: 'Product Manager, WebCraft',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20product%20manager%2C%20mid%2030s%2C%20smart%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=test3&orientation=squarish',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What People Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
              <div className="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
                <i className="ri-double-quotes-l ri-lg"></i>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
