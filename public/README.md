# How to Add Your Profile Picture

## Quick Steps:

1. Choose a professional photo of yourself (preferably a headshot)
2. Rename your photo to `profile.jpg` (or `profile.png`)
3. Place it in this `public` folder
4. The photo will automatically appear in your portfolio!

## Photo Guidelines:

- **Format**: JPG, PNG, or WebP
- **Size**: At least 500x500 pixels (square is best)
- **Quality**: High resolution, clear and professional
- **Background**: Clean background preferred
- **File size**: Keep under 500KB for fast loading

## Tips for a Great Profile Photo:

✅ Professional attire
✅ Good lighting
✅ Neutral or clean background
✅ Smiling and approachable
✅ Face clearly visible
✅ High quality/resolution

## If you use a different filename:

Update line in `src/components/Hero.tsx`:
```tsx
src="/profile.jpg"  // Change this to your filename
```

## Current Setup:

- Your photo should be named: **profile.jpg**
- Place it in: **public/** folder
- It will display as a circular profile picture with a glowing border
