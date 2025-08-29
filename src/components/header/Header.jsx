import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];



  const handleGetStartedClick = () => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img 
              src="/grah.png?v=2" 
              alt="Grahmind Innovations" 
              className="h-32 w-auto"
              style={{ 
                backgroundColor: 'transparent',
                filter: 'brightness(1.1) contrast(1.1)',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>

          {/* Centered Navigation + Get Started Button */}
          <div className="flex-1 flex items-center justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
       
                  className={`text-base font-sans transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 ${
                    location.pathname === item.path
                      ? "border-gray-900 text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" onClick={handleGetStartedClick}>
              <button
                disabled={isLoading}
                className={`ml-4 px-6 py-2 rounded-md text-base font-sans border-none shadow-lg backdrop-blur-md transition-all duration-200 group ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:opacity-90'
                }`}
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.65), 0 1.5px 8px 0 rgba(0,0,0,0.60)",
                }}
              >
                <span className="flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                Get Started
                      <svg 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4 bg-white/80 backdrop-blur-md border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-base font-medium transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 ${
                  location.pathname === item.path
                    ? "border-gray-900 text-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button
                disabled={isLoading}
                className={`w-full mt-2 px-6 py-2 rounded-full text-base font-semibold border-none shadow-lg backdrop-blur-md transition-all duration-200 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:opacity-90'
                }`}
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
                }}
              >
                <span className="flex items-center gap-2 justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                Get Started
                      <svg 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
