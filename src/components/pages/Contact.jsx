import React, { useRef, useState } from 'react';
import { Mail, Phone, User, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
  const [buttonHover, setButtonHover] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setSending(true);
    emailjs.sendForm(
      'service_vfws8rr',
      'template_z8wwy0w',
      formRef.current,
      '7l18AEEBovnNx3Rnh'
    )
    .then(() => {
      setSent(true);
      setSending(false);
      setFormData({
        fullName: '',
        email: '',
        number: '',
        country: '',
        subject: '',
        message: ''
      });
    }, () => {
      setError('Failed to send. Please try again.');
      setSending(false);
    });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-stretch">
          {/* Contact Info Cards */}
          <motion.div
            className="flex flex-col h-full space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {/* Email Card */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-neumorphic h-full flex flex-col justify-between group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 shadow-neumorphic-inset">
                  <Mail className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-red-500 group-hover:scale-125 group-hover:rotate-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us Anytime</h4>
                <div className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-2">24/7 Support</div>
                <p className="text-gray-600 mb-2 text-sm">
                  Our team replies within 24 hours. For project inquiries, partnerships, or support, drop us a message!
                </p>
                <ul className="list-disc list-inside text-gray-500 text-xs mb-4">
                  <li>Project Inquiries</li>
                  <li>Partnership Opportunities</li>
                  <li>Customer Support</li>
                </ul>
              </div>
              <a 
                href="mailto:innovimagine@gmail.com" 
                className="text-black font-medium hover:underline"
              >
                innovimagine@gmail.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-neumorphic h-full flex flex-col justify-between group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 shadow-neumorphic-inset">
                  <Phone className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-green-500 group-hover:scale-125 group-hover:rotate-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us Directly</h4>
                <div className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-2">Available 9am–7pm IST</div>
                <p className="text-gray-600 mb-2 text-sm">
                  Call us for instant support, demo scheduling, or a quick consultation. We're happy to help!
                </p>
                <ul className="list-disc list-inside text-gray-500 text-xs mb-4">
                  <li>Urgent Queries</li>
                  <li>Demo Scheduling</li>
                  <li>Consultation</li>
                </ul>
              </div>
              <a
                href="tel:+919000278794"
                className="text-black font-medium hover:underline text-left"
              >
                Book a call
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form with neumorphic design and full height */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-neumorphic h-full flex flex-col justify-center"
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
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
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
              {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;