# Project Images Folder

## Add Your Project Screenshots Here

Place your project images in this folder with descriptive names.

### Current Setup:
- `project1.jpg` - E-Commerce Platform
- `project2.jpg` - Task Management App
- `project3.jpg` - Weather Dashboard
- `project4.jpg` - Social Media Dashboard

### Image Guidelines:

**Recommended Size:**
- Width: 800-1200px
- Height: 500-700px
- Aspect ratio: 16:9 or 4:3

**Format:**
- JPG (for photos/screenshots)
- PNG (for graphics with transparency)
- WebP (for best compression)

**File Size:**
- Keep under 500KB each for fast loading
- Use online tools to compress: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

**Naming Convention:**
- Use descriptive names: `ecommerce-screenshot.jpg`
- Or simple numbers: `project1.jpg`, `project2.jpg`
- No spaces - use hyphens or underscores

### How to Take Good Screenshots:

1. **Full project view** - Show the main interface
2. **Clean browser window** - Remove bookmarks bar and extensions
3. **Use consistent dimensions** - Same size for all projects
4. **Good lighting/contrast** - Ensure text is readable
5. **Show key features** - Highlight what makes your project special

### Tips:

- Take screenshots at 1920x1080 or higher resolution
- Crop to remove unnecessary parts
- Use browser dev tools to set viewport size for consistency
- Consider adding a mockup frame for a professional look

### After Adding Images:

1. Update `src/data/projects.ts` with correct filenames
2. Test locally: `npm run dev`
3. Commit and push to GitHub
4. Deploy to Vercel

Example paths in `projects.ts`:
```typescript
imageUrl: '/images/project1.jpg'
imageUrl: '/images/my-ecommerce.png'
```
