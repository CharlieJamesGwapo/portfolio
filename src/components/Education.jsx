import { GraduationCap, Award, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      institution: 'Misamis Oriental Institute of Science and Technology',
      degree: 'Bachelor of Science in Information Technology',
      location: 'Sta.Cruz, Cogon, Balingasag, Misamis Oriental',
      period: '2022 - 2025',
      awards: [
        '2nd Year - Dean\'s Lister, Ranked 2',
        '3rd Year - Dean\'s Lister, Ranked 2'
      ]
    },
    {
      institution: 'Baliwagan National High School',
      degree: 'Senior High School Graduate',
      location: 'Baliwagan, Balingasag, Misamis Oriental',
      period: '2016 - 2020',
      awards: ['Graduated']
    },
    {
      institution: 'Waterfall Elementary School',
      degree: 'Elementary Graduate',
      location: 'Waterfall, Balingasag, Misamis Oriental',
      period: '2015 - 2016',
      awards: ['Consistent Fifth Honors student from Grade 1 to Grade 6']
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg text-white">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {edu.degree}
                      </p>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Calendar size={16} />
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 ml-16">{edu.location}</p>
                </div>
              </div>

              {edu.awards.length > 0 && (
                <div className="ml-16 mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="text-yellow-500" size={20} />
                    <h4 className="font-semibold text-gray-900">Awards & Recognition</h4>
                  </div>
                  <ul className="space-y-2">
                    {edu.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary mt-1">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
