import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Zap, BarChart3, Award, Users, ArrowRight, ChevronDown, Play, CheckCircle2, Sparkles, X, Calendar, Gamepad2 } from 'lucide-react';
import PaidAdsGame from './components/PaidAdsGame';
import HolidayParticles from './components/HolidayParticles';
import HolidayBanner from './components/HolidayBanner';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import SEOHead from './components/SEOHead';
import NAPInfo from './components/NAPInfo';
import SocialProofNotification from './components/SocialProofNotification';
import GiftCardSection from './components/GiftCardSection';
import { getCurrentHoliday } from './utils/holidays';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrails, setCursorTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [showGame, setShowGame] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [holidayTheme, setHolidayTheme] = useState(getCurrentHoliday());

  useEffect(() => {
    if (window.location.pathname === '/privacy') {
      setShowPrivacy(true);
    } else if (window.location.pathname === '/refund-policy') {
      setShowRefund(true);
    } else if (window.location.pathname === '/terms') {
      setShowTerms(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const trail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setCursorTrails(prev => [...prev.slice(-8), trail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorTrails(prev => prev.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-reveal]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';

      const script = document.createElement('script');
      script.src = 'https://safeclick.kenjiai.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  useEffect(() => {
    const reviewScript = document.createElement('script');
    reviewScript.type = 'text/javascript';
    reviewScript.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    reviewScript.async = true;
    document.body.appendChild(reviewScript);

    return () => {
      if (reviewScript.parentNode) {
        reviewScript.parentNode.removeChild(reviewScript);
      }
    };
  }, []);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const metrics = [
    { value: '86,050', label: 'Appointments Booked', growth: 'Real Results' },
    { value: '830', label: 'Confirmed Clients', growth: 'And Growing' },
    { value: '$1.6B', label: 'In Total Sales', growth: 'Generated' },
    { value: '12+', label: 'Years Experience', growth: 'Since 2013' }
  ];

  const brands = [
    { name: 'Kia', color: '#BB162B' },
    { name: 'Hyundai', color: '#002C5F' },
    { name: 'Pepsi', color: '#004B93' },
    { name: 'Coca-Cola', color: '#F40009' },
    { name: 'Family First Life', color: '#0066CC' },
    { name: 'Ethos Insurance', color: '#6B4CE6' },
    { name: 'Mutual of Omaha', color: '#003DA5' },
    { name: 'Primerica', color: '#004990' },
    { name: 'Symmetry Financial', color: '#E74C3C' },
    { name: 'American Income Life', color: '#C41E3A' },
    { name: 'TransAmerica', color: '#005EB8' },
    { name: 'Globe Life', color: '#1E90FF' },
    { name: 'Foresters Financial', color: '#006747' },
    { name: 'National Life Group', color: '#00457C' },
    { name: 'Royal Plumbing', color: '#FF6B35' },
    { name: 'Premier HVAC', color: '#00A8E1' },
    { name: 'Elite Roofing Co', color: '#2C3E50' },
    { name: 'HomeGuard Security', color: '#E74C3C' },
    { name: 'ProClean Services', color: '#27AE60' },
    { name: 'Apex Home Solutions', color: '#F39C12' },
    { name: 'Champion Exteriors', color: '#8E44AD' },
    { name: 'TrustShield Insurance', color: '#3498DB' },
    { name: 'SafeHaven Coverage', color: '#16A085' },
    { name: 'Liberty Home Pros', color: '#D35400' },
    { name: 'FirstRate Contractors', color: '#C0392B' },
    { name: 'Summit Restoration', color: '#7F8C8D' },
    { name: 'Precision Air Systems', color: '#2980B9' },
    { name: 'Guardian Property Care', color: '#27AE60' },
    { name: 'Heritage Remodeling', color: '#8B4513' },
    { name: 'Quantum Solar Solutions', color: '#F1C40F' },
    { name: 'ProTech Home Services', color: '#34495E' },
    { name: 'Evergreen Landscaping', color: '#2ECC71' },
    { name: 'Diamond Windows & Doors', color: '#9B59B6' },
    { name: 'Superior Life Insurance', color: '#1ABC9C' },
    { name: 'Velocity HVAC & Plumbing', color: '#E67E22' },
    { name: 'Titan Home Improvement', color: '#95A5A6' },
    { name: 'BlueSky Coverage Group', color: '#3498DB' },
    { name: 'MasterCraft Builders', color: '#D68910' },
    { name: 'SecureLife Partners', color: '#884EA0' }
  ];

  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleCardTiltReset = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const handleMagneticButton = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    (button as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMagneticButtonReset = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    (button as HTMLElement).style.transform = 'translate(0, 0)';
  };

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => {
      setShowPrivacy(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  if (showRefund) {
    return <RefundPolicy onBack={() => {
      setShowRefund(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  if (showTerms) {
    return <TermsOfService onBack={() => {
      setShowTerms(false);
      window.history.pushState({}, '', '/');
    }} />;
  }

  if (showGame) {
    return <PaidAdsGame onBack={() => setShowGame(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <SEOHead />
      {/* Holiday Effects */}
      {holidayTheme && (
        <>
          <HolidayBanner theme={holidayTheme} />
          <HolidayParticles theme={holidayTheme} />
        </>
      )}

      {/* Cursor Trails */}
      {cursorTrails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / cursorTrails.length * 0.5,
            transform: `translate(-50%, -50%) scale(${(index + 1) / cursorTrails.length})`
          }}
        />
      ))}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
        {/* Animated Background */}
        <div
          className="absolute inset-0 opacity-25 parallax-layer"
          style={{
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`
          }}
        >
          <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-400 rounded-full mix-blend-lighten filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-400 rounded-full mix-blend-lighten filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-lighten filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <div
            className="mb-8 flex justify-center parallax-layer"
            style={{
              transform: `translate3d(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px, 0)`
            }}
          >
            <img
              src="/tmp75mtgp0b-removebg-preview.png"
              alt="Media Traffics Logo"
              className="w-40 h-40 object-contain animate-float drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))' }}
            />
          </div>

          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Trusted by 830+ Businesses Since 2013
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-white">Generate</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Qualified Leads
            </span>
            <br />
            <span className="text-white">That Turn Into</span>{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              $1.6B in Sales
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop wasting money on ads that don't convert. Our proven system has booked <span className="text-cyan-400 font-bold">86,050 appointments</span> and generated billions in revenue for businesses just like yours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={openModal}
              onMouseMove={handleMagneticButton}
              onMouseLeave={handleMagneticButtonReset}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ripple-effect"
              style={{ transition: 'transform 0.3s ease' }}
            >
              <Calendar className="w-5 h-5" />
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://go.mediatraffics.com/price"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMagneticButton}
              onMouseLeave={handleMagneticButtonReset}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              style={{ transition: 'transform 0.3s ease' }}
            >
              View Case Studies
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Game Button */}
          <div className="flex justify-center mb-16">
            <button
              onClick={() => setShowGame(true)}
              onMouseMove={handleMagneticButton}
              onMouseLeave={handleMagneticButtonReset}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ripple-effect"
              style={{ transition: 'transform 0.3s ease' }}
            >
              <Gamepad2 className="w-5 h-5" />
              Try Our FREE Paid Ads Game
              <Sparkles className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400 opacity-60" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        id="brands"
        data-reveal
        className={`py-20 bg-gradient-to-b from-gray-900 to-gray-800 ${visibleSections.has('brands') ? 'reveal-on-scroll' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Trusted By <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-gray-400 text-lg">Powering growth for insurance agencies and home service companies nationwide</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group relative tilt-card flex items-center justify-center p-4"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardTiltReset}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const fakeEvent = new MouseEvent('mousemove', {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                  });
                  handleCardTilt(fakeEvent as any);
                }}
                onTouchEnd={(e) => {
                  handleCardTiltReset(e as any);
                }}
              >
                <div className="text-lg md:text-xl font-bold text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 text-center">
                  {brand.name}
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl rounded-lg"
                  style={{ backgroundColor: brand.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Metrics Section */}
      <section
        id="metrics"
        data-reveal
        className={`py-20 bg-gradient-to-b from-gray-800 to-gray-900 ${visibleSections.has('metrics') ? 'reveal-on-scroll' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Real Results
              </span>
              {' '}That Matter
            </h2>
            <p className="text-gray-400 text-lg">Live performance metrics from our systems</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 cursor-pointer tilt-card ${
                  activeMetric === index
                    ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-cyan-500/50 shadow-xl shadow-cyan-500/20 pulse-glow'
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setActiveMetric(index)}
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardTiltReset}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const fakeEvent = new MouseEvent('mousemove', {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                  });
                  handleCardTilt(fakeEvent as any);
                }}
                onTouchEnd={(e) => {
                  handleCardTiltReset(e as any);
                }}
              >
                <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                <div className="text-gray-400 mb-2">{metric.label}</div>
                <div className="text-emerald-400 text-sm font-semibold">{metric.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-reveal
        className={`py-20 bg-gradient-to-b from-gray-900 to-gray-950 ${visibleSections.has('services') ? 'reveal-on-scroll' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Expertise in <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Paid Ads</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We specialize in results-driven paid advertising campaigns that convert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 tilt-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltReset}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const fakeEvent = new MouseEvent('mousemove', {
                  clientX: touch.clientX,
                  clientY: touch.clientY
                });
                handleCardTilt(fakeEvent as any);
              }}
              onTouchEnd={(e) => {
                handleCardTiltReset(e as any);
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Client Generation Loop</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our proprietary system that generates high-quality leads and converts them into paying clients consistently.
              </p>
              <a
                href="https://go.mediatraffics.com/price"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div
              className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 tilt-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltReset}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const fakeEvent = new MouseEvent('mousemove', {
                  clientX: touch.clientX,
                  clientY: touch.clientY
                });
                handleCardTilt(fakeEvent as any);
              }}
              onTouchEnd={(e) => {
                handleCardTiltReset(e as any);
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kenji AI</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolutionary AI-powered platform that automates and optimizes your marketing campaigns for maximum ROI.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://kenjiai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all"
                >
                  Visit Kenji AI <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="https://app.kenjiai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Login
                </a>
              </div>
            </div>

            <div
              className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 tilt-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltReset}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const fakeEvent = new MouseEvent('mousemove', {
                  clientX: touch.clientX,
                  clientY: touch.clientY
                });
                handleCardTilt(fakeEvent as any);
              }}
              onTouchEnd={(e) => {
                handleCardTiltReset(e as any);
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results-Driven Paid Ads</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expert paid advertising management across all major platforms with proven strategies that deliver measurable results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Facebook & Instagram Ads
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Google Ads & Search
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  LinkedIn & B2B Campaigns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        data-reveal
        className={`py-20 bg-gradient-to-b from-gray-900 to-black ${visibleSections.has('reviews') ? 'reveal-on-scroll' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-lg">Real results from real businesses</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/q5L4ttbBMHNxieXIcTVJ?widgetId=692894dfd5318a0745d7ec3e"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: '100%', width: '100%', minHeight: '600px', border: 'none' }}
              title="Client Reviews"
            />
          </div>
        </div>
      </section>

      {/* Gift Card Section */}
      <GiftCardSection
        onMouseMove={handleCardTilt}
        onMouseLeave={handleCardTiltReset}
      />

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        data-reveal
        className={`py-20 bg-gradient-to-b from-gray-950 to-gray-900 ${visibleSections.has('why-us') ? 'reveal-on-scroll' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Business Owners <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center p-8 tilt-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltReset}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                <Award className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">12+ Years Proven Track Record</h3>
              <p className="text-gray-400 leading-relaxed">
                Since 2013, we've helped hundreds of businesses scale their lead generation and revenue.
              </p>
            </div>

            <div
              className="text-center p-8 tilt-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltReset}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <BarChart3 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data-Driven Results</h3>
              <p className="text-gray-400 leading-relaxed">
                Every campaign is optimized with real-time data and analytics to maximize your return on investment.
              </p>
            </div>

            <div
              className="text-center p-8 tilt-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltReset}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Target className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualified Lead Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                We don't just drive traffic—we generate high-quality leads that convert into paying customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-emerald-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Scale Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust Media Traffics to generate qualified leads and drive revenue growth.
          </p>
          <button
            onClick={openModal}
            onMouseMove={handleMagneticButton}
            onMouseLeave={handleMagneticButtonReset}
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 ripple-effect pulse-glow"
            style={{ transition: 'transform 0.3s ease' }}
          >
            <Calendar className="w-6 h-6" />
            Book Your Strategy Call
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl border border-cyan-500/30 max-h-[90vh] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Book Your Strategy Call</h3>
                  <p className="text-sm text-gray-400">Let's discuss how we can grow your business</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors group"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              <iframe
                src="https://safeclick.kenjiai.com/widget/booking/jB82SG2CBq9Nh8103IfC"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
                scrolling="no"
                id="BcIemEVdNzY7eDxTJD3q_1764266989786"
                title="Booking Calendar"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <img
                src="/tmp75mtgp0b-removebg-preview.png"
                alt="Media Traffics Logo"
                className="w-12 h-12 object-contain drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))' }}
              />
              <div>
                <div className="font-bold text-lg">Media Traffics LLC</div>
                <div className="text-gray-400 text-sm">Innovating Since 2013</div>
                <div className="text-gray-500 text-xs mt-1">Led by Yousif Alias & Brian Silverston</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-cyan-400">Quick Links</h4>
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <a href="https://go.mediatraffics.com/price" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Client Generation Loop</a>
                <a href="https://kenjiai.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Kenji AI</a>
                <a href="https://app.kenjiai.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Login</a>
                <a href="https://go.mediatraffics.com/video" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Partner With Us</a>
                <a href="https://voice.kenjiai.com/try" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Try Voice Front Desk</a>
                <a href="https://freedom.kenjiai.com/1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Join Ads Training</a>
                <button
                  onClick={() => {
                    setShowPrivacy(true);
                    window.history.pushState({}, '', '/privacy');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => {
                    setShowTerms(true);
                    window.history.pushState({}, '', '/terms');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => {
                    setShowRefund(true);
                    window.history.pushState({}, '', '/refund-policy');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Refund Policy
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-cyan-400">Contact Us</h4>
              <NAPInfo variant="compact" showIcons={true} className="text-sm" />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 mt-6">
            <div className="text-center text-gray-600 text-sm space-y-2">
              <p>© 2013-2026 Media Traffics LLC. All Rights Reserved.</p>
              <p className="text-xs">Expert Paid Advertising for Insurance Agencies & Home Service Companies</p>
              <div className="flex justify-center gap-4 text-xs mt-3">
                <button
                  onClick={() => {
                    setShowPrivacy(true);
                    window.history.pushState({}, '', '/privacy');
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  Privacy
                </button>
                <button
                  onClick={() => {
                    setShowTerms(true);
                    window.history.pushState({}, '', '/terms');
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  Terms
                </button>
                <button
                  onClick={() => {
                    setShowRefund(true);
                    window.history.pushState({}, '', '/refund-policy');
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  Refunds
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Social Proof Notifications */}
      <SocialProofNotification />
    </div>
  );
}

export default App;
