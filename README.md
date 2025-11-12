# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Perfect for showcasing your projects and skills to potential employers.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Built with Vite for optimal performance
- **Type-Safe**: Written in TypeScript for better code quality
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Easy to Customize**: Well-organized code structure

## 📋 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information, skills, and education
3. **Projects**: Showcase of your best work with descriptions and links
4. **Contact**: Contact form and social media links
5. **Footer**: Quick links and social connections

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 with custom animations
- Google Fonts (Inter)

## 🏃 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📝 Customization

### Personal Information

1. **Update Your Name**:
   - `index.html`: Update the title and meta tags
   - `src/components/Header.tsx`: Change "YourName" to your name
   - `src/components/Hero.tsx`: Update your name and title
   - `src/components/Footer.tsx`: Update branding

2. **Update Contact Information**:
   - `src/components/Contact.tsx`: Update email and social links
   - `src/components/Footer.tsx`: Update social media URLs

3. **Update About Section**:
   - `src/components/About.tsx`: Edit your bio, skills, and education

4. **Add Your Projects**:
   - `src/data/projects.ts`: Replace with your actual projects
   - Add project images or use placeholder images

### Styling

- Global styles: `src/styles/global.css`
- Colors are defined as CSS variables in `:root`
- Easily change the color scheme by updating the variables

## 🚀 Deploy to Vercel

### Method 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Method 2: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   - Create a new repository on GitHub
   - Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Sign up or login (you can use your GitHub account)
4. Click "Add New Project"
5. Import your GitHub repository
6. Vercel will automatically detect it's a Vite project
7. Click "Deploy"
8. Your site will be live in minutes!

### Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📱 Adding to Your CV

Once deployed, add your portfolio link to your CV:

- **Format**: `Portfolio: https://your-name.vercel.app`
- Add it in the header section along with your contact information
- Or create a dedicated "Portfolio" or "Website" section

## ✅ Before Deploying Checklist

- [ ] Replace all "YourName" with your actual name
- [ ] Update all email addresses and social media links
- [ ] Add your real projects to `src/data/projects.ts`
- [ ] Update the About section with your information
- [ ] Test the contact form
- [ ] Check mobile responsiveness
- [ ] Update favicon (replace `/vite.svg`)
- [ ] Test all links
- [ ] Review and fix any console errors

## 🎨 Color Customization

To change the color scheme, edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #3b82f6;     /* Main blue color */
  --secondary-color: #8b5cf6;   /* Purple accent */
  --accent-color: #06b6d4;      /* Cyan accent */
  /* ... other colors */
}
```

## 📄 License

This project is free to use for personal portfolios.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Support

If you have any questions or need help, feel free to reach out!

---

**Good luck with your job applications! 🎉**
