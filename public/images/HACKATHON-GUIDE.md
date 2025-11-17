# Adding Hackathon Images

## 📸 Image Setup for Hackathons Section

Your portfolio now includes a **Hackathons** section with auto-playing image carousels!

### Folder Structure:

```
public/
└── images/
    ├── hackathon1.png        (main thumbnail)
    ├── hackathon1-2.png      (gallery image 2)
    ├── hackathon1-3.png      (gallery image 3)
    ├── hackathon2.jpg
    ├── hackathon2-2.jpg
    └── ...
```

### Naming Convention:

For each hackathon, name your images:
- `hackathon1.png` - Main thumbnail (shows in hackathon grid)
- `hackathon1-2.png` - Second screenshot
- `hackathon1-3.png` - Third screenshot
- etc.

### Recommended Screenshots:

Capture 3-5 images showing:
1. **Project Demo** - Main interface or homepage
2. **Key Features** - Important functionality
3. **Team Photo** (optional) - Your team at the hackathon
4. **Presentation/Pitch** (optional) - You presenting
5. **Award/Certificate** (optional) - Achievement proof

### Image Specifications:

- **Format**: JPG, PNG
- **Dimensions**: 1920x1080 or 16:9 ratio
- **File Size**: Keep under 500KB
- **Quality**: Clear and professional

### Updating Hackathon Data:

Edit `src/data/hackathons.ts`:

```typescript
{
    id: 1,
    title: 'Your Hackathon Project',
    event: 'HackathonX 2024',
    date: 'March 15-17, 2024',
    description: 'Brief description for the card...',
    detailedDescription: 'Longer description for the detail modal...',
    achievement: '1st Place Winner',  // Optional
    technologies: ['React', 'Node.js', 'MongoDB'],
    teamSize: 4,
    role: 'Full-Stack Developer',
    imageUrl: '/images/hackathon1.png',
    gallery: [
        '/images/hackathon1.png',
        '/images/hackathon1-2.png',
        '/images/hackathon1-3.png',
    ],
    features: [
        'Feature 1',
        'Feature 2',
        // ... more features
    ],
    myContributions: [
        'What you built/did',
        'Your specific contributions',
        // ... more contributions
    ],
    projectUrl: 'https://github.com/yourusername/project',  // Optional
}
```

### Features:

✨ **Auto-Play Carousel** - Images change every 3 seconds
🖱️ **Manual Navigation** - Arrow buttons and dot indicators
📱 **Swipe Support** - Touch gestures on mobile
🏆 **Achievement Badges** - Highlighted on cards and detail view
👥 **Team Info** - Display team size and your role
📅 **Event Details** - Show event name and date

### Card Layout:

Each hackathon card displays:
- Achievement badge overlay (if applicable)
- Main project image
- Project title
- Event name and date
- Brief description
- First 4 technologies (with "+X more" if applicable)
- "📖 More Details" button

### Detail Modal:

The detail view includes:
- Achievement badge
- Full title with gradient
- Event info (date, event name, team size, role)
- All technologies
- Auto-playing image carousel
- Full description
- Key features list
- Your contributions section
- Project link button (if provided)

### Tips:

1. **Show Your Work** - Include screenshots of what YOU built
2. **Tell the Story** - Use images to show the project journey
3. **Highlight Achievements** - Include awards, certificates, or recognition
4. **Team Context** - Show collaboration (team photos optional)
5. **Professional Quality** - Use clear, high-resolution images
6. **Consistent Sizing** - Keep all images the same resolution

The hackathon section appears between Projects and Contact with a darker background for visual separation! 🚀
