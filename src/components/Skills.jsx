import { Code, Database, Palette, Globe, Server, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={28} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={28} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'Laravel', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'RESTful APIs', level: 80 }
      ]
    },
    {
      title: 'Database Management',
      icon: <Database size={28} />,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'Database Design', level: 80 }
      ]
    },
    {
      title: 'Design & Tools',
      icon: <Palette size={28} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Git & GitHub', level: 80 }
      ]
    },
    {
      title: 'System Administration',
      icon: <Wrench size={28} />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Windows Server', level: 80 },
        { name: 'Active Directory', level: 85 },
        { name: 'Domain Controllers', level: 80 },
        { name: 'FSMO Roles', level: 75 }
      ]
    },
    {
      title: 'Languages',
      icon: <Globe size={28} />,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'English', level: 90 },
        { name: 'Filipino', level: 100 }
      ]
    }
  ]

  const getSkillColor = (level) => {
    if (level >= 85) return 'bg-green-500'
    if (level >= 75) return 'bg-blue-500'
    return 'bg-yellow-500'
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Technical proficiencies and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-white/90">Major Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-white/90">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Professional Attributes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Attention to Detail', 'Time Management', 'Communication'].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 rounded-full font-semibold border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
