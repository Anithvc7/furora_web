import { Heart, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Join 500,000+ Pet Parents</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Your Pet's Story
            <br />
            Starts Here
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
            Be part of a community that celebrates every wag, purr, and precious moment.
            Download Furora today and transform your pet parenting journey.
          </p>

          <div className="max-w-xl mx-auto mb-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-bold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 flex items-center justify-center gap-3 animate-fade-in">
                <Heart className="w-6 h-6 fill-current animate-pulse" />
                <span className="font-bold text-lg">Welcome to the Furora family!</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
