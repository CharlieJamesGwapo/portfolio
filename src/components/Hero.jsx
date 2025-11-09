import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Award, Code } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const roles = ['Full Stack Developer', 'Web Developer', 'UI/UX Enthusiast', 'Problem Solver']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(roleTimer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 animate-pulse">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <span className="text-sm font-semibold">Available for opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm <span className="text-gradient">Charlie James</span>
              </h1>
              
              <div className="h-16 mb-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in">
                  {roles[currentRole]}
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Dean's Lister (Ranked 2) | BSIT Student at MOIST | Passionate about creating innovative web solutions with expertise in React, PHP, Laravel, and modern web technologies.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto lg:mx-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Certificates</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">4+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1">3+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#contact"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail size={20} />
                  <span>Hire Me</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 border-2 border-gray-300 rounded-full font-semibold hover:border-primary hover:text-primary transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  <Code size={20} />
                  <span>View Work</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base">
                <a href="tel:09856122843" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="hidden sm:inline">09856122843</span>
                </a>
                <a href="mailto:capstonee2@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="hidden sm:inline">Email Me</span>
                </a>
                <div className="flex items-center gap-2 text-gray-600 group">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="hidden sm:inline">Misamis Oriental</span>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-2xl transition-all duration-500 animate-pulse"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-2xl">
                    <img 
                      src="/profile.png" 
                      alt="Charlie James Z. Abejo"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl animate-bounce">
                    <Award className="text-yellow-500" size={32} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-xl animate-bounce animation-delay-1000">
                    <Code className="text-blue-500" size={32} />
                  </div>
                </div>

                {/* Social Links - Floating */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                  <a href="https://github.com/CharlieJamesGwapo" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-gray-900">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/charlie-james-abejo-26362638a/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-600">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:capstonee2@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-red-600">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 lg:mt-20">
            <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 hover:text-primary transition-colors animate-bounce">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
