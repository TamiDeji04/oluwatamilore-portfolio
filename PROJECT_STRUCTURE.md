# Portfolio Project Structure

## 📁 Directory Overview

```
portfolio/
├── 📄 README.md                    # Project documentation
├── 📄 PROJECT_STRUCTURE.md         # This file - project organization guide
├── 📄 package.json                 # Dependencies and scripts
├── 📄 next.config.ts               # Next.js configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 eslint.config.mjs            # ESLint configuration
├── 📄 postcss.config.mjs           # PostCSS configuration
├── 📄 .gitignore                   # Git ignore rules
├── 📁 public/                      # Static assets
│   ├── next.svg
│   ├── vercel.svg
│   └── (add your images here)
├── 📁 src/                         # Source code
│   ├── 📁 app/                     # Next.js App Router
│   │   ├── layout.tsx              # Root layout with navbar
│   │   ├── page.tsx                # Main page with all sections
│   │   ├── globals.css             # Global styles
│   │   └── favicon.ico             # Site favicon
│   ├── 📁 components/              # React components
│   │   ├── Navbar.tsx              # Navigation with mobile menu
│   │   ├── Hero.tsx                # Hero section with CTA
│   │   ├── Projects.tsx            # Featured projects showcase
│   │   ├── About.tsx               # About section with skills
│   │   └── Contact.tsx             # Contact form and info
│   ├── 📁 types/                   # TypeScript type definitions
│   │   └── index.ts                # Shared types and interfaces
│   └── 📁 constants/               # Application constants
│       └── index.ts                # Shared constants and data
└── 📁 node_modules/                # Dependencies (auto-generated)
```

## 🎯 Key Files to Customize

### 1. Personal Information
- `src/constants/index.ts` - Update PERSONAL_INFO, SOCIAL_LINKS
- `src/app/layout.tsx` - Update meta tags and site title

### 2. Content Sections
- `src/components/Hero.tsx` - Main headline and introduction
- `src/components/About.tsx` - Personal story and skills
- `src/components/Projects.tsx` - Your projects and demos
- `src/components/Contact.tsx` - Contact information

### 3. Styling & Assets
- `src/app/globals.css` - Global styles and custom CSS
- `public/` - Add your images, resume, favicon
- `tailwind.config.ts` - Customize colors and themes

### 4. Configuration
- `package.json` - Project metadata and dependencies
- `next.config.ts` - Next.js build and runtime settings
- `README.md` - Project documentation

## 🚀 Development Workflow

1. **Start Development**: `npm run dev`
2. **Build for Production**: `npm run build`
3. **Start Production**: `npm start`
4. **Lint Code**: `npm run lint`

## 📝 Customization Checklist

- [ ] Update personal information in `constants/index.ts`
- [ ] Replace example projects with your own
- [ ] Add your profile photo to `public/`
- [ ] Update social media links
- [ ] Add your resume PDF to `public/`
- [ ] Customize colors in Tailwind config
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Deploy to hosting platform

## 🎨 Design System

- **Colors**: Blue primary (#2563eb), Gray neutrals
- **Typography**: Inter font family
- **Spacing**: Tailwind's spacing scale
- **Breakpoints**: Mobile-first responsive design
- **Icons**: Lucide React icon library

## 📊 Performance Features

- Next.js Image optimization
- Font optimization with Google Fonts
- CSS purging with Tailwind
- Automatic code splitting
- Static generation for fast loading
