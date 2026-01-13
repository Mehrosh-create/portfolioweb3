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

  // Theme-based colors
  const themeColors = {
    background: theme === 'dark' ? 'bg-[#151515]' : 'bg-white',
    foreground: theme === 'dark' ? 'text-white' : 'text-gray-900',
    mutedForeground: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    cardBg: theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/90',
    border: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
    accent: '#0fb8af',
    accentDark: '#0da39a',
    accentLight: '#1fc8db',
  };

  // Intersection Observer
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

  // Counter animation (smoother with requestAnimationFrame)
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      setProjects(Math.floor(targetProjects * progress));
      setClients(Math.floor(targetClients * progress));
      setExperience(Math.floor(targetExperience * progress));
      setExperts(Math.floor(targetExperts * progress));
      setFollowers(Math.floor(targetFollowers * progress));
      setImpressions(Math.floor(targetImpressions * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  const stats = [
    {
      value: followers,
      label: 'FOLLOWERS',
      suffix: '+',
      icon: Users,
      key: 'followers',
      format: (val: number) => (val >= 1000 ? `${(val / 1000).toFixed(0)}K` : val.toString()),
    },
    {
      value: impressions,
      label: 'IMPRESSIONS',
      suffix: '+',
      icon: Eye,
      key: 'impressions',
      format: (val: number) =>
        val >= 1000000
          ? `${(val / 1000000).toFixed(1)}M`
          : val >= 1000
            ? `${(val / 1000).toFixed(0)}K`
            : val.toString(),
    },
    {
      value: clients,
      label: 'CLIENTS',
      suffix: '+',
      icon: UserCheck,
      key: 'clients',
      format: (val: number) => val.toString(),
    },
    {
      value: projects,
      label: 'PROJECTS',
      suffix: '+',
      icon: Folder,
      key: 'projects',
      format: (val: number) => val.toString(),
    },
    {
      value: experience,
      label: 'YEARS',
      suffix: '+',
      icon: Clock,
      key: 'experience',
      format: (val: number) => val.toString(),
    },
    {
      value: experts,
      label: 'EXPERTS',
      suffix: '+',
      icon: Trophy,
      key: 'experts',
      format: (val: number) => val.toString(),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-16 ${themeColors.background} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p
            className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${
              theme === 'dark' ? 'text-teal-400' : 'text-teal-600'
            } mb-3`}
          >
            ACHIEVEMENTS
          </p>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${themeColors.foreground}`}
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

        {/* Stats Grid – SMALLER CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            const displayValue = stat.format(stat.value);

            return (
              <div key={stat.key} className="group relative">
                <div
                  className={`
                    rounded-xl px-4 py-5 sm:px-5 sm:py-6
                    flex flex-col items-center justify-center text-center
                    transition-all duration-300
                    ${theme === 'dark'
                      ? 'bg-gray-900/60 border border-gray-800 group-hover:border-teal-700/60'
                      : 'bg-white/80 border border-gray-200 shadow-sm group-hover:shadow group-hover:border-teal-400/50'}
                  `}
                >
                  <div
                    className={`
                      p-2.5 sm:p-3 rounded-lg mb-3
                      ${theme === 'dark' ? 'bg-teal-950/40' : 'bg-teal-50/70'}
                    `}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#0fb8af]" />
                  </div>

                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0fb8af] mb-1 leading-none">
                    {displayValue}
                    <span className="text-lg sm:text-xl">{stat.suffix}</span>
                  </div>

                  <span
                    className={`
                      text-xs sm:text-sm font-medium uppercase tracking-wider
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-800'}
                      transition-colors
                    `}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust message */}
        <div
          className="mt-10 md:mt-12 mx-auto max-w-3xl p-5 sm:p-6 rounded-xl border text-center"
          style={{
            background: theme === 'dark' ? 'rgba(30,30,30,0.4)' : 'rgba(255,255,255,0.7)',
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(15,184,175,0.2)',
          }}
        >
          <h2
            className="text-base sm:text-lg font-semibold mb-2"
            style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}
          >
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            These numbers represent real results delivered worldwide through strategic digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;