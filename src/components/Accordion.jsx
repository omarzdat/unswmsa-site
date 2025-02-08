// src/components/Accordion.jsx
import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white">
      <button
        className="w-full text-left py-4 flex justify-between items-center text-white text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-white py-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;