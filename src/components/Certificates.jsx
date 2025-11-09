import { Award, Clock, CheckCircle } from 'lucide-react'

const Certificates = () => {
  const certificates = [
    {
      title: 'Windows Server 2012 Training',
      issuer: 'ltfreetraining',
      duration: '9 hours and 24 minutes',
      type: 'Completion'
    },
    {
      title: 'Active Directory',
      issuer: 'ltfreetraining',
      duration: '14 hours and 51 minutes',
      type: 'Completion'
    },
    {
      title: 'Microsoft Manage AD DS Domain Controllers and FSMO Roles',
      issuer: 'Microsoft',
      duration: null,
      type: 'Completion'
    },
    {
      title: 'Dean\'s Lister (2nd Year, 3rd Year)',
      issuer: 'MOIST',
      duration: null,
      type: 'Recognition'
    },
    {
      title: 'TOPCIT (Test of Practical Competency in IT)',
      issuer: 'TOPCIT',
      duration: 'Taken twice (2024–2025)',
      type: 'Participation'
    },
    {
      title: 'Databases with SQL',
      issuer: 'CS50',
      duration: null,
      type: 'Completion'
    },
    {
      title: 'MongoDB Database Training',
      issuer: 'MongoDB',
      duration: '11 hours',
      type: 'Completion'
    },
    {
      title: 'PHP for Web Development',
      issuer: 'CodeMy',
      duration: '2 hours and 33 minutes',
      type: 'Completion'
    },
    {
      title: 'JavaScript Programming',
      issuer: 'Bro Code',
      duration: '8 hours',
      type: 'Completion'
    },
    {
      title: 'HTML and CSS',
      issuer: 'Telugu',
      duration: '9 hours and 7 minutes',
      type: 'Completion'
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Recognition':
        return 'bg-yellow-100 text-yellow-800'
      case 'Participation':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificates & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Professional certifications and academic recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg text-white">
                  <Award size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(cert.type)}`}>
                  {cert.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {cert.title}
              </h3>

              <p className="text-primary font-semibold mb-3">
                {cert.issuer}
              </p>

              {cert.duration && (
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock size={16} />
                  <span>{cert.duration}</span>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle size={16} />
                  <span>Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-2xl font-bold">10+ Professional Certifications</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
