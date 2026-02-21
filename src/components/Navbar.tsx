import { motion } from 'motion/react';
import { ShoppingBag, Menu, Search } from 'lucide-react';
import { useUI } from '../context/UIContext';

export default function Navbar() {
  const { setIsMenuOpen, setIsSearchOpen, setIsCartOpen, cartItems } = useUI();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white"
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 hover:opacity-70 transition-opacity cursor-hover"
        >
          <Menu size={24} />
        </button>
        <span className="hidden md:block text-xs uppercase tracking-widest font-medium">Menu</span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tighter cursor-hover">AURA</a>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="hover:opacity-70 transition-opacity cursor-hover"
        >
          <Search size={24} />
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="hover:opacity-70 transition-opacity relative cursor-hover"
        >
          <ShoppingBag size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 rounded-full flex items-center justify-center text-[10px] font-bold">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
