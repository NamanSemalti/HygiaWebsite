import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Pill } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-lg">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Hygia Healthcare</span>
                <span className="text-xs text-gray-400">Pharmaceutical Wholesaler</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Wholesale supplier of branded and generic medicines serving healthcare institutions and retailers across North India since 2018.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Drug License:</span> {companyInfo.drugLicense}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">GST No:</span> {companyInfo.gstNumber}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Est. 2018</span> – 8+ Years in Business
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-sm hover:text-blue-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Antibiotics</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Cardiac Care</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Diabetic Care</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Pain & Fever</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Syrups & Suspensions</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Injections</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-blue-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-blue-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              B2B Wholesale Only | Licensed Pharmaceutical Distributor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
