export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description:
            'A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard. Features include product search, user authentication, and order management.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        githubUrl: 'https://github.com/yourusername/ecommerce',
        liveUrl: 'https://your-ecommerce-demo.com',
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    },
    {
        id: 2,
        title: 'Task Management App',
        description:
            'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes deadline tracking and notifications.',
        technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
        githubUrl: 'https://github.com/yourusername/task-manager',
        liveUrl: 'https://your-task-manager.com',
        imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description:
            'A responsive weather application providing real-time weather data, forecasts, and interactive maps. Features location-based weather and detailed weather analytics.',
        technologies: ['React', 'API Integration', 'Chart.js', 'CSS'],
        githubUrl: 'https://github.com/yourusername/weather-app',
        liveUrl: 'https://your-weather-app.com',
        imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    },
    {
        id: 4,
        title: 'Social Media Dashboard',
        description:
            'An analytics dashboard for social media metrics with data visualization, trend analysis, and performance tracking across multiple platforms.',
        technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/yourusername/social-dashboard',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
]
