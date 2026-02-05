import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../data/mock';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive range of pharmaceutical products from leading manufacturers
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => {
              const IconComponent = require('lucide-react')[
                category.icon.split('-').map((word, index) =>
                  index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) :
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join('')
              ];

              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                    <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-600">{category.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Popular Products:</p>
                      <p className="text-sm text-gray-600">{category.examples}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      <span>Contact us for full list</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Images Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Quality Products from Trusted Manufacturers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80"
              alt="Pharmaceutical products"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1722931303388-527993417e23?w=600&q=80"
              alt="Medicine bottles"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=600&q=80"
              alt="Pharmacy operations"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Categories Info */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              We Supply More Than Just Medicines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Medical Supplies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Surgical instruments and disposables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Medical equipment and devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Diagnostic kits and consumables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Personal protective equipment (PPE)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Specialized Categories</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Ayurvedic and herbal medicines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Nutraceuticals and supplements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Baby care and mother care products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Hospital and clinical furniture</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                <span>Request Complete Product Catalog</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
