import { Heart, Brain, TrendingUp, Shield } from 'lucide-react';

export default function StudyReports() {
  const benefits = [
    {
      icon: Heart,
      stat: '67%',
      title: 'Lower Stress Levels',
      description: 'Pet owners show significantly reduced cortisol levels and improved cardiovascular health.',
      source: 'American Heart Association, 2023',
      color: 'rose',
    },
    {
      icon: Brain,
      stat: '44%',
      title: 'Better Mental Health',
      description: 'Companions reduce feelings of loneliness and depression while boosting oxytocin production.',
      source: 'Journal of Psychiatric Research, 2023',
      color: 'amber',
    },
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'More Physical Activity',
      description: 'Dog owners walk an average of 22 minutes more per day than non-dog owners.',
      source: 'BMC Public Health, 2022',
      color: 'orange',
    },
    {
      icon: Shield,
      stat: '31%',
      title: 'Stronger Immunity',
      description: 'Children raised with pets develop stronger immune systems and fewer allergies.',
      source: 'Pediatrics Research, 2023',
      color: 'emerald',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-rose-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <span className="text-emerald-600 font-semibold text-sm">SCIENCE & RESEARCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            The Science of Pet Love
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Decades of research confirm what we always knew: pets make us healthier, happier, and more connected humans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-rose-200 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-right`}>
                    <div className={`text-5xl font-bold bg-gradient-to-r from-${benefit.color}-600 to-${benefit.color}-500 bg-clip-text text-transparent`}>
                      {benefit.stat}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm text-gray-500 italic">
                  Source: {benefit.source}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Over 50 Years of Research
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From Harvard Medical School to the CDC, leading institutions worldwide confirm the profound
            physical, mental, and emotional benefits of the human-animal bond.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Explore Full Research Library
          </button>
        </div>
      </div>
    </section>
  );
}
