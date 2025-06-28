import React, { useRef, useState } from "react";

// Import all client images statically
// import Asset1 from '../../assets/client-img/Asset-1@600x-e1703862260186.webp';
// import huesfx from '../../assets/client-img/huesfx.jpg';
import RmGif from '../../assets/client-img/Rm-gif.gif';
// import riddlemonkstudios_logo from '../../assets/client-img/riddlemonkstudios_logo.jpeg';
// import Cosmos_Maya_Logo from '../../assets/client-img/Cosmos_Maya_Logo.png';
// import halohuesstudioslogo from '../../assets/client-img/halohuesstudioslogo.jpeg';
import riddlemonkstudiologo from '../../assets/client-img/riddlemonkstudiologo.png';
// import studio51 from '../../assets/client-img/studio51.png';
// import discreeartslogo from '../../assets/client-img/discreeartslogo.png';
// import gvfxlogo from '../../assets/client-img/gvfxlogo.png';
// import rmlogo from '../../assets/client-img/rmlogo.png';
// Nested clients folder
import HuesLogoAnimation from '../../assets/client-img/clients/Hues-logo-animation.gif';
import logoHues1 from '../../assets/client-img/clients/logo-hues-1.svg';
// import logoStudio51 from '../../assets/client-img/clients/logo-studio-51-blanc-1024x392.png';
import logoWebp from '../../assets/client-img/clients/logo.webp';
import Asset1Client from '../../assets/client-img/clients/Asset-1@600x-e1703862260186.webp';
import gvfxJpg from '../../assets/client-img/clients/gvfx.jpg';
import mainLogoWhite from '../../assets/client-img/clients/main-logo-white.png';
import cosmosMayaLogoWebp from '../../assets/client-img/clients/cosmos-maya-logo.png.webp';
import riddlemonkstudiologoCopy from '../../assets/client-img/clients/riddlemonkstudiologo - Copy.png';

const images = [
  
  HuesLogoAnimation, logoHues1, logoWebp, Asset1Client, gvfxJpg, mainLogoWhite, cosmosMayaLogoWebp, RmGif
];

const Marquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate images for seamless looping
  const marqueeImages = [...images, ...images, ...images];

  return (
    <div className="w-full bg-gray-50 py-12">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-700 via-red-500 to-red-700 bg-clip-text text-transparent"
        style={{ fontFamily: 'Gilroy, sans-serif' }}
      >
        Our Partners
      </h2>
      <div
        className="overflow-hidden w-full relative mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={marqueeRef}
          className="flex items-center gap-20 animate-marquee"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: '30s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {marqueeImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Client ${idx}`}
              className="mx-2 rounded-lg object-contain cursor-pointer"
              style={{
                width: '120px',
                height: '80px',
                minWidth: '170px',
                minHeight: '90px',
                maxWidth: '180px',
                maxHeight: '120px',
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
        }
        @media (max-width: 640px) {
          .animate-marquee img {
            width: 80px !important;
            height: 48px !important;
            min-width: 80px !important;
            min-height: 48px !important;
            max-width: 100px !important;
            max-height: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee; 