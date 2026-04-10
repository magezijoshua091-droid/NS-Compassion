/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  Home, 
  Users, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  HeartHandshake,
  Pill,
  Utensils,
  Sparkles,
  Car,
  PersonStanding,
  Stethoscope
} from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-24 items-center">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-12 h-12">
            <Heart className="w-10 h-10 text-brand-teal absolute" strokeWidth={2} fill="currentColor" fillOpacity={0.1} />
            <Home className="w-5 h-5 text-brand-gold relative mt-1" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-brand-navy leading-none">NS Compassionate</span>
            <span className="text-[0.65rem] font-sans tracking-widest text-brand-gold uppercase mt-1 font-semibold">Home Care Agency & Staffing LLC</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">About Us</a>
          <a href="#services" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Services</a>
          <a href="#values" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Core Values</a>
          <a href="#contact" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Contact</a>
        </div>
        <div className="hidden md:flex">
          <a href="#contact" className="bg-brand-navy text-white px-6 py-2.5 rounded-sm font-medium hover:bg-brand-teal transition-colors">
            Get Care Today
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative bg-brand-navy text-white">
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop" 
        alt="Caregiver holding hands with senior" 
        className="w-full h-full object-cover opacity-20"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-3xl">
        <h2 className="text-brand-gold font-serif italic text-xl md:text-2xl mb-4">Caring for You Like Family</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
          Compassionate, Reliable, and Professional Home Care
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
          Improving the quality of life for seniors, individuals with disabilities, and those recovering from illness in the comfort of their own homes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="bg-brand-gold text-brand-navy px-8 py-3.5 rounded-sm font-semibold hover:bg-white transition-colors text-center">
            Explore Our Services
          </a>
          <a href="#about" className="border border-white text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-white hover:text-brand-navy transition-colors text-center">
            Our Story
          </a>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">About Us</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Company Overview</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            NS Compassionate Home Care Agency & Staffing LLC is a dedicated home care and staffing agency committed to providing compassionate, reliable, and professional care services to individuals who need assistance in the comfort of their own homes.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Our agency focuses on improving the quality of life for seniors, individuals with disabilities, and those recovering from illness or injury. We strive to provide care that promotes independence, dignity, and safety while supporting families with dependable and well-trained caregivers.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            NS Compassionate Home Care Agency & Staffing LLC was founded from a deeply personal experience. Three years ago, the founder cared for her father after he suffered an accident. During that difficult time, many people were unwilling to help, and she became the only person responsible for his daily care. She managed medication reminders, transportation to medical appointments, bathing, and other essential needs.
          </p>
          <p className="text-gray-600 leading-relaxed border-l-4 border-brand-gold pl-4 italic">
            This experience inspired a strong passion for caregiving and revealed the importance of dependable, compassionate care. That personal journey became the foundation for creating NS Compassionate Home Care Agency & Staffing LLC—to ensure that no family feels alone when caring for a loved one.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-teal/10 transform rotate-3 rounded-lg"></div>
          <img 
            src="https://images.unsplash.com/photo-1581579186913-46eaecb94b11?q=80&w=1000&auto=format&fit=crop" 
            alt="Caregiver assisting senior" 
            className="relative rounded-lg shadow-xl w-full object-cover h-[600px]"
          />
        </div>
      </div>
    </div>
  </section>
);

const MissionVision = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-navy text-white p-10 rounded-lg shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-teal rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          <HeartHandshake className="w-12 h-12 text-brand-gold mb-6" />
          <h3 className="text-2xl font-serif font-bold mb-4">Mission Statement</h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            Our mission is to provide compassionate, high-quality home care services that enhance the well-being, dignity, and independence of every client we serve.
          </p>
        </div>
        <div className="bg-brand-teal text-white p-10 rounded-lg shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-navy rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          <Shield className="w-12 h-12 text-brand-gold mb-6" />
          <h3 className="text-2xl font-serif font-bold mb-4">Vision Statement</h3>
          <p className="text-gray-100 leading-relaxed text-lg">
            Our vision is to become a trusted leader in home care services by delivering reliable, respectful, and personalized care that families can depend on.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const servicesList = [
    { name: "Personal Care Assistance", icon: <Users className="w-6 h-6" /> },
    { name: "Bathing and Grooming", icon: <Heart className="w-6 h-6" /> },
    { name: "Medication Reminders", icon: <Pill className="w-6 h-6" /> },
    { name: "Meal Preparation", icon: <Utensils className="w-6 h-6" /> },
    { name: "Light Housekeeping", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Companionship Services", icon: <HeartHandshake className="w-6 h-6" /> },
    { name: "Transportation Assistance", icon: <Car className="w-6 h-6" /> },
    { name: "Mobility Assistance", icon: <PersonStanding className="w-6 h-6" /> },
    { name: "Respite Care for Families", icon: <Clock className="w-6 h-6" /> },
    { name: "Staffing Support", icon: <Stethoscope className="w-6 h-6" /> },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">What We Do</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of services designed to meet the unique needs of every client, ensuring safety, comfort, and independence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="border border-gray-100 bg-gray-50 p-6 rounded-lg hover:shadow-md hover:border-brand-teal/30 transition-all duration-300 flex items-start gap-4 group">
              <div className="bg-white p-3 rounded-full text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy text-lg mb-1">{service.name}</h4>
                <p className="text-gray-500 text-sm">Professional and compassionate support tailored to your needs.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    { title: "Compassion", desc: "We care for clients with kindness and empathy" },
    { title: "Respect", desc: "We treat every individual with dignity" },
    { title: "Integrity", desc: "We act with honesty and professionalism" },
    { title: "Reliability", desc: "We provide dependable and consistent care" },
    { title: "Excellence", desc: "We strive for the highest quality in everything we do" },
  ];

  return (
    <section id="values" className="py-20 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-2">Our Principles</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Core Values</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              At NS Compassionate Home Care Agency & Staffing LLC, our core values are the foundation of everything we do. They guide our actions and ensure we deliver the highest standard of care.
            </p>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg text-white">{value.title}</h4>
                    <p className="text-gray-400">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Caregiver smiling with client" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeServe = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Who We Serve */}
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-6">Who We Serve</h2>
          <p className="text-gray-600 mb-8">
            We provide specialized care tailored to the unique circumstances of each individual and family.
          </p>
          <ul className="space-y-4">
            {[
              "Seniors needing daily assistance",
              "Individuals with disabilities",
              "Patients recovering from illness or surgery",
              "Families needing temporary or long-term care support"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-brand-teal shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Caregivers & Quality */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-4">Our Caregivers</h2>
            <p className="text-gray-600 leading-relaxed">
              Our caregivers are carefully selected, trained, and committed to delivering compassionate and professional care. We ensure that all staff members meet required qualifications and are dedicated to maintaining client safety, comfort, and dignity.
            </p>
          </div>
          <div className="bg-brand-teal/10 p-6 border-l-4 border-brand-teal rounded-r-lg">
            <h3 className="text-xl font-serif font-bold text-brand-navy mb-3">Commitment to Quality Care</h3>
            <p className="text-gray-700 leading-relaxed">
              At NS Compassionate Home Care Agency & Staffing LLC, we understand that every client has unique needs. We create personalized care plans that focus on safety, comfort, and independence. Our goal is to build trust with families while delivering dependable and compassionate care.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex items-center justify-center w-10 h-10">
              <Heart className="w-8 h-8 text-brand-teal absolute" strokeWidth={2} fill="currentColor" fillOpacity={0.2} />
              <Home className="w-4 h-4 text-brand-gold relative mt-1" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white leading-none">NS Compassionate</span>
              <span className="text-[0.55rem] font-sans tracking-widest text-brand-gold uppercase mt-1">Home Care Agency & Staffing LLC</span>
            </div>
          </div>
          <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
            Providing compassionate, high-quality home care services that enhance the well-being, dignity, and independence of every client we serve.
          </p>
          <p className="text-brand-gold font-serif italic text-lg">Caring for You Like Family</p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> About Us</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Our Services</a></li>
            <li><a href="#values" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Core Values</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 font-serif">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span>info@nscompassionatecare.com</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span>123 Care Avenue, Suite 100<br/>City, State 12345</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NS Compassionate Home Care Agency & Staffing LLC. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen selection:bg-brand-teal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <CoreValues />
        <WhoWeServe />
      </main>
      <Footer />
    </div>
  );
}

