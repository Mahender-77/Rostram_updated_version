import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Palette, Code, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const vfxServices = [
  {
    key: 'vfx-production',
    title: 'VFX Production',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    bullets: ['VFX', 'VFX Simulation', 'VFX Production', 'VFX Tools'],
    description: `We elevate brand distinction with awe-inspiring, refined visual design, embodying a design philosophy that exudes elegance. Our expertise lies in crafting cinematic visuals that captivate audiences, communicate emotion, and enhance storytelling. With a blend of cutting-edge technology and artistic precision, we transform concepts into immersive experiences that leave a lasting impression. Whether it\'s through high-end simulations, stylized CGI, or seamless VFX integration, our solutions push the boundaries of creativity and innovation.`
  },
  {
    key: 'vfx-pipeline',
    title: 'VFX Pipeline Development',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    bullets: ['VFX Tool Development', 'VFX Pipeline'],
    description: `We specialize in engineering cutting-edge VFX tools that empower seamless production workflows and enhance creative possibilities. Trusted by leading studios and production houses, our solutions play a pivotal role in shaping the future of VFX pipeline development — driving efficiency, scalability, and innovation from concept to final frame.`
  },
  {
    key: 'cgi-tools',
    title: 'CGI Tools Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    bullets: ['Green Matte removals', 'Wire removals', 'CGI Production'],
    description: `We amplify brand presence through sophisticated, story-driven visual design that resonates with modern audiences. Our design philosophy is intricately aligned with the technical and creative demands of CGI development — ensuring every visual element integrates seamlessly into complex pipelines while maintaining artistic integrity and brand coherence.`
  },
  {
    key: 'game-production',
    title: '3D & GAME Production',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    bullets: ['3D Modeling & Animation', 'Game Modeling & Animation', 'VFX Pre Production', 'VFX Post Production', 'CGI Tools Development'],
    description: `We craft mesmerizing digital experiences across video games, virtual reality, film, and a wide range of digital platforms. Backed by a collaborative team of visionary artists, designers, programmers, and technical experts, we bring ideas to life through striking 3D models, immersive environments, and dynamic animations. Every project is a fusion of creativity and precision, designed to captivate audiences and elevate digital storytelling to new heights.`
  }
];

const itServices = [
  {
    key: 'custom-app',
    title: 'Custom Application Development',
    bullets: [
      'Custom App Design and Development',
      'App Integration',
      'API Development',
      'Enhancements',
    ],
    description: `Custom Software Development is a process of designing, building, integrating software solutions as per the business need to address the pressing needs or to achieve your business objectives. Being a Custom App Development company, rostram can help you from the requirement phase to support & on-going enhancement phases where you can focus on core business while we do the tech work as your partner. rostram will add value to your requirement by being an advisory member for your technology requirement. We leverage the experience of our resources who have worked on varied technologies, in different industries across the globe.\n\nThis strength gives us to be a strong player in delivering work with high quality, on-time and within the stipulated budget. Our technology stack ranges from older to latest technologies like Classic ASP to .NET Core, Java, NodeJS, PHP, Python, Ruby on Rails, HTML5, Angular, React, Vuejs, MySQL, SQL, Oracle DB, AWS, GCP and Azure etc. rostram can create a customized development process for you which fits your need and we also setup an end-to-end activity for DevOps, CD, CT, CI & CD, also does a Security Review of your whole infrastructure & application architecture. As part of Custom Application Development we develop Web, Mobile and Desktop applications along with integration of 3rd party applications.`
  },
  {
    key: 'product-dev',
    title: 'Product Development',
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
    description: `At Rostram, we are empowered by a dynamic team of professionals from diverse business domains — technology, design, strategy, and operations. This unique blend of expertise allows us to transform ideas into successful, market-ready products. Whether it's a startup with a disruptive concept or an enterprise seeking innovation, we walk alongside our clients from the initial spark of an idea all the way to full-scale production.\n\nWe've developed a structured process and a robust framework that enables seamless product development. Our methodology ensures that every stage — from ideation and prototyping to testing and launch — is aligned with our client's vision and market needs.`
  },
  {
    key: 'data-analytics',
    title: 'Data Analytics Services',
    bullets: [
      'Data Warehousing',
      'Data Analytics',
      'Data Visualisation',
      'Business Intelligence',
    ],
    description: `Data Analytics is the science of inspecting, analysing and transforming raw data with the goal of producing actionable information that helps in decision making. Understanding your customers and anticipating their needs through data analytics is essential for businesses aiming to stay competitive. By harnessing predictive data analytics, companies can gain insights into customer behavior, allowing them to forecast trends and identify potential risks, such as fraud, before they become significant issues. This not only enhances security but also improves customer experience by enabling businesses to respond proactively to emerging needs. rostram will add value to your requirement by being an advisory member for your technology requirement.\n\nWe leverage the experience of our resources who have worked on varied technologies, in different industries across the globe. This strength gives us to be a strong player in delivering work with high quality, on-time and within the stipulated budget. Additionally, data analytics plays a crucial role in efficient user segmentation, which is key to optimizing marketing strategies. By analyzing customer data, businesses can create more targeted marketing campaigns that resonate with specific segments, leading to higher engagement and improved conversion rates. Moreover, the insights gained from data analytics help streamline operations, enabling companies to allocate resources more effectively, ultimately driving higher ROI and fostering sustainable growth.`
  },
  {
    key: 'product-reeng',
    title: 'Product Re-Engineering',
    bullets: [
      'Experience Design',
      'Mobility',
      'Quality Testing and Engineering',
    ],
    description: `Revamp your existing technology platform in line with the latest technology trends. Along with utilising the latest technology stack, new features can also be added. Product re-engineering plays a crucial role in maintaining competitiveness within your domain. By optimizing your existing product, you can effectively fight off competition and stay relevant in a fast-paced market. This approach not only ensures that your product remains aligned with the latest technological advancements in the industry but also allows for a more seamless adoption of new features and improvements that can set you apart from competitors.\n\nMoreover, re-engineering leads to remarkable improvements in performance due to code optimization, which enhances the overall user experience and efficiency of your product.\n\nAdditionally, it minimizes risks associated with starting from scratch by leveraging the existing codebase and infrastructure. This strategic approach not only reduces development time and costs but also ensures a more stable and reliable product, helping you maintain a competitive edge in the market.`
  },
  {
    key: 'mobile-app',
    title: 'Mobile Application Development',
    bullets: [
      'Custom Mobile Application',
      'Hybrid Mobile Application',
      'Native Mobile Application',
      'Experience Design',
      'QA and Testing Services',
      'Up-gradation & Migration',
    ],
    description: `It is the process of designing and developing mobile applications that focus on user needs. Adopting mobile first strategy, we create elegant solutions using complex engineering.\n\nIn the rapidly evolving landscape of mobile application development, providing core intelligent interfaces is essential for ensuring seamless connectivity across devices and platforms. These interfaces enable users to interact effortlessly with applications, enhancing their overall experience. By integrating advanced technologies and intuitive designs, developers can create applications that adapt to user needs, offering smooth and uninterrupted connectivity in various environments.\n\nAs mobile applications continue to grow in popularity, their ever-increasing presence offers developers access to a large and diverse customer base. This expanding user base drives innovation and encourages the development of more sophisticated applications. By focusing on creating seamless and intelligent interfaces, developers can tap into this vast market, ensuring that their applications meet the demands of a growing audience and remain competitive in the dynamic mobile app industry.`
  },
  {
    key: 'testing',
    title: 'Testing',
    bullets: [
      'Performance Testing',
      'Mobile Cloud Testing',
      'Quality Testing and Engineering',
      'Test Automation',
    ],
    description: `It is the process of verifying and validating the software with an aim to find bugs, difference in developed requirement as against actual requirement. It helps to maintain the quality of the software.\n\nIn the realm of application development, ensuring high-quality products is paramount. Rigorous testing plays a crucial role in this process, helping to identify and rectify potential issues before they reach the end user. By meticulously testing applications, developers can minimize bugs, ensuring that the final product is not only functional but also reliable. This thorough approach to testing guarantees that the application performs as expected across various scenarios, leading to fewer post-launch issues and a smoother experience for both the developers and the users.\n\nWhen bugs are kept to a minimum, the result is a significantly enhanced user experience. Users are more likely to trust and engage with an application that is stable, intuitive, and responsive. Effective testing goes beyond merely finding and fixing errors; it also contributes to the overall usability of the product. By focusing on both quality and user experience during the testing phase, developers can deliver applications that not only meet but exceed user expectations, fostering satisfaction and loyalty in a competitive market.`
  },
];

const Services = () => {
  const services = [
    { key: 'vfx', label: 'VFX' },
    { key: 'it-services', label: 'IT Services' },
    { key: 'support', label: 'Support' },
  ];

  const location = useLocation();
  const [selected, setSelected] = useState(() => {
    if (location.pathname === '/service-it') return 'it-services';
    if (location.pathname === '/services') return 'vfx';
    return 'vfx';
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (selected === 'it-services') {
      navigate('/service-it');
    }
  }, [selected, navigate]);

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs scalable solutions tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and rigorously test your solution using industry best practices.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
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
              Our <span className="text-[#CA2833]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our core service areas and their specialized offerings.
            </p>
            <div className="mt-8 flex justify-center">
              <select
                value={selected}
                onChange={e => setSelected(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#CA2833]"
                aria-label="Select a service"
              >
                {services.map((s) => (
                  <option key={s.key} value={s.key}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selected === 'vfx' && (
            <div className="grid md:grid-cols-2 gap-12">
              {vfxServices.map((svc, idx) => (
                <div key={svc.key} className="bg-white rounded-xl shadow p-8 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#CA2833] mb-4">{svc.title}</h2>
                    <div className="mb-4">
                      <img src={svc.image} alt={svc.title} className="rounded-lg shadow w-full h-64 object-cover" />
                    </div>
                    <ul className="mb-4 list-disc pl-6 text-[#CA2833] font-semibold space-y-1">
                      {svc.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="text-gray-700 text-base">{svc.description}</p>
                  </div>
                        </div>
                      ))}
                    </div>
          )}
          {selected === 'it-services' && (
            <div className="grid md:grid-cols-2 gap-12">
              {itServices.map((svc, idx) => (
                <div key={svc.key} className="bg-white rounded-xl shadow p-8 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#CA2833] mb-4">{svc.title}</h2>
                    <ul className="mb-4 list-disc pl-6 text-[#CA2833] font-semibold space-y-1">
                      {svc.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="text-gray-700 text-base whitespace-pre-line">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
          )}
          {/* Placeholder for Support */}
          {selected === 'support' && (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400 text-xl">
              Content coming soon for Support
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how our expertise can help you achieve your goals.
          </p>
          <Button asChild size="lg">
            <Link to="/contact" className="inline-flex items-center">
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
