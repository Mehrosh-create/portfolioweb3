// components/Expertise/StatsCounter.tsx
'use client';


import { useState, useRef, useEffect } from 'react';
import { Trophy, Folder, Users, Clock, UserCheck, Eye } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';


const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setHoveredBox] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [particlePositions, setParticlePositions] = useState<Array<{left: string, top: string, duration: string}>>([]);
  const { theme } = useTheme();


  // Counter values
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);
  const [experts, setExperts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [impressions, setImpressions] = useState(0);


  // Final values
  const targetProjects = 250;
  const targetClients = 120;
  const targetExperience = 7;
  const targetExperts = 20;
  const targetFollowers = 680000;
  const targetImpressions = 3500000;


  // Theme-based colors
  const themeColors = {
    background: theme === 'dark' ? 'bg-[#151515]' : 'bg-white',
    foreground: theme === 'dark' ? 'text-white' : 'text-gray-900',
    mutedForeground: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    cardBg: theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/90',
    border: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
    accent: '#0fb8af', // Keep accent color consistent
    accentDark: '#0da39a',
    accentLight: '#1fc8db'
  };


  // Initialize particle positions on client only
  useEffect(() => {
    const positions = Array.from({ length: 12 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 10}s`
    }));
    setParticlePositions(positions);
  }, []);


  // Intersection Observer to trigger animation
  useEffect(() => {
    const currentRef = sectionRef.current;
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );


    if (currentRef) {
      observer.observe(currentRef);
    }


    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  // Counter animation
  useEffect(() => {
    if (!isVisible) return;


    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;


    let currentStep = 0;


    const animateCounters = () => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;


        setProjects(Math.floor(targetProjects * progress));
        setClients(Math.floor(targetClients * progress));
        setExperience(Math.floor(targetExperience * progress));
        setExperts(Math.floor(targetExperts * progress));
        setFollowers(Math.floor(targetFollowers * progress));
        setImpressions(Math.floor(targetImpressions * progress));


        currentStep++;
        setTimeout(animateCounters, stepDuration);
      } else {
        // Ensure final values are set
        setProjects(targetProjects);
        setClients(targetClients);
        setExperience(targetExperience);
        setExperts(targetExperts);
        setFollowers(targetFollowers);
        setImpressions(targetImpressions);
      }
    };


    animateCounters();
  }, [isVisible]);


  const stats = [
    {
      value: followers,
      label: "FOLLOWERS",
      suffix: "+",
      icon: Users,
      key: 'followers',
      format: (val: number) => val >= 1000 ? `${(val/1000).toFixed(0)}K` : val.toString()
    },
    {
      value: impressions,
      label: "IMPRESSIONS",
      suffix: "+",
      icon: Eye,
      key: 'impressions',
      format: (val: number) => val >= 1000000 ? `${(val/1000000).toFixed(1)}M` : val >= 1000 ? `${(val/1000).toFixed(0)}K` : val.toString()
    },
    {
      value: clients,
      label: "CLIENTS",
      suffix: "+",
      icon: UserCheck,
      key: 'clients',
      format: (val: number) => val.toString()
    },
    {
      value: projects,
      label: "PROJECTS",
      suffix: "+",
      icon: Folder,
      key: 'projects',
      format: (val: number) => val.toString()
    },
    {
      value: experience,
      label: "YEARS",
      suffix: "+",
      icon: Clock,
      key: 'experience',
      format: (val: number) => val.toString()
    },
    {
      value: experts,
      label: "EXPERTS",
      suffix: "+",
      icon: Trophy,
      key: 'experts',
      format: (val: number) => val.toString()
    },
  ];


  return (
    <section
      ref={sectionRef}
      className={`min-h-[50vh] ${themeColors.background} flex items-center justify-center relative overflow-hidden py-8 transition-colors duration-300`}
    >
      {/* Background Blobs - Adjusted opacity for light mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${theme === 'dark' ? 'bg-[#0fb8af]' : 'bg-[#0fb8af]/20'} rounded-full blur-2xl animate-pulse`} />
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${theme === 'dark' ? 'bg-[#0da39a]' : 'bg-[#0da39a]/20'} rounded-full blur-2xl animate-pulse delay-1000`} />
      </div>


      {/* Animated Grid Background - Adjusted for light mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-grid-pattern'
            : 'bg-grid-pattern-light'
        }`}></div>
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-glow-gradient'
            : 'bg-glow-gradient-light'
        } animate-glow-pulse`}></div>
        <div className="absolute inset-0 bg-shimmer animate-shimmer-slow"></div>
      </div>


      {/* Moving particles in background - Adjusted color for light mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: `${i * 0.5}s`,
              animationDuration: pos.duration,
              backgroundColor: theme === 'dark' ? '#0fb8af' : '#0fb8af',
              opacity: theme === 'dark' ? 0.3 : 0.1
            }}
          ></div>
        ))}
      </div>


      {/* Scanning line effect - Adjusted color for light mode */}
      <div className="scan-line-container">
        <div
          className="scan-line"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(90deg, transparent, #0fb8af, #0da39a, #0fb8af, transparent)'
              : 'linear-gradient(90deg, transparent, #0fb8af/30, #0da39a/30, #0fb8af/30, transparent)'
          }}
        ></div>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Main Heading with Icon */}
          <div className="flex items-center justify-center gap-2 mb-3 w-full">
            <div className="relative">
              <div className={`absolute -inset-2 ${
                theme === 'dark' ? 'bg-[#B4D7D4]/20' : 'bg-[#B4D7D4]/10'
              } rounded-full blur-sm`} />
              <div className="relative flex items-center gap-1.5">
                <Trophy className={`w-4 h-4 ${theme === 'dark' ? 'text-[#0fb8af]' : 'text-[#0fb8af]'}`} />
                <span className={`text-xs font-semibold ${themeColors.foreground} uppercase tracking-wide`}>
                  ACHIEVEMENTS
                </span>
              </div>
            </div>
          </div>

{/* Main Title */}
<h1
  className={`text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-center relative ${themeColors.foreground}`}
  style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
>
  <span>Numbers That</span>{' '}
  <span className="bg-gradient-to-r from-[#0fb8af] to-[#0da39a] bg-clip-text text-transparent">
    Define Excellence
  </span>

  {/* Title glow effect */}
  <span
    className={`absolute -inset-4 ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-[#0fb8af]/20 to-[#0da39a]/20'
        : 'bg-gradient-to-r from-[#0fb8af]/10 to-[#0da39a]/10'
    } blur-xl opacity-30 -z-10`}
  ></span>
</h1>

{/* Description Text */}
<p
  className={`text-sm sm:text-base ${themeColors.mutedForeground} leading-relaxed mb-6 max-w-xl text-center relative`}
  style={{ fontFamily: 'Inter, sans-serif' }}
>
  Every milestone tells a story of dedication, innovation, and the relentless pursuit of perfection.
  <span
    className={`absolute -inset-2 ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-[#0fb8af]/5 to-transparent'
        : 'bg-gradient-to-r from-[#0fb8af]/10 to-transparent'
    } blur-md opacity-20 -z-10 rounded-full`}
  ></span>
</p>

          {/* Stats Grid Container with Animated Border */}
          <div className="relative w-full max-w-4xl">
            {/* Animated border effect - Adjusted for light mode */}
            <div
              className="animated-border"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, transparent, #0fb8af, #0da39a, #0fb8af, transparent)'
                  : 'linear-gradient(90deg, transparent, #0fb8af, #0da39a, #0fb8af, transparent)',
                opacity: theme === 'dark' ? 1 : 0.5
              }}
            ></div>
           
            {/* Corner elements - Adjusted for light mode */}
            <div
              className="corner corner-top-left"
              style={{
                borderColor: theme === 'dark' ? '#0fb8af' : '#0fb8af',
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
            <div
              className="corner corner-top-right"
              style={{
                borderColor: theme === 'dark' ? '#0fb8af' : '#0fb8af',
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
            <div
              className="corner corner-bottom-left"
              style={{
                borderColor: theme === 'dark' ? '#0fb8af' : '#0fb8af',
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
            <div
              className="corner corner-bottom-right"
              style={{
                borderColor: theme === 'dark' ? '#0fb8af' : '#0fb8af',
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
           
            {/* Main stats container - Adjusted for light mode */}
            <div
              className="stats-container"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.95))',
                border: theme === 'dark'
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: theme === 'dark'
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            >
              {/* Inner glow effect - Adjusted for light mode */}
              <div
                className="inner-glow"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(ellipse at center, rgba(15, 184, 175, 0.1) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse at center, rgba(15, 184, 175, 0.05) 0%, transparent 70%)',
                  opacity: theme === 'dark' ? 0.3 : 0.2
                }}
              ></div>
             
              {/* Grid content with animated border cards */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full p-4">
                {stats.map((stat) => {
                  const IconComponent = stat.icon;
                  const displayValue = stat.format(stat.value);
                 
                  return (
                    <div
                      key={stat.key}
                      className="stat-outer-wrapper group"
                      onMouseEnter={() => setHoveredBox(stat.key)}
                      onMouseLeave={() => setHoveredBox(null)}
                    >
                      {/* Animated border wrapper */}
                      <div
                        className="stat-outer"
                        style={{
                          background: theme === 'dark'
                            ? 'radial-gradient(circle 150px at 0% 0%, rgba(255, 255, 255, 0.1), rgba(20, 20, 20, 1))'
                            : 'radial-gradient(circle 150px at 0% 0%, rgba(15, 184, 175, 0.1), rgba(255, 255, 255, 1))'
                        }}
                      >
                        {/* Animated dot */}
                        <div
                          className="stat-dot"
                          style={{
                            backgroundColor: themeColors.accent,
                            boxShadow: `0 0 10px ${themeColors.accent}`
                          }}
                        ></div>
                       
                        {/* Ray effect - Adjusted for light mode */}
                        <div
                          className="stat-ray"
                          style={{
                            backgroundColor: themeColors.accent,
                            boxShadow: `0 0 30px ${themeColors.accent}`,
                            opacity: theme === 'dark' ? 0.2 : 0.1
                          }}
                        ></div>
                       
                        {/* Grid lines - Adjusted for light mode */}
                        <div
                          className="stat-line stat-line-top"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'
                              : 'linear-gradient(90deg, rgba(15, 184, 175, 0.3) 30%, rgba(220, 220, 220, 0.5) 70%)'
                          }}
                        ></div>
                        <div
                          className="stat-line stat-line-bottom"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(90deg, #1d1f1f 30%, #888888 70%)'
                              : 'linear-gradient(90deg, rgba(220, 220, 220, 0.5) 30%, rgba(15, 184, 175, 0.3) 70%)'
                          }}
                        ></div>
                        <div
                          className="stat-line stat-line-left"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(180deg, #747474 30%, #222424 70%)'
                              : 'linear-gradient(180deg, rgba(15, 184, 175, 0.3) 30%, rgba(220, 220, 220, 0.5) 70%)'
                          }}
                        ></div>
                        <div
                          className="stat-line stat-line-right"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(180deg, #222424 30%, #747474 70%)'
                              : 'linear-gradient(180deg, rgba(220, 220, 220, 0.5) 30%, rgba(15, 184, 175, 0.3) 70%)'
                          }}
                        ></div>
                       
                        {/* Card content */}
                        <div
                          className="stat-card"
                          style={{
                            background: theme === 'dark'
                              ? 'radial-gradient(circle 180px at 0% 0%, #444444, #0c0d0d)'
                              : 'radial-gradient(circle 180px at 0% 0%, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 1))',
                            border: theme === 'dark'
                              ? 'solid 1px #202222'
                              : 'solid 1px rgba(15, 184, 175, 0.2)',
                            color: theme === 'dark' ? '#fff' : themeColors.foreground
                          }}
                        >
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0fb8af]/0 to-[#0da39a]/0 group-hover:from-[#0fb8af]/10 group-hover:to-[#0da39a]/10 rounded-lg transition-all duration-300"></div>
                         
                          {/* Icon */}
                          <div
                            className="relative p-1.5 bg-gradient-to-br from-[#0fb8af]/10 to-[#0da39a]/10 rounded-md mb-2 group-hover:from-[#0fb8af]/20 group-hover:to-[#0da39a]/20 transition-all duration-300"
                            style={{
                              background: theme === 'dark'
                                ? 'linear-gradient(145deg, rgba(15, 184, 175, 0.1), rgba(13, 163, 154, 0.1))'
                                : 'linear-gradient(145deg, rgba(15, 184, 175, 0.05), rgba(13, 163, 154, 0.05))'
                            }}
                          >
                            <div className="absolute inset-0 bg-[#0fb8af]/5 rounded-md blur-sm group-hover:bg-[#0fb8af]/10 transition-all duration-300"></div>
                            <IconComponent className="w-3.5 h-3.5 text-[#0fb8af] relative z-10" />
                          </div>
                         
                          {/* Value */}
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0fb8af] mb-0.5 relative stat-value">
                            {displayValue}{stat.suffix}
                            {/* Number glow effect */}
                            <span className="absolute -inset-2 bg-[#0fb8af]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                          </div>
                         
                          {/* Label */}
                          <span className={`text-xs font-medium ${
                            theme === 'dark'
                              ? 'text-gray-300 group-hover:text-white'
                              : 'text-gray-600 group-hover:text-gray-800'
                          } transition-colors duration-300`}>
                            {stat.label}
                          </span>
                         
                          {/* Particle effects on hover */}
                          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="mini-particle"
                                style={{
                                  left: `${20 + i * 30}%`,
                                  animationDelay: `${i * 0.2}s`,
                                  backgroundColor: themeColors.accent
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>


              {/* Center glow effect - Adjusted for light mode */}
              <div
                className="absolute inset-0 bg-gradient-radial pointer-events-none"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle at center, rgba(15, 184, 175, 0.05), transparent 70%)'
                    : 'radial-gradient(circle at center, rgba(15, 184, 175, 0.03), transparent 70%)',
                  opacity: theme === 'dark' ? 0.3 : 0.2
                }}
              ></div>
            </div>
          </div>


          {/* Additional Content Section - Adjusted for light mode */}
          <div
            className="mt-8 py-4 sm:py-5 lg:py-6 px-4 sm:px-5 rounded-lg border w-full max-w-3xl relative overflow-hidden group"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.4), rgba(20, 20, 20, 0.2))'
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(250, 250, 250, 0.7))',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 184, 175, 0.2)'
            }}
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0fb8af]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
           
            <div className="text-center relative z-10">
              <h2
                className="text-sm sm:text-base lg:text-lg font-bold mb-1.5"
                style={{
                   fontFamily: "Inter, sans-serif",
                  color: theme === 'dark' ? '#ffffff' : themeColors.foreground
                }}
              >
                TRUSTED BY INDUSTRY LEADERS
              </h2>
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{
                  fontFamily: '"Century Gothic", Inter, sans-serif',
                  color: theme === 'dark' ? 'rgb(209 213 219)' : 'rgb(75 85 99)'
                }}
              >
                These numbers represent real results delivered to clients worldwide through
                strategic digital transformation and innovative business solutions.
              </p>
            </div>
           
            {/* Corner accents - Adjusted for light mode */}
            <div
              className="absolute top-2 left-2 w-2 h-2"
              style={{
                borderTop: `1px solid ${themeColors.accent}`,
                borderLeft: `1px solid ${themeColors.accent}`,
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
            <div
              className="absolute top-2 right-2 w-2 h-2"
              style={{
                borderTop: `1px solid ${themeColors.accent}`,
                borderRight: `1px solid ${themeColors.accent}`,
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
            <div
              className="absolute bottom-2 left-2 w-2 h-2"
              style={{
                borderBottom: `1px solid ${themeColors.accent}`,
                borderLeft: `1px solid ${themeColors.accent}`,
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
            <div
              className="absolute bottom-2 right-2 w-2 h-2"
              style={{
                borderBottom: `1px solid ${themeColors.accent}`,
                borderRight: `1px solid ${themeColors.accent}`,
                opacity: theme === 'dark' ? 0.5 : 0.3
              }}
            ></div>
          </div>
        </div>
      </div>


      <style jsx>{`
        /* Grid pattern background */
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(15, 184, 175, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 184, 175, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }


        .bg-grid-pattern-light {
          background-image:
            linear-gradient(to right, rgba(15, 184, 175, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 184, 175, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }


        /* Glow gradient animation */
        .bg-glow-gradient {
          background: radial-gradient(
            ellipse at center,
            rgba(15, 184, 175, 0.1) 0%,
            rgba(10, 163, 155, 0.05) 40%,
            transparent 70%
          );
        }


        .bg-glow-gradient-light {
          background: radial-gradient(
            ellipse at center,
            rgba(15, 184, 175, 0.05) 0%,
            rgba(10, 163, 155, 0.02) 40%,
            transparent 70%
          );
        }


        .animate-glow-pulse {
          animation: glowPulse 4s ease-in-out infinite;
        }


        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }


        /* Shimmer animation */
        .bg-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15, 184, 175, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
        }


        .animate-shimmer-slow {
          animation: shimmer 8s linear infinite;
        }


        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }


        /* Particles animation */
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: float linear infinite;
        }


        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }


        /* Scanning line effect */
        .scan-line-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          overflow: hidden;
          opacity: 0.3;
          z-index: 5;
        }


        .scan-line {
          height: 100%;
          width: 100%;
          animation: scan 3s linear infinite;
        }


        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }


        /* Animated border for stats container */
        .animated-border {
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          padding: 2px;
          background-size: 200% 100%;
          animation: borderFlow 4s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }


        @keyframes borderFlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }


        /* Corner elements */
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 2;
          pointer-events: none;
        }


        .corner-top-left {
          top: -1px;
          left: -1px;
          border-right: none;
          border-bottom: none;
        }


        .corner-top-right {
          top: -1px;
          right: -1px;
          border-left: none;
          border-bottom: none;
        }


        .corner-bottom-left {
          bottom: -1px;
          left: -1px;
          border-right: none;
          border-top: none;
        }


        .corner-bottom-right {
          bottom: -1px;
          right: -1px;
          border-left: none;
          border-top: none;
        }


        /* Stats container */
        .stats-container {
          position: relative;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }


        /* Inner glow effect */
        .inner-glow {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          pointer-events: none;
        }


        /* Mini particles for stat items */
        .mini-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          bottom: 0;
          animation: rise 1s ease-out infinite;
          opacity: 0;
        }


        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(0);
            opacity: 0;
          }
        }


        /* Gradient radial for center */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }


        /* ANIMATED CARD BORDER EFFECTS */
        .stat-outer-wrapper {
          position: relative;
          height: 100%;
          min-height: 90px;
        }


        .stat-outer {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          padding: 1px;
          position: relative;
          transition: all 0.3s ease;
        }


        .group:hover .stat-outer {
          transform: translateY(-5px);
        }


        /* Animated dot */
        .stat-dot {
          width: 4px;
          height: 4px;
          position: absolute;
          box-shadow: 0 0 10px ${themeColors.accent};
          border-radius: 100px;
          z-index: 3;
          right: 10%;
          top: 10%;
          animation: moveDot 6s linear infinite;
        }


        @keyframes moveDot {
          0%,
          100% {
            top: 10%;
            right: 10%;
          }
          25% {
            top: 10%;
            right: calc(100% - 15px);
          }
          50% {
            top: calc(100% - 15px);
            right: calc(100% - 15px);
          }
          75% {
            top: calc(100% - 15px);
            right: 10%;
          }
        }


        /* Ray effect */
        .stat-ray {
          width: 120px;
          height: 25px;
          border-radius: 100px;
          position: absolute;
          box-shadow: 0 0 30px ${themeColors.accent};
          filter: blur(8px);
          transform-origin: 10%;
          top: 0%;
          left: 0;
          transform: rotate(40deg);
          animation: rayPulse 4s ease-in-out infinite;
        }


        @keyframes rayPulse {
          0%, 100% {
            opacity: 0.1;
            transform: rotate(40deg) scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: rotate(40deg) scale(1.1);
          }
        }


        /* Grid lines */
        .stat-line {
          position: absolute;
          z-index: 2;
        }


        .stat-line-top {
          top: 10%;
          left: 0;
          width: 100%;
          height: 1px;
        }


        .stat-line-bottom {
          bottom: 10%;
          left: 0;
          width: 100%;
          height: 1px;
        }


        .stat-line-left {
          left: 10%;
          top: 0;
          width: 1px;
          height: 100%;
        }


        .stat-line-right {
          right: 10%;
          top: 0;
          width: 1px;
          height: 100%;
        }


        /* Card content */
        .stat-card {
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-direction: column;
          padding: 0.75rem;
          transition: all 0.3s ease;
        }


        .group:hover .stat-card {
          border-color: ${themeColors.accent};
          box-shadow:
            0 10px 20px rgba(15, 184, 175, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }


        .stat-value {
          transition: all 0.3s ease;
        }


        .group:hover .stat-value {
          text-shadow: 0 0 10px rgba(15, 184, 175, 0.5);
        }


        /* Responsive adjustments */
        @media (max-width: 640px) {
          .stat-dot {
            width: 3px;
            height: 3px;
          }


          .stat-ray {
            width: 80px;
            height: 15px;
            filter: blur(5px);
          }


          .stat-line-top,
          .stat-line-bottom {
            top: 15%;
            bottom: 15%;
          }


          .stat-line-left,
          .stat-line-right {
            left: 15%;
            right: 15%;
          }
        }
      `}</style>
    </section>
  );
};


export default StatsCounter;




