import { Heart, Shield, Sparkles, Users } from 'lucide-react';

export default function Vision() {
  const values = [
    {
      icon: Heart,
      title: 'Love First',
      description: 'Every pet deserves unconditional love and scientific care that honors their unique journey.',
      color: 'rose',
    },
    {
      icon: Shield,
      title: 'Science-Backed',
      description: 'Our approach combines emotional intelligence with veterinary research and behavioral science.',
      color: 'amber',
    },
    {
      icon: Sparkles,
      title: 'Joyful Moments',
      description: 'We celebrate every milestone, from first paw steps to golden years, making memories last forever.',
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Community United',
      description: 'A global family of pet parents sharing wisdom, support, and the beautiful chaos of pet life.',
      color: 'rose',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-rose-100 rounded-full mb-4">
            <span className="text-rose-600 font-semibold text-sm">OUR VISION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            A World Where Pets Thrive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Furora, we believe that every pet's life is a precious story waiting to unfold.
            Our mission is to empower pet parents with the knowledge, tools, and community support
            to create extraordinary lives for their beloved companions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-rose-200 cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${value.color}-400 to-${value.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-rose-100 via-orange-100 to-amber-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Building Tomorrow's Pet Care Ecosystem
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From personalized health tracking to AI-powered nutrition guidance,
            we're creating an integrated platform that grows with your pet—because
            they're not just pets, they're family.
          </p>
        </div>
      </div>
    </section>
  );
}
