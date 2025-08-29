import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  structuredData,
  pageType = 'website',
  serviceName,
  serviceDescription,
  servicePrice,
  serviceArea,
  serviceCategory
}) => {
  // Default values for Grahmind - Brand Focused
  const defaultTitle = 'Grahmind - Leading Web Development, Mobile Apps & AI Solutions Company';
  const defaultDescription = 'Grahmind delivers cutting-edge web development, mobile app development, AI solutions, UI/UX design, digital marketing, and software support services. Transform your business with our expert team.';
  const defaultKeywords = 'Grahmind, Grahmind Technologies, web development company, mobile app development, AI solutions, UI/UX design, digital marketing, software support, full stack development, web applications, mobile applications, artificial intelligence, machine learning, custom software development, e-commerce development, responsive web design, progressive web apps, React development, Node.js development, Python development, cloud solutions, digital transformation';
  
  // Use provided values or defaults
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://grahmind.com');
  const finalOgImage = ogImage || 'https://grahmind.com/og-image.png';

  // Generate structured data based on page type
  const generateStructuredData = () => {
    if (structuredData) return structuredData;

    const baseData = {
      "@context": "https://schema.org",
      "@type": pageType === 'service' ? "Service" : "WebPage",
      "name": finalTitle,
      "description": finalDescription,
      "url": finalCanonical,
      "mainEntity": pageType === 'service' ? {
        "@type": "Service",
        "name": serviceName || finalTitle,
        "description": serviceDescription || finalDescription,
        "provider": {
          "@type": "Organization",
          "name": "Grahmind",
          "url": "https://grahmind.com"
        },
        "areaServed": serviceArea || "Worldwide",
        "category": serviceCategory || "Digital Services",
        ...(servicePrice && { "offers": {
          "@type": "Offer",
          "price": servicePrice,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }})
      } : undefined
    };

    // Remove undefined properties
    if (!baseData.mainEntity) {
      delete baseData.mainEntity;
    }

    return baseData;
  };

  // Generate brand-specific structured data
  const generateBrandData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Brand",
      "name": "Grahmind",
      "description": "Grahmind is a leading technology company specializing in web development, mobile apps, AI solutions, and digital services",
      "url": "https://grahmind.com",
      "logo": "https://grahmind.com/logo.png",
      "slogan": "Transforming businesses through innovative technology solutions",
      "foundingDate": "2024",
      "knowsAbout": [
        "Web Development",
        "Mobile Applications",
        "Artificial Intelligence",
        "Digital Transformation"
      ]
    };
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbData = () => {
    if (typeof window === 'undefined') return null;
    
    try {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://grahmind.com"
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://grahmind.com${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
    } catch (error) {
      console.warn('Error generating breadcrumb data:', error);
      return null;
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - Brand Enhanced */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Brand-Specific Meta Tags */}
      <meta name="application-name" content="Grahmind" />
      <meta name="apple-mobile-web-app-title" content="Grahmind" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook - Brand Enhanced */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Grahmind" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:country-name" content="United States" />
      
      {/* Twitter - Brand Enhanced */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@grahmind" />
      <meta name="twitter:site" content="@grahmind" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
      
      {/* Brand Structured Data - Always Include */}
      <script type="application/ld+json">
        {JSON.stringify(generateBrandData())}
      </script>
      
      {/* Breadcrumb Structured Data */}
      {(() => {
        const breadcrumbData = generateBreadcrumbData();
        return breadcrumbData ? (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbData)}
          </script>
        ) : null;
      })()}
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Grahmind" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Service-specific meta tags */}
      {serviceName && (
        <>
          <meta name="service:name" content={serviceName} />
          <meta name="service:category" content={serviceCategory} />
          {serviceArea && <meta name="service:area" content={serviceArea} />}
        </>
      )}
      
      {/* Brand Authority Signals */}
      <meta name="company" content="Grahmind" />
      <meta name="organization" content="Grahmind Technologies" />
      <meta name="brand" content="Grahmind" />
    </Helmet>
  );
};

export default SEO; 
