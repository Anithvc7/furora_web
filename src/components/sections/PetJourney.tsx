import { useState } from 'react';
import { Baby, Heart, Trophy, Stethoscope, Sparkles, ChevronRight } from 'lucide-react';
import AIPet from '../AIPet';

export default function PetJourney() {
  const [activeStage, setActiveStage] = useState(0);

  const petTypes: Array<'dog' | 'cat' | 'rabbit' | 'bird'> = ['dog', 'cat', 'rabbit', 'bird'];

  const stages = [
    {
      icon: Baby,
      title: 'Birth',
      subtitle: 'The Beginning',
      description: 'Welcome to the world, little one! From first breaths to curious eyes opening, we help you nurture those precious early days with expert guidance and gentle care.',
      color: 'from-rose-400 to-pink-500',
      bg: 'bg-rose-50',
      borderColor: 'border-rose-200',
      features: ['Vaccination schedule', 'Early nutrition guide', 'Sleep training', 'Socialization tips'],
      petType: 'dog' as const,
    },
    {
      icon: Heart,
      title: 'Bonding',
      subtitle: 'Growing Together',
      description: 'Building unbreakable bonds through play, training, and love. Learn your pet\'s unique language, personality, and preferences as trust blossoms into lifelong friendship.',
      color: 'from-orange-400 to-rose-500',
      bg: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: ['Training foundations', 'Behavioral insights', 'Play routines', 'Communication guides'],
      petType: 'cat' as const,
    },
    {
      icon: Trophy,
      title: 'Milestones',
      subtitle: 'Celebrating Growth',
      description: 'First steps, first tricks, first adventures—every milestone deserves to be celebrated. Document and share these magical moments that define your journey together.',
      color: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50',
      borderColor: 'border-amber-200',
      features: ['Milestone tracking', 'Memory albums', 'Achievement badges', 'Growth charts'],
      petType: 'rabbit' as const,
    },
    {
      icon: Stethoscope,
      title: 'Lifelong Care',
      subtitle: 'Forever Family',
      description: 'From playful youth to graceful golden years, we\'re with you every step. Comprehensive health monitoring, preventive care, and specialized support for every life stage.',
      color: 'from-emerald-400 to-teal-500',
      bg: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      features: ['Health tracking', 'Vet reminders', 'Nutrition plans', 'Senior care support'],
      petType: 'bird' as const,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-100/80 rounded-full mb-4 border border-amber-200">
            <span className="text-amber-600 font-bold text-xs">INTERACTIVE JOURNEY</span>
            <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Every Pawprint Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Follow the beautiful journey from first cuddles to lifelong companionship
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-rose-300 via-orange-300 to-emerald-300 transform -translate-y-1/2 opacity-60" />

            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className="relative z-10 flex flex-col items-center transition-all duration-300 group"
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-xl mb-4 transform transition-all duration-300 ${
                      isActive ? 'scale-110 shadow-2xl ring-4 ring-white' : 'scale-90 opacity-70 group-hover:scale-100 group-hover:opacity-100'
                    }`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <span className={`text-sm font-bold transition-all ${isActive ? 'text-gray-900' : 'text-gray-600'} hidden md:block`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className={`${stages[activeStage].bg} rounded-3xl p-12 md:p-16 transition-all duration-500 shadow-2xl border-2 ${stages[activeStage].borderColor} backdrop-blur-sm relative overflow-hidden`}>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white to-transparent rounded-full opacity-30 blur-3xl" />

            <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
              <div className="md:col-span-3">
                <div className="flex items-start gap-4 mb-8">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${stages[activeStage].color}`}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                      {stages[activeStage].subtitle}
                    </div>
                    <h3 className="text-5xl font-bold text-gray-900">
                      {stages[activeStage].title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
                  {stages[activeStage].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {stages[activeStage].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 hover:shadow-lg transition-all transform hover:-translate-y-1 group cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rose-500 transition-colors flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex justify-center items-center">
                <div className="relative">
                  <div className={`absolute -inset-6 bg-gradient-to-br ${stages[activeStage].color} rounded-full opacity-20 blur-2xl animate-pulse`} />
                  <AIPet type={stages[activeStage].petType} size="lg" interactive={true} className="relative" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <button
              onClick={() => setActiveStage((prev) => (prev - 1 + stages.length) % stages.length)}
              className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full font-bold text-gray-700 shadow-lg hover:shadow-xl border border-white/50 transform hover:scale-105 transition-all"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
