import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dataAnalystics from '../assets/Data Analytics Services.jpg'
import productRe_eng from '../assets/Product Re-Engineering.jpg'
import mobileApplication from '../assets/Mobile Application Development.jpg'
import CustomAppliaction from '../assets/Custom Application Development.jpg'
import productDevelopment from '../assets/Product Development.jpg'
import testing from '../assets/testing.jpg'

const itServices = [
  {
    key: 'custom-app',
    title: 'Custom Application Development',
    image: CustomAppliaction,
    bullets: [
      'Custom App Design and Development',
      'App Integration',
      'API Development',
      'Enhancements',
    ],
    description: `We design, build, and integrate custom software solutions tailored to your business needs. Our team supports you from requirements to ongoing enhancements, ensuring high quality and cost-effective results.`
  },
  {
    key: 'product-dev',
    title: 'Product Development',
    image: productDevelopment,
    bullets: [
      'Requirement Evocation and Detailing',
      'Digital Lab and Design Thinking',
      'User Feedback Analysis',
      'Architecture Design and Development',
      'Adoption of Competent Tech Stack',
      'Application Development',
      'Maintenance and Support',
      'Enterprise Application Integration',
    ],
    description: `Transform your ideas into market-ready products with our expert team. We guide you from concept to launch, using a structured process for seamless product development.`
  },
  {
    key: 'data-analytics',
    title: 'Data Analytics Services',
    image:dataAnalystics,
    bullets: [
      'Data Warehousing',
      'Data Analytics',
      'Data Visualisation',
      'Business Intelligence',
    ],
    description: `Unlock actionable insights from your data to drive business growth. We help you analyze, visualize, and leverage data for smarter decisions and improved performance.`
  },
  {
    key: 'product-reeng',
    title: 'Product Re-Engineering',
    image: productRe_eng,
    bullets: [
      'Experience Design',
      'Mobility',
      'Quality Testing and Engineering',
    ],
    description: `Revitalize your existing products with the latest technology and features. Our re-engineering services boost performance, efficiency, and user experience.`
  },
  {
    key: 'mobile-app',
    title: 'Mobile Application Development',
    image: mobileApplication,
    bullets: [
      'Custom Mobile Application',
      'Hybrid Mobile Application',
      'Native Mobile Application',
      'Experience Design',
      'QA and Testing Services',
      'Up-gradation & Migration',
    ],
    description: `We create user-focused mobile apps for all platforms, ensuring seamless connectivity and engaging experiences for your customers.`
  },
  {
    key: 'testing',
    title: 'Testing',
    image: testing,
    bullets: [
      'Performance Testing',
      'Mobile Cloud Testing',
      'Quality Testing and Engineering',
      'Test Automation',
    ],
    description: `Ensure your software is reliable and high-quality with our comprehensive testing services. We minimize bugs and deliver a smooth user experience.`
  },
];

const ServiceIT = () => (
  <div className="min-h-screen bg-white">
    <Header />
    {/* Hero Section */}
    <section className="bg-[#F8F9FA] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6">
            Our <span className="text-[#CA2833]">IT Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our IT expertise, from custom application and product development to analytics, re-engineering, mobile, and testing.
          </p>
        </div>
      </div>
    </section>
    {/* Services Detail */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {itServices.map((svc, idx) => (
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

export default ServiceIT; 