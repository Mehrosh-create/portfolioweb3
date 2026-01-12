// components/Expertise/StatsCounter.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Trophy, Folder, Users, Clock, UserCheck, Eye } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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

  // Theme-based colors (keeping your original)
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

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Counter animation (unchanged)
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
      className={`min-h-[50vh] ${themeColors.background} py-8 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Header - simplified but kept visual hierarchy */}
          <div className="mb-6 text-center">
            <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mb-2`}>
              ACHIEVEMENTS
            </p>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${themeColors.foreground}`}
              style={{ fontFamily: '"Century Gothic", Inter, sans-serif' }}
            >
              Numbers That{' '}
              <span className="bg-gradient-to-r from-[#0fb8af] to-[#0da39a] bg-clip-text text-transparent">
                Define Excellence
              </span>
            </h1>
            <p className={`text-sm sm:text-base ${themeColors.mutedForeground} max-w-xl mx-auto`}>
              Every milestone tells a story of dedication, innovation, and the pursuit of perfection.
            </p>
          </div>

          {/* Stats Grid - kept same structure & size feeling */}
          <div className="w-full max-w-4xl">
            <div
              className="stats-container rounded-2xl overflow-hidden backdrop-blur-sm"
              style={{
                background: theme === 'dark'
                  ? 'rgba(30, 30, 30, 0.7)'
                  : 'rgba(255, 255, 255, 0.85)',
                border: theme === 'dark'
                  ? '1px solid rgba(255,255,255,0.08)'
                  : '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6">
                {stats.map((stat) => {
                  const IconComponent = stat.icon;
                  const displayValue = stat.format(stat.value);

                  return (
                    <div
                      key={stat.key}
                      className="group relative"
                    >
                      <div
                        className={`
                          rounded-xl p-5 sm:p-6 h-full flex flex-col items-center justify-center text-center
                          transition-all duration-300
                          ${theme === 'dark' 
                            ? 'bg-gray-900/60 border border-gray-800 group-hover:border-teal-700/70' 
                            : 'bg-white/90 border border-gray-200 group-hover:border-teal-400/50 shadow-sm group-hover:shadow-md'}
                        `}
                      >
                        <div
                          className={`
                            p-3 rounded-lg mb-4
                            ${theme === 'dark' ? 'bg-teal-950/40' : 'bg-teal-50/80'}
                          `}
                        >
                          <IconComponent className="w-7 h-7 text-[#0fb8af]" />
                        </div>

                        <div className="text-2xl sm:text-3xl font-bold text-[#0fb8af] mb-1">
                          {displayValue}{stat.suffix}
                        </div>

                        <span className={`
                          text-xs sm:text-sm font-medium uppercase tracking-wider
                          ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-800'}
                          transition-colors
                        `}>
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom trust message - simplified */}
          <div
            className="mt-10 w-full max-w-3xl p-6 rounded-xl border text-center"
            style={{
              background: theme === 'dark' ? 'rgba(30,30,30,0.4)' : 'rgba(255,255,255,0.7)',
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(15,184,175,0.2)',
            }}
          >
            <h2 className="text-base sm:text-lg font-semibold mb-2" style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}>
              TRUSTED BY INDUSTRY LEADERS
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              These numbers represent real results delivered worldwide through strategic digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;