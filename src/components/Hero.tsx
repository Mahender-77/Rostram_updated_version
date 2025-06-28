import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Cpu, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, Award } from 'lucide-react';

const heroCards = [
  {
    id: 1,
    title: "VFX Tools",
    description: "Industry-leading visual effects solutions",
    icon: Sparkles,
    color: "#ff0000",
    gradient: "from-red-500 to-pink-600"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern, scalable web applications",
    icon: Code,
    color: "#2563eb",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Intelligent automation and analytics",
    icon: Brain,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: 4,
    title: "20+ Years",
    subtitle: "of Excellence",
    description: "Delivering innovative solutions since 2003",
    icon: Award,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    isHighlight: true
  }
];

const getCardPosition = (index, activeIndex, total) => {
  const diff = index - activeIndex;
  const normalizedDiff = ((diff % total) + total) % total;
  if (normalizedDiff === 0) return 'active';
  if (normalizedDiff === 1) return 'right';
  if (normalizedDiff === total - 1) return 'left';
  return 'hidden';
};

const SQUARE_SIZE = 48; // px

// Utility: Seeded random for consistent gaps
function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % heroCards.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position relative to Hero section
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Update grid dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (heroRef.current) {
        setDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const rows = Math.ceil(dimensions.height / SQUARE_SIZE);
  const cols = Math.ceil(dimensions.width / SQUARE_SIZE);

  return (
    <section
      ref={heroRef}
      className=" flex items-center relative overflow-hidden bg-[#F8F9FA]"
      style={{}}
      onMouseMove={handleMouseMove}
    >
      {/* Removed Interactive Squares Grid - Responsive, with broken wall effect */}
      <div className="max-w-10xl mx-auto px-10 sm:px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 h-[600px] gap-16 items-center  ">
          {/* Content */}
          <div className="flex flex-col justify-center h-full max-w-3xl mx-auto lg:mx-0 text-left px-2">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-10" style={{ fontFamily: 'Exo 2, sans-serif', lineHeight: 1.1 }}>
              Pioneering <span className="text-[#CA2833] font-black">Technology</span> Since 2004
            </h1>
            <p className="text-xl lg:text-xl text-gray-600 mb-12 leading-relaxed " style={{ fontFamily: 'Exo 2, sans-serif' }}>
              With over 20 years of experience, Rostram delivers cutting-edge solutions in VFX tools, pipeline development, web development, and AI innovation. We transform ideas into powerful technological realities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-2">
              <Button asChild size="lg" className="relative overflow-hidden bg-[#CB2733] text-white font-bold shadow-lg border-0 hover:from-black hover:to-red-600 transition-all px-8 py-4 text-xl">
                <Link to="/service-vfx" className="inline-flex items-center">
                  <span className="text-white">Explore Our Services</span>
                  <ArrowRight className="ml-3" size={28} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4 text-xl">
                <Link to="/about">
                  Learn Our Story
                </Link>
              </Button>
            </div>
          </div>

          {/* 3D Card Carousel */}
          <div className="relative h-96 flex items-center justify-center perspective-1000">
            {heroCards.map((card, index) => {
              const position = getCardPosition(index, activeCard, heroCards.length);
              const Icon = card.icon;
              return (
                <Card
                  key={card.id}
                  className={`
                    absolute transition-all duration-700 ease-in-out cursor-pointer
                    ${position === 'active' 
                      ? 'z-30 scale-110 opacity-100 translate-x-0' 
                      : position === 'right'
                      ? 'z-20 scale-100 opacity-70 translate-x-32'
                      : position === 'left'
                      ? 'z-20 scale-95 opacity-70 -translate-x-32'
                      : 'z-10 scale-80 opacity-30 translate-x-64'
                    }
                    hover:scale-110 transform-gpu backdrop-blur-sm
                    ${card.isHighlight ? 'bg-gradient-to-br from-white/95 to-white/90' : 'bg-white/95'}
                    border-0 shadow-3xl hover:shadow-3xl
                   w-[20rem] md:w-[30rem] h-[16rem] md:h-[22rem]
                  `}
                  onClick={() => setActiveCard(index)}
                  style={{
                    boxShadow: position === 'active' 
                      ? `0 25px 50px -12px ${card.color}40, 0 0 0 1px ${card.color}20`
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div 
                      className={`
                        p-6 rounded-full mb-6 transition-all duration-500
                        ${card.isHighlight ? 'bg-gradient-to-br' : 'bg-gradient-to-br'}
                      `}
                      style={{
                        background: card.isHighlight 
                          ? `linear-gradient(135deg, ${card.color}, ${card.color}dd)`
                          : `linear-gradient(135deg, ${card.color}20, ${card.color}40)`
                      }}
                    >
                      <Icon 
                        size={card.isHighlight ? 48 : 40} 
                        className={card.isHighlight ? "text-white" : "text-gray-700"}
                      />
                    </div>
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-2 card-title-shine"
                      style={{
                        background: `linear-gradient(90deg, ${card.color}, #fff 60%, ${card.color})`,
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        animation: 'shine-move 3s linear infinite'
                      }}
                    >
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
                        {card.subtitle}
                      </h4>
                    )}
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Auto-rotation indicator */}
         
        </div>
      </div>
      {/* Keyframes for floating animation */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
        @keyframes float-medium { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
        @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(-50px); } 100% { transform: translateY(0); } }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3.5s ease-in-out infinite; }
        .shine-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          position: relative;
        }
        .shine-effect {
          pointer-events: none;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%);
          mix-blend-mode: lighten;
          animation: shine-move 2.5s linear infinite;
        }
        @keyframes shine-move {
          0% { left: -100%; width: 0; }
          50% { left: 100%; width: 100%; }
          100% { left: 200%; width: 0; }
        }
        
        .card-title-shine {
          position: relative;
          transition: all 0.3s ease;
        }
        
        @keyframes shine-move {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
