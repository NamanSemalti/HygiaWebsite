import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in your pharmaceutical wholesale services. Please share more details.'
  );
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-pulse group-hover:animate-none" />
      <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
