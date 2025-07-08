import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-8">
          {/* Logo, Description, Socials */}
          <div className="lg:col-span-2">
            <div className="mb-2 sm:mb-4">
              <span className="block text-base sm:text-lg font-bold tracking-widest mb-1 sm:mb-2">INNOVIMAGINE</span>
            </div>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">Transforming digital landscapes with innovative technology solutions and cutting-edge design.</p>
            <div className="flex space-x-4 text-2xl text-gray-700">
              <a
                href="https://www.linkedin.com/in/innov-imagine-582915350/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?next=%2Finnovimagine%2F&source=omni_redirect"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572732074218&mibextid=qi2Omg&rdid=WW2L7v3ytUejb5A0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18dGf6b7YL%2F%3Fmibextid%3Dqi2Omg#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Services & Pages side by side ONLY on mobile */}
          <div className="flex flex-row w-full gap-2 sm:hidden">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold font-sans mb-2">Services</h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <Link 
                    to="/services/web-app-development" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Web Development
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/mobile-app-development" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Mobile App
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/full-stack-development" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Full Stack 
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ai-tool-applications" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    AI Tool Applications
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ui-ux-design" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    UI/UX Design
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/digital-marketing" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Digital Marketing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/software-support" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Software Support
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold font-sans mb-2">Pages</h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <Link 
                    to="/" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Services column for sm+ screens */}
          <div className="hidden sm:block">
            <h3 className="text-lg font-semibold font-sans mb-4">Services</h3>
            <ul className="space-y-3 text-gray-800">
              <li>
                <Link 
                  to="/services/web-app-development" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Web Development
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/mobile-app-development" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Mobile App
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/full-stack-development" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Full Stack 
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/ai-tool-applications" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  AI Tool Applications
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/ui-ux-design" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  UI/UX Design
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/digital-marketing" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Digital Marketing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/software-support" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Software Support
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Pages column for sm+ screens */}
          <div className="hidden sm:block">
            <h3 className="text-lg font-semibold font-sans mb-4">Pages</h3>
            <ul className="space-y-3 text-gray-800">
            <li>
                  <Link 
                    to="/" 
                    className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              <li>
                <Link 
                  to="/services" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold font-sans mb-2 sm:mb-4">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <span aria-label="Location" title="Location">
                  <HiOutlineLocationMarker className="text-lg" />
                </span>
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-label="Email" title="Email">
                  <HiOutlineMail className="text-lg" />
                </span>
                <a 
                  href="mailto:innovimagine@gmail.com" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  innovimagine@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-label="Phone" title="Phone">
                  <HiOutlinePhone className="text-lg" />
                </span>
                <a 
                  href="tel:+917569460743" 
                  className="relative inline-block group transition-all duration-300 hover:text-black hover:font-medium"
                >
                  +91 7569460743
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold font-sans mb-2 sm:mb-4">Newsletter</h3>
            <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm">Stay updated with our latest innovations and insights.</p>
            {isSubscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-2 sm:p-3">
                <p className="text-green-800 text-xs sm:text-sm font-medium">✓ Successfully subscribed! Thank you.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 sm:px-6 py-2 rounded-md transition-all duration-300 font-medium text-sm sm:text-base ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 sm:py-6 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} InnovImagine. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
