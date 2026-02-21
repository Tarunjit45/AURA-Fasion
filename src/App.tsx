/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Marquee from './components/Marquee';
import Editorial from './components/Editorial';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import MenuOverlay from './components/MenuOverlay';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';
import { UIProvider } from './context/UIContext';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll behavior for the whole document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <UIProvider>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <main className="bg-black min-h-screen w-full overflow-x-hidden selection:bg-orange-500 selection:text-white cursor-none">
        <CustomCursor />
        <MenuOverlay />
        <SearchOverlay />
        <CartDrawer />
        <Navbar />
        <Hero />
        <Marquee />
        <Featured />
        <Editorial />
        <Footer />
      </main>
    </UIProvider>
  );
}
