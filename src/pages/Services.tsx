import React from 'react';
import { 
  Users, 
  Heart, 
  Pill, 
  Utensils, 
  Sparkles, 
  HeartHandshake, 
  Car, 
  PersonStanding, 
  Clock, 
  Stethoscope,
  CheckCircle2
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    { name: "Personal Care Assistance", desc: "Support with daily living activities including bathing, dressing, grooming, and personal hygiene to maintain dignity and comfort.", icon: <Users className="w-8 h-8" /> },
    { name: "Bathing and Grooming", desc: "Respectful assistance with personal hygiene routines, ensuring safety and cleanliness in the comfort of home.", icon: <Heart className="w-8 h-8" /> },
    { name: "Medication Reminders", desc: "Dependable reminders to ensure medications are taken correctly and on time, promoting better health outcomes.", icon: <Pill className="w-8 h-8" /> },
    { name: "Meal Preparation", desc: "Nutritious and delicious meals prepared according to dietary needs and preferences, ensuring proper nutrition.", icon: <Utensils className="w-8 h-8" /> },
    { name: "Light Housekeeping", desc: "Assistance with maintaining a clean, safe, and organized living environment, including laundry and light cleaning.", icon: <Sparkles className="w-8 h-8" /> },
    { name: "Companionship Services", desc: "Meaningful social interaction, engaging conversation, and participation in hobbies to prevent isolation.", icon: <HeartHandshake className="w-8 h-8" /> },
    { name: "Transportation Assistance", desc: "Safe and reliable transportation to medical appointments, grocery shopping, and social outings.", icon: <Car className="w-8 h-8" /> },
    { name: "Mobility Assistance", desc: "Support with walking, transferring, and navigating the home safely to prevent falls and injuries.", icon: <PersonStanding className="w-8 h-8" /> },
    { name: "Respite Care for Families", desc: "Temporary relief for primary caregivers, allowing them time to rest and recharge while knowing their loved one is safe.", icon: <Clock className="w-8 h-8" /> },
    { name: "Staffing Support", desc: "Professional staffing solutions for healthcare facilities needing reliable, qualified care personnel.", icon: <Stethoscope className="w-8 h-8" /> },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
            alt="Medical professional" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-brand-gold font-serif italic">Comprehensive Care Tailored to You</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">How We Can Help</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At NS Compassionate Home Care Agency & Staffing LLC, we understand that every client has unique needs. We offer a wide range of services designed to promote safety, comfort, and independence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 p-8 rounded-lg hover:shadow-lg hover:border-brand-teal/30 transition-all duration-300 group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-2">Our Clients</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Who We Serve</h2>
              <p className="text-teal-50 mb-8 leading-relaxed text-lg">
                We provide specialized care tailored to the unique circumstances of each individual and family. Our services are designed to support a variety of needs and situations.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Seniors needing daily assistance to age in place safely",
                  "Individuals with disabilities requiring ongoing support",
                  "Patients recovering from illness, injury, or surgery",
                  "Families needing temporary or long-term care support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=1000&auto=format&fit=crop" 
                alt="Caregiver and senior smiling" 
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
