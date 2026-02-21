import { motion } from 'motion/react';

export default function Marquee() {
  return (
    <div className="py-8 bg-orange-600 overflow-hidden whitespace-nowrap">
      <motion.div 
        className="inline-flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-4xl md:text-6xl font-serif italic text-black font-bold">New Collection</span>
            <span className="text-xl text-black/50">✦</span>
            <span className="text-4xl md:text-6xl font-sans font-bold text-transparent stroke-text">SPRING 2026</span>
            <span className="text-xl text-black/50">✦</span>
          </div>
        ))}
      </motion.div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px black;
        }
      `}</style>
    </div>
  );
}
