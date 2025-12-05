import { Quote, Heart, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';
import AIPet from '../AIPet';

export default function CommunityStories() {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  const stories = [
    {
      quote: "Furora helped us navigate the scary first months with our rescue dog. The behavioral guides and community support were lifesaving. Max went from anxious to confident, and we became the parents he deserved.",
      author: "Sarah & Max",
      role: "Golden Retriever Parent",
      image: "🐕",
      color: "rose",
      rating: 5,
    },
    {
      quote: "When Luna was diagnosed with diabetes, Furora's health tracking and nutrition courses gave us the tools to manage her condition. She's thriving at 12 years old, and every day is a gift we treasure.",
      author: "Michael & Luna",
      role: "Senior Cat Parent",
      image: "🐱",
      color: "amber",
      rating: 5,
    },
    {
      quote: "As a first-time puppy parent, I was overwhelmed. The Pet Parenting University taught me everything from crate training to reading body language. Now Bella and I have an incredible bond built on understanding.",
      author: "Emma & Bella",
      role: "Border Collie Parent",
      image: "🐶",
      color: "orange",
      rating: 5,
    },
    {
      quote: "The milestone tracking feature helped us document every precious moment of Charlie's first year. Looking back at his journey from tiny kitten to majestic cat brings tears of joy. These memories are priceless.",
      author: "James & Charlie",
      role: "Maine Coon Parent",
      image: "🦁",
      color: "emerald",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-orange-50/20 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-100/80 rounded-full mb-4 border border-orange-200">
            <span className="text-orange-600 font-bold text-xs">COMMUNITY VOICES</span>
            <Sparkles className="w-3 h-3 text-orange-600 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Stories That Warm Our Hearts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Real families, real journeys, real love. These are the stories that remind us why we do what we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredStory(index)}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <div className={`absolute -inset-1 bg-gradient-to-br from-${story.color}-400 to-${story.color}-600 rounded-3xl opacity-0 transition-opacity duration-300 blur-xl ${
                hoveredStory === index ? 'opacity-20' : ''
              }`} />

              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <Quote className={`w-12 h-12 text-${story.color}-400 flex-shrink-0`} />
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 text-${story.color}-500 fill-current`} />
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed italic font-medium">
                  "{story.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="text-4xl animate-bounce" style={{ animationDuration: '2s' }}>
                    {story.image}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-lg">{story.author}</div>
                    <div className="text-gray-500 text-sm">{story.role}</div>
                  </div>
                  <Heart className={`w-6 h-6 text-${story.color}-500 flex-shrink-0 transition-all group-hover:scale-125 ${
                    hoveredStory === index ? 'fill-current animate-pulse' : ''
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative py-16 px-12 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 rounded-3xl text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Story Matters
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of pet parents sharing their journeys and inspiring others.
            </p>
            <button className="px-8 py-4 bg-white text-rose-600 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-2 group">
              <span>Share Your Story</span>
              <Heart className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
