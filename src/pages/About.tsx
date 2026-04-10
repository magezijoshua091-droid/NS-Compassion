import React from 'react';
import { HeartHandshake, Shield } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop" 
            alt="Healthcare background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">About Us</h1>
          <p className="text-xl text-brand-gold font-serif italic">Our Story & Mission</p>
        </div>
      </div>

      {/* Company Overview & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Company Overview</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Dedicated to Your Well-being</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                NS Compassionate Home Care Agency & Staffing LLC is a dedicated home care and staffing agency committed to providing compassionate, reliable, and professional care services to individuals who need assistance in the comfort of their own homes.
              </p>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                Our agency focuses on improving the quality of life for seniors, individuals with disabilities, and those recovering from illness or injury. We strive to provide care that promotes independence, dignity, and safety while supporting families with dependable and well-trained caregivers.
              </p>
              
              <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Our Roots</h3>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                NS Compassionate Home Care Agency & Staffing LLC was founded from a deeply personal experience. Three years ago, the founder cared for her father after he suffered an accident. During that difficult time, many people were unwilling to help, and she became the only person responsible for his daily care.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                She managed medication reminders, transportation to medical appointments, bathing, and other essential needs. It was a challenging period that highlighted the critical need for reliable support systems for families in crisis.
              </p>
              <div className="bg-gray-50 border-l-4 border-brand-gold p-6 rounded-r-lg mt-8">
                <p className="text-gray-800 leading-relaxed italic font-serif text-lg">
                  "This experience inspired a strong passion for caregiving and revealed the importance of dependable, compassionate care. That personal journey became the foundation for creating NS Compassionate Home Care Agency & Staffing LLC—to ensure that no family feels alone when caring for a loved one."
                </p>
              </div>
            </div>
            
            <div className="relative sticky top-32">
              <div className="absolute -inset-4 bg-brand-teal/10 transform rotate-2 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1576765974102-b756026ecee3?q=80&w=1000&auto=format&fit=crop" 
                alt="Caregiver assisting senior" 
                className="relative rounded-lg shadow-xl w-full object-cover h-64 sm:h-96 lg:h-[700px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 text-white p-10 md:p-12 rounded-lg shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-brand-teal rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <HeartHandshake className="w-14 h-14 text-brand-gold mb-8" />
              <h3 className="text-3xl font-serif font-bold mb-6 text-white">Mission Statement</h3>
              <p className="text-gray-300 leading-relaxed text-xl font-light">
                Our mission is to provide compassionate, high-quality home care services that enhance the well-being, dignity, and independence of every client we serve.
              </p>
            </div>
            <div className="bg-brand-teal text-white p-10 md:p-12 rounded-lg shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gray-900 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <Shield className="w-14 h-14 text-brand-gold mb-8" />
              <h3 className="text-3xl font-serif font-bold mb-6 text-white">Vision Statement</h3>
              <p className="text-teal-50 leading-relaxed text-xl font-light">
                Our vision is to become a trusted leader in home care services by delivering reliable, respectful, and personalized care that families can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
