import { Smartphone, Calendar, ShoppingBag, Users, Heart, Activity, MapPin, Video } from 'lucide-react';

export default function ServicesEcosystem() {
  const services = [
    {
      icon: Activity,
      title: 'Health Tracking',
      description: 'AI-powered wellness monitoring and veterinary integration',
      status: 'Available',
      color: 'emerald',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated reminders for vet visits, grooming, and medications',
      status: 'Available',
      color: 'rose',
    },
    {
      icon: ShoppingBag,
      title: 'Personalized Shop',
      description: 'Curated products based on your pet\'s needs and preferences',
      status: 'Coming Soon',
      color: 'amber',
    },
    {
      icon: Video,
      title: 'Tele-Vet Consults',
      description: 'Connect with certified veterinarians from home',
      status: 'Coming Soon',
      color: 'orange',
    },
    {
      icon: MapPin,
      title: 'Local Services',
      description: 'Find trusted groomers, walkers, and pet-friendly places',
      status: 'Beta',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Social Network',
      description: 'Connect with nearby pet parents for playdates and advice',
      status: 'Available',
      color: 'rose',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <span className="text-emerald-600 font-semibold text-sm">COMPLETE ECOSYSTEM</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Everything Your Pet Needs,
            <br />
            One Beautiful Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From health to happiness, we're building an integrated ecosystem that simplifies pet parenting
            while deepening the bond you share.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAvailable = service.status === 'Available';
            const isBeta = service.status === 'Beta';

            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group ${
                  isAvailable ? 'border-2 border-emerald-200' : 'border border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isAvailable
                        ? 'bg-emerald-100 text-emerald-700'
                        : isBeta
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {service.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-rose-100 via-orange-100 to-amber-100 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl" />

          <div className="relative z-10">
            <Smartphone className="w-16 h-16 text-rose-600 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              One App. Infinite Possibilities.
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Join the waitlist and be among the first to experience the future of pet care—where
              technology meets unconditional love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                <span>Download for iOS</span>
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
