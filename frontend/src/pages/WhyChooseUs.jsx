import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { whyChooseUs, testimonials } from '../data/mock';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trusted partner for healthcare institutions and medical retailers across South India
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the critical nature of pharmaceutical supply and deliver excellence every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = require('lucide-react')[
                item.icon.split('-').map((word, index) =>
                  index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) :
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join('')
              ];

              return (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100"
                >
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            More Reasons to Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Product Range</h3>
              <p className="text-gray-600">
                Access to 10,000+ SKUs covering all therapeutic categories from branded to generic medicines
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Credit Terms</h3>
              <p className="text-gray-600">
                Customized credit facilities based on your business needs and order volumes
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Support</h3>
              <p className="text-gray-600">
                Dedicated relationship managers and 24/7 customer support for urgent requirements
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stock Availability</h3>
              <p className="text-gray-600">
                High stock availability ensuring you never run out of essential medicines
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                100% genuine products with full batch documentation and manufacturer warranties
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Returns</h3>
              <p className="text-gray-600">
                Hassle-free return policy for damaged or short-expiry products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg relative"
              >
                <Quote className="h-10 w-10 text-blue-300 absolute top-4 right-4" />
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-blue-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.designation}</p>
                  <p className="text-sm text-blue-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
              alt="Quality testing"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/3735726/pexels-photo-3735726.jpeg?w=800&q=80"
              alt="Professional facility"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied healthcare professionals who trust us for their pharmaceutical needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
