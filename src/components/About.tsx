'use client'

import { Code, Palette, Zap, Users } from 'lucide-react'
import { SKILLS_EXTENDED } from '../constants'

export default function About() {
  const skills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Passionate about network security, ethical hacking, and protecting digital systems - aspiring cybersecurity analyst'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Development',
      description: 'Building intelligent applications with AI-driven features and smart automation'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Software Development',
      description: 'Proficient in Java, Python, and JavaScript with focus on object-oriented programming'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Mobile Development',
      description: 'Android app development using Java and Android Studio with Material Design'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a dedicated Computer Science student at Lycoming College, expected to graduate 
                in May 2026. My journey began with curiosity about how software works and has evolved 
                into a passion for cybersecurity, AI development, and creating secure digital solutions.
              </p>
              
              <p>
                As an aspiring cybersecurity analyst, I&apos;m building expertise in network security, 
                ethical hacking, and digital protection while developing skills in Java, Python, and 
                JavaScript. I believe in creating software that&apos;s not just functional, but secure and resilient.
              </p>
              
              <p>
                Currently building Nexus AI-powered reminder app and pursuing cybersecurity knowledge 
                through hands-on projects and certifications. I&apos;m passionate about protecting digital 
                systems and aspire to work in cybersecurity-focused roles after graduation.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What I&apos;m passionate about:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pursuing cybersecurity knowledge and ethical hacking skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Building secure AI applications and mobile solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Contributing to community service and campus organizations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Learning network security and digital forensics
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What I Bring to the Table
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="text-blue-600 mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies I work with:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SKILLS_EXTENDED.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 text-center hover:border-blue-300 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
