# Carpet Co. Dukinfield - Website

Professional carpet fitting services website for Carpet Co. in Dukinfield. Built with Next.js 15, featuring a modern azure blue and yellow color scheme with full dark mode support.

## Design System

### Brand Colors (from carpet-co-azure logo)

**Azure Blues** (Primary):
- `#024378` - Primary azure blue
- `#3679a4` - Light blue
- `#7ba5c5` - Lighter blue
- `#e6f0f7` - Lightest blue (backgrounds)
- `#01305a` - Dark blue
- `#011d3c` - Darker blue

**Yellows** (Accent):
- `#fac444` - Primary yellow
- `#fcd570` - Light yellow
- `#fde79d` - Lighter yellow
- `#fef9ed` - Lightest yellow (cream)
- `#d9a428` - Dark yellow
- `#b8891a` - Darker yellow

### Dark Mode
Full dark mode support with toggle button in NavBar.

**Light Mode:**
- Backgrounds: White, cream
- Text: Blue shades
- Accents: Yellow/gold

**Dark Mode:**
- Main backgrounds: Black (#000000)
- Section variations: Dark gray (zinc-900)
- Cards: Medium blue (#024378)
- Text: Gold-light, white
- Accents: Yellow/gold

### Typography
- **Primary**: Montserrat (weights 300-800) - matches logo
- **Display**: Bebas Neue - special headings

### Logos
**Light Mode:**
- NavBar: `/public/carpet-co-azure.png`
- Hero: `/public/carpet-co-azure-crop.png`

**Dark Mode:**
- NavBar: `/public/carpetco-dark.webp`
- Hero: `/public/carpetco-dark-crop.png`

## Components

- **NavBar**: Fixed navigation with logo, mobile menu, and dark mode toggle
- **Hero**: Full-screen hero with logo and CTA buttons (logo changes in dark mode)
- **Gallery**: Dynamic gallery from `/public/work*.{jpg,png,webp}`
- **About**: Contact information and opening hours
- **Reviews**: Customer testimonials with star ratings
- **ContactForm**: Contact form with server action (UK phone format)
- **GoogleMap**: Embedded Google Maps
- **Footer**: Site footer with links
- **DarkModeToggle**: Theme toggle (saves to localStorage)

## Getting Started

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
npm start
```

## Key Features

- Modern Next.js 15 with App Router
- Turbopack for fast development
- **Full dark mode** with toggle (class-based, saves preference)
- Optimized Google Fonts (Montserrat, Bebas Neue)
- Responsive design (mobile-first)
- Server-side contact form with Nodemailer
- Dynamic gallery from file system
- Smooth scrolling navigation
- SEO optimized
- Logo variants for light/dark modes

## Documentation

- **COMPONENT_USAGE_EXAMPLES.md** - Detailed component usage and customization
- **DUAL_LANGUAGE_GUIDE.md** - Guide for dual language implementation (not currently active)

## Contact Form Setup

The contact form uses Nodemailer. Configure environment variables in `.env.local`:

```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

## Location

Wild St, Dukinfield SK16 4DL
Phone: 0161 344 5377
Hours: Mon-Fri 10am-5pm

## Tech Stack

- Next.js 15.5.6
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
- Nodemailer
