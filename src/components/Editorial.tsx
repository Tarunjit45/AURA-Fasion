import { motion } from 'motion/react';

export default function Editorial() {
  return (
    <section id="editorial" className="relative py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 text-xs uppercase tracking-[0.2em] mb-4 block">The Campaign</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
              Redefining <br />
              <span className="italic text-gray-400">Modern Luxury</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
              Our latest collection explores the intersection of brutalist architecture and organic forms. 
              Soft drapes meet rigid structures in a symphony of texture and silhouette.
            </p>
            <button className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors uppercase text-xs tracking-widest">
              Read the Story
            </button>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop" 
                alt="Editorial Shot" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 border border-white/10 z-0 hidden md:block" />
            <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/10 z-0 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
