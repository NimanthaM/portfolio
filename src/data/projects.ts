export interface Project {
    id: number
    title: string
    description: string
    detailedDescription?: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl: string
    gallery?: string[] // Multiple images for the carousel
    features?: string[]
    myRole?: string[] // Your contributions/responsibilities in the project
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'ArtAura',
        description:
            'A creative platform for collaborating artists and art lovers that allowed user  authentication (JWT-based), artwork uploads, buying and selling artworks, upload posts in the feed, participating challenges, and exhibition management.',
        detailedDescription:
            'A creative platform for collaborating artists and art lovers that allowed user  authentication (JWT-based), artwork uploads, buying and selling artworks, upload posts in the feed, participating challenges, and exhibition management.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        githubUrl: 'https://github.com/msnvaz/ArtAura.git',
        liveUrl: '/project/1',
        imageUrl: '/images/project1.png',
        gallery: [
            '/images/project1.png',
            '/images/project1-2.png',
            '/images/project1-3.png',
            '/images/project1-4.png',
            '/images/project1-5.png',
            '/images/project1-6.png',
            '/images/project1-7.png',
            '/images/project1-8.png',
            '/images/project1-9.png',
            '/images/project1-10.png',
            '/images/project1-11.png',
            '/images/project1-12.png',
            '/images/project1-13.png',
            '/images/project1-14.png',


        ],
        features: [
            'User authentication and authorization',
            'Shopping cart with real-time updates',
            'Secure payment integration with Stripe',
            'Admin dashboard for inventory management',
            'Product search and filtering',
            'Order tracking system',
        ],
        myRole: [
            'Designed and implemented user authentication system with JWT',
            'Developed the shopping cart functionality with real-time updates',
            'Integrated Stripe payment gateway for secure transactions',
            'Built responsive UI components using React',
            'Implemented RESTful APIs with Node.js and Express',
            'Managed MongoDB database design and optimization',
        ],
    },
    {
        id: 2,
        title: 'Task Management App',
        description:
            'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes deadline tracking and notifications.',
        technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
        githubUrl: 'https://github.com/yourusername/task-manager',
        liveUrl: 'https://your-task-manager.com',
        imageUrl: '/images/project2.jpg', // Use your own image here
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description:
            'A responsive weather application providing real-time weather data, forecasts, and interactive maps. Features location-based weather and detailed weather analytics.',
        technologies: ['React', 'API Integration', 'Chart.js', 'CSS'],
        githubUrl: 'https://github.com/yourusername/weather-app',
        liveUrl: 'https://your-weather-app.com',
        imageUrl: '/images/project3.jpg', // Use your own image here
    },
    {
        id: 4,
        title: 'Social Media Dashboard',
        description:
            'An analytics dashboard for social media metrics with data visualization, trend analysis, and performance tracking across multiple platforms.',
        technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/yourusername/social-dashboard',
        imageUrl: '/images/project4.jpg', // Use your own image here
    },
]
