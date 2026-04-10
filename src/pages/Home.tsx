import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Users, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop" 
            alt="Caregiver holding hands with senior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-teal/20 border border-brand-teal/50 px-4 py-1.5 rounded-full mb-6">
              <span className="text-brand-gold font-serif italic text-lg">Caring for You Like Family</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-white">
              Compassionate, Reliable, and Professional Home Care
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Improving the quality of life for seniors, individuals with disabilities, and those recovering from illness in the comfort of their own homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-brand-teal text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-teal-dark transition-colors text-center shadow-lg flex items-center justify-center gap-2">
                Get Care Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Welcome to NS Compassionate</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Dedicated to Enhancing Your Quality of Life</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We are a dedicated home care and staffing agency committed to providing compassionate, reliable, and professional care services to individuals who need assistance in the comfort of their own homes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our agency focuses on promoting independence, dignity, and safety while supporting families with dependable and well-trained caregivers. Whether you need daily assistance, recovery support, or companionship, we are here for you.
              </p>
              <Link to="/about" className="text-brand-teal font-semibold flex items-center gap-2 hover:text-brand-teal-dark transition-colors">
                Read Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581579186913-46eaecb94b11?q=80&w=800&auto=format&fit=crop" alt="Caregiver" className="rounded-lg shadow-md w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" alt="Happy senior" className="rounded-lg shadow-md w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Services */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">How We Help</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Comprehensive Care Services</h2>
            <p className="text-gray-600 text-lg">
              Tailored support designed to meet the unique needs of every individual and family we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Personal Care", desc: "Assistance with daily activities including bathing, grooming, and mobility to ensure comfort and dignity.", icon: <Users className="w-8 h-8 text-brand-teal" /> },
              { title: "Companionship", desc: "Meaningful interaction, emotional support, and engaging activities to prevent loneliness and isolation.", icon: <HeartHandshake className="w-8 h-8 text-brand-teal" /> },
              { title: "Respite Care", desc: "Temporary relief for family caregivers, providing peace of mind knowing your loved one is in safe hands.", icon: <Clock className="w-8 h-8 text-brand-teal" /> }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-brand-gold font-medium flex items-center gap-1 hover:text-brand-teal transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-brand-gold/10 transform -rotate-3 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" 
                alt="Medical professional holding hands" 
                className="relative rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Trust, Reliability, and Personalized Care</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We understand that inviting someone into your home to care for a loved one is a significant decision. We build trust through our unwavering commitment to quality.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Carefully Selected Caregivers", desc: "Every staff member is thoroughly vetted, trained, and shares our passion for compassionate care." },
                  { title: "Personalized Care Plans", desc: "We don't believe in one-size-fits-all. Every client receives a customized plan tailored to their specific needs." },
                  { title: "Commitment to Dignity", desc: "Our core values of respect and integrity ensure that every interaction honors the individual." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Ready to Experience Compassionate Care?</h2>
          <p className="text-xl text-teal-50 mb-10 font-light">
            Contact us today to schedule a consultation and discover how we can support you and your family.
          </p>
          <Link to="/contact" className="inline-block bg-brand-gold text-gray-900 px-10 py-4 rounded-sm font-bold text-lg hover:bg-white transition-colors shadow-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
