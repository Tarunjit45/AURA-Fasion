import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ArrowRight } from 'lucide-react';
import { useUI } from '../context/UIContext';
import { useState } from 'react';

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useUI();
  const [query, setQuery] = useState('');

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-md text-black p-6"
        >
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 p-2 hover:opacity-70 transition-opacity"
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl mx-auto mt-32">
            <div className="relative border-b-2 border-black">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search collections, products, articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent py-4 pl-10 pr-12 text-2xl md:text-4xl font-serif outline-none placeholder:text-gray-300"
                autoFocus
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-black hover:text-white rounded-full transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Popular Searches</h3>
              <div className="flex flex-wrap gap-4">
                {['Spring 2026', 'Leather Accessories', 'Silk Dresses', 'Outerwear', 'Gift Guide'].map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 border border-gray-200 rounded-full text-sm hover:border-black hover:bg-black hover:text-white transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
