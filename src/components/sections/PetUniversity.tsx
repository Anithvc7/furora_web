import { BookOpen, Video, FileText, Award, GraduationCap } from 'lucide-react';

export default function PetUniversity() {
  const courses = [
    {
      icon: GraduationCap,
      title: 'Puppy & Kitten Foundations',
      level: 'Beginner',
      duration: '4 weeks',
      description: 'Essential care, training, and bonding strategies for your new family member.',
      modules: 12,
      students: '45K+',
      color: 'rose',
    },
    {
      icon: BookOpen,
      title: 'Behavioral Psychology',
      level: 'Intermediate',
      duration: '6 weeks',
      description: 'Understand your pet\'s mind, decode behaviors, and strengthen communication.',
      modules: 18,
      students: '32K+',
      color: 'amber',
    },
    {
      icon: Award,
      title: 'Advanced Nutrition Science',
      level: 'Advanced',
      duration: '8 weeks',
      description: 'Evidence-based feeding strategies, supplements, and dietary optimization.',
      modules: 24,
      students: '28K+',
      color: 'emerald',
    },
    {
      icon: Video,
      title: 'Senior Pet Care Mastery',
      level: 'Intermediate',
      duration: '5 weeks',
      description: 'Specialized care for aging companions, from mobility to cognitive health.',
      modules: 15,
      students: '19K+',
      color: 'orange',
    },
  ];

  const resources = [
    { icon: FileText, title: 'Care Guides', count: '500+' },
    { icon: Video, title: 'Video Tutorials', count: '1,200+' },
    { icon: BookOpen, title: 'Research Articles', count: '800+' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-rose-100 rounded-full mb-4">
            <span className="text-rose-600 font-semibold text-sm">LEARN & GROW</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Pet Parenting University
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first-time parents to seasoned experts, our comprehensive learning platform
            empowers you with science-backed knowledge and practical wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-rose-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800">{resource.count}</div>
                <div className="text-gray-600 font-medium">{resource.title}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-transparent hover:border-rose-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${course.color}-400 to-${course.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 bg-${course.color}-100 text-${course.color}-700 rounded-full text-sm font-semibold`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.modules} modules
                  </span>
                  <span>{course.duration}</span>
                  <span>{course.students} enrolled</span>
                </div>

                <button className={`w-full py-3 bg-gradient-to-r from-${course.color}-500 to-${course.color}-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all`}>
                  Start Learning
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join 100,000+ Certified Pet Parents
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Earn certificates, unlock achievements, and become the best parent your pet deserves.
          </p>
          <button className="px-8 py-4 bg-white text-rose-600 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
