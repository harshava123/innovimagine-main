import React, { useEffect, useRef } from 'react'

const steps = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    number: '01',
    title: 'Workflow Assessment',
    desc: 'We begin by examining your existing workflows to identify where AI can deliver the greatest impact.',
    image: (
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-56 bg-gradient-to-b from-blue-400 via-green-400 to-yellow-400 rounded-2xl shadow-2xl transform rotate-12 relative">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full opacity-30"></div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black rounded-full opacity-20"></div>
          </div>
          <div className="absolute top-8 left-8 w-24 h-32 bg-gray-800 rounded-lg shadow-xl transform -rotate-12">
            <div className="p-3">
              <div className="w-full h-2 bg-gray-600 rounded mb-2"></div>
              <div className="w-3/4 h-2 bg-gray-600 rounded mb-2"></div>
              <div className="w-1/2 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: '02',
    title: 'Deploy with Confidence',
    desc: 'Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.',
    image: (
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-40 h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-lg"></div>
            <div className="w-40 h-16 bg-gray-800 rounded-b-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75c0-5.385-4.365-9.75-9.75-9.75z" />
      </svg>
    ),
    number: '03',
    title: 'Ongoing Support & Optimization',
    desc: 'After deployment, we provide support and refine your AI systems to keep them performing at their best.',
    image: (
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-48 h-20 bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-2xl">
              <div className="absolute top-2 left-4 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-red-500 rounded"></div>
              <div className="absolute bottom-2 right-4 w-16 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

const Process = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: '#f5f6fa', boxShadow: '4px 4px 12px #e0e0e0, -4px -4px 12px #ffffff' }}>
            <svg className="w-4 h-4 text-gray-500 mr-2 transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:rotate-12 hover:drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans text-black mb-4">Simple & Scalable</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A transparent process of collaboration and feedback</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`relative ${idx === 0 ? 'lg:col-span-1' : idx === 1 ? 'lg:col-span-1' : 'lg:col-span-2'}`}
              style={{
                transform: `translateY(${idx === 0 ? '50px' : idx === 1 ? '-50px' : '30px'}) scale(0.9)`,
                opacity: '0',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-sans text-black mb-2 transition-colors duration-300 hover:text-gray-500">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`mb-6 transition-transform duration-300 hover:scale-105 ${idx === 2 ? 'h-26' : ''}`}>
                  {step.image}
                </div>

                {/* Step Number */}
                <div className="text-right">
                  <span className="text-6xl font-bold text-gray-200 transition-all duration-300 hover:text-gray-300">{step.number}</span>
                </div>

                {/* Connecting dots */}
                <div className="absolute -bottom-2 right-8 flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
                  <div className="w-2 h-2 bg-gray-900 rounded-full transition-all duration-300 hover:bg-blue-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process