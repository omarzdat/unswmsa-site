// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ 
  image, 
  title, 
  details, 
  isFeatured = false,
  showSignUp = false,
  className = '' 
}) => {
  return (
    <div 
      className={`
        bg-[#CD4631] rounded-lg overflow-hidden 
        flex flex-col
        ${isFeatured ? 'h-full' : 'h-fit'}
        ${className}
      `}
    >
      <div className="relative w-full">
        <img
          src={image || "/api/placeholder/400/300"}
          alt={title}
          className={`w-full object-cover ${isFeatured ? 'aspect-video' : 'aspect-[4/3]'}`}
        />
        <div className="absolute bottom-0 left-0 w-full p-2 sm:p-4 bg-[#CD4631]">
          <h3 className="text-white text-sm sm:text-base md:text-xl">
            {title || "event name/promo"}
          </h3>
        </div>
      </div>
      
      {(details || showSignUp) && (
        <div className="p-3 sm:p-4 md:p-6 text-white">
          {details && (
            <p className="text-xs sm:text-sm md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
              {details}
            </p>
          )}
          {showSignUp && (
            <button className="
              w-full text-center
              border-2 border-white 
              px-3 sm:px-6 md:px-8 py-1 sm:py-2
              text-xs sm:text-sm md:text-base
              hover:bg-white hover:text-[#CD4631] 
              transition-colors
            ">
              SIGN UP!
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;