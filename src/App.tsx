import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ChevronRight, Crown, Shield, Users, MapPin, Zap, Flame, Calendar, DollarSign, ArrowRight, ArrowUp, UserCheck, Headset } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 15]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById("system")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 perspective-[1200px]">
      <div className="absolute inset-0 z-0 spray-splatter pointer-events-none" />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute w-[60%] h-[60%] rounded-full bg-void-purple/20 blur-[150px]"
        />
        <motion.div 
          animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
          className="absolute w-[50%] h-[50%] rounded-full bg-void-neon/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/dark-matter.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      <motion.div 
        style={{ y, rotateX, scale, opacity, transformOrigin: "center center" }}
        className="relative z-10 w-full"
      >
        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="max-w-5xl mx-auto text-center perspective-[1500px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center"
          >
          <div className="inline-block mb-6 px-6 py-2 border-2 border-void-acid bg-void-black/80 backdrop-blur-md transform -skew-x-12 rotate-2 shadow-[4px_4px_0px_transparent] shadow-void-acid/50">
            <span className="text-void-acid text-sm font-bold tracking-widest uppercase font-mono">Официальный портал</span>
          </div>
          
          <div className="relative mb-6 md:mb-8 flex justify-center items-center">
             <h1 className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-700 graffiti-title z-10 leading-[0.9]">
              VOID
            </h1>
            <span className="absolute text-4xl md:text-6xl lg:text-8xl right-0 top-[-10%] md:-right-10 md:-top-10 graffiti-tag opacity-80 mix-blend-screen z-20">CREW</span>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-black mb-6 text-white uppercase tracking-tight text-glow-neon"
          >
            Если ты здесь, значит, ты готов к серьёзной работе.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-bold bg-void-black/70 p-6 md:p-8 border-2 border-dashed border-gray-700 backdrop-blur-sm shadow-xl"
          >
            Проективный холдинг, внутри которого живут десятки самостоятельных команд и тимлидов.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToNext}
            className="group relative px-10 py-5 bg-void-purple text-white font-black text-xl overflow-hidden street-box transform skew-x-[-10deg]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-void-purple via-void-neon to-void-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-[gradient_2s_linear_infinite]" />
            <span className="relative flex items-center gap-3 transform skew-x-[10deg]">
              Узнать о системе <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-125 transition-all" />
            </span>
          </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TeamLeadSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create exaggerated spring physics for scrolling
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const yVal = useTransform(springScroll, [0, 1], [300, -300]);
  const rotateXVal = useTransform(springScroll, [0, 0.5, 1], [45, 0, -45]);
  const scaleVal = useTransform(springScroll, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacityVal = useTransform(springScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="system" ref={ref} className="relative py-40 px-6 overflow-hidden perspective-[2000px]">
      <div className="absolute inset-0 z-0 spray-splatter mix-blend-color-dodge opacity-30" />
      
      <motion.div 
        style={{ y: yVal, rotateX: rotateXVal, scale: scaleVal, opacity: opacityVal }}
        className="max-w-7xl mx-auto relative z-10 transform-style-3d"
      >
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-void-neon/10 blur-[100px] -z-10" />
          <h2 className="text-5xl md:text-8xl font-black mb-6 flex flex-col items-center justify-center gap-4 text-white uppercase transform -skew-x-6">
            <Crown className="w-20 h-20 text-yellow-500 drop-shadow-[0_0_30px_rgb(234,179,8)] mb-4" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-600">Кто такой Тимлид?</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold bg-black/60 p-6 border-2 border-dashed border-gray-700">
            Тимлид — это твой прямой руководитель и наставник. В каждой команде может быть до <span className="text-void-neon font-black text-3xl ml-2 drop-shadow-[0_0_10px_rgb(56,189,248)]">3‑х лидеров</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center perspective-[1500px]">
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 2, rotateX: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="street-box p-6 md:p-12 transform preserve-3d"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl text-void-purple font-black mb-10 flex items-center gap-3 md:gap-4 uppercase tracking-wider md:tracking-widest bg-black/80 p-4 -ml-4 sm:-ml-8 md:-ml-16 border-l-8 border-void-purple relative shadow-xl">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-void-acid animate-pulse flex-shrink-0" /> 
              Основные задачи
            </h3>
            <ul className="space-y-6 md:space-y-8 w-full">
              {[
                "Обучает и курирует",
                "Информирует о новостях",
                "Настраивает уют в чатах и атмосфере"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                  className="flex items-center gap-4 md:gap-6 text-lg sm:text-xl md:text-2xl font-bold text-gray-100 uppercase leading-tight"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-void-purple flex items-center justify-center flex-shrink-0 transform rotate-12 shadow-[4px_4px_0_theme(colors.void-neon)]">
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white font-black" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-8 perspective-[1000px]">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-void-black" />,
                title: "Локальность",
                desc: "Тимлид — король только в своей команде."
              },
              {
                icon: <Shield className="w-8 h-8 text-void-black" />,
                title: "Единый фундамент",
                desc: "Техподдержка, SEO и Финансы — общие на весь проект."
              },
              {
                icon: <Users className="w-8 h-8 text-void-black" />,
                title: "Порядок",
                desc: "Тимлид следит за дисциплиной и бережёт своих воркеров."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateX: -30, x: 100, z: -200 }}
                whileInView={{ opacity: 1, rotateX: 0, x: 0, z: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 2 : -2, x: -10 }}
                className="bg-void-deep/90 p-8 flex items-start gap-6 border-l-8 border-void-neon shadow-[8px_8px_0_rgba(56,189,248,0.2)] backdrop-blur-xl relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 text-9xl text-white/5 font-black z-0 pointer-events-none group-hover:scale-110 transition-transform">
                  0{i+1}
                </div>
                <div className="bg-void-neon p-4 transform -skew-x-12 relative z-10 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  {card.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-widest">{card.title}</h4>
                  <p className="text-gray-400 font-bold text-lg">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PayoutsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const zVal = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 50, -200]);

  return (
    <section ref={ref} className="relative py-40 px-6 bg-[url('https://transparenttextures.com/patterns/black-scales.png')] bg-black/90 perspective-[2000px]">
      <motion.div 
        style={{ rotateY, z: zVal }}
        className="max-w-7xl mx-auto transform-style-3d border-t-4 border-b-4 border-void-purple/50 bg-black/60 py-12 md:py-20 px-4 sm:px-8 lg:px-20 backdrop-blur-3xl shadow-[0_0_100px_rgba(124,58,237,0.2)]"
      >
        <div className="text-center mb-16 md:mb-20 relative">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 text-white uppercase graffiti-title drop-shadow-2xl z-10 relative">
            Система Выплат
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl lg:text-9xl text-white/[0.04] font-black uppercase pointer-events-none whitespace-nowrap blur-[6px]">
            CASH FLOW
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="street-box bg-void-black/90 border-4 border-void-neon shadow-[8px_8px_0_theme(colors.void-purple)] md:shadow-[12px_12px_0_theme(colors.void-purple)] flex flex-col transform md:-skew-y-2 group"
          >
            <div className="bg-void-neon text-void-black p-4 md:p-6 border-b-4 border-black">
              <h3 className="text-xl md:text-3xl font-black flex items-center gap-3 md:gap-4 uppercase tracking-wider md:tracking-widest">
                <DollarSign className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
                Распределение прибыли
              </h3>
            </div>
            <div className="p-6 md:p-10 flex-1 flex flex-col gap-6 md:gap-8 font-mono text-base md:text-xl transform md:skew-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 md:pb-6 border-b-4 border-gray-800 border-dashed">
                <span className="text-gray-400 font-bold uppercase tracking-widest">Депозит</span>
                <div className="sm:text-right">
                  <span className="text-white font-black text-xl md:text-3xl whitespace-nowrap">Воркер — <span className="text-void-acid text-glow-acid">80%</span></span>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">(чистой прибыли)</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 md:pb-6 border-b-4 border-gray-800 border-dashed">
                <span className="text-gray-400 font-bold uppercase tracking-widest">Перевод</span>
                <div className="sm:text-right">
                  <span className="text-white font-black text-xl md:text-3xl whitespace-nowrap">Воркер — <span className="text-void-acid text-glow-acid">80%</span></span>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">(чистой прибыли)</div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-8 bg-black p-6 md:p-8 border-2 border-void-neon shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-void-neon via-void-purple to-void-neon animate-pulse" />
                <div className="text-void-neon font-black mb-6 flex flex-col sm:flex-row sm:items-center gap-3 font-sans uppercase tracking-[0.1em] text-lg md:text-xl leading-tight">
                  <Headset className="w-8 h-8 flex-shrink-0" /> 
                  <span className="whitespace-normal sm:whitespace-nowrap">Тех. Поддержка (ТП):</span>
                </div>
                <div className="space-y-3 font-bold text-sm md:text-lg">
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-900/50 hover:bg-gray-800 transition-colors rounded-sm"><span className="text-gray-400">TP x1</span><span className="text-white">Воркер — <span className="text-void-acid">75%</span></span></div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-900/50 hover:bg-gray-800 transition-colors rounded-sm"><span className="text-gray-400">TP x2</span><span className="text-white">Воркер — <span className="text-void-acid">70%</span></span></div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-900/50 hover:bg-gray-800 transition-colors rounded-sm"><span className="text-gray-400">TP x3</span><span className="text-white">Воркер — <span className="text-void-acid">70%</span></span></div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-red-900/20 border-l-4 border-red-500 rounded-sm"><span className="text-gray-400">TP x4–x5</span><span className="text-red-400">Воркер — 60%</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-8 justify-center"
          >
            <div className="bg-black border-4 border-orange-500 p-6 sm:p-8 md:p-10 relative overflow-hidden group shadow-[8px_8px_0_theme(colors.orange.600)] md:shadow-[12px_12px_0_theme(colors.orange.600)] transform md:skew-x-3">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-30 transition-opacity"
              >
                <Flame className="w-64 h-64 text-orange-500" />
              </motion.div>
              
              <div className="relative z-10 transform md:-skew-x-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 uppercase tracking-wider">
                  <span className="bg-orange-500 text-black p-2 self-start sm:self-auto"><Calendar className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} /></span>
                  Недельная активность
                </h3>
                <p className="text-orange-400 mb-8 md:mb-10 font-bold tracking-widest sm:ml-16 mt-2 sm:mt-0 text-sm md:text-base">(ДЕПЫ ОТ 10K)</p>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    { desc: "2 ДЕПА", bonus: "+$5", border: "border-orange-300", delay: 0.3 },
                    { desc: "5 ДЕПОВ", bonus: "+$15", border: "border-orange-500", delay: 0.4 },
                    { desc: "10+ ДЕПОВ", bonus: "+$50", border: "border-red-500", shadow: "shadow-[0_0_20px_theme(colors.red.500)]", delay: 0.5 }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.8, x: 50, opacity: 0 }}
                      whileInView={{ scale: 1, x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: item.delay, type: "spring", bounce: 0.5 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className={`flex justify-between items-center bg-black/80 p-4 sm:p-6 border-2 ${item.border} ${item.shadow || ''}`}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <Flame className={`w-6 h-6 md:w-8 md:h-8 text-current flex-shrink-0`} strokeWidth={2.5} />
                        <span className="text-xl sm:text-2xl font-black text-white">{item.desc}</span>
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-void-acid drop-shadow-[0_0_10px_rgba(217,249,157,0.8)]">
                        {item.bonus}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const cards = [
    {
      role: "TEAM LEADER",
      icon: <Crown className="w-16 h-16 text-black" strokeWidth={2.5} />,
      bgColor: "bg-yellow-400",
      delay: 0.1
    },
    {
      role: "MENTOR",
      icon: <UserCheck className="w-16 h-16 text-black" strokeWidth={2.5} />,
      bgColor: "bg-void-neon",
      delay: 0.3
    },
    {
      role: "SUPPORT",
      icon: <Headset className="w-16 h-16 text-black" strokeWidth={2.5} />,
      bgColor: "bg-void-purple",
      delay: 0.5
    }
  ];

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[800px] bg-gradient-to-b from-transparent via-void-neon/10 to-transparent -translate-y-1/2 -z-10 transform -skew-y-6" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateZ: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-center mb-24 md:mb-32"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 text-white uppercase tracking-tighter graffiti-title z-10 relative">
              НАША КОМАНДА
            </h2>
            <div className="absolute -inset-4 bg-void-purple blur-[80px] -z-10 opacity-30" />
            <span className="absolute -bottom-4 right-0 md:-bottom-8 md:-right-4 text-4xl md:text-6xl graffiti-tag z-20 transform -rotate-12">VOID</span>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-gray-200 font-bold bg-black/80 p-6 sm:p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_theme(colors.void-neon)] md:shadow-[16px_16px_0_theme(colors.void-neon)] transform md:rotate-2">
            <p className="leading-relaxed">
              Команда строится вокруг <span className="text-void-acid px-2 py-1 bg-black whitespace-nowrap">сильных лидеров</span> и сконцентрированных воркеров.
            </p>
            <p className="text-gray-400 font-mono text-sm sm:text-base md:text-xl tracking-widest md:tracking-wider">
              СТАБИЛЬНЫЕ ВЫПЛАТЫ. ЧЕСТНАЯ СИСТЕМА. ПЛАВНОЕ ОБУЧЕНИЕ.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-[2000px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90, z: -500 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: card.delay, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, rotateZ: i % 2 === 0 ? 5 : -5, y: -20, z: 50 }}
              className={`bg-void-black p-1 pt-12 border-4 border-gray-900 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group preserve-3d`}
            >
              <div className={`absolute top-0 left-0 w-full h-8 ${card.bgColor} transform -skew-y-3 origin-left z-0`} />
              
              <div className={`w-32 h-32 ${card.bgColor} flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0_theme(colors.black)] mb-8 border-4 border-white z-10`}>
                <div className="transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  {card.icon}
                </div>
              </div>
              <h4 className="text-3xl font-black text-white px-8 pb-10 uppercase tracking-widest z-10">{card.role}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-900 bg-black/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-3xl font-black tracking-tighter text-gray-500">
          VOID
        </div>
        <div className="text-gray-600 text-sm font-medium">
          Все права защищены. &copy; 2026
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-void-purple/20 transition-colors text-white"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-void-black min-h-screen text-gray-100 selection:bg-void-purple selection:text-white">
      <Hero />
      <TeamLeadSection />
      <PayoutsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
