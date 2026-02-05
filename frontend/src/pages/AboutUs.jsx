import React from 'react';
import { CheckCircle, MapPin, Award, Truck, Shield } from 'lucide-react';
import { aboutContent, companyInfo } from '../data/mock';

const AboutUs = () => {
  const stats = [
    { value: 'Est. ' + companyInfo.established, label: companyInfo.yearsOfExperience + ' Years in Business', color: 'blue' },
    { value: '500+', label: 'Retail Partners', color: 'green' },
    { value: '50+', label: 'Hospital Clients', color: 'blue' }
  ];

  const complianceItems = [
    {
      icon: Shield,
      title: 'Licensed Distributor',
      description: 'Fully licensed pharmaceutical wholesale distributor with all regulatory approvals',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'WHO-GDP Compliant',
      description: 'Storage facilities maintained as per WHO Good Distribution Practices',
      color: 'green'
    },
    {
      icon: Truck,
      title: 'Temperature Controlled',
      description: 'Cold chain logistics for temperature-sensitive pharmaceutical products',
      color: 'blue'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Complete batch traceability and genuine stock verification',
      color: 'green'
    }
  ];

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
                {stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="h-16 w-px bg-gray-300"></div>}
                    <div className="text-center">
                      <p className={`text-4xl font-bold text-blue-600`}>{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=800&q=80"
                alt="Pharmaceutical facility"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
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
            {complianceItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                    <IconComponent className={`h-8 w-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
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
              Currently serving major locations across North India
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
