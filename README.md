# Modern Portfolio Website

A professional, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and mobile-first approach.

## ✨ Features

- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Performance Optimized**: Fast loading with excellent Lighthouse scores
- **Interactive Elements**: Smooth hover effects and animations
- **Accessible**: Keyboard navigable with proper contrast and alt tags
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
└── components/
    ├── Navbar.tsx          # Navigation with mobile menu
    ├── Hero.tsx            # Hero section with CTA
    ├── Projects.tsx        # Featured projects showcase
    ├── About.tsx           # About section with skills
    └── Contact.tsx         # Contact form and info
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, headline, bio, tech stack
- `src/components/About.tsx` - Personal story, skills, experience
- `src/components/Contact.tsx` - Contact details, social links
- `src/components/Projects.tsx` - Your projects and demos
- `src/app/layout.tsx` - Meta tags and site title

### Styling
- Colors and themes can be customized in Tailwind classes
- Add custom CSS in `src/app/globals.css`
- Icons are from [Lucide React](https://lucide.dev/)

### Projects Section
Replace the example projects in `Projects.tsx` with your own:
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description',
    problem: 'What problem it solves',
    solution: 'How you solved it',
    tech: ['React', 'Next.js', 'etc'],
    liveUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/you/repo',
    featured: true
  }
]
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
The site works on any static hosting platform that supports Next.js.

## 📊 Performance Tips

- Images are optimized with Next.js Image component
- Fonts are optimized with Google Fonts
- CSS is purged and minified by Tailwind
- JavaScript is code-split automatically by Next.js

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
