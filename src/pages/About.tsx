import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Lightbulb, Target } from 'lucide-react';
import Tree from '../assets/Tree .png'

const About = () => {
  const milestones = [
    { year: '2004', title: 'Company Founded', description: 'Started with a vision to revolutionize VFX pipeline development' },
    { year: '2008', title: 'First Major Studio Partnership', description: 'Deployed custom tools for leading Hollywood productions' },
    { year: '2012', title: 'Web Development Division', description: 'Expanded into full-stack web application development' },
    { year: '2018', title: 'AI Innovation Lab', description: 'Launched dedicated AI and machine learning development team' },
    { year: '2024', title: '20 Years of Excellence', description: 'Celebrating two decades of technological innovation' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable outcomes that drive business success.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold text-black mb-6">
              About <span className="text-[#CA2833]">Rostram</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over two decades, we've been at the forefront of technological innovation, 
              helping businesses transform their vision into reality through cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2004, Rostram began as a specialized VFX tools and pipeline development company. 
                Our founders recognized the need for more efficient, powerful tools in the visual effects industry 
                and set out to create solutions that would revolutionize how studios approach complex projects.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've expanded our expertise to include web development and AI tool development, 
                always staying ahead of technological trends and industry demands. Today, we serve clients across 
                multiple industries, from entertainment and media to enterprise software and emerging technologies.
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "Our mission is to empower businesses with technology that not only meets today's needs 
                  but anticipates tomorrow's challenges."
                </p>
                <p className="text-gray-500 mt-2 font-medium">- Rostram Leadership Team</p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Technology workspace"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our 20-year history</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-shrink-0 w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-4 md:mb-0 md:mr-8">
                      {milestone.year}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-black mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
              <img src={Tree} alt="Journey Tree" className="max-w-xs w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-red-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
