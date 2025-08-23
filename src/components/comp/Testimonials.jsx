import React, { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "Grahmind transformed our workflow with their AI solutions. Their team delivered exactly what we needed - intelligent automation that actually works.",
    name: "Sampath",
    role: "Director at Taaza",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format"
  },
  {
    quote: "The AI tools Grahmind built for us have increased our productivity by 40%. Their expertise in machine learning is unmatched.",
    name: "Ajay",
    role: "Founder at DesignStudios",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format"
  },
  {
    quote: "Grahmind's web development and AI integration services exceeded our expectations. They truly understand modern business needs.",
    name: "Mahesh",
    role: "Founder at ProgMarketing",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format"
  }
]

const stats = [
  { number: "15+", label: " Projects Delivered" },
  { number: "100%", label: "Client Satisfaction Rate" },
  { number: "2+", label: "Years of Innovation" }
]

const badges = [
  {
    name: "Top Rated",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    color: "text-yellow-600"
  },
  {
    name: "Fast Delivery",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
      </svg>
    ),
    color: "text-green-600"
  },
  {
    name: "24/7 Support",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    color: "text-blue-600"
  },
  {
    name: "Ethical AI",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-purple-600"
  },
  {
    name: "Innovation Award",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    color: "text-orange-600"
  },
  {
    name: "Client Choice",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    color: "text-pink-600"
  }
]

const StarRating = ({ rating, isAnimated = false }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 transition-all duration-700 ease-in-out ${i < rating ? (isAnimated ? 'text-yellow-500' : 'text-gray-900') : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  const testimonialRefs = useRef([]);
  const [animatedTestimonials, setAnimatedTestimonials] = React.useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = testimonialRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setAnimatedTestimonials(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#f5f6fa', boxShadow: '4px 4px 12px #e0e0e0, -4px -4px 12px #ffffff' }}>
            <svg className="w-4 h-4 text-gray-500 mr-2 transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:rotate-12 hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how Grahmind is transforming businesses with AI-powered solutions.</p>
        </div>

        {/* Social Proof Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Trusted & Recognized</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-neumorphic hover:shadow-neumorphic-hover"
              >
                <div className={`${badge.color} mb-2 flex justify-center`}>
                  {badge.icon}
                </div>
                <div className="text-xs font-semibold text-gray-700">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg">
            <div className="mb-6">
              <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                Grahmind's <span className="text-gray-400">AI-driven approach</span> revolutionized our business processes. Their expertise in <span className="text-gray-400">machine learning</span> and <span className="text-gray-400">web development</span> helped us achieve results we never thought possible.
              </p>
            </div>
            <div className="text-4xl text-gray-300 mb-4">"</div>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="h-64">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&auto=format" 
                alt="Grahmind client success"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Individual Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              ref={(el) => (testimonialRefs.current[idx] = el)}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <StarRating rating={testimonial.rating} isAnimated={animatedTestimonials.has(idx)} />
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
              
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center py-8">
              <div className="text-5xl lg:text-6xl  font-sans text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials