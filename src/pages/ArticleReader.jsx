import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from '../lib/sanityClient';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { ArrowLeft, Share2, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const ArticleReader = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Query to fetch article by slug
        const query = `*[_type == "publicationPost" && slug.current == $slug][0] {
          title,
          publishedAt,
          excerpt,
          body,
          mainImage,
          "categories": categories[]->title,
          "authors": authors[]->name
        }`;

        const result = await client.fetch(query, { slug });
        
        if (!result) {
          throw new Error("Article not found");
        }
        
        setArticle(result);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError(error.message || "Failed to load article");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMMM d, yyyy');
    } catch (error) {
      console.error("Error formatting date:", error);
      return '';
    }
  };

  const handleBack = () => {
    navigate('/publications');
  };

  // Custom Portable Text components for styling
  const components = {
    block: {
      h1: ({children}) => <h1 className="text-3xl md:text-4xl font-light my-6">{children}</h1>,
      h2: ({children}) => <h2 className="text-2xl md:text-3xl font-light my-5">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl md:text-2xl font-light my-4">{children}</h3>,
      normal: ({children}) => <p className="text-base md:text-lg my-4 leading-relaxed">{children}</p>,
      blockquote: ({children}) => (
        <blockquote className="border-l-4 border-[#ad3724] pl-4 italic my-6 text-gray-700">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({children}) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
      number: ({children}) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="text-base md:text-lg leading-relaxed">{children}</li>,
      number: ({children}) => <li className="text-base md:text-lg leading-relaxed">{children}</li>,
    },
    marks: {
      strong: ({children}) => <strong className="font-semibold">{children}</strong>,
      em: ({children}) => <em>{children}</em>,
      link: ({value, children}) => (
        <a href={value.href} className="text-[#ad3724] underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
    types: {
      image: ({value}) => (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ),
    },
  };

  const ShareButton = ({ icon: Icon, label, onClick }) => (
    <button 
      onClick={onClick} 
      className="flex items-center gap-2 text-gray-600 hover:text-[#ad3724] group relative"
      aria-label={`Share on ${label}`}
    >
      <Icon size={16} />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap text-xs bg-gray-700 text-white px-2 py-1 rounded left-1/2 transform -translate-x-1/2">
        Share on {label.replace('Share on ', '')}
      </span>
    </button>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#EDE6DD] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-64 bg-gray-300 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EDE6DD] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={handleBack}
            className="px-4 py-2 bg-[#ad3724] text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Return to Publications
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article.title;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'instagram':
        // Note: Instagram doesn't have a direct web sharing API
        // This will copy the URL to clipboard with a message
        navigator.clipboard.writeText(url)
          .then(() => alert('Link copied to clipboard. Open Instagram and paste in your story!'))
          .catch(err => console.error('Failed to copy link: ', err));
        break;
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url)
          .then(() => alert('Link copied to clipboard!'))
          .catch(err => console.error('Failed to copy link: ', err));
    }
  };

  return (
    <div className="min-h-screen bg-[#EDE6DD] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back button */}
        <button 
          onClick={handleBack} 
          className="flex items-center text-gray-600 hover:text-[#ad3724] mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Publications</span>
        </button>
        
        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-light mb-6">{article.title}</h1>
          
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <p className="text-gray-600">
                {article.publishedAt && formatDate(article.publishedAt)}
                {article.categories?.length > 0 && ` • ${article.categories[0]}`}
              </p>
              {article.authors?.length > 0 && (
                <p className="text-gray-700 font-medium">
                  By {article.authors.join(', ')}
                </p>
              )}
            </div>
          </div>
        </header>
        
        {/* Featured image */}
        {article.mainImage && (
          <div className="mb-8">
            <img 
              src={urlFor(article.mainImage).width(1200).url()}
              alt={article.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        )}
        
        {/* Article excerpt/summary */}
        {article.excerpt && (
          <div className="mb-8 text-xl italic text-gray-700 border-l-4 border-[#ad3724] pl-4">
            {article.excerpt}
          </div>
        )}
        
        {/* Article body */}
        <article className="prose prose-lg max-w-none">
          {article.body && <PortableText value={article.body} components={components} />}
        </article>
        
        {/* Article footer with sharing options */}
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-gray-600">
              Thanks for reading!
            </p>
            
            <div className="flex gap-6 py-4">
              <ShareButton 
                icon={Twitter} 
                label="Twitter" 
                onClick={() => handleShare('twitter')} 
              />
              <ShareButton 
                icon={Facebook} 
                label="Facebook" 
                onClick={() => handleShare('facebook')} 
              />
              <ShareButton 
                icon={Linkedin} 
                label="LinkedIn" 
                onClick={() => handleShare('linkedin')} 
              />
              <ShareButton 
                icon={Instagram} 
                label="Instagram" 
                onClick={() => handleShare('instagram')} 
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArticleReader;