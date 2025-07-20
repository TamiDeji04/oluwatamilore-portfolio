'use client'

import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { PERSONAL_INFO, TECH_STACK } from '../constants'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {PERSONAL_INFO.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            {PERSONAL_INFO.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {PERSONAL_INFO.bio}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/resume.pdf" 
              download="Oluwatamilore_Adedeji_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
