export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif mb-8">AURA</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              A digital fashion house reimagining the boundaries of style and substance. 
              Designed for the bold, crafted for the eternal.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Pinterest'].map((social) => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Shop</h3>
            <ul className="space-y-4">
              {['New Arrivals', 'Ready to Wear', 'Accessories', 'Editorial', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-orange-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Client Services</h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'Sustainability', 'Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-orange-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
          <h1 className="text-[12vw] leading-[0.8] font-serif opacity-10 select-none pointer-events-none">
            AURA
          </h1>
          <div className="flex flex-col md:flex-row gap-8 text-xs text-gray-600 uppercase tracking-widest mt-8 md:mt-0 items-end md:items-center">
            <div className="flex flex-col items-end md:items-start gap-1">
              <span>Developed by <a href="mailto:confluxdotai@gmail.com" className="hover:text-orange-500 transition-colors">Conflux.ai</a></span>
              <span className="text-[10px] opacity-60">confluxdotai@gmail.com</span>
            </div>
            <span>© 2026 Aura Fashion</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
