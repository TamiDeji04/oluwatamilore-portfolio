'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Nexus - AI Reminder App',
      description: 'An intelligent scheduler and reminder app with AI-driven notifications and smart calendar integration.',
      problem: 'People struggle to manage their time effectively and often miss important events or tasks.',
      solution: 'Built an AI-powered app that seamlessly syncs with calendars, prioritizes tasks by urgency and importance, and provides intelligent notifications.',
      tech: ['AI/ML', 'Calendar APIs', 'React', 'JavaScript', 'Base44 Platform'],
      liveUrl: 'https://app--nexus-68b02b7e.base44.app',
      githubUrl: '#',
      featured: true,
      status: 'In Development'
    },
    {
      title: 'Space Invaders 2D Simulation',
      description: 'A modular 2D arcade-style game inspired by Space Invaders using JavaFX for GUI rendering and animation.',
      problem: 'Creating an engaging game with smooth animations and responsive controls.',
      solution: 'Engineered collision detection, enemy spawning, and event-driven player input with real-time game loop.',
      tech: ['Java', 'JavaFX', 'IntelliJ IDEA', 'Git'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'In Progress'
    },
    {
      title: 'Android Music Application',
      description: 'A mobile music streaming application supporting background playbook and playlist functionality.',
      problem: 'Users needed a reliable music app with modern interface and seamless playback.',
      solution: 'Built custom UI components with Material Design and integrated MediaPlayer for audio management.',
      tech: ['Java', 'Android Studio', 'XML', 'Material Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Minesweeper Game',
      description: 'A full-featured Minesweeper clone using Java and Swing with dynamic board sizes and difficulty levels.',
      problem: 'Creating an intuitive game interface with proper game logic and user interactions.',
      solution: 'Implemented recursive algorithms for zero-tile expansion and applied MVC pattern for maintainability.',
      tech: ['Java', 'Swing', 'IntelliJ IDEA'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Number Guessing Game',
      description: 'An interactive CLI-based number guessing game with range-based logic and real-time feedback.',
      problem: 'Building an engaging command-line game with proper input validation.',
      solution: 'Used object-oriented design principles with robust input validation and scoring algorithm.',
      tech: ['Java', 'IntelliJ IDEA'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills in AI development, Java programming, game development, and mobile app creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Problem:</h4>
                  <p className="text-sm text-gray-600 mb-2">{project.problem}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                  <p className="text-sm text-gray-600">{project.solution}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
