import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useUI } from '../context/UIContext';

export default function MenuOverlay() {
  const { isMenuOpen, setIsMenuOpen } = useUI();

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Shop', href: '#featured' },
    { label: 'Collections', href: '#editorial' },
    { label: 'About', href: '#footer' },
    { label: 'Journal', href: '#' },
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center text-white"
        >
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:opacity-70 transition-opacity"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-4xl md:text-6xl font-serif italic hover:text-orange-500 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 flex gap-6 text-sm uppercase tracking-widest text-gray-500"
          >
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
