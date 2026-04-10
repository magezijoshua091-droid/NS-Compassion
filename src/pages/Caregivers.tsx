import React from 'react';
import { CheckCircle2, Shield, Heart, Award, Star, Users } from 'lucide-react';

const Caregivers = () => {
  const values = [
    { title: "Compassion", desc: "We care for clients with kindness and empathy, treating them as we would our own family.", icon: <Heart className="w-6 h-6" /> },
    { title: "Respect", desc: "We treat every individual with dignity, honoring their life experiences and personal preferences.", icon: <Users className="w-6 h-6" /> },
    { title: "Integrity", desc: "We act with honesty and professionalism in all our interactions and business practices.", icon: <Shield className="w-6 h-6" /> },
    { title: "Reliability", desc: "We provide dependable and consistent care that families can count on day in and day out.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Excellence", desc: "We strive for the highest quality in everything we do, continuously improving our services.", icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop" 
            alt="Caregivers" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Our Caregivers</h1>
          <p className="text-xl text-brand-gold font-serif italic">The Heart of Our Agency</p>
        </div>
      </div>

      {/* Our Caregivers Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-brand-gold/10 transform -rotate-2 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional caregiver" 
                className="relative rounded-lg shadow-xl w-full object-cover h-[600px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Our Team</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Carefully Selected Professionals</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our caregivers are the backbone of NS Compassionate Home Care Agency & Staffing LLC. They are carefully selected, extensively trained, and deeply committed to delivering compassionate and professional care.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We ensure that all staff members meet stringent required qualifications and are dedicated to maintaining client safety, comfort, and dignity at all times.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-brand-teal mb-4 flex items-center gap-3">
                  <Award className="w-8 h-8 text-brand-gold" />
                  Commitment to Quality Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that every client has unique needs. We create personalized care plans that focus on safety, comfort, and independence. Our ultimate goal is to build lasting trust with families while delivering dependable and compassionate care that you can rely on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Our Guiding Principles</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              These values define who we are, how we operate, and the standard of care we bring to every home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-brand-gold transition-colors">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caregivers;
