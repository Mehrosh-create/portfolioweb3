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
    accent: '#0fb8af',
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
      className={`min-h-[50vh] ${themeColors.background} flex items-center justify-center relative overflow-hidden py-8 transition-colors duration-300 font-[Inter]`}
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Particles, background, glow effects, etc. (same as before) */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center justify-center w-full">

          {/* Main Heading with Icon */}
          <div className="flex items-center justify-center gap-2 mb-3 w-full">
            <div className="relative">
              <div className={`absolute -inset-2 ${theme === 'dark' ? 'bg-[#B4D7D4]/20' : 'bg-[#B4D7D4]/10'} rounded-full blur-sm`} />
              <div className="relative flex items-center gap-1.5">
                <Trophy className={`w-4 h-4 ${theme === 'dark' ? 'text-[#0fb8af]' : 'text-[#0fb8af]'}`} />
                <span 
                  className={`text-xs font-semibold ${themeColors.foreground} uppercase tracking-wide`}
                  style={{ fontFamily: '"Century Gothic", sans-serif' }}
                >
                  ACHIEVEMENTS
                </span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-center relative ${themeColors.foreground}`}
            style={{ fontFamily: '"Century Gothic", sans-serif' }}
          >
            <span>Numbers That</span>{' '}
            <span className="bg-gradient-to-r from-[#0fb8af] to-[#0da39a] bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h1>

          {/* Description Text */}
          <p 
            className={`text-sm sm:text-base ${themeColors.mutedForeground} leading-relaxed mb-6 max-w-xl text-center relative`}
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Every milestone tells a story of dedication, innovation, and the relentless pursuit of perfection.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              const displayValue = stat.format(stat.value);
              
              return (
                <div key={stat.key} className="stat-outer-wrapper group" onMouseEnter={() => setHoveredBox(stat.key)} onMouseLeave={() => setHoveredBox(null)}>
                  <div className="stat-outer">
                    <div className="stat-dot"></div>
                    <div className="stat-ray"></div>

                    <div className="stat-card" style={{ fontFamily: '"Inter", sans-serif' }}>
                      <div className="relative p-1.5 mb-2">
                        <IconComponent className="w-3.5 h-3.5 text-[#0fb8af] relative z-10" />
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0fb8af] mb-0.5 relative stat-value" style={{ fontFamily: '"Century Gothic", sans-serif' }}>
                        {displayValue}{stat.suffix}
                      </div>
                      <span className="text-xs font-medium">{stat.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
