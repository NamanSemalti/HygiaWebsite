import React from 'react';
import { CheckCircle, MapPin, Award, Truck, Shield } from 'lucide-react';
import { aboutContent, companyInfo } from '../data/mock';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted partner in pharmaceutical distribution since 2009
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {companyInfo.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutContent.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutContent.mission}
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">{companyInfo.yearsOfExperience}</p>
                  <p className="text-sm text-gray-600">Years of Service</p>
                </div>
                <div className="h-16 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600">2000+</p>
                  <p className="text-sm text-gray-600">Retail Partners</p>
                </div>
                <div className="h-16 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">150+</p>
                  <p className="text-sm text-gray-600">Hospital Clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=800&q=80"
                alt="Pharmaceutical facility"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Key Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Compliance & Storage Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">Licensed Distributor</h3>
              <p className="text-sm text-gray-600">
                Fully licensed pharmaceutical wholesale distributor with all regulatory approvals
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">WHO-GDP Compliant</h3>
              <p className="text-sm text-gray-600">
                Storage facilities maintained as per WHO Good Distribution Practices
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">Temperature Controlled</h3>
              <p className="text-sm text-gray-600">
                Cold chain logistics for temperature-sensitive pharmaceutical products
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Quality Assured</h3>
              <p className="text-sm text-gray-600">
                Complete batch traceability and genuine stock verification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Currently serving major locations across South India
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {aboutContent.serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg"
                >
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Expanding to more regions. Contact us to check if we serve your location.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80"
              alt="Quality control"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=800&q=80"
              alt="Warehouse operations"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
