# Adding Project Gallery Images

## 📸 How to Add Multiple Screenshots for Each Project

Your portfolio now supports image carousels! Each project can have multiple screenshots that users can swipe through.

### Folder Structure:

```
public/
└── images/
    ├── project1.png          (main thumbnail)
    ├── project1-2.png        (gallery image 2)
    ├── project1-3.png        (gallery image 3)
    ├── project2.jpg
    ├── project2-2.jpg
    ├── project2-3.jpg
    └── ...
```

### Naming Convention:

For each project, name your images like this:
- `project1.png` - Main thumbnail (shows in project grid)
- `project1-2.png` - Second screenshot
- `project1-3.png` - Third screenshot
- `project1-4.png` - Fourth screenshot (optional)

### Recommended Screenshots:

For each project, capture 3-5 screenshots showing:
1. **Homepage/Main View** - The landing page or main interface
2. **Key Feature 1** - Important functionality in action
3. **Key Feature 2** - Another main feature
4. **Mobile View** (optional) - Responsive design
5. **Dashboard/Admin** (optional) - Backend interface if applicable

### Image Specifications:

- **Format**: JPG, PNG, or WebP
- **Dimensions**: 1920x1080 (16:9 ratio recommended)
- **File Size**: Keep each under 500KB
- **Quality**: High enough to show details clearly

### Updating Your Projects:

Edit `src/data/projects.ts` and add the gallery array:

```typescript
{
    id: 1,
    title: 'Your Project',
    // ... other fields
    imageUrl: '/images/project1.png',
    gallery: [
        '/images/project1.png',
        '/images/project1-2.png',
        '/images/project1-3.png',
    ],
}
```

### Features Available:

✨ **Swipe** - Swipe left/right on mobile
🖱️ **Click Arrows** - Navigate with arrow buttons
⏺️ **Dots Navigation** - Click dots to jump to specific image
⌨️ **Keyboard** - Use arrow keys to navigate
📱 **Touch Friendly** - Optimized for touch devices
🎬 **Smooth Animations** - Fade and scale transitions

### Tips for Great Screenshots:

1. **Clear the Browser** - Hide bookmarks bar, extensions, dev tools
2. **Use Consistent Size** - Same resolution for all images
3. **Show Real Data** - Use actual content, not lorem ipsum
4. **Highlight Features** - Show your project's best functionality
5. **Add Annotations** (optional) - Use arrows or text to highlight features
6. **Test Different States** - Show loading, success, error states
7. **Include Interactions** - Capture hover states, modals, etc.

### Quick Screenshot Tips:

**Windows:**
- `Win + Shift + S` - Snipping tool
- F11 - Fullscreen browser
- F12 - Dev tools (set viewport size)

**Mac:**
- `Cmd + Shift + 4` - Screenshot selection
- `Cmd + Shift + 3` - Full screen

**Browser:**
- `Ctrl/Cmd + Shift + I` - Open dev tools
- Click device icon - Responsive mode
- Set to 1920x1080 for consistency

### Compress Images:

Before adding, compress your images:
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app

### Example Project Setup:

```typescript
{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Short description for grid view...',
    detailedDescription: 'Longer description for detail page...',
    imageUrl: '/images/ecommerce-main.png',
    gallery: [
        '/images/ecommerce-main.png',
        '/images/ecommerce-products.png',
        '/images/ecommerce-cart.png',
        '/images/ecommerce-checkout.png',
        '/images/ecommerce-admin.png',
    ],
    features: [
        'User authentication',
        'Shopping cart',
        'Payment integration',
        // ... more features
    ],
}
```

### Testing:

1. Add images to `public/images/`
2. Update `src/data/projects.ts`
3. Run `npm run dev`
4. Click "Live Demo" on any project
5. Test swiping/clicking through images
6. Check mobile responsiveness

Your visitors will now see a full-screen carousel of your project screenshots with smooth animations! 🚀
