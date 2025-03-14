import React, { useState, useEffect, useRef } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { useNavigate, useLocation } from 'react-router-dom';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchPublications = async () => {
      setIsLoading(true);
      
      try {
        // Query to fetch all publications, ordered by publishedAt date descending (newest first)
        const query = `*[_type == "publicationPost"] | order(publishedAt desc) {
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          "categories": categories[]->title,
          "authors": authors[]->name,
          mainImage
        }`;

        const result = await client.fetch(query);
        setPublications(result);
      } catch (error) {
        console.error("Error fetching publications from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this email to your subscription service
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
    // Show success message (in a real app)
    alert('Thanks for subscribing!');
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMM d, yyyy').toUpperCase();
    } catch (error) {
      console.error("Error formatting date:", error);
      return '';
    }
  };

  // Extract featured (most recent) publication
  const featuredPublication = publications.length > 0 ? publications[0] : null;

  return (
    <div className="min-h-screen overflow-y-auto" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#961a1e] h-[60vh] pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/assets/arch.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-center">UNSWMSA Publications</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl text-center">
            Relevant topics for the university student
          </p>
        </div>
      </section>

      {/* Featured Publication Section */}
      <section className="bg-[#EDE6DD] pt-20 pb-16 -mt-2">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Featured Publication Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
            <p className="bg-[#961a1e] text-white text-sm uppercase tracking-wider py-2 px-4 font-medium">
              Latest Publication
            </p>
            
            {isLoading ? (
              <div className="p-8">
                <div className="animate-pulse bg-gray-300 rounded-lg h-64 w-full"></div>
              </div>
            ) : featuredPublication ? (
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Featured image with fixed height */}
                  <div className="md:w-1/2">
                    {featuredPublication.mainImage ? (
                      <div className="h-64 md:h-80 overflow-hidden rounded-lg">
                        <img 
                          src={urlFor(featuredPublication.mainImage).width(600).url()}
                          alt={featuredPublication.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-gray-200 rounded-lg w-full h-64 md:h-80"></div>
                    )}
                  </div>
                  
                  {/* Featured content */}
                  <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-light mb-3">
                      {featuredPublication.title}
                    </h2>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {featuredPublication.publishedAt && 
                        formatDate(featuredPublication.publishedAt)}
                      {featuredPublication.authors?.length > 0 && 
                        ` • UNSWMSA PUBLICATIONS`}
                    </p>
                    
                    <p className="text-base mb-6">
                      {featuredPublication.excerpt}
                    </p>
                    
                    <button 
                      onClick={() => navigate(`/publications/${featuredPublication.slug}`)}
                      className="border-2 border-[#961a1e] text-[#961a1e] px-6 py-2 hover:bg-[#961a1e] hover:text-white transition-colors"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-600">
                <p>No publications available at this time.</p>
              </div>
            )}
          </div>
          
          {/* All Publications */}
          <h2 className="text-3xl md:text-4xl font-light mb-12">All Publications</h2>
          
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="animate-pulse bg-gray-300 rounded-lg h-48 w-full"></div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Display all publications in a single column */}
              {publications.map((pub, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer border-b border-gray-200 pb-6 last:border-0"
                  onClick={() => navigate(`/publications/${pub.slug}`)}
                >
                  <div className="flex flex-col md:flex-row gap-6 group-hover:opacity-90 transition-opacity">
                    {/* Content */}
                    <div className="md:w-2/3">
                      <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:text-[#961a1e] transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {pub.publishedAt && formatDate(pub.publishedAt)}
                        {pub.categories?.length > 0 && ` • ${pub.categories[0]}`}
                      </p>
                      <p className="text-sm text-gray-700 line-clamp-3">
                        {pub.excerpt}
                      </p>
                    </div>
                    
                    {/* Thumbnail */}
                    <div className="md:w-1/3">
                      {pub.mainImage ? (
                        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                          <img 
                            src={urlFor(pub.mainImage).width(300).url()}
                            alt={pub.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="bg-gray-200 rounded-lg w-full aspect-[4/3]"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Subscription Section */}
        {/* <div className="max-w-3xl mx-auto mt-24 px-4 md:px-8 py-8 bg-white/50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-3/5">
              <h2 className="text-xl md:text-2xl font-light mb-2">UNSWMSA Publications</h2>
              <p className="text-sm md:text-base text-gray-700">
                Insightful reads from muslims on various univeristy edition topics
              </p>
            </div>
            <div className="md:w-2/5">
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  className="border border-gray-300 px-4 py-2 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#961a1e] text-white px-4 py-2 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Publications;