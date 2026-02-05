import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Clock, ShieldCheck as ShieldCheckIcon, IndianRupee, Truck, Users } from 'lucide-react';
import { companyInfo, whyChooseUs } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {companyInfo.tagline}
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Licensed pharmaceutical distributor serving hospitals, clinics, and medical retailers across North India. Est. 2018 – 8+ Years in Pharmaceutical Wholesale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg"
                >
                  <span>Request Price List</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I am interested in your pharmaceutical wholesale services. Please share more details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all font-medium text-lg"
                >
                  <span>Contact via WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Drug License</p>
                    <p className="text-sm font-bold text-gray-900">{companyInfo.drugLicense}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">GST Registered</p>
                    <p className="text-sm font-bold text-gray-900">{companyInfo.gstNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Established</p>
                    <p className="text-sm font-bold text-gray-900">{companyInfo.established} ({companyInfo.yearsOfExperience} Years)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1573207535342-8c0f9506112e?w=800&q=80"
                alt="Pharmaceutical warehouse"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Healthcare Professionals Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by medical retailers and hospitals across North India since 2018
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => {
              const iconMap = {
                'shield-check': ShieldCheckIcon,
                'indian-rupee': IndianRupee,
                'truck': Truck,
                'users': Users
              };
              const IconComponent = iconMap[item.icon];

              return (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100"
                >
                  <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/why-choose-us"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              <span>Learn More About Our Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for the best wholesale rates and genuine pharmaceutical products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get Price List Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-medium text-lg"
            >
              Call: {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
