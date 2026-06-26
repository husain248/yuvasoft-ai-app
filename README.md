# SaasLyn - AI-Powered Digital Solutions (Next.js)

This is a Next.js conversion of the original HTML template, featuring a modern component-based architecture while preserving all original CSS, design elements, and JavaScript functionality.

## 🚀 Getting Started

### Installation

```bash
cd nextjs-app
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer
│   ├── page.tsx             # Homepage (index-4.html converted)
│   └── globals.css          # Global styles
├── components/
│   ├── common/
│   │   ├── BackToTop.tsx    # Back to top button
│   │   ├── CustomCursor.tsx # Custom cursor effect
│   │   └── PreLoader.tsx    # Loading animation
│   ├── home/
│   │   ├── About.tsx        # About section
│   │   ├── Hero.tsx         # Hero/Banner section
│   │   └── Services.tsx     # Services section
│   └── layout/
│       ├── Footer.tsx       # Footer component
│       └── Header.tsx       # Header with navigation
├── public/
│   └── assets/             # All CSS, JS, images from original
│       ├── css/
│       ├── js/
│       ├── images/
│       └── fonts/
└── package.json

```

## 🎨 Design & Styling

- **Original CSS Preserved**: All original CSS files are loaded via `<link>` tags in `layout.tsx`
- **JavaScript Functionality**: jQuery, Bootstrap, Swiper, WOW.js animations all work as in the original
- **Responsive**: Fully responsive design maintained from the original template
- **Component-Based**: React components for reusability and maintainability

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS (alongside original CSS)
- **Original Libraries**:
  - jQuery 3.6.0
  - Bootstrap 5
  - Swiper.js
  - WOW.js (animations)

## 📦 Components

### Layout Components
- `Header`: Top navigation bar with multi-level dropdown menus
- `Footer`: Footer with links and newsletter subscription

### Home Page Components
- `Hero`: Main banner with CTA buttons and hero image
- `About`: Company introduction section
- `Services`: AI services grid display

### Common Components
- `PreLoader`: Loading screen with logo animation
- `BackToTop`: Scroll to top button
- `CustomCursor`: Custom cursor effect (desktop only)

## 🔧 Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG) ready
- ✅ SEO optimized with metadata
- ✅ Type-safe with TypeScript
- ✅ Component-based architecture
- ✅ All original animations and interactions preserved
- ✅ Responsive mobile design
- ✅ Fast page loads with Next.js optimization

## 📝 Adding New Pages

To add a new page (e.g., About page):

1. Create `app/about/page.tsx`:
```typescript
export default function About() {
  return <div>About Page</div>
}
```

2. The route will automatically be available at `/about`

## 🎯 Key Differences from Original HTML

1. **Component Structure**: HTML sections split into reusable React components
2. **Routing**: Next.js file-based routing instead of separate HTML files
3. **Type Safety**: TypeScript for better development experience
4. **Performance**: Automatic code splitting and optimization
5. **Development**: Hot module replacement for faster development

## 📄 Original Template

This project is based on the SaasLyn AI Theme. All original CSS, JavaScript, and assets are preserved in the `public/assets` directory.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📜 License

Same license as the original template.
