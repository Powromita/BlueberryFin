# Blueberryfin Capital - Financial Advisory Website

A stunning, modern financial advisory website built with Next.js, React, Three.js, and Framer Motion.

## Features

- 🎨 **Stunning Initial Animation** - 3D Three.js scene with particle effects and smooth transitions
- ✨ **Smooth Animations** - Framer Motion powered animations throughout
- 🎯 **Interactive Elements** - Hover effects, transitions, and engaging UI
- 📱 **Responsive Design** - Works beautifully on all devices
- 🌙 **Dark Theme** - Modern dark blue and white color scheme
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Radix UI** - UI components

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
BlueberryFin/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── loading-animation.tsx  # Stunning initial loading animation
│   ├── hero-section.tsx   # Hero section with animations
│   ├── navbar.tsx         # Navigation bar
│   └── ...               # Other components
└── public/               # Static assets
```

## Key Components

### Loading Animation
The initial loading animation features:
- 3D rotating sphere with distortion material
- Particle system with physics
- Animated gradient backgrounds
- Smooth letter-by-letter text animation
- Progress bar with shimmer effect
- Floating particles

### Hero Section
Enhanced hero section with:
- Smooth entrance animations
- Interactive hover effects
- Animated gradient backgrounds
- Glowing logo effects
- Responsive design

## Color Scheme

- **Dark Blue**: `#0a1929`, `#1a365d`, `#001f3f`
- **Light Blue**: `#3b82f6`, `#60a5fa`, `#0052cc`
- **White**: `#ffffff`
- **Accents**: Various blue gradients

## Build for Production

```bash
npm run build
npm start
```

## License

Private - All rights reserved
