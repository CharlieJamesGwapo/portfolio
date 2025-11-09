import { useState } from 'react'
import { ExternalLink, Github, Code2, Database, Shield, ShoppingCart, Star, TrendingUp } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const projects = [
    {
      title: 'MOIST Alumni Online Tracking System',
      role: 'Full Stack Developer',
      description: 'A comprehensive web-based system for managing alumni records and profiles with advanced security features.',
      features: [
        'Alumni registration and profile management',
        'Admin dashboard for records and reports',
        'Two-Factor Authentication (2FA)',
        'OTP verification via SMS/Email'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: <Database size={32} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Librewry Bistro POS System',
      role: 'Full Stack Developer',
      description: 'A modern point of sale system designed for efficient cafe and bistro operations.',
      features: [
        'Transaction and order management',
        'Sales tracking and analytics',
        'Inventory management',
        'User authentication and roles'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: <ShoppingCart size={32} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Personal Portfolio Website',
      role: 'Full Stack Developer',
      description: 'A responsive portfolio showcasing skills, projects, and professional experience.',
      features: [
        'Responsive design for all devices',
        'Modern UI with Tailwind CSS',
        'Optimized for mobile view',
        'Fast loading and SEO friendly'
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      icon: <Code2 size={32} />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Librewry Bistro Menu',
      role: 'UI/UX Designer & Developer',
      description: 'An intuitive digital menu system with modern design and user-friendly interface.',
      features: [
        'Interactive menu display',
        'Order management system',
        'Modern UI/UX design',
        'Prototyped using Figma'
      ],
      technologies: ['Figma', 'HTML', 'CSS', 'JavaScript'],
      icon: <Shield size={32} />,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-white/90 text-sm flex items-center gap-2">
                          <Star size={14} fill="currentColor" />
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <a 
                    href="https://github.com/CharlieJamesGwapo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    <span className="font-semibold">View Demo</span>
                  </a>
                  <a 
                    href="https://github.com/CharlieJamesGwapo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span className="font-semibold">Code</span>
                  </a>
                </div>
                
                {/* Project Status Badge */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-green-600 font-semibold">
                      <TrendingUp size={16} />
                      Completed
                    </span>
                    <span className="text-gray-500">2024</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
