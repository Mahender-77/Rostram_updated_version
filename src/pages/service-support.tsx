import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dataInsights from '../assets/Data Insights.jpg'
import devOps from '../assets/devOps.jpg'
import qualityAssurance from '../assets/Quality Assurance.jpg'

const supportServices = [
  {
    key: 'app-support',
    title: 'App Support & Maintenance',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: `The business growth will happen if you continuously deliver the best to your customers with their ever changing consumption or purchase behavior. It is an integrated activity of any growing business to work with partners for the regular activity so that they can focus on the major purpose of their business.\n\nTo stay agile, humble and cost effective in this competitive world, businesses has to innovate on new business products and deploy latest technologies to support them while controlling IT costs. rostram's end-to-end expertise in handling the entire application life cycle empowers us to support any application in any stage of it from our offshore center.`,
    help: [
      'Run the business demands without interrupting operations',
      'Lower the total cost of ownership to maintain the IT Eco System',
      'Focus resources on growing the business while supporting the enterprise',
      'Maintain visibility and control over the applications',
    ]
  },
  
  {
    key: 'data-insights',
    title: 'Data Insights',
    image:dataInsights,
    description: `Data drives the businesses to the direction of growth if it is utilized properly. There are a lot of hidden insights in the huge data and detecting the opportunities from that is a tedious job. The technology has advanced in all the aspects of business and the latest advancements in Data management helps companies in innovation to reinvent themselves to stay ahead in the market.\n\nEvery business needs a digital presence to capture the space in consumer mind. With the deep penetration of internet, smart phones, increase in connected devices in all the markets, digital space is becoming more competitive and becoming difficult for companies to maintain their status quo.\n\nRostram IT Labs provides end-to-end Data Insights services that drives better business outcomes to take informed and faster decisions.`,
    help: [
      'Leverage cutting-edge data analytics solutions',
      'Derive near real-time actionable insights',
      'Discover innovative solutions to business problems',
      'Drive informed decision making',
    ]
  },
  {
    key: 'devops',
    title: 'DevOps',
    image: devOps,
    description: `The agile process in software industry has brought tremendous changes in different ways and the results are good for all the stakeholders. Fast-paced development and time-to-market along with quality are driving businesses towards the success in this competitive world.\n\nBeing agile helps organizations to implement DevOps approach for software delivery. Rostram IT Labs help you to achieve greater agility and shorter delivery cycles.\n\nRostram automates your end-to-end software delivery pipeline and stay competitive by driving digital transformation and agility with our Cloud and DevOps expertise.`,
    help: [
      'Continuous Development',
      'Continuous Integration',
      'Continuous Testing',
      'Release Management',
      'Continuous Deployment',
    ]
  },
  {
    key: 'quality-assurance',
    title: 'Quality Assurance',
    image: qualityAssurance,
    description: `Quality assurance is a systematic process that ensures products and services meet specified requirements and standards. It involves planning, monitoring, and evaluating processes to prevent defects and ensure consistent quality. By implementing QA practices, organizations can enhance customer satisfaction, reduce costs associated with rework, and maintain compliance with industry regulations.`,
    help: [
      'Lean and agile partner to scale your product',
      'On-time releases',
      'High-quality software',
      'Optimized testing costs',
    ],
    extra: {
      headline: 'The scope of software testing we execute covers the most of your needs:',
      columns: [
        {
          title: 'Business Need',
          items: ['Functional', 'Usability', 'Security', 'Performance', 'Configuration', 'Localization']
        },
        {
          title: 'Technical Need',
          items: ['Manual', 'Automated UI Testing', 'Automated API Testing']
        },
        {
          title: 'Application Type',
          items: ['Web App', 'Cloud Apps', 'Security', 'Mobile Apps', 'Desktop Apps']
        },
        {
          title: 'Stage of App lifecycle',
          items: ['New feature testing', 'Regression testing', 'Release testing', 'Integration testing']
        }
      ]
    }
  },
];

const ServiceSupport = () => (
  <div className="min-h-screen bg-white">
    <Header />
    {/* Hero Section */}
    <section className="bg-[#F8F9FA] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6">
            Our <span className="text-[#CA2833]">Support Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our support offerings for application maintenance, QA, data insights, and DevOps.
          </p>
        </div>
      </div>
    </section>
    {/* Services Detail */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {supportServices.map((svc, idx) => (
            <div
              key={svc.key}
              className={`bg-white rounded-xl shadow p-4 sm:p-8 md:p-12 flex flex-col gap-6 md:gap-8`}
            >
              {['app-support', 'devops', 'data-insights', 'quality-assurance'].includes(svc.key) ? (
                <>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center h-full">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#CA2833] mb-4 leading-tight">{svc.title}</h2>
                      <p className="text-gray-700 text-base md:text-lg whitespace-pre-line leading-relaxed">{svc.description}</p>
                    </div>
                    <div className="flex-1 w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                      <img src={svc.image} alt={svc.title} className="rounded-lg shadow w-full max-w-[420px] h-56 sm:h-72 md:h-80 object-cover object-center" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#CA2833] mb-4">Rostram's services will help you:</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {svc.help.map((h, i) => (
                        <div key={i} className="bg-[#FDE8EA] text-[#CA2833] rounded-lg px-6 py-4 text-base font-semibold text-center">
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                  {svc.extra && (
                    <div className="mt-8">
                      <h4 className="text-lg font-bold text-gray-700 mb-4">{svc.extra.headline}</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {svc.extra.columns.map((col, idx) => (
                          <div key={idx} className="bg-[#FDE8EA] rounded-lg p-4">
                            <div className="text-lg font-bold text-[#CA2833] mb-2">{col.title}</div>
                            <ul className="text-gray-700 text-base space-y-1">
                              {col.items.map((item, i) => (
                                <li key={i} className="flex items-center"><span className="mr-2">↗</span>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center h-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#CA2833] mb-4 leading-tight">{svc.title}</h2>
                    <p className="text-gray-700 text-base md:text-lg whitespace-pre-line mb-6 leading-relaxed">{svc.description}</p>
                    <div>
                      <h3 className="text-xl font-bold text-[#CA2833] mb-4">Rostram's services will help you:</h3>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        {svc.help.map((h, i) => (
                          <div key={i} className="bg-[#FDE8EA] text-[#CA2833] rounded-lg px-6 py-4 text-base font-semibold text-center">
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                    {svc.extra && (
                      <div className="mt-8">
                        <h4 className="text-lg font-bold text-gray-700 mb-4">{svc.extra.headline}</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                          {svc.extra.columns.map((col, idx) => (
                            <div key={idx} className="bg-[#FDE8EA] rounded-lg p-4">
                              <div className="text-lg font-bold text-[#CA2833] mb-2">{col.title}</div>
                              <ul className="text-gray-700 text-base space-y-1">
                                {col.items.map((item, i) => (
                                  <li key={i} className="flex items-center"><span className="mr-2">↗</span>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                    <img src={svc.image} alt={svc.title} className="rounded-lg shadow w-full max-w-[420px] h-56 sm:h-72 md:h-80 object-cover object-center" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ServiceSupport; 