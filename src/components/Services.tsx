import React from 'react';
import { Palette, Code, Cpu, Cog, Users, Award } from 'lucide-react';
import Marquee from './ui/Marquee';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'VFX Tools & Pipeline Development',
      description: 'Custom visual effects tools and streamlined pipeline solutions for film, television, and digital media production.',
      features: ['Custom VFX Software', 'Pipeline Optimization', 'Workflow Automation', 'Industry Integration']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'API Development', 'Cloud Deployment']
    },
    {
      icon: Cpu,
      title: 'AI Solutions',
      description: 'Intelligent solutions leveraging machine learning and artificial intelligence to solve complex problems.',
      features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Delivered' },
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Cog, value: '50+', label: 'Custom Tools Built' }
  ];

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our <span className="text-[#CA2833]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two decades of innovation across visual effects, web development, and artificial intelligence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card-hover p-8 rounded-xl shadow-lg border flex flex-col h-full relative overflow-hidden 
                ${service.title === 'AI Solutions' ? 'bg-violet-50 border-violet-300 ring-2 ring-violet-200' : 'bg-white border-gray-100'}
              `}
            >
              <div className="relative z-10 silver-content">
                <service.icon 
                  className={`w-16 h-16 mb-6 ${service.title === 'AI Solutions' ? 'text-violet-700' : 'text-red-600'}`} 
                  strokeWidth={1.5} 
                />
                {service.title === 'AI Solutions' && (
                  <span className="absolute top-4 right-4 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">AI</span>
                )}
                <h3 className={`text-xl font-semibold mb-4 ${service.title === 'AI Solutions' ? 'text-violet-800' : 'text-black'}`}>{service.title}</h3>
                <p className={`mb-6 leading-relaxed flex-grow ${service.title === 'AI Solutions' ? 'text-violet-900 font-semibold' : 'text-gray-600'}`}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${service.title === 'AI Solutions' ? 'text-violet-800 font-semibold' : 'text-gray-700'}`}>
                      <div className={`w-2 h-2 rounded-full mr-3 ${service.title === 'AI Solutions' ? 'bg-violet-600' : 'bg-red-500'}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
    
        {/* Stats */}
        <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-red-600" />
                </div>
                <div className="text-3xl font-bold mb-2 text-">{stat.value}</div>
                <div className="text-red/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marquee/>
  
    </section>
  );
};

export default Services;
