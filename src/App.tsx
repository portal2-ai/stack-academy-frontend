import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, Search, Menu, ChevronDown, X, Shield, Database, Cpu, PenTool, Twitter, Instagram, Dribbble, Github, GraduationCap, Users, BookOpen, Linkedin, ChevronLeft, ChevronRight, ArrowLeft, Aperture, Command, Layers, Edit2, Feather, Plus } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Constants & Data ---
const IMAGES = [
  "https://images.unsplash.com/photo-1544502062-f82887f03d1c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1578301978693-85fa9c026f19?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
];

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" fill="#0F0F0F" rx="8"/>
    <path d="M 32 25 L 24 25 L 24 75 L 32 75" stroke="#F2F1E8" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter"/>
    <path d="M 68 25 L 76 25 L 76 75 L 68 75" stroke="#F2F1E8" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter"/>
    <line x1="36" y1="40" x2="64" y2="40" stroke="#F2F1E8" strokeWidth="6" strokeLinecap="round"/>
    <line x1="36" y1="52" x2="56" y2="52" stroke="#8C8C8C" strokeWidth="6" strokeLinecap="round"/>
    <line x1="36" y1="64" x2="48" y2="64" stroke="#E5FF00" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

// --- Helper Components ---
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: any) => {
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Sections ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAkademiyaOpen, setIsAkademiyaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const programs = [
    { name: "Kibertəhlükəsizlik", desc: "Məlumatların qorunması", icon: Shield, color: "text-blue-600", bg: "bg-blue-50", link: "/proqramlar/kibertehlukesizlik" },
    { name: "Data Analitikası", desc: "Məlumatların təhlili", icon: Database, color: "text-emerald-600", bg: "bg-emerald-50", link: "/proqramlar/data-analitikasi" },
    { name: "Süni İntellekt", desc: "Gələcəyin texnologiyası", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50", link: "/proqramlar/suni-intellekt" },
    { name: "UI/UX Dizayn", desc: "İstifadəçi təcrübəsi", icon: PenTool, color: "text-orange-600", bg: "bg-orange-50", link: "/proqramlar/ui-ux-dizayn" },
  ];

  const akademiya = [
    { name: "Təlimçilər", desc: "Peşəkar müəllim heyəti", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50", link: "/telimciler" },
    { name: "Məzunlar", desc: "Uğur hekayələrimiz", icon: GraduationCap, color: "text-rose-600", bg: "bg-rose-50", link: "/mezunlar" },
    { name: "Bloq", desc: "Faydalı məqalələr", icon: BookOpen, color: "text-amber-600", bg: "bg-amber-50", link: "/bloq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] bg-[#FDFDFD]/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight uppercase">Stack Academy</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/proqramlar" className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors py-2">
              Proqramlar <ChevronDown className="w-4 h-4" />
            </Link>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-3 grid gap-1"
                >
                  {programs.map((prog, idx) => (
                    <Link key={idx} to={prog.link} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${prog.bg} ${prog.color} group-hover:scale-110 transition-transform`}>
                        <prog.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{prog.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{prog.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsAkademiyaOpen(true)}
            onMouseLeave={() => setIsAkademiyaOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Akademiya <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {isAkademiyaOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-3 grid gap-1"
                >
                  {akademiya.map((item, idx) => (
                    <Link key={idx} to={item.link} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/haqqimizda" className="hover:text-black transition-colors">Haqqımızda</Link>
          <Link to="/elaqe" className="hover:text-black transition-colors">Əlaqə</Link>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onOpenModal} className="hidden lg:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Müraciət Et
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <div className="font-semibold text-gray-900 mb-2">Proqramlar</div>
              <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-gray-100 mb-4">
                {programs.map((prog, idx) => (
                  <Link key={idx} to={prog.link} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2">
                    <prog.icon className={`w-4 h-4 ${prog.color}`} />
                    <span className="text-sm font-medium text-gray-700">{prog.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="font-semibold text-gray-900 mb-2">Akademiya</div>
              <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-gray-100 mb-4">
                {akademiya.map((item, idx) => (
                  <Link key={idx} to={item.link} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </Link>
                ))}
              </div>

              <Link to="/haqqimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 py-2">Haqqımızda</Link>
              <Link to="/elaqe" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-900 py-2">Əlaqə</Link>
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }} className="w-full mt-4 px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                Müraciət Et
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HERO_IMAGES = [
  { id: 'img0', src: IMAGES[0], z: 50, fan: { x: 0, y: 0, r: 0 }, showcase: { x: -60, y: -60, r: -8 } },
  { id: 'img1', src: IMAGES[1], z: 40, fan: { x: -140, y: 15, r: -8 }, showcase: { x: -30, y: -30, r: -4 } },
  { id: 'img2', src: IMAGES[2], z: 30, fan: { x: 140, y: 15, r: 8 }, showcase: { x: 0, y: 0, r: 0 } },
  { id: 'img3', src: IMAGES[3], z: 20, fan: { x: -280, y: 45, r: -16 }, showcase: { x: 30, y: 30, r: 4 } },
  { id: 'img4', src: IMAGES[4], z: 10, fan: { x: 280, y: 45, r: 16 }, showcase: { x: 60, y: 60, r: 8 } },
];

const Hero = ({ isScrolled }: { isScrolled?: boolean }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 100); // Text 1
    const t2 = setTimeout(() => setStage(2), 800); // Image 1 flies in
    const t3 = setTimeout(() => setStage(3), 1800); // Text 2, stack images
    const t4 = setTimeout(() => setStage(4), 2600); // Fan out
    const t5 = setTimeout(() => setStage(5), 3400); // Chat bubbles & buttons
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  return (
    <section className="pt-40 pb-20 px-6 flex flex-col items-center text-center min-h-screen relative overflow-hidden bg-[#FAFAFA]">
      <div className="relative z-10 h-32 md:h-48 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter max-w-5xl mx-auto leading-[1.1] text-gray-900">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            Gələcəyin IT Bacarıqları
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            Buradan Başlayır.
          </motion.span>
        </h1>
      </div>

      <div className="relative h-[350px] md:h-[450px] w-full max-w-5xl mx-auto mt-10 flex justify-center items-center z-20 pointer-events-none">
          {!isScrolled && HERO_IMAGES.map((img, i) => {
            let isVisible = false;
            let isStacked = false;
            let isFanned = false;

            if (i === 0) {
              if (stage >= 2) isVisible = true;
              if (stage >= 3) isStacked = true;
              if (stage >= 4) isFanned = true;
            } else {
              if (stage >= 3) {
                isVisible = true;
                isStacked = true;
              }
              if (stage >= 4) isFanned = true;
            }

            return (
              <motion.div
                key={img.id}
                layoutId={img.id}
                initial={{ opacity: 0, y: 400, x: 0, rotate: 30, scale: 0.8 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isFanned ? img.fan.y : (isStacked ? 0 : (isVisible ? 0 : 400)), 
                  x: isFanned ? img.fan.x : 0, 
                  rotate: isFanned ? img.fan.r : (isStacked ? (i % 2 === 0 ? -2 : 2) : (isVisible ? -5 : 30)), 
                  scale: isVisible ? 1 : 0.8 
                }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 80,
                  mass: 1
                }}
                className="absolute origin-bottom pointer-events-auto"
                style={{ zIndex: img.z }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden border-4 border-white bg-gray-100">
                  <img src={img.src} alt="Art" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            );
          })}

        {/* Chat Bubbles */}
          {!isScrolled && (
            <>
              <motion.div
                layoutId="bubble1"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: stage >= 5 ? 1 : 0, scale: stage >= 5 ? 1 : 0, y: stage >= 5 ? 0 : 20 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                className="absolute z-50 top-10 left-[15%] md:left-[25%] -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-bl-sm font-medium text-sm shadow-xl"
              >
                @kibertəhlükəsizlik
              </motion.div>
              
              <motion.div
                layoutId="bubble2"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: stage >= 5 ? 1 : 0, scale: stage >= 5 ? 1 : 0, y: stage >= 5 ? 0 : 20 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
                className="absolute z-50 top-20 right-[15%] md:right-[25%] translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-2 rounded-2xl rounded-br-sm font-medium text-sm shadow-xl"
              >
                @proqramlaşdırma
              </motion.div>
            </>
          )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: stage >= 5 ? 1 : 0, y: stage >= 5 ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 max-w-md mx-auto relative z-10"
      >
        <p className="text-gray-500 mb-8 text-lg">
          Müasir texnologiyaları öyrənin və karyeranızı bizimlə qurun.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/proqramlar" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Proqramlar
          </Link>
          <Link to="/telimciler" className="px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-gray-300 transition-colors bg-white">
            Təlimçilər
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const Showcase = ({ onOpenModal, isScrolled }: { onOpenModal: () => void, isScrolled?: boolean }) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Proqramlar</p>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
            Kibertəhlükəsizlik, AI və Data Sahələrində Karyeranı İnkişaf Etdir
          </h2>
          <p className="text-gray-500 mb-8 text-lg max-w-md">
            Stack Academy-də AI, Kibertəhlükəsizlik, Data Analitika və Dizayn sahələrində müasir və praktik təhsil proqramları.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/proqramlar" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Proqramlara Bax
            </Link>
            <button 
              onClick={onOpenModal}
              className="px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-gray-300 transition-colors"
            >
              Ətraflı Məlumat
            </button>
          </div>
        </FadeIn>
      </div>
      <div className="relative h-[500px] hidden md:flex justify-center items-center">
          {isScrolled && HERO_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              layoutId={img.id}
              initial={false}
              animate={{ opacity: 1, x: img.showcase.x, y: img.showcase.y, rotate: img.showcase.r, scale: 1 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 80
              }}
              className="absolute origin-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden border-4 border-white bg-gray-100 w-48 h-48 md:w-64 md:h-64"
              style={{ zIndex: img.z }}
            >
              <img src={img.src} alt="Art" className="w-full h-full object-cover" />
            </motion.div>
          ))}

          {isScrolled && (
            <>
              <motion.div
                layoutId="bubble1"
                initial={false}
                animate={{ opacity: 1, scale: 1, x: -120, y: -120 }}
                transition={{ 
                  type: "spring", 
                  bounce: 0.5
                }}
                className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-bl-sm font-medium text-sm shadow-xl"
              >
                @kibertəhlükəsizlik
              </motion.div>
              
              <motion.div
                layoutId="bubble2"
                initial={false}
                animate={{ opacity: 1, scale: 1, x: 120, y: 120 }}
                transition={{ 
                  type: "spring", 
                  bounce: 0.5
                }}
                className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-2 rounded-2xl rounded-br-sm font-medium text-sm shadow-xl"
              >
                @proqramlaşdırma
              </motion.div>
            </>
          )}
      </div>
    </section>
  );
};

const Gateway = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">PANOLAR</p>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-12 max-w-3xl">
          Stack Academy-də təqdim olunan tədris istiqamətlərini və imkanları kəşf edin.
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              src={IMAGES[currentIndex + 2]} 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Gateway" 
            />
          </AnimatePresence>
          <div className="absolute top-8 left-8 flex flex-col gap-2 z-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-12 h-12 rounded-xl transition-colors duration-500 ${i === currentIndex ? 'bg-white' : 'bg-black/50 backdrop-blur'}`}></div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

const Trusted = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto text-center overflow-hidden">
    <FadeIn>
      <h2 className="text-4xl font-medium tracking-tight mb-4">Öyrənəcəyiniz Proqramlar</h2>
      <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
        Real layihələr üzərində işləyərək texnologiya və dizayn sahəsində istifadə olunan peşəkar alətləri mənimsəyin.
      </p>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 items-center whitespace-nowrap opacity-50 grayscale"
        >
          <span className="text-2xl font-bold">React</span>
          <span className="text-2xl font-bold">Node.js</span>
          <span className="text-2xl font-bold">Python</span>
          <span className="text-2xl font-bold">Figma</span>
          <span className="text-2xl font-bold">TensorFlow</span>
          <span className="text-2xl font-bold">AWS</span>
          <span className="text-2xl font-bold">Docker</span>
          <span className="text-2xl font-bold">Kubernetes</span>
          {/* Duplicate for seamless loop */}
          <span className="text-2xl font-bold">React</span>
          <span className="text-2xl font-bold">Node.js</span>
          <span className="text-2xl font-bold">Python</span>
          <span className="text-2xl font-bold">Figma</span>
          <span className="text-2xl font-bold">TensorFlow</span>
          <span className="text-2xl font-bold">AWS</span>
          <span className="text-2xl font-bold">Docker</span>
          <span className="text-2xl font-bold">Kubernetes</span>
        </motion.div>
      </div>
    </FadeIn>
  </section>
);

const STATEMENT_IMAGES = [
  { id: 'stmt0', src: IMAGES[3], z: 60, stack: { x: 0, y: 0, r: 0 } },
  { id: 'stmt1', src: IMAGES[4], z: 50, stack: { x: 10, y: -10, r: 4 } },
  { id: 'stmt2', src: IMAGES[5], z: 40, stack: { x: 20, y: -20, r: 8 } },
  { id: 'stmt3', src: IMAGES[6], z: 30, stack: { x: 30, y: -30, r: 12 } },
  { id: 'stmt4', src: IMAGES[7], z: 20, stack: { x: 40, y: -40, r: 16 } },
  { id: 'stmt5', src: IMAGES[0], z: 10, stack: { x: 50, y: -50, r: 20 } },
];

const Statement = ({ isScrolled }: { isScrolled?: boolean }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [0.3, 1]);

  return (
    <section className="py-32 px-6 relative min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto relative z-10 text-center flex items-center justify-center min-h-[60vh]">
        <motion.h2 style={{ scale, opacity }} className="text-4xl md:text-7xl font-medium leading-[1.1] tracking-tight text-gray-900 relative z-0">
          Texnologiya sahəsində karyera qurmaq istəyən hər kəs üçün Stack Academy müasir tədris proqramları, real layihələr və təcrübəli müəllimlərlə inkişaf imkanı yaradır.
        </motion.h2>

        <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
            {!isScrolled && STATEMENT_IMAGES.map((img, i) => (
              <motion.div
                key={img.id}
                layoutId={img.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, x: img.stack.x, y: img.stack.y, rotate: img.stack.r }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 80
                }}
                className="absolute origin-bottom pointer-events-auto"
                style={{ zIndex: img.z }}
              >
                <div className="w-48 h-64 md:w-56 md:h-72 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden border-4 border-white bg-gray-100">
                  <img src={img.src} alt="Art" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Vision = ({ isScrolled, visionRef }: { isScrolled?: boolean, visionRef?: React.RefObject<HTMLElement | null> }) => (
  <section ref={visionRef} className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-screen">
    <div>
      <FadeIn>
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
          Stack Academy Məzunları
        </h2>
        <p className="text-gray-500 mb-8 text-lg max-w-md">
          Hər bir sətir kod bir hekayə danışır. Stack Academy tələbələrə öz fərdi səyahətlərini layihələri vasitəsilə nümayiş etdirməyə imkan verir.
        </p>
        <Link to="/mezunlar" className="inline-block px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-gray-300 transition-colors mb-16">
          Ətraflı oxu
        </Link>
        
        {/* Icons */}
        <div className="flex flex-wrap gap-4 max-w-xs">
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><PenTool className="w-5 h-5" /></div>
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Aperture className="w-5 h-5" /></div>
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Command className="w-5 h-5" /></div>
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Layers className="w-5 h-5" /></div>
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Edit2 className="w-5 h-5" /></div>
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"><Feather className="w-5 h-5" /></div>
        </div>
      </FadeIn>
    </div>
    
    <div className="relative w-full">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100">
        {/* Grid */}
        <div className="p-6 bg-gray-50/50 min-h-[400px] rounded-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {isScrolled && STATEMENT_IMAGES.map((img, i) => (
                <motion.div
                  key={img.id}
                  layoutId={img.id}
                  initial={false}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 80
                  }}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm bg-white"
                  style={{ zIndex: img.z }}
                >
                  <img src={img.src} alt="Art" className="w-full h-full object-cover" />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Story = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <FadeIn className="text-center mb-16">
      <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">Məqalələr və Tövsiyələr</p>
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl mx-auto">
        Texnologiya dünyasında yeniliklər, tədris proqramları və praktik tövsiyələr ilə tanış olun.
      </h2>
    </FadeIn>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mockBlogs.slice(0, 3).map((post, idx) => (
        <FadeIn key={idx} delay={idx * 0.1}>
          <Link to={`/bloq/${post.slug}`} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group block">
            <div className="h-48 overflow-hidden">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-medium mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-500 mb-6 line-clamp-3 flex-grow">{post.content}</p>
              <div className="flex items-center justify-between border-t border-gray-50 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">{post.author.charAt(0)}</div>
                  <div className="text-sm font-medium">{post.author}</div>
                </div>
                <div className="text-xs text-gray-400">{post.readingTime} dəq oxuma</div>
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  </section>
);

const Trainers = () => {
  // Top row variations (size and vertical offset)
  const topRowVariations = [
    { size: 'w-24 h-24 md:w-32 md:h-32', y: '-translate-y-8' },
    { size: 'w-32 h-32 md:w-40 md:h-40', y: 'translate-y-12' },
    { size: 'w-28 h-28 md:w-36 md:h-36', y: '-translate-y-16' },
    { size: 'w-20 h-20 md:w-28 md:h-28', y: 'translate-y-4' },
    { size: 'w-36 h-36 md:w-48 md:h-48', y: '-translate-y-10' },
    { size: 'w-24 h-24 md:w-32 md:h-32', y: 'translate-y-16' },
    { size: 'w-32 h-32 md:w-40 md:h-40', y: '-translate-y-6' },
    { size: 'w-28 h-28 md:w-36 md:h-36', y: 'translate-y-8' },
  ];

  // Bottom row variations
  const bottomRowVariations = [
    { size: 'w-28 h-28 md:w-36 md:h-36', y: 'translate-y-8' },
    { size: 'w-36 h-36 md:w-48 md:h-48', y: '-translate-y-12' },
    { size: 'w-24 h-24 md:w-32 md:h-32', y: 'translate-y-16' },
    { size: 'w-32 h-32 md:w-40 md:h-40', y: '-translate-y-6' },
    { size: 'w-20 h-20 md:w-28 md:h-28', y: 'translate-y-10' },
    { size: 'w-28 h-28 md:w-36 md:h-36', y: '-translate-y-16' },
    { size: 'w-24 h-24 md:w-32 md:h-32', y: 'translate-y-4' },
    { size: 'w-36 h-36 md:w-48 md:h-48', y: '-translate-y-8' },
  ];

  const repeatedTeachers = [...mockTeachers, ...mockTeachers, ...mockTeachers, ...mockTeachers];

  return (
    <section className="py-24 overflow-hidden relative bg-white flex flex-col items-center justify-center min-h-screen">
      
      {/* Top Row - Sliding Left */}
      <div className="w-full relative flex flex-col gap-8 mb-8">
        <div className="flex overflow-hidden group py-16">
          <div className="flex gap-8 md:gap-12 items-center whitespace-nowrap animate-marquee-left group-hover:[animation-play-state:paused]">
            {repeatedTeachers.map((teacher, i) => {
              const variation = topRowVariations[i % topRowVariations.length];
              return (
                <Link key={i} to="/telimciler" state={{ teacherIndex: i % mockTeachers.length }} 
                  className={`block ${variation.size} ${variation.y} rounded-[2rem] overflow-hidden flex-shrink-0 transition-transform hover:scale-110 shadow-sm`}>
                  <img src={teacher.profilePhoto} className="w-full h-full object-cover" alt={teacher.fullName} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Center Text Area */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-6 my-4">
        <FadeIn>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200 shadow-sm">
            <Users className="w-4 h-4 text-gray-800" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-gray-900">
            Təlimçilər
          </h2>
          <p className="text-gray-900 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Təcrübəli müəllimlərimizlə real layihələr üzərində öyrənin və bacarıqlarınızı inkişaf etdirin.
          </p>
        </FadeIn>
      </div>

      {/* Bottom Row - Sliding Right */}
      <div className="w-full relative flex flex-col gap-8 mt-8">
        <div className="flex overflow-hidden group py-16">
          <div className="flex gap-8 md:gap-12 items-center whitespace-nowrap animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...repeatedTeachers].reverse().map((teacher, i) => {
              const variation = bottomRowVariations[i % bottomRowVariations.length];
              return (
                <Link key={i} to="/telimciler" state={{ teacherIndex: (mockTeachers.length - 1 - (i % mockTeachers.length)) }} 
                  className={`block ${variation.size} ${variation.y} rounded-[2rem] overflow-hidden flex-shrink-0 transition-transform hover:scale-110 shadow-sm`}>
                  <img src={teacher.profilePhoto} className="w-full h-full object-cover" alt={teacher.fullName} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <footer className="mt-24 bg-gray-50 pt-24">
    <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
      <h2 className="text-3xl font-medium tracking-tight">Məzunlarımızın işlədiyi şirkətlər</h2>
    </div>
    <div className="overflow-hidden whitespace-nowrap py-12 flex items-center border-y border-black/5 mb-24">
      <div className="flex gap-16 items-center animate-marquee-left">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="w-full h-full object-contain" alt="Google" referrerPolicy="no-referrer"/></span>
            <span className="w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="w-full h-full object-contain" alt="Amazon" referrerPolicy="no-referrer"/></span>
            <span className="w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="w-full h-full object-contain" alt="Microsoft" referrerPolicy="no-referrer"/></span>
            <span className="w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" className="w-full h-full object-contain" alt="Meta" referrerPolicy="no-referrer"/></span>
            <span className="w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-full h-full object-contain" alt="Apple" referrerPolicy="no-referrer"/></span>
          </React.Fragment>
        ))}
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 mb-24">
      <div className="bg-blue-600 text-white rounded-[2.5rem] p-12 h-[400px] flex flex-col justify-between relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-5xl font-medium tracking-tight mb-4">Karyeranıza<br/>Başlayın</h3>
          <p className="text-blue-100 max-w-xs mb-8">Təcrübəli müəllimlərimizlə real layihələr üzərində öyrənin və bacarıqlarınızı inkişaf etdirin.</p>
          <button onClick={onOpenModal} className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">Müraciət Et</button>
        </div>
        <img src={IMAGES[8]} className="absolute right-0 bottom-0 w-2/3 h-full object-cover object-right transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-overlay" alt="" referrerPolicy="no-referrer"/>
      </div>
      
      <div className="bg-white rounded-[2.5rem] p-12 h-[400px] flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-black/5 border border-gray-100">
        <div className="relative z-10">
          <h3 className="text-5xl font-medium tracking-tight mb-4">Yeni<br/>Bacarıqlar</h3>
          <p className="text-gray-500 max-w-xs mb-8">Stack Academy ilə texnologiya sahəsində peşəkar kimi yetişin.</p>
          <Link to="/proqramlar" className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">Proqramlar</Link>
        </div>
        <img src={IMAGES[3]} className="absolute right-0 bottom-0 w-2/3 h-full object-cover object-right transition-transform duration-700 group-hover:scale-105 opacity-50" alt="" referrerPolicy="no-referrer"/>
      </div>
    </div>
    
    <div className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-bold tracking-tight uppercase">Stack Academy</span>
            </Link>
            <p className="text-gray-500 text-base mb-8 max-w-sm leading-relaxed">
              Gələcəyin IT mütəxəssislərini yetişdirən, müasir tədris metodikası və real layihələr əsasında qurulmuş innovativ təhsil mərkəzi.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-6 uppercase tracking-wider text-sm">Proqramlar</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/proqramlar/kibertehlukesizlik" className="text-gray-500 hover:text-blue-600 transition-colors">Kibertəhlükəsizlik</Link></li>
              <li><Link to="/proqramlar/data-analitikasi" className="text-gray-500 hover:text-blue-600 transition-colors">Data Analitikası</Link></li>
              <li><Link to="/proqramlar/suni-intellekt" className="text-gray-500 hover:text-blue-600 transition-colors">Süni İntellekt</Link></li>
              <li><Link to="/proqramlar/ui-ux-dizayn" className="text-gray-500 hover:text-blue-600 transition-colors">UI/UX Dizayn</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-6 uppercase tracking-wider text-sm">Akademiya</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/telimciler" className="text-gray-500 hover:text-blue-600 transition-colors">Təlimçilər</Link></li>
              <li><Link to="/mezunlar" className="text-gray-500 hover:text-blue-600 transition-colors">Məzunlar</Link></li>
              <li><Link to="/bloq" className="text-gray-500 hover:text-blue-600 transition-colors">Bloq</Link></li>
              <li><Link to="/haqqimizda" className="text-gray-500 hover:text-blue-600 transition-colors">Haqqımızda</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-semibold text-gray-900 mb-6 uppercase tracking-wider text-sm">Xəbərlərə Abunə Ol</h4>
            <p className="text-gray-500 mb-4">Ən son yeniliklər və təlimlərdən xəbərdar olmaq üçün e-poçt ünvanınızı qeyd edin.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-poçt ünvanınız" 
                className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                required
              />
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                Abunə Ol
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Stack Academy. Bütün hüquqlar qorunur.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-gray-400 hover:text-gray-900 transition-colors">Məxfilik Siyasəti</Link>
            <Link to="/" className="text-gray-400 hover:text-gray-900 transition-colors">İstifadə Şərtləri</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Home = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const visionRef = useRef<HTMLElement>(null);
  const isStatementScrolled = useInView(visionRef, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(prev => {
        if (latest > 250 && !prev) return true;
        if (latest <= 250 && prev) return false;
        return prev;
      });
    });
  }, [scrollY]);

  return (
    <main>
      <Hero isScrolled={isScrolled} />
      <Showcase onOpenModal={onOpenModal} isScrolled={isScrolled} />
      <Gateway />
      <Trusted />
      <Statement isScrolled={isStatementScrolled} />
      <Vision visionRef={visionRef} isScrolled={isStatementScrolled} />
      <Story />
      <Trainers />
    </main>
  );
};

const mockPrograms = [
  {
    title: "Kibertəhlükəsizlik",
    slug: "kibertehlukesizlik",
    icon: Shield,
    bannerImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Məlumatların qorunması və şəbəkə təhlükəsizliyi üzrə mütəxəssis olun.",
    longDescription: "Kibertəhlükəsizlik proqramı sizə müasir təhlükəsizlik təhdidlərini anlamaq, sistemləri qorumaq və kiber hücumların qarşısını almaq üçün lazım olan bilik və bacarıqları öyrədir. Bu proqram vasitəsilə siz şəbəkə təhlükəsizliyi, etik hakinq, kriptoqrafiya və informasiya təhlükəsizliyi idarəetməsi kimi mövzuları dərindən mənimsəyəcəksiniz.",
    totalDuration: 6,
    lessonHours: 120,
    color: "text-blue-600",
    bg: "bg-blue-50",
    syllabusModules: [
      { title: "Şəbəkə Təhlükəsizliyi Əsasları", description: "TCP/IP, OSI modeli, firewall və VPN texnologiyaları.", duration: 20 },
      { title: "Etik Hakinq və Sızma Testləri", description: "Sistemlərdəki boşluqların tapılması və aradan qaldırılması.", duration: 40 },
      { title: "Kriptoqrafiya", description: "Məlumatların şifrələnməsi və deşifrələnməsi üsulları.", duration: 30 },
      { title: "İnformasiya Təhlükəsizliyi İdarəetməsi", description: "ISO 27001 və digər təhlükəsizlik standartları.", duration: 30 },
    ],
    faqs: [
      { question: "Proqram kimlər üçündür?", answer: "Kibertəhlükəsizlik sahəsinə marağı olan, təməl IT biliklərinə sahib hər kəs üçün uyğundur." },
      { question: "Dərslər hansı formatda keçirilir?", answer: "Dərslər həm nəzəri, həm də praktiki məşğələlərdən ibarətdir. Real laboratoriya mühitində sınaqlar keçirilir." }
    ],
    teachers: [
      { fullName: "Əli Məmmədov", professionalTitle: "Kibertəhlükəsizlik Mütəxəssisi", profilePhoto: IMAGES[0] },
      { fullName: "Nərmin Quliyeva", professionalTitle: "İnformasiya Təhlükəsizliyi Auditi", profilePhoto: IMAGES[1] }
    ],
    courseGroups: [
      { name: "KIB-01", startDate: "2026-04-01", endDate: "2026-10-01", schedule: "Bazar ertəsi, Çərşənbə 19:00", capacity: 20, currentStudentCount: 15, status: "upcoming" },
      { name: "KIB-02", startDate: "2026-05-15", endDate: "2026-11-15", schedule: "Çərşənbə axşamı, Cümə axşamı 19:00", capacity: 20, currentStudentCount: 5, status: "upcoming" }
    ],
    softwareTools: [
      { name: "Kali Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" },
      { name: "Wireshark", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Wireshark_icon.svg" },
      { name: "Metasploit", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" } // Placeholder
    ]
  },
  {
    title: "Data Analitikası",
    slug: "data-analitikasi",
    icon: Database,
    bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Böyük həcmli məlumatları təhlil edərək biznes qərarlarına təsir edin.",
    longDescription: "Data Analitikası proqramı vasitəsilə məlumatların toplanması, təmizlənməsi, təhlili və vizuallaşdırılması üsullarını öyrənəcəksiniz. Python, SQL və Tableau kimi alətlərdən istifadə edərək real biznes problemlərini həll etməyi bacaracaqsınız.",
    totalDuration: 5,
    lessonHours: 100,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    syllabusModules: [
      { title: "Python ilə Data Analizi", description: "Pandas, NumPy və Matplotlib kitabxanaları ilə iş.", duration: 30 },
      { title: "SQL Əsasları", description: "Məlumat bazalarının idarə edilməsi və sorğuların yazılması.", duration: 25 },
      { title: "Data Vizuallaşdırma", description: "Tableau və Power BI ilə interaktiv dashboardların yaradılması.", duration: 25 },
      { title: "Statistika və Ehtimal", description: "Data analizi üçün riyazi əsaslar.", duration: 20 },
    ],
    faqs: [
      { question: "Proqramlaşdırma biliyi tələb olunurmu?", answer: "Xeyr, proqram sıfırdan başlayanlar üçün nəzərdə tutulub." }
    ],
    teachers: [
      { fullName: "Rəşad Əliyev", professionalTitle: "Senior Data Analitik", profilePhoto: IMAGES[2] }
    ],
    courseGroups: [
      { name: "DA-01", startDate: "2026-04-10", endDate: "2026-09-10", schedule: "Şənbə, Bazar 10:00", capacity: 25, currentStudentCount: 20, status: "upcoming" }
    ],
    softwareTools: [
      { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" }
    ]
  },
  {
    title: "Süni İntellekt",
    slug: "suni-intellekt",
    icon: Cpu,
    bannerImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Gələcəyin texnologiyası olan AI və Machine Learning alətlərini öyrənin.",
    longDescription: "Süni İntellekt proqramı sizə maşın öyrənməsi (Machine Learning), dərin öyrənmə (Deep Learning) və təbii dil emalı (NLP) kimi qabaqcıl texnologiyaları öyrədir. Bu proqramla siz ağıllı sistemlər və proqnozlaşdırma modelləri yarada biləcəksiniz.",
    totalDuration: 7,
    lessonHours: 140,
    color: "text-purple-600",
    bg: "bg-purple-50",
    syllabusModules: [
      { title: "Machine Learning Əsasları", description: "Supervised və Unsupervised learning alqoritmləri.", duration: 40 },
      { title: "Deep Learning və Neyron Şəbəkələri", description: "TensorFlow və Keras ilə dərin öyrənmə modelləri.", duration: 40 },
      { title: "Təbii Dil Emalı (NLP)", description: "Mətn məlumatlarının analizi və emalı.", duration: 30 },
      { title: "Kompüter Görməsi (Computer Vision)", description: "Təsvirlərin və videoların analizi.", duration: 30 },
    ],
    faqs: [
      { question: "Riyaziyyat biliyi vacibdirmi?", answer: "Bəli, statistika, xətti cəbr və ehtimal nəzəriyyəsi üzrə təməl biliklər tövsiyə olunur." }
    ],
    teachers: [
      { fullName: "Aynur Həsənova", professionalTitle: "AI Tədqiqatçısı", profilePhoto: IMAGES[3] }
    ],
    courseGroups: [
      { name: "AI-01", startDate: "2026-05-01", endDate: "2026-12-01", schedule: "Bazar ertəsi, Çərşənbə, Cümə 19:00", capacity: 15, currentStudentCount: 8, status: "upcoming" }
    ],
    softwareTools: [
      { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
      { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" }
    ]
  },
  {
    title: "UI/UX Dizayn",
    slug: "ui-ux-dizayn",
    icon: PenTool,
    bannerImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "İstifadəçi təcrübəsini yaxşılaşdıran və vizual olaraq cəlbedici interfeyslər yaradın.",
    longDescription: "UI/UX Dizayn proqramı rəqəmsal məhsulların istifadəçi mərkəzli dizaynını öyrədir. İstifadəçi araşdırması, wireframing, prototipləşdirmə və vizual dizayn prinsiplərini mənimsəyərək funksional və estetik interfeyslər yaradacaqsınız.",
    totalDuration: 4,
    lessonHours: 80,
    color: "text-orange-600",
    bg: "bg-orange-50",
    syllabusModules: [
      { title: "UX Araşdırma və Strategiya", description: "İstifadəçi ehtiyaclarının öyrənilməsi və persona yaradılması.", duration: 20 },
      { title: "Wireframing və Prototipləşdirmə", description: "Figma ilə interfeys eskizlərinin və interaktiv prototiplərin hazırlanması.", duration: 25 },
      { title: "UI Dizayn Prinsipləri", description: "Rəng nəzəriyyəsi, tipoqrafiya və vizual iyerarxiya.", duration: 20 },
      { title: "Dizayn Sistemləri", description: "Təkrar istifadə edilə bilən dizayn komponentlərinin yaradılması.", duration: 15 },
    ],
    faqs: [
      { question: "Dizayn proqramlarını bilmək lazımdırmı?", answer: "Xeyr, Figma və digər alətlər kurs ərzində sıfırdan öyrədilir." }
    ],
    teachers: [
      { fullName: "Leyla Kərimova", professionalTitle: "Senior Product Designer", profilePhoto: IMAGES[4] }
    ],
    courseGroups: [
      { name: "UX-01", startDate: "2026-04-20", endDate: "2026-08-20", schedule: "Çərşənbə axşamı, Cümə axşamı 19:00", capacity: 20, currentStudentCount: 18, status: "upcoming" }
    ],
    softwareTools: [
      { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" }
    ]
  }
];

const mockTeachers = [
  {
    fullName: "Əli Məmmədov",
    profilePhoto: IMAGES[0],
    professionalTitle: "Kibertəhlükəsizlik Mütəxəssisi",
    biography: "10 ildən artıq təcrübəyə malik kibertəhlükəsizlik eksperti. Müxtəlif beynəlxalq layihələrdə iştirak edib.",
    expertise: ["Şəbəkə Təhlükəsizliyi", "Etik Hakinq", "Kriptoqrafiya"],
    yearsOfExperience: 10,
    companyName: "TechSec MMC",
    socialLinks: { linkedin: "#", github: "#" }
  },
  {
    fullName: "Rəşad Əliyev",
    profilePhoto: IMAGES[2],
    professionalTitle: "Senior Data Analitik",
    biography: "Böyük verilənlərin təhlili və vizuallaşdırılması üzrə ixtisaslaşmış data mütəxəssisi.",
    expertise: ["Python", "SQL", "Tableau", "Power BI"],
    yearsOfExperience: 8,
    companyName: "DataCorp",
    socialLinks: { linkedin: "#", github: "#" }
  },
  {
    fullName: "Aynur Həsənova",
    profilePhoto: IMAGES[3],
    professionalTitle: "AI Tədqiqatçısı",
    biography: "Süni intellekt və maşın öyrənməsi sahəsində elmi tədqiqatlar aparan mütəxəssis.",
    expertise: ["Machine Learning", "Deep Learning", "NLP"],
    yearsOfExperience: 6,
    companyName: "AI Labs",
    socialLinks: { linkedin: "#", github: "#" }
  },
  {
    fullName: "Leyla Kərimova",
    profilePhoto: IMAGES[4],
    professionalTitle: "Senior Product Designer",
    biography: "İstifadəçi mərkəzli dizayn və rəqəmsal məhsulların yaradılması üzrə peşəkar dizayner.",
    expertise: ["UI/UX Dizayn", "Figma", "İstifadəçi Araşdırması"],
    yearsOfExperience: 7,
    companyName: "DesignStudio",
    socialLinks: { linkedin: "#", portfolio: "#" }
  }
];

const mockBlogs = [
  {
    title: "2026-cı ildə Öyrənilməsi Vacib Olan 5 Proqramlaşdırma Dili",
    slug: "top-5-programming-languages-2026",
    coverImage: IMAGES[5],
    content: "Texnologiya sürətlə inkişaf edir və yeni dillər ortaya çıxır. Bu məqalədə 2026-cı ildə öyrənilməsi ən vacib olan 5 proqramlaşdırma dilini və onların tətbiq sahələrini araşdıracağıq.",
    tags: ["Proqramlaşdırma", "Karyera", "Texnologiya"],
    author: "Rəşad Əliyev",
    publishDate: "2026-03-10",
    readingTime: 5,
    featured: true
  },
  {
    title: "Kibertəhlükəsizlikdə Süni İntellektin Rolu",
    slug: "ai-in-cybersecurity",
    coverImage: IMAGES[6],
    content: "Süni intellekt kibertəhlükəsizlik sahəsində həm təhdid, həm də müdafiə vasitəsi kimi çıxış edir. Yeni nəsil AI alətlərinin təhlükəsizlik sistemlərinə necə inteqrasiya olunduğunu öyrənin.",
    tags: ["Kibertəhlükəsizlik", "Süni İntellekt"],
    author: "Əli Məmmədov",
    publishDate: "2026-03-05",
    readingTime: 7,
    featured: false
  },
  {
    title: "UI/UX Dizaynda Rəng Psixologiyası",
    slug: "color-psychology-in-ui-ux",
    coverImage: IMAGES[7],
    content: "Rənglər istifadəçilərin hisslərinə və qərarlarına necə təsir edir? Rəqəmsal məhsulların dizaynında rəng psixologiyasından istifadə edərək daha yaxşı istifadəçi təcrübəsi yaratmağın yolları.",
    tags: ["Dizayn", "UI/UX"],
    author: "Leyla Kərimova",
    publishDate: "2026-02-28",
    readingTime: 4,
    featured: false
  }
];

const mockGraduates = [
  {
    name: "Tural Qasımov",
    photo: IMAGES[8],
    program: "Data Analitikası",
    graduationYear: 2025,
    jobTitle: "Data Analitik",
    companyName: "Pasha Bank",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    linkedInProfile: "#"
  },
  {
    name: "Aysel Məmmədova",
    photo: IMAGES[9],
    program: "UI/UX Dizayn",
    graduationYear: 2025,
    jobTitle: "UI/UX Dizayner",
    companyName: "Kapital Bank",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    linkedInProfile: "#"
  },
  {
    name: "Orxan Əliyev",
    photo: IMAGES[1],
    program: "Kibertəhlükəsizlik",
    graduationYear: 2024,
    jobTitle: "Təhlükəsizlik Mühəndisi",
    companyName: "Azercell",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    linkedInProfile: "#"
  }
];

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedProgram, setSelectedProgram] = useState("");

  const currentProgram = mockPrograms.find(p => p.slug === selectedProgram);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[101] p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-medium">Müraciət Formu</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ad və Soyad</label>
                <input required type="text" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Məs: Əli Məmmədov" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input required type="tel" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="+994" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="nümunə@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Proqram</label>
                <select required value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white">
                  <option value="">Proqram seçin</option>
                  {mockPrograms.map(p => (
                    <option key={p.slug} value={p.slug}>{p.title}</option>
                  ))}
                </select>
              </div>
              {currentProgram && currentProgram.courseGroups && currentProgram.courseGroups.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Qrup (Cədvəl)</label>
                  <select required className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white">
                    <option value="">Qrup seçin</option>
                    {currentProgram.courseGroups.map(g => (
                      <option key={g.name} value={g.name}>{g.name} - {g.schedule} ({g.startDate})</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                <textarea required rows={3} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black resize-none" placeholder="Əlavə qeydləriniz..."></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors mt-6">
                Müraciəti Göndər
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Telimciler = () => {
  const location = useLocation();
  const initialIndex = location.state?.teacherIndex || 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (location.state?.teacherIndex !== undefined) {
      setCurrentIndex(location.state.teacherIndex);
    }
  }, [location.state?.teacherIndex]);

  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTeachers.length);
  };

  const prevTeacher = () => {
    setCurrentIndex((prev) => (prev - 1 + mockTeachers.length) % mockTeachers.length);
  };

  const currentTeacher = mockTeachers[currentIndex];

  const getThumbnails = () => {
    const thumbs = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % mockTeachers.length;
      thumbs.push({ ...mockTeachers[idx], originalIndex: idx });
    }
    return thumbs;
  };

  return (
    <main className="pt-32 pb-24 min-h-screen flex items-center bg-white">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative">
          
          <div className="lg:col-span-2 flex flex-col justify-between h-full min-h-[600px] relative">
            <div>
              <div className="text-sm font-mono text-gray-500 mb-16">
                {String(currentIndex + 1).padStart(2, '0')} / {String(mockTeachers.length).padStart(2, '0')}
              </div>
              <div className="origin-top-left -rotate-90 translate-y-24 text-sm font-bold tracking-[0.2em] uppercase text-gray-900 absolute left-0 top-32">
                TƏLİMÇİLƏR
              </div>
            </div>
            
            <button onClick={prevTeacher} className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-4 mt-auto">
              {getThumbnails().map((teacher, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(teacher.originalIndex)}
                  className={`w-20 h-24 rounded-2xl overflow-hidden transition-all duration-300 ${idx === 0 ? 'ring-2 ring-offset-2 ring-black opacity-100' : 'opacity-50 hover:opacity-100'}`}
                >
                  <img src={teacher.profilePhoto} alt={teacher.fullName} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
             <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <img src={currentTeacher.profilePhoto} alt={currentTeacher.fullName} className="w-full h-full object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center relative pl-0 lg:pl-12">
             <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              >
                <p className="text-gray-500 font-medium mb-2">{currentTeacher.professionalTitle}</p>
                <h2 className="text-3xl font-semibold mb-10">{currentTeacher.fullName}</h2>
                <p className="text-4xl md:text-5xl font-medium leading-[1.3] tracking-tight text-gray-900 mb-16">
                  "{currentTeacher.biography}"
                </p>
                
                <div className="flex items-center gap-4">
                  <button onClick={prevTeacher} className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <button onClick={nextTeacher} className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-black transition-colors shadow-lg shadow-black/20">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={nextTeacher} className="absolute top-1/2 -translate-y-1/2 -right-6 w-12 h-12 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors z-10 hidden lg:flex">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};

const Bloq = () => {
  return (
    <main className="pt-40 pb-24">
      <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Bloq</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Texnologiya dünyasından ən son yeniliklər, məqalələr və faydalı məsləhətlər.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogs.map((post, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <Link to={`/bloq/${post.slug}`} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group block">
              <div className="h-48 overflow-hidden">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-medium mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-3 flex-grow">{post.content}</p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-6 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">{post.author.charAt(0)}</div>
                    <div className="text-sm font-medium">{post.author}</div>
                  </div>
                  <div className="text-xs text-gray-400">{post.readingTime} dəq oxuma</div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </section>
    </main>
  );
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = mockBlogs.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-40 pb-24 px-6 text-center min-h-screen">
        <h1 className="text-4xl font-medium mb-4">Məqalə tapılmadı</h1>
        <Link to="/bloq" className="text-blue-600 hover:underline">Bloqa qayıt</Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="flex gap-2 mb-6 justify-center">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-sm font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-center leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-500 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">{post.author.charAt(0)}</div>
              <span className="font-medium text-gray-900">{post.author}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span>{post.publishDate}</span>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span>{post.readingTime} dəq oxuma</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden mb-16">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">{post.content}</p>
            <p className="mb-6">
              Texnologiya dünyasında baş verən yeniliklər hər gün daha da sürətlənir. Bu dəyişikliklərə ayaq uydurmaq üçün davamlı öyrənmək və inkişaf etmək vacibdir. Stack Academy olaraq biz tələbələrimizə ən son texnologiyaları və trendləri öyrədirik.
            </p>
            <h2 className="text-3xl font-medium text-gray-900 mt-12 mb-6">Niyə bu mövzu önəmlidir?</h2>
            <p className="mb-6">
              Müasir dövrdə rəqəmsal bacarıqlara sahib olmaq təkcə IT sektorunda deyil, bütün sahələrdə üstünlük təşkil edir. Şirkətlər artıq ənənəvi metodlardan uzaqlaşaraq rəqəmsal transformasiyaya üstünlük verirlər.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Daha yüksək əmək haqqı potensialı</li>
              <li>Qlobal iş imkanları</li>
              <li>Davamlı inkişaf və öyrənmə mühiti</li>
              <li>Gələcəyin peşələrinə hazırlıq</li>
            </ul>
            <p>
              Əgər siz də bu sahədə özünüzü inkişaf etdirmək istəyirsinizsə, bizim proqramlarımıza qoşula və peşəkar təlimçilərdən dərs ala bilərsiniz.
            </p>
          </div>
        </FadeIn>
      </article>
    </main>
  );
};

const Mezunlar = () => {
  return (
    <main className="pt-40 pb-24">
      <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Məzunlarımız</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stack Academy-ni uğurla bitirib karyeralarında yüksələn tələbələrimizlə qürur duyuruq.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockGraduates.map((grad, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full">
              <img src={grad.photo} alt={grad.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-50" />
              <h3 className="text-2xl font-medium mb-1">{grad.name}</h3>
              <p className="text-gray-500 mb-4">{grad.program} məzunu ({grad.graduationYear})</p>
              
              <div className="w-full border-t border-gray-50 pt-6 mt-auto">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">İş Yeri</p>
                <div className="font-medium text-lg mb-1">{grad.jobTitle}</div>
                <div className="text-blue-600 font-medium">{grad.companyName}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>
    </main>
  );
};

const Haqqimizda = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <main className="pt-40 pb-24 overflow-hidden">
      <section className="px-6 max-w-7xl mx-auto mb-32 text-center relative">
        <FadeIn>
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-6">
            Gələcəyi Bizimlə <br/><span className="text-gray-400">Qurun</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Stack Academy olaraq məqsədimiz, texnologiya sahəsində ən son bilik və bacarıqları tədris edərək, tələbələrimizi qlobal bazara hazırlamaqdır.
          </p>
        </FadeIn>
        <motion.div style={{ y }} className="mt-20 relative h-[500px] rounded-[3rem] overflow-hidden">
          <img src={IMAGES[0]} alt="About Us" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
        <FadeIn direction="right">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Bizim Missiyamız</h2>
          <p className="text-lg text-gray-500 mb-6">
            İnnovativ tədris metodları və real layihələr vasitəsilə tələbələrimizin potensialını tam üzə çıxarmaq. Biz inanırıq ki, düzgün təhsil və praktika ilə hər kəs texnologiya dünyasında uğur qazana bilər.
          </p>
          <ul className="space-y-4">
            {['Praktik Tədris', 'Peşəkar Təlimçilər', 'Karyera Dəstəyi'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg font-medium">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn direction="left" className="relative h-[600px] rounded-[2.5rem] overflow-hidden">
          <img src={IMAGES[2]} alt="Mission" className="w-full h-full object-cover" />
        </FadeIn>
      </section>
    </main>
  );
};

const Programs = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <main className="pt-40 pb-24">
      <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Tədris Proqramları</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Gələcəyin ən çox tələb olunan peşələrini Stack Academy ilə kəşf edin. Real layihələr və peşəkar təlimçilərlə karyeranıza bu gün başlayın.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {mockPrograms.map((prog, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${prog.bg} ${prog.color} mb-6 group-hover:scale-110 transition-transform`}>
                <prog.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium mb-3">{prog.title}</h3>
              <p className="text-gray-500 mb-8 flex-grow">{prog.shortDescription}</p>
              
              <div className="flex items-center gap-6 mb-8 border-t border-gray-50 pt-6">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Müddət</div>
                  <div className="font-medium">{prog.totalDuration} ay</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dərs Saatı</div>
                  <div className="font-medium">{prog.lessonHours} saat</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to={`/proqramlar/${prog.slug}`} className="flex-1 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium transition-colors flex items-center justify-center text-gray-900">
                  Ətraflı
                </Link>
                <button onClick={onOpenModal} className="flex-1 py-4 bg-black text-white hover:bg-gray-800 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                  Müraciət Et <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>
    </main>
  );
};

const ProgramDetail = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const { slug } = useParams<{ slug: string }>();
  const program = mockPrograms.find(p => p.slug === slug);

  if (!program) {
    return (
      <main className="pt-40 pb-24 px-6 text-center min-h-screen">
        <h1 className="text-4xl font-medium mb-4">Proqram tapılmadı</h1>
        <Link to="/proqramlar" className="text-blue-600 hover:underline">Proqramlara qayıt</Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-24">
      {/* Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img src={program.bannerImage} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <FadeIn>
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${program.bg} ${program.color} mb-8`}>
              <program.icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 max-w-4xl">{program.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-12">{program.shortDescription}</p>
            
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <span className="font-medium">{program.totalDuration}</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Müddət</div>
                  <div className="font-medium">Ay</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <span className="font-medium">{program.lessonHours}</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Dərs Saatı</div>
                  <div className="font-medium">Saat</div>
                </div>
              </div>
              <button onClick={onOpenModal} className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors ml-auto">
                İndi Müraciət Et
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-20">
          {/* About */}
          <section>
            <FadeIn>
              <h2 className="text-3xl font-medium mb-6">Proqram haqqında</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{program.longDescription}</p>
            </FadeIn>
          </section>

          {/* Syllabus */}
          <section>
            <FadeIn>
              <h2 className="text-3xl font-medium mb-8">Tədris Planı</h2>
              <div className="space-y-4">
                {program.syllabusModules.map((module, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium">{module.title}</h3>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{module.duration} saat</span>
                    </div>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Tools */}
          <section>
            <FadeIn>
              <h2 className="text-3xl font-medium mb-8">Öyrənəcəyiniz Alətlər</h2>
              <div className="flex flex-wrap gap-6">
                {program.softwareTools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                    {tool.logo && <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />}
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* FAQs */}
          <section>
            <FadeIn>
              <h2 className="text-3xl font-medium mb-8">Tez-tez Verilən Suallar</h2>
              <div className="space-y-4">
                {program.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Course Groups */}
          <section>
            <FadeIn>
              <h3 className="text-2xl font-medium mb-6">Açıq Qruplar</h3>
              <div className="space-y-4">
                {program.courseGroups.map((group, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-lg">{group.name}</h4>
                      <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md uppercase tracking-wider">
                        {group.status === 'upcoming' ? 'Yaxında' : group.status}
                      </span>
                    </div>
                    <div className="space-y-3 mb-6 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Başlama tarixi:</span>
                        <span className="font-medium text-gray-900">{group.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cədvəl:</span>
                        <span className="font-medium text-gray-900">{group.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Boş yer:</span>
                        <span className="font-medium text-gray-900">{group.capacity - group.currentStudentCount} / {group.capacity}</span>
                      </div>
                    </div>
                    <button onClick={onOpenModal} className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                      Bu qrupa qoşul
                    </button>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Teachers */}
          <section>
            <FadeIn>
              <h3 className="text-2xl font-medium mb-6">Təlimçilər</h3>
              <div className="space-y-6">
                {program.teachers.map((teacher, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={teacher.profilePhoto} alt={teacher.fullName} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h4 className="font-medium text-lg">{teacher.fullName}</h4>
                      <p className="text-sm text-gray-500">{teacher.professionalTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>
        </div>
      </div>
    </main>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-emerald-200">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/proqramlar" element={<Programs onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/proqramlar/:slug" element={<ProgramDetail onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/telimciler" element={<Telimciler />} />
          <Route path="/bloq" element={<Bloq />} />
          <Route path="/bloq/:slug" element={<BlogDetail />} />
          <Route path="/mezunlar" element={<Mezunlar />} />
          <Route path="/haqqimizda" element={<Haqqimizda />} />
        </Routes>
        <Footer onOpenModal={() => setIsModalOpen(true)} />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}
