import { motion } from 'motion/react';
import { useUI } from '../context/UIContext';

const products = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    price: "$890",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear"
  },
  {
    id: 2,
    name: "Pleated Silk Dress",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses"
  },
  {
    id: 3,
    name: "Structured Leather Bag",
    price: "$650",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories"
  }
];

export default function Featured() {
  const { addToCart } = useUI();

  return (
    <section id="featured" className="py-24 md:py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Curated Arrivals</h2>
            <p className="text-gray-500 max-w-md">
              Discover the latest pieces from our atelier. Meticulously crafted for the modern individual.
            </p>
          </div>
          <button className="px-8 py-3 border border-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors cursor-hover">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer cursor-hover"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 text-xs uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">{product.category}</span>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                </div>
                <span className="text-lg font-serif italic">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
