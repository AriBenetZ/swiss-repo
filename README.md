# Aurum Ascend Capital - Connect Founders & Investors

A professional Next.js 15 website that connects project owners with private investors. Built with modern technologies and best practices.

## ✨ Features Complete

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Professional UI**: Glass morphism effects, gradient text, smooth hover animations
- **Form Management**: React Hook Form with comprehensive Zod validation
- **Animations**: Smooth GSAP animations with scroll triggers and stagger effects
- **Demo Forms**: Fully functional forms with visual feedback (no database required)
- **Icon System**: 450+ Lucide React icons used throughout for visual consistency
- **File Uploads**: File upload interface with validation (visual demo)
- **Performance**: Optimized fonts, images, and animations with reduced motion support
- **Accessibility**: Focus management, ARIA labels, and semantic HTML structure

## 🎨 Design Features

- **Professional Aesthetics**: Modern 2025 design with glass morphism effects
- **Color System**: Comprehensive CSS custom properties for consistent theming
- **Typography**: Inter font optimized for readability and performance
- **Animation Framework**: GSAP-powered smooth animations with scroll triggers
- **Icon Library**: 450+ Lucide React icons for visual consistency
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Accessibility**: Focus management, reduced motion support, and semantic HTML
- **Performance**: Hardware-accelerated animations and optimized asset loading

1. **Home (/)** - Hero section, features, process overview, CTA
2. **How It Works (/how-it-works)** - Detailed 5-step process explanation
3. **Apply (/apply)** - Comprehensive application form with file upload
4. **About (/about)** - Company information, team, values
5. **Contact (/contact)** - Contact form and company details

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS Custom Properties
- **Forms**: React Hook Form + Zod validation
- **Animations**: GSAP with ScrollTrigger
- **Icons**: Lucide React (450+ professional icons)
- **Demo Mode**: All forms work with console logging (no database required)
- **UI Components**: Custom components with class-variance-authority
- **Fonts**: Inter font optimized with next/font/google

## 🏗️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd funding
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

> **Note**: This is currently a demo version that works with visual feedback only. All forms log data to the console and show success states without requiring a database. Perfect for showcasing the UI and functionality!

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/           # About page
│   ├── apply/           # Application form page
│   ├── contact/         # Contact page
│   ├── how-it-works/    # Process explanation page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── ui/              # UI components (Button, Input, etc.)
│   ├── navbar.tsx       # Navigation component
│   └── footer.tsx       # Footer component
└── lib/                 # Utilities and configurations
    ├── supabase.ts      # Supabase client setup
    ├── utils.ts         # Utility functions
    └── validations.ts   # Zod schemas for form validation
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb)
- **Background**: White (#ffffff)
- **Text**: Gray shades
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)

### Typography

- **Font**: Inter (from Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good readability

### Components

- **Buttons**: Multiple variants (default, outline, ghost, etc.)
- **Cards**: Clean design with subtle shadows
- **Forms**: Consistent styling with validation states
- **Layout**: Grid-based with proper spacing

## 🚀 Demo Features

This is a fully functional demo showcasing:

- **Complete UI/UX**: All pages designed and implemented
- **Form Validation**: Real-time validation with error handling
- **Animations**: Smooth GSAP animations throughout
- **Responsive Design**: Works perfectly on all devices
- **Professional Styling**: Modern 2025 design with glass morphism
- **Console Logging**: All form submissions log to browser console
- **Visual Feedback**: Success/error states for all interactions

Perfect for showcasing to clients or as a portfolio piece!

## 🎯 Business Model

Aurum Ascend Capital operates as a middleman connecting project owners with private investors:

1. **No Upfront Fees**: Free to apply and submit projects
2. **Success-Based Commission**: Success fee only upon successful funding
3. **Investor Network**: Curated network of verified investors
4. **Global Reach**: Serving clients worldwide across multiple industries

## 📝 Customization

### Adding New Project Types

Edit the `projectTypes` array in `/src/app/apply/page.tsx`

### Modifying Form Fields

Update the Zod schema in `/src/lib/validations.ts` and corresponding form components

### Changing Design

Modify Tailwind classes throughout components or update the design system in `/src/components/ui/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For technical support or questions:

- Email: tech@aurumascend.ch
- Website: https://www.aurumascend.ch

---

Built with ❤️ by the Aurum Ascend Capital team
