// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ 
  image, 
  title, 
  details, 
  isFeatured = false,
  showSignUp = false,
  signUpLink = '', // New prop for signup link
  className = '',
  imageClassName = isFeatured ? 'aspect-video' : 'aspect-[4/3]'
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
          className={`w-full object-cover ${imageClassName}`}
        />
        <div className="absolute bottom-0 left-0 w-full p-2 md:p-4 bg-[#CD4631]">
          <h3 className="text-white text-sm sm:text-base md:text-xl">
            {title || "event name/promo"}
          </h3>
        </div>
      </div>
      
      {(details || showSignUp) && (
        <div className="p-2 md:p-4 text-white">
          {details && (
            <p className="text-xs md:text-base mb-2 md:mb-4 line-clamp-2 md:line-clamp-3">
              {details}
            </p>
          )}
          {showSignUp && signUpLink && (
            <a
              href={signUpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block w-full text-center
                border-2 border-white 
                px-3 md:px-8 py-1 md:py-2
                text-xs md:text-base
                text-white
                hover:bg-white hover:text-[#CD4631] 
                transition-colors
              "
            >
              SIGN UP!
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;