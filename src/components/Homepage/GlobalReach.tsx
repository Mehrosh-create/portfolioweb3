"use client";

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTheme } from '@/contexts/ThemeContext';
import FadeSlide from '@/components/Common/FadeSlide';

interface StatItem {
  label: string;
  value: string;
  color: string;
}

// Globe Component
const GlobeCard: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <StyledWrapper theme={theme}>
      <div className="section-banner">
        {/* Using Next.js Image component */}
        <div className="globe-image-container">
          <Image
            src="/images/globe (2).png"
            alt="Earth Globe"
            width={400}
            height={400}
            className="globe-image"
          />
        </div>
        
        {/* Stars */}
        <div id="star-1">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-2">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-3">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-4">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-5">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-6">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-7">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ theme: string }>`
  .section-banner {
    height: 400px;
    width: 400px;
    position: relative;
    bottom: 0px;
    border-radius: 50%;
    
    ${({ theme }) => theme === 'dark' && `
      box-shadow: 
        0 0 0 6px rgba(15, 184, 175, 0.4),
        0 0 35px rgba(15, 184, 175, 0.5),
        0 0 60px rgba(31, 200, 219, 0.3),
        inset 0 0 70px rgba(0, 0, 0, 0.9),
        inset 0 0 35px rgba(15, 184, 175, 0.15),
        inset 0 0 20px rgba(31, 200, 219, 0.15),
        inset -12px -12px 40px rgba(0, 0, 0, 0.7),
        inset 12px 12px 40px rgba(15, 184, 175, 0.1);
    `}
    
    ${({ theme }) => theme === 'light' && `
      box-shadow: 
        0 0 0 6px rgba(15, 184, 175, 0.5),
        0 0 40px rgba(15, 184, 175, 0.35),
        0 0 80px rgba(31, 200, 219, 0.2),
        inset 0 0 70px rgba(255, 255, 255, 0.9),
        inset 0 0 35px rgba(15, 184, 175, 0.15),
        inset 0 0 20px rgba(31, 200, 219, 0.15),
        inset -12px -12px 40px rgba(255, 255, 255, 0.8),
        inset 12px 12px 40px rgba(15, 184, 175, 0.12);
    `}
    
    &::after {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      border-radius: 50%;
      background: ${({ theme }) => theme === 'dark'
        ? 'radial-gradient(circle at 35% 35%, rgba(15, 184, 175, 0.2) 0%, rgba(31, 200, 219, 0.15) 25%, transparent 70%)'
        : 'radial-gradient(circle at 35% 35%, rgba(15, 184, 175, 0.12) 0%, rgba(31, 200, 219, 0.08) 25%, transparent 70%)'};
      z-index: -1;
      opacity: ${({ theme }) => theme === 'dark' ? '0.7' : '0.6'};
      filter: blur(25px);
      pointer-events: none;
    }
  }

  .globe-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    animation: earthRotate 40s linear infinite;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background: ${({ theme }) => theme === 'dark' 
        ? 'linear-gradient(135deg, rgba(15, 184, 175, 0.08) 0%, rgba(31, 200, 219, 0.05) 25%, rgba(42, 245, 152, 0.03) 50%, transparent 100%)'
        : 'linear-gradient(135deg, rgba(15, 184, 175, 0.08) 0%, rgba(31, 200, 219, 0.05) 25%, rgba(42, 245, 152, 0.03) 50%, transparent 100%)'};
      pointer-events: none;
      z-index: 2;
    }
  }

  .globe-image {
    object-fit: cover;
    border-radius: 50%;
  }
  
  @keyframes earthRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .curved-corner-star {
    display: flex;
    position: relative;
  }

  #curved-corner-bottomleft,
  #curved-corner-bottomright,
  #curved-corner-topleft,
  #curved-corner-topright {
    width: 6px;
    height: 7px;
    overflow: hidden;
    position: relative;
  }

  #curved-corner-bottomleft:before,
  #curved-corner-bottomright:before,
  #curved-corner-topleft:before,
  #curved-corner-topright:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
  }

  #curved-corner-bottomleft:before {
    bottom: 0;
    left: 0;
    box-shadow: -7px 7px 0 0 ${({ theme }) => theme === 'dark' ? '#0fb8af' : '#0da69c'};
  }

  #curved-corner-bottomright:before {
    bottom: 0;
    right: 0;
    box-shadow: 7px 7px 0 0 ${({ theme }) => theme === 'dark' ? '#0fb8af' : '#0da69c'};
  }

  #curved-corner-topleft:before {
    top: 0;
    left: 0;
    box-shadow: -7px -7px 0 0 ${({ theme }) => theme === 'dark' ? '#0fb8af' : '#0da69c'};
  }

  #curved-corner-topright:before {
    top: 0;
    right: 0;
    box-shadow: 7px -7px 0 0 ${({ theme }) => theme === 'dark' ? '#0fb8af' : '#0da69c'};
  }

  @keyframes twinkling {
    0%,
    100% {
      opacity: ${({ theme }) => theme === 'dark' ? '0.2' : '0.4'};
    }
    50% {
      opacity: 1;
    }
  }

  #star-1 {
    position: absolute;
    left: -30px;
    animation: twinkling 3s infinite;
    z-index: 3;
  }

  #star-2 {
    position: absolute;
    left: -60px;
    top: 50px;
    animation: twinkling 2s infinite;
    animation-delay: 0.5s;
    z-index: 3;
  }
  
  #star-3 {
    position: absolute;
    left: 450px;
    top: 140px;
    animation: twinkling 4s infinite;
    animation-delay: 1s;
    z-index: 3;
  }
  
  #star-4 {
    position: absolute;
    left: 280px;
    top: 390px;
    animation: twinkling 3s infinite;
    animation-delay: 1.5s;
    z-index: 3;
  }
  
  #star-5 {
    position: absolute;
    left: 70px;
    top: 360px;
    animation: twinkling 1.5s infinite;
    animation-delay: 0.3s;
    z-index: 3;
  }

  #star-6 {
    position: absolute;
    left: 320px;
    top: -70px;
    animation: twinkling 4s infinite;
    animation-delay: 2s;
    z-index: 3;
  }
  
  #star-7 {
    position: absolute;
    left: 380px;
    top: 90px;
    animation: twinkling 2s infinite;
    animation-delay: 0.8s;
    z-index: 3;
  }
`;

// Main GlobalReach Component
const GlobalReach: React.FC = () => {
  const { theme } = useTheme();

  const stats: StatItem[] = [
    { label: "Countries Reached", value: "50+", color: "#0fb8af" },
    { label: "Global Clients", value: "20+", color: "#0fb8af" },
    { label: "Years Experience", value: "7+", color: "#0fb8af" },
  ];

  return (
    <section 
      className={`py-16 sm:py-20 lg:py-24 ${
        theme === 'dark' ? 'bg-[#151515]' : 'bg-white'
      } relative overflow-hidden`}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: theme === 'dark'
            ? 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")'
            : 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
          {/* Left Column - Content - Taking 45% width */}
          <div className="w-full lg:w-[45%] lg:pr-4">
            <FadeSlide delay={0.3}>
              {/* Rounded capsule for "Global Reach" */}
              <div className="inline-flex items-center mb-6">
                <span 
                  className={`${
                    theme === 'dark' 
                      ? 'bg-[#0fb8af]/20 text-[#0fb8af]' 
                      : 'bg-[#0fb8af]/10 text-[#0fb8af]'
                  } px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase font-inter`}
                >
                  Global Reach
                </span>
              </div>

              {/* Main Heading with Century Gothic font */}
              <h2 
                className={`${
                  theme === 'dark' ? 'text-white' : 'text-black'
                } text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-century-gothic-bold`}
              >
                Trusted Worldwide
              </h2>

              {/* Description with Inter font */}
              <p 
                className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed font-inter`}
              >
                Working with organizations across continents to deliver strategic solutions and transformative results
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
                {stats.map((stat, index) => (
                  <FadeSlide key={stat.label} delay={0.5 + (index * 0.1)}>
                    <div 
                      className={`${
                        theme === 'dark' 
                          ? 'bg-[#1e1e1e] border-gray-800' 
                          : 'bg-gray-50 border-gray-200'
                      } rounded-xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                    >
                      <div className="text-center">
                        <div 
                          className="text-4xl sm:text-5xl font-bold mb-2" 
                          style={{ color: stat.color }}
                        >
                          {stat.value}
                        </div>
                        <div 
                          className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          } text-sm sm:text-base font-medium font-inter`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </FadeSlide>
                ))}
              </div>

              {/* CTA Button */}
              <FadeSlide delay={0.9}>
                <div className="mt-10">
                  <button 
                    className={`${
                      theme === 'dark' 
                        ? 'bg-[#0fb8af] hover:bg-[#0da69c] text-white' 
                        : 'bg-[#0fb8af] hover:bg-[#0da69c] text-white'
                    } px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-inter`}
                  >
                    Explore Our Global Impact
                  </button>
                </div>
              </FadeSlide>
            </FadeSlide>
          </div>

          {/* Right Column - Globe - Taking 55% width and positioned to the far right */}
          <FadeSlide delay={0.1}>
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
              <div className="relative lg:-mr-32 lg:ml-16">
                <GlobeCard />
                {/* Animated rings around globe */}
                <div className="absolute inset-0 rounded-full border-3 border-[#0fb8af]/20 animate-ping" style={{top: '-10px', left: '-10px', right: '-10px', bottom: '-10px'}}></div>
                <div 
                  className="absolute inset-0 rounded-full border-3 border-[#0fb8af]/10 animate-ping" 
                  style={{ animationDelay: '0.5s', top: '-10px', left: '-10px', right: '-10px', bottom: '-10px' }}
                />
                
                {/* Background color behind the globe */}
                <div 
                  className="absolute -z-10 rounded-full"
                  style={{
                    top: '-80px',
                    left: '-80px',
                    right: '-80px',
                    bottom: '-80px',
                    background: `radial-gradient(circle, rgba(15, 184, 175, 0.2) 0%, rgba(15, 184, 175, 0.08) 40%, transparent 70%)`,
                    filter: 'blur(30px)',
                  }}
                />
              </div>
            </div>
          </FadeSlide>
        </div>
      </div>

      {/* Decorative elements - adjusted positions */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-[#0fb8af]/10 to-[#1fc8db]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-[#0fb8af]/5 to-[#2af598]/5 rounded-full blur-3xl" />
      
      {/* Additional decorative element for balance */}
      <div className="absolute top-1/2 left-5 w-20 h-20 bg-gradient-to-r from-transparent to-[#0fb8af]/10 rounded-full blur-2xl" />
    </section>
  );
};

export default GlobalReach;