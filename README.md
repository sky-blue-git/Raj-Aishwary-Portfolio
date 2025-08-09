# Raj Aishwary - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional UI with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **TypeScript**: Type-safe development with TypeScript
- **Component Library**: Uses shadcn/ui components for consistent design
- **Smooth Animations**: Enhanced user experience with scroll animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Achievements.tsx # Achievements section
│   ├── Contact.tsx     # Contact form
│   ├── Education.tsx   # Education section
│   ├── Experience.tsx  # Work experience
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── ThemeToggle.tsx # Theme switcher
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd raj-aishwary-devfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Theme Configuration
The website supports both light and dark themes. You can customize the theme colors in `tailwind.config.ts`.

### Content Updates
Update the content in the respective component files:
- Personal information in `Hero.tsx`
- About section in `About.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`
- Experience in `Experience.tsx`
- Education in `Education.tsx`
- Contact information in `Contact.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add GitHub Pages workflow
2. Build and deploy automatically

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
