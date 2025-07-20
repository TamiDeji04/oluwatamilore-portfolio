import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oluwatamilore Adedeji-Ibraheem - Computer Science Student & AI Developer',
  description: 'Computer Science Student & AI Developer. Building Nexus AI reminder app and innovative software solutions with Java, Python, JavaScript, and React.',
  keywords: 'computer science student, AI developer, java, python, javascript, react, nexus app, software developer, lycoming college',
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
