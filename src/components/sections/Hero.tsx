import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import AIPet from '../AIPet';
import StatCounter from '../StatCounter';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 207, 232, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(254, 215, 170, 0.4) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="absolute top-20 left-10 animate-bounce-slow">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 opacity-70 blur-xl" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 opacity-60 blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-xl rounded-full mb-8 shadow-xl border border-white/40 animate-fade-in hover:shadow-2xl transition-all">
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-gray-700">Where Every Pawprint Tells a Story</span>
          <Sparkles className="w-4 h-4 text-rose-500 animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Welcome to
              </span>
              <br />
              <span className="text-gray-800">Furora</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200 font-medium">
              A beautiful ecosystem where science meets love, and every pet's journey becomes a cherished story of joy, trust, and family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center animate-fade-in-up animation-delay-400">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2 overflow-hidden">
                <span className="relative z-10">Start Your Journey</span>
                <Heart className="w-5 h-5 group-hover:animate-pulse relative z-10" />
              </button>
              <button className="group relative px-8 py-4 bg-white/90 backdrop-blur-xl text-gray-700 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/50">
                Explore Stories
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center animate-fade-in animation-delay-600">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full opacity-30 blur-2xl animate-pulse" />
              <AIPet type="dog" size="lg" interactive={true} className="relative" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
          <StatCounter target={500000} label="Pet Parents" suffix="+" />
          <StatCounter target={98} label="Happiness Score" suffix="%" />
          <StatCounter target={2000000} label="Milestones" suffix="+" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-semibold">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-rose-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
