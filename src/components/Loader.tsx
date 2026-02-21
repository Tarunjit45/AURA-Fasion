import { motion } from 'motion/react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="text-9xl font-serif text-white tracking-tighter"
        >
          AURA
        </motion.h1>
      </div>
    </motion.div>
  );
}
