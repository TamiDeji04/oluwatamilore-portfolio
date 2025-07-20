// Type definitions for the portfolio website

export interface Project {
  title: string
  description: string
  problem: string
  solution: string
  tech: string[]
  image?: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface Skill {
  icon: React.ReactNode
  title: string
  description: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}
