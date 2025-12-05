import { Heart, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const links = {
    product: ['Features', 'Pricing', 'Download', 'Updates'],
    company: ['About Us', 'Careers', 'Press Kit', 'Contact'],
    resources: ['Blog', 'Research', 'Community', 'Support'],
    legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-rose-500 fill-current" />
              <span className="text-2xl font-bold text-white">Furora</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Where every pet's journey becomes a cherished story of love, trust, and family.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-rose-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Furora. Made with love for pets and their humans.</p>
          <p className="flex items-center gap-2">
            Powered by science, driven by <Heart className="w-4 h-4 text-rose-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
