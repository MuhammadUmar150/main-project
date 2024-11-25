import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Building responsive, user-friendly websites with the latest technologies to meet your business needs.',
      icon: '🌐',
      details: `Our web development services are tailored to provide unique designs, fast loading times, and seamless user experiences. Whether you need a business website or a portfolio, we ensure quality and scalability.`,
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Custom e-commerce platforms designed to maximize sales and provide seamless shopping experiences.',
      icon: '🛒',
      details: `We create e-commerce platforms that drive sales and improve customer engagement. From intuitive product catalogs to secure payment gateways, we handle it all.`,
    },
    {
      title: 'SEO Optimization',
      description:
        'Improve your website’s visibility and ranking with our expert SEO strategies.',
      icon: '📈',
      details: `Our SEO services help your business rank higher on search engines, increase organic traffic, and improve online visibility. Stay ahead of your competitors with our proven techniques.`,
    },
    {
      title: 'Cloud Hosting',
      description:
        'Reliable and secure hosting solutions for businesses of all sizes.',
      icon: '☁️',
      details: `Experience high-performance cloud hosting with 99.9% uptime. Our hosting solutions ensure speed, security, and flexibility to meet your growing business needs.`,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-16 border-b-4 border-gray-700 inline-block pb-2">
        Our Services
      </h2>

      {/* Service Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="text-lime-500 text-5xl mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 hover:text-lime-500 transition-colors">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-400 mb-4">{service.description}</p>
            {/* Details */}
            <p className="text-gray-300 text-sm">{service.details}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-lime-500">
              Expertise
            </h4>
            <p className="text-gray-300">
              Our team consists of industry professionals with years of
              experience in web development, e-commerce, and SEO.
            </p>
          </div>
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-lime-500">
              Custom Solutions
            </h4>
            <p className="text-gray-300">
              We provide tailored solutions to meet your specific business
              needs, ensuring maximum satisfaction and results.
            </p>
          </div>
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-lime-500">
              24/7 Support
            </h4>
            <p className="text-gray-300">
              Enjoy round-the-clock support to keep your projects running
              smoothly, no matter where you are.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Services;
