import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-brand-gold font-serif italic">We're Here to Help</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Get in Touch</h3>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Please fill out the form below, and a member of our care team will get back to you as soon as possible to discuss your needs.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors" placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select id="service" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option value="personal-care">Personal Care Assistance</option>
                    <option value="companionship">Companionship Services</option>
                    <option value="respite">Respite Care</option>
                    <option value="staffing">Staffing Support</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors resize-none" placeholder="Please provide any details about the care needed..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-brand-teal text-white px-6 py-4 rounded-sm font-bold text-lg hover:bg-brand-teal-dark transition-colors flex items-center justify-center gap-2 shadow-md">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-100 h-full">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-sm shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-sm shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@nscompassionatecare.com</p>
                      <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-sm shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Office Location</h4>
                      <p className="text-gray-600">123 Care Avenue, Suite 100<br/>City, State 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-sm shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                      <p className="text-sm text-brand-teal font-medium mt-1">Care services provided 24/7</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="mt-10 bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center border border-gray-300">
                  <p className="text-gray-500 font-medium flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> Interactive Map Area
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
