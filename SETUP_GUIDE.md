# Setup Guide for SaasLyn Next.js Project

## ✅ Project Setup Complete!

Your HTML template has been successfully converted to a Next.js application with proper component structure.

## 📦 Installation & Running

### Step 1: Install Dependencies

```bash
cd nextjs-app
npm install
```

This will install all required dependencies:
- Next.js 15.1.6
- React 19
- TypeScript
- Tailwind CSS
- And all other necessary packages

### Step 2: Run Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 🎯 What Has Been Converted

### ✅ Completed Components

1. **Layout Components:**
   - `Header.tsx` - Full navigation with dropdowns and contact info
   - `Footer.tsx` - Footer with links and newsletter subscription

2. **Home Page Sections:**
   - `Hero.tsx` - Main banner with CTA buttons
   - `About.tsx` - Company introduction
   - `Services.tsx` - AI services grid (6 services)

3. **Common Components:**
   - `PreLoader.tsx` - Loading animation
   - `BackToTop.tsx` - Scroll to top button
   - `CustomCursor.tsx` - Custom cursor effect

4. **Assets:**
   - ✅ All CSS files copied to `public/assets/css/`
   - ✅ All JavaScript files copied to `public/assets/js/`
   - ✅ All images copied to `public/assets/images/`
   - ✅ All fonts copied to `public/assets/fonts/`

### 🔧 How It Works

1. **CSS Loading**: Original CSS files are loaded via `<link>` tags in `app/layout.tsx`
2. **JavaScript Loading**: jQuery, Bootstrap, Swiper, WOW.js loaded via Next.js `<Script>` component
3. **Component Structure**: HTML sections converted to React components
4. **Routing**: Next.js App Router for navigation

## 📁 Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx       # Root layout (Header + Footer + Scripts)
│   ├── page.tsx         # Homepage (uses Hero, About, Services)
│   ├── globals.css      # Global styles
│   └── favicon.ico
│
├── components/
│   ├── common/
│   │   ├── BackToTop.tsx
│   │   ├── CustomCursor.tsx
│   │   └── PreLoader.tsx
│   ├── home/
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   └── Services.tsx
│   └── layout/
│       ├── Footer.tsx
│       └── Header.tsx
│
├── public/
│   └── assets/
│       ├── css/          # All original CSS
│       ├── js/           # All original JavaScript
│       ├── images/       # All images
│       └── fonts/        # All fonts
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## 🎨 Styling Approach

The project uses a **hybrid CSS approach**:

1. **Original Template CSS**: Loaded globally via `<link>` tags
   - `assets/css/new-css-v2/plugins.css`
   - `assets/css/new-css-v2/style.css`
   - `assets/css/plugins.css`
   - `assets/css/style.css`

2. **Tailwind CSS**: Available for new components (optional)

3. **Component Classes**: Original HTML classes preserved in React components

## 🔌 JavaScript Libraries

All original JavaScript libraries are preserved:

- **jQuery 3.6.0** - DOM manipulation
- **Bootstrap 5** - UI components
- **Swiper.js** - Sliders and carousels
- **WOW.js** - Scroll animations
- **Custom main.js** - Template-specific functionality

Scripts are loaded in the correct order via Next.js `<Script>` component with proper strategies.

## 🚀 Next Steps

### 1. Add More Pages

To add other pages from your original template:

**Example: Create About Page**

Create `app/about/page.tsx`:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - SaasLyn',
}

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      {/* Add your about content here */}
    </main>
  )
}
```

### 2. Add Other Sections

You can add more sections from `index-4.html`:

- Industries section
- Testimonials
- Pricing
- Blog
- Contact form
- Newsletter subscription

Just create new components in `components/home/` and import them in `app/page.tsx`.

### 3. Customize Content

Edit the component files to change:
- Text content
- Images (in `public/assets/images/`)
- Links
- Colors

## 🐛 Troubleshooting

### Issue: Styles not loading

**Solution**: Make sure all CSS files are in `public/assets/css/` and paths in `layout.tsx` start with `/assets/`

### Issue: JavaScript not working

**Solution**: Check browser console for errors. Ensure jQuery is loaded before other scripts.

### Issue: Images not showing

**Solution**: Image paths should start with `/assets/images/` (e.g., `/assets/images/logo.png`)

### Issue: Navigation dropdowns not working

**Solution**: The original jQuery menu code requires the page to fully load. Dropdowns will work after initial page load.

## 📝 Key Features

✅ **Server-Side Rendering (SSR)** - Better SEO and performance
✅ **Component-Based** - Reusable React components
✅ **TypeScript** - Type-safe development
✅ **All Original Animations** - WOW.js, Swiper, custom effects
✅ **Responsive Design** - Works on all devices
✅ **Fast Loading** - Next.js optimizations
✅ **SEO Optimized** - Metadata and semantic HTML

## 🎯 Features Preserved from Original

- ✅ Custom cursor effect
- ✅ Preloader animation
- ✅ Sticky header
- ✅ Dropdown menus
- ✅ Smooth scrolling
- ✅ Back to top button
- ✅ All animations (fade-in, slide-up, etc.)
- ✅ Responsive mobile menu
- ✅ All original styling

## 💡 Tips

1. **Development**: Use `npm run dev` for hot-reload during development
2. **Production**: Always run `npm run build` to check for errors before deploying
3. **Images**: Use Next.js `<Image>` component for optimization (optional upgrade)
4. **Links**: Use Next.js `<Link>` component for client-side navigation (already done)
5. **Fonts**: Original fonts are in `public/assets/fonts/` and loaded via CSS

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Deploy to Other Platforms

Build the static export:

```bash
npm run build
```

Upload the `.next` folder or use the hosting provider's Next.js integration.

## ✨ Benefits of Next.js Version

1. **Better Performance**: Automatic code splitting and optimization
2. **SEO Friendly**: Server-side rendering for better search engine indexing
3. **Maintainable**: Component-based architecture makes updates easier
4. **Type Safety**: TypeScript catches errors during development
5. **Modern Stack**: Using latest React and Next.js features
6. **Scalable**: Easy to add new pages and features

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Verify all files are in the correct locations
3. Make sure Node.js version is 18 or higher
4. Try deleting `node_modules` and `.next` folders, then run `npm install` again

## 📄 License

Same license as the original template.

---

**Congratulations! Your Next.js project is ready to use! 🎉**

Run `npm run dev` and visit `http://localhost:3000` to see your converted website.
