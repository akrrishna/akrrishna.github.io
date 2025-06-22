
import { useState, useEffect } from 'react';

const SkillTree = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { 
      name: 'Teacher', 
      position: { top: '20%', left: '20%' },
      delay: 1.2,
      icon: '🌱'
    },
    { 
      name: 'Web Developer', 
      position: { top: '15%', right: '25%' },
      delay: 1.5,
      icon: '🍃'
    },
    { 
      name: 'Content Writer', 
      position: { top: '50%', right: '15%' },
      delay: 1.8,
      icon: '🌿'
    }
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-800 rounded-2xl overflow-hidden">
      {/* Earth base - organic ground layer */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-800 via-amber-700 to-transparent opacity-60 rounded-b-2xl"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-800 via-green-700 to-transparent opacity-40 rounded-b-2xl"></div>
      
      {/* Floating organic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-300 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-lime-300 rounded-full blur-xl"></div>
      </div>

      {/* Central growth stem - elegant and minimal */}
      <div 
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-1 h-32 bg-gradient-to-t from-green-600 to-green-400 rounded-full shadow-lg"></div>
        
        {/* Central leaf crown */}
        <div className={`absolute -top-6 -left-4 transition-all duration-800 ${
          isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
        }`} style={{ transitionDelay: '0.8s' }}>
          <div className="w-8 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full transform rotate-12 shadow-md"></div>
        </div>
        <div className={`absolute -top-6 -right-2 transition-all duration-800 ${
          isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
        }`} style={{ transitionDelay: '1.0s' }}>
          <div className="w-6 h-10 bg-gradient-to-br from-lime-400 to-green-500 rounded-full transform -rotate-12 shadow-md"></div>
        </div>
      </div>

      {/* Elegant connecting vines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        {/* Vine to Teacher */}
        <path
          d="M200 280 Q150 250 Q120 200 Q100 150 80 80"
          stroke="url(#vineGradient1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className={`transition-all duration-1500 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isVisible ? '0' : '200',
            transitionDelay: '1.0s'
          }}
        />
        
        {/* Vine to Web Developer */}
        <path
          d="M200 280 Q250 240 Q290 180 Q310 120 340 60"
          stroke="url(#vineGradient2)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className={`transition-all duration-1500 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
          style={{
            strokeDasharray: '220',
            strokeDashoffset: isVisible ? '0' : '220',
            transitionDelay: '1.2s'
          }}
        />
        
        {/* Vine to Content Writer */}
        <path
          d="M200 280 Q260 260 Q310 240 Q340 220 320 200"
          stroke="url(#vineGradient3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className={`transition-all duration-1500 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
          style={{
            strokeDasharray: '180',
            strokeDashoffset: isVisible ? '0' : '180',
            transitionDelay: '1.4s'
          }}
        />

        {/* Gradient definitions for vines */}
        <defs>
          <linearGradient id="vineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="vineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="vineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>
      </svg>

      {/* Skills as leaf pods */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`absolute transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'
          }`}
          style={{
            ...skill.position,
            transform: 'translate(-50%, -50%)',
            transitionDelay: `${skill.delay}s`
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Leaf-shaped skill container */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-green-300/30 flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
              </div>
              
              {/* Leaf stem connector */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>

            {/* Floating particles around skills */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-green-400 rounded-full transition-all duration-2000 ${
                    isVisible ? 'opacity-60 animate-bounce' : 'opacity-0'
                  }`}
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${skill.delay + i * 0.3}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Scattered leaf elements for ambiance */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`ambient-leaf-${i}`}
          className={`absolute transition-all duration-2000 ${
            isVisible ? 'opacity-30 animate-pulse' : 'opacity-0'
          }`}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
            transitionDelay: `${2 + i * 0.2}s`,
            animationDelay: `${2 + i * 0.2}s`,
            animationDuration: `${4 + i * 0.3}s`
          }}
        >
          <div 
            className="bg-gradient-to-br from-green-300 to-emerald-500 rounded-full shadow-sm"
            style={{
              width: `${3 + Math.random() * 3}px`,
              height: `${4 + Math.random() * 4}px`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SkillTree;
