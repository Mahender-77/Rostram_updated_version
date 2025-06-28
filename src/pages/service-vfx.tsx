import React from 'react';
import vfxProductionImg from '../assets/VFX-Production.jpg';
import vfxPipeline from '../assets/VFX Pipeline Developmen.jpg'
import cgiTools from '../assets/CGI tool.jpg'
import gameProduction from '../assets/3D & game.jpg' 
import Header from '../components/Header';
import Footer from '../components/Footer';

const vfxServices = [
  {
    key: 'vfx-production',
    title: 'VFX Production',
    image: vfxProductionImg,
    bullets: ['VFX', 'VFX Simulation', 'VFX Production', 'VFX Tools'],
    description: `We elevate brand distinction with awe-inspiring, refined visual design, embodying a design philosophy that exudes elegance. Our expertise lies in crafting cinematic visuals that captivate audiences, communicate emotion, and enhance storytelling. With a blend of cutting-edge technology and artistic precision, we transform concepts into immersive experiences that leave a lasting impression. Whether it\'s through high-end simulations, stylized CGI, or seamless VFX integration, our solutions push the boundaries of creativity and innovation.`
  },
  {
    key: 'vfx-pipeline',
    title: 'VFX Pipeline Development',
    image: vfxPipeline,
    bullets: ['VFX Tool Development', 'VFX Pipeline'],
    description: `We specialize in engineering cutting-edge VFX tools that empower seamless production workflows and enhance creative possibilities. Trusted by leading studios and production houses, our solutions play a pivotal role in shaping the future of VFX pipeline development — driving efficiency, scalability, and innovation from concept to final frame.`
  },
  {
    key: 'cgi-tools',
    title: 'CGI Tools Development',
    image: cgiTools,
    bullets: ['Green Matte removals', 'Wire removals', 'CGI Production'],
    description: `We amplify brand presence through sophisticated, story-driven visual design that resonates with modern audiences. Our design philosophy is intricately aligned with the technical and creative demands of CGI development — ensuring every visual element integrates seamlessly into complex pipelines while maintaining artistic integrity and brand coherence.`
  },
  {
    key: 'game-production',
    title: '3D & GAME Production',
    image: gameProduction,
    bullets: ['3D Modeling & Animation', 'Game Modeling & Animation', 'VFX Pre Production', 'VFX Post Production', 'CGI Tools Development'],
    description: `We craft mesmerizing digital experiences across video games, virtual reality, film, and a wide range of digital platforms. Backed by a collaborative team of visionary artists, designers, programmers, and technical experts, we bring ideas to life through striking 3D models, immersive environments, and dynamic animations. Every project is a fusion of creativity and precision, designed to captivate audiences and elevate digital storytelling to new heights.`
  }
];

const ServiceVFX = () => (
  <div className="min-h-screen bg-white">
    <Header />
    {/* Hero Section */}
    <section className="bg-[#F8F9FA] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6">
            Our <span className="text-[#CA2833]">VFX Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our VFX expertise, from production and pipeline development to CGI tools and 3D & game production.
          </p>
        </div>
      </div>
    </section>
    {/* Services Detail */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {vfxServices.map((svc, idx) => (
            <div
              key={svc.key}
              className={`bg-white rounded-xl shadow p-4 sm:p-6 md:p-8 flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
            >
              <div className="flex-1 w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#CA2833] mb-4">{svc.title}</h2>
                <ul className="mb-4 list-disc pl-6 text-[#CA2833] font-semibold space-y-1">
                  {svc.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <p className="text-gray-700 text-base sm:text-lg">{svc.description}</p>
              </div>
              <div className="flex-1 w-full md:w-1/2 mb-6 md:mb-0">
                <img src={svc.image} alt={svc.title} className="rounded-lg shadow w-full h-64 sm:h-80 md:h-96 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ServiceVFX; 