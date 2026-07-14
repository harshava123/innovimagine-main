import React, { useRef, useState } from 'react';
import { Mail, Phone, User, Rocket, MapPin, Clock, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    country: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const formRef = useRef();

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) || !formData.email.includes('.com')) {
      errors.email = 'Enter a valid email address.';
    }
    if (!formData.number.trim()) {
      errors.number = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.number)) {
      errors.number = 'Enter a valid 10-digit phone number.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject of interest is required.';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFieldErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset all states before submission
    setError(null);
    setSent(false);
    setSending(false);
    
    // Validate form
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setSending(true);
    
    try {
      // Use localhost:3001 for local dev, or relative path for Vercel production
      const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const endpoint = import.meta.env.VITE_API_URL || (isLocalDev ? 'http://localhost:3001/api/contact' : '/api/contact');
      
      console.log('Sending request to:', endpoint);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status, response.statusText);

      // Handle non-OK responses (like 404, 500, etc.)
      if (!response.ok) {
        let errorMessage = `Server error: ${response.status} ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.error || errorData.message || errorMessage;
            console.error('API Error Data:', errorData);
          } else {
            const errorText = await response.text();
            console.error('API Error Response (non-JSON):', errorText);
            if (response.status === 404) {
              errorMessage = 'API endpoint not found. Please check server configuration.';
            }
          }
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
          if (response.status === 404) {
            errorMessage = 'API endpoint not found. The server may not be configured correctly.';
          }
        }
        
        setSending(false);
        setError(errorMessage);
        return; // Exit early on error
      }

      // Parse JSON response for successful requests
      let data;
      try {
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned non-JSON response');
        }
        data = await response.json();
        console.log('Response data:', data);
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        setSending(false);
        setError('Invalid response from server. Please try again.');
        return; // Exit early on parse error
      }

      // Only show success if we have valid data with success: true
      if (data && data.success === true) {
        setSent(true);
        setSending(false);
        setError(null); // Clear any previous errors
        setFormData({
          fullName: '',
          email: '',
          number: '',
          country: '',
          subject: '',
          message: ''
        });
        console.log('✅ Email sent successfully:', data.messageId);
      } else {
        // Server returned success: false or no success field
        const errorMsg = data?.error || data?.message || 'Failed to send email. Please try again.';
        setSending(false);
        setError(errorMsg);
        console.error('❌ Email send failed:', data);
      }
    } catch (err) {
      // Network errors, fetch failures, etc.
      console.error('Contact form error:', err);
      setSending(false);
      setSent(false); // Ensure success is false on error
      
      // Provide helpful error messages
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
        if (isProduction) {
          setError('Unable to connect to server. Please contact us directly at grahmindinnovations@gmail.com or call +919000278794');
        } else {
          setError('Network error. Please check if the server is running on port 3001 and try again.');
        }
      } else {
        setError(err.message || 'An unexpected error occurred. Please try again.');
      }
    }
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const branches = [
    {
      name: 'Berlin',
      country: 'Germany',
      image: '/images/berlin-map.png',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Berlin,Germany',
    },
    {
      name: 'Hyderabad',
      country: 'India',
      image: '/images/hyderabad-map.png',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hyderabad,India',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/grahmind/',
      handle: 'Grahmind',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/accounts/login/?next=%grahmind%2F&source=omni_redirect',
      handle: '@grahmind',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61572732074218',
      handle: 'Grahmind',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with neumorphic design */}
        <motion.div
          className="flex flex-col items-center mt-12 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#f5f6fa', boxShadow: '4px 4px 12px #e0e0e0, -4px -4px 12px #ffffff' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
          >
            <User className="w-5 h-5 text-gray-500 mr-2 transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-125 hover:rotate-6 cursor-pointer" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">CONTACT</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-sans text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Reach Us At Anytime
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Have questions or need any help? We're here to help you with that
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-start">
          {/* Contact Info Cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {/* Email + Contact Us - compact, no stretch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-neumorphic flex flex-col gap-3 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl shadow-neumorphic-inset">
                  <Mail className="w-5 h-5 text-gray-600 transition-all duration-300 group-hover:text-red-500 group-hover:scale-110" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">Email Us</h4>
                <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full w-fit">24/7</div>
                <p className="text-gray-600 text-xs">
                  Drop us a message for inquiries, partnerships, or support.
                </p>
                <a
                  href="mailto:grahmindinnovations@gmail.com"
                  className="text-black text-xs font-medium hover:underline break-all"
                >
                  grahmindinnovations@gmail.com
                </a>
              </motion.div>

              {/* Contact Us Card */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-neumorphic flex flex-col gap-3 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl shadow-neumorphic-inset">
                  <Phone className="w-5 h-5 text-gray-600 transition-all duration-300 group-hover:text-green-500 group-hover:scale-110" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">Contact Us</h4>
                <div className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full w-fit">9am–7pm IST</div>
                <p className="text-gray-600 text-xs">
                  Call us for support, demo scheduling, or consultations.
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919000278794"
                    className="text-black text-xs font-medium hover:underline"
                  >
                    +91 9000278794
                  </a>
                  <a
                    href="tel:+4915511049565"
                    className="text-black text-xs font-medium hover:underline"
                  >
                    +49 15511049565
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Branch map cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branches.map((branch) => (
                <motion.a
                  key={branch.name}
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-2xl p-3 sm:p-4 shadow-neumorphic flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3">
                    <img
                      src={branch.image}
                      alt={`${branch.name}, ${branch.country} map`}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">{branch.name}</h4>
                      <p className="text-xs text-gray-500">{branch.country}</p>
                    </div>
                  </div>
                  <span className="text-xs text-purple-600 font-medium mt-2 flex-shrink-0 group-hover:underline">
                    View on map →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Business Hours + Connect With Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Business Hours */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-neumorphic flex flex-col gap-3 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl shadow-neumorphic-inset">
                  <Clock className="w-5 h-5 text-gray-600 transition-all duration-300 group-hover:text-amber-500 group-hover:scale-110" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">Business Hours</h4>
                <div className="inline-block bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full w-fit">Mon – Fri</div>
                <p className="text-gray-600 text-xs">
                  Our teams are available across Berlin and Hyderabad time zones.
                </p>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Berlin (CET)</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Hyderabad (IST)</span>
                    <span>9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </motion.div>

              {/* Connect With Us */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-neumorphic flex flex-col gap-3 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl shadow-neumorphic-inset">
                  <Linkedin className="w-5 h-5 text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">Connect With Us</h4>
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full w-fit">Social Media</div>
                <p className="text-gray-600 text-xs">
                  Follow us for updates, insights, and behind-the-scenes from our team.
                </p>
                <div className="flex flex-col gap-1.5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black text-xs font-medium hover:underline flex justify-between"
                    >
                      <span>{link.name}</span>
                      <span className="text-gray-500">{link.handle}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form with neumorphic design and full height */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-neumorphic h-full flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <form ref={formRef} className="space-y-6 flex flex-col h-full justify-between" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border ${fieldErrors.fullName ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset`}
                  required
                />
                {fieldErrors.fullName && <p className="text-red-500 text-xs mt-1">{fieldErrors.fullName}</p>}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className={`w-full px-4 py-3 border ${fieldErrors.email ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset`}
                  required
                />
                {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 border ${fieldErrors.number ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset`}
                  required
                  maxLength={10}
                  pattern="\d{10}"
                />
                {fieldErrors.number && <p className="text-red-500 text-xs mt-1">{fieldErrors.number}</p>}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Subject Of Interest <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Regarding Project"
                  className={`w-full px-4 py-3 border ${fieldErrors.subject ? 'border-red-400' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-100 shadow-neumorphic-inset`}
                  required
                />
                {fieldErrors.subject && <p className="text-red-500 text-xs mt-1">{fieldErrors.subject}</p>}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  How may we assist you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Give us more info.."
                  className="w-full max-w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-y bg-gray-100 shadow-neumorphic-inset"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className={`relative w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-neumorphic-hover ${
                  sending 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                }`}
                whileHover={!sending ? { scale: 1.02, y: -2 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
              >
                {sending ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Rocket className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span>Send Message</span>
                </div>
                )}
              </motion.button>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-700 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-700 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;