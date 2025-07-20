import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oluwatamilore Adedeji-Ibraheem - Aspiring Cybersecurity Analyst & AI Developer',
  description: 'Computer Science Student & Aspiring Cybersecurity Analyst. Building secure AI applications like Nexus reminder app while pursuing expertise in network security, ethical hacking, and digital protection.',
  keywords: 'cybersecurity analyst, network security, ethical hacking, computer science student, AI developer, java, python, javascript, nexus app, cybersecurity internship, lycoming college',
  authors: [{ name: 'Oluwatamilore Adedeji-Ibraheem' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
