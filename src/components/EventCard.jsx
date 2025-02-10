// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ 
  image, 
  title, 
  details, 
  isFeatured = false,
  showSignUp = false,
  imageHeight = 'h-48',
  className = '' 
}) => {
  return (
    <div className={`bg-[#CD4631] rounded-lg overflow-hidden ${isFeatured ? 'h-full' : ''} ${className}`}>
      <div className="relative">
        <img
          src={image || "/api/placeholder/400/300"}
          alt={title}
          className={`w-full ${imageHeight} object-cover`}
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#CD4631]">
          <h3 className="text-white text-xl">{title || "event name/promo"}</h3>
        </div>
      </div>
      
      {(details || showSignUp) && (
        <div className="p-6 text-white">
          {details && <p className="mb-4 line-clamp-3">{details}</p>}
          {showSignUp && (
            <button className="border-2 border-white px-8 py-2 hover:bg-white hover:text-[#CD4631] transition-colors">
              SIGN UP!
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;