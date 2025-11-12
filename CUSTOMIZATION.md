# Portfolio Customization Guide

This guide will help you personalize your portfolio website step by step.

## 🎯 Quick Start Checklist

Follow these steps in order to customize your portfolio:

### 1. Update Basic Information

#### File: `index.html`
- Line 10: Change `<title>Your Name - Software Engineer Portfolio</title>`
- Line 9: Update `content="Your Name"` in the author meta tag

#### File: `src/components/Header.tsx`
- Line 53: Change `YourName` to your actual name

#### File: `src/components/Hero.tsx`
- Line 85: Update `Your Name` with your name
- Line 95: Update `Software Engineering Intern` with your desired title
- Lines 107-111: Update the description text to reflect your goals

#### File: `src/components/Footer.tsx`
- Line 39: Change `YourName` to your name
- Line 42: Update the description text
- Line 131: Update copyright text

### 2. Update Contact Information

#### File: `src/components/Contact.tsx`
- Line 197: Update email: `your.email@example.com`
- Line 211: Update GitHub URL and username
- Line 220: Update LinkedIn URL and username
- Line 234: Update location: `Your City, Your Country`

#### File: `src/components/Footer.tsx`
- Line 5: Update GitHub URL
- Line 6: Update LinkedIn URL
- Line 7: Update Twitter URL
- Line 8: Update Email

### 3. Update About Section

#### File: `src/components/About.tsx`
- Lines 3-9: Update skills array with your actual skills and proficiency levels
- Lines 29-41: Update your bio/introduction
- Lines 46-52: Update education information
  - Line 47: Your degree name
  - Line 50: Your university and graduation year
- Lines 110-116: Update additional skills/technologies

### 4. Add Your Projects

#### File: `src/data/projects.ts`
Replace the sample projects with your actual projects:

```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Detailed description of what the project does...',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://your-project-demo.com',
  imageUrl: 'URL to project screenshot',
}
```

**Finding Project Images:**
- Take screenshots of your projects
- Use [Unsplash](https://unsplash.com) for high-quality placeholder images
- Upload to [Imgur](https://imgur.com) or use GitHub repository images

### 5. Customize Colors

#### File: `src/styles/global.css` (Lines 2-18)

Change these CSS variables to match your brand:

```css
--primary-color: #3b82f6;      /* Main color (buttons, links) */
--secondary-color: #8b5cf6;    /* Accent color */
--accent-color: #06b6d4;       /* Additional accent */
```

**Suggested Color Schemes:**

**Professional Blue:**
```css
--primary-color: #2563eb;
--secondary-color: #3b82f6;
--accent-color: #0ea5e9;
```

**Modern Purple:**
```css
--primary-color: #7c3aed;
--secondary-color: #a855f7;
--accent-color: #ec4899;
```

**Tech Green:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #14b8a6;
```

### 6. Update Favicon

1. Create or download a favicon (16x16 or 32x32 pixels)
2. Use [Favicon Generator](https://favicon.io/) to create one
3. Replace `/vite.svg` in the `public` folder (create the folder if it doesn't exist)
4. Update line 5 in `index.html`: `<link rel="icon" type="image/svg+xml" href="/vite.svg" />`

### 7. Add Resume Download (Optional)

Add a resume download button to the Hero section:

In `src/components/Hero.tsx`, after line 135, add:

```tsx
<a
  href="/resume.pdf"
  download
  className="btn btn-outline"
  style={{
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
  }}
>
  📄 Download Resume
</a>
```

Then place your `resume.pdf` file in the `public` folder.

### 8. Enhance Contact Form (Optional)

To make the contact form functional, you can:

1. **Use Formspree** (Free):
   - Sign up at [Formspree](https://formspree.io/)
   - Update form action in `src/components/Contact.tsx`

2. **Use Netlify Forms** (if deploying to Netlify):
   - Add `data-netlify="true"` to the form tag

3. **Use EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their React integration guide

### 9. Add Analytics (Optional)

To track visitors, add Google Analytics:

1. Get your GA tracking ID from Google Analytics
2. Add this to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 10. SEO Optimization

#### Update Meta Tags in `index.html`:
```html
<meta name="description" content="Your custom description here" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="URL to your image" />
```

## 🧪 Testing Checklist

Before deploying, test these:

- [ ] All navigation links work
- [ ] Smooth scrolling between sections
- [ ] Mobile responsiveness (use browser dev tools)
- [ ] All social media links are correct
- [ ] Contact form works (shows success message)
- [ ] All project links work
- [ ] No console errors (F12 to check)
- [ ] Images load properly
- [ ] Hover effects work on all interactive elements

## 🚀 Deployment Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

3. **Add to CV:**
   ```
   Portfolio: https://your-name.vercel.app
   ```

## 💡 Pro Tips

1. **Keep it Simple**: Don't overcomplicate. Clean and professional is better than flashy.

2. **Quality over Quantity**: Show 4-6 best projects instead of 20 mediocre ones.

3. **Real Projects**: Use actual projects you've built. If you don't have any:
   - Build 2-3 small projects specifically for your portfolio
   - Contribute to open source and showcase those contributions
   - Create clones of popular apps with your own twist

4. **Tell a Story**: In the About section, explain WHY you love coding, not just WHAT you know.

5. **Keep Updated**: Update your portfolio as you learn new skills and build new projects.

6. **Get Feedback**: Ask friends, mentors, or online communities to review your portfolio.

7. **Mobile First**: Most recruiters will check on mobile. Test thoroughly!

## 🎨 Further Customization Ideas

- Add a blog section for technical articles
- Include certifications and achievements
- Add a skills animation or visualization
- Create a dark mode toggle
- Add loading animations
- Include testimonials or recommendations
- Add a timeline of your journey
- Create an interactive resume section

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Documentation](https://vercel.com/docs)
- [Web Design Inspiration](https://dribbble.com/)
- [Free Images](https://unsplash.com/)
- [Icons](https://fonts.google.com/icons)

---

**Need Help?** Check the README.md for more information!
