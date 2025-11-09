import { Code, Palette, Lightbulb, TrendingUp } from 'lucide-react'

const About = () => {
  const interests = [
    {
      icon: <Code size={32} />,
      title: 'Web & Mobile Development',
      description: 'Building responsive and dynamic applications'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and modern interfaces'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Digital Innovation',
      description: 'Exploring new technologies and solutions'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Continuous Learning',
      description: 'Always improving programming skills'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated Full Stack Developer currently pursuing my Bachelor of Science in Information Technology at 
              <span className="font-semibold text-primary"> Misamis Oriental Institute of Science and Technology</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong academic record as a <span className="font-semibold">Dean's Lister (Ranked 2)</span> for both 
              2nd and 3rd year, I've developed expertise in modern web technologies including React, PHP, Laravel, and MySQL.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in creating user-friendly web applications with clean, efficient code and modern design principles. 
              My experience spans from building POS systems to alumni tracking platforms, always focusing on delivering 
              practical solutions that make a difference.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">🎓</span>
                <span className="text-gray-700">Dean's Lister - Ranked 2 (2nd & 3rd Year)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">🏆</span>
                <span className="text-gray-700">Consistent Fifth Honors (Grade 1-6)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">💼</span>
                <span className="text-gray-700">Multiple Full Stack Projects Completed</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">📜</span>
                <span className="text-gray-700">10+ Professional Certifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">🌐</span>
                <span className="text-gray-700">Proficient in English & Filipino</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interests Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            My Interests
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="text-primary mb-4">{interest.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{interest.title}</h4>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
