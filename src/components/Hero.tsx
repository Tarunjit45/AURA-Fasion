import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Model in Coat" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6">Spring / Summer 2026</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic font-medium tracking-tight leading-[0.9]">
            The New <br />
            <span className="not-italic font-light">Standard</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <a href="#featured" className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest hover:text-orange-500 transition-colors cursor-hover">
            <span>Explore Collection</span>
            <div className="w-[1px] h-12 bg-white/50 group-hover:bg-orange-500 transition-colors" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
