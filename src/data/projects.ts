export interface Project {
    id: number
    title: string
    description: string
    detailedDescription?: string
    technologies: string[]
    githubUrl?: string
    githubFrontend?: string // Frontend repository URL
    githubBackend?: string // Backend repository URL
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
        technologies: ['React', 'Spring Boot', 'MySQL'],
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
            'Artist Features: Portfolio creation and management, artwork uploads, commission request handling, exhibition and achievement updates.',
            'Buyer Features: Browse and purchase artworks, request custom commissions, leave reviews and ratings.',

            'Shop Owner Features: Manage product listings, track sales and analytics, handle orders and deliveries.',

            'Moderator & Admin Features: Verify user credentials, manage exhibitions and challenges, monitor finances, commissions, and platform activities.',

            'Integrated Payment & Analytics System: Handles transactions, calculates commissions, and provides insights through dashboards.',
            'Notification & Interaction System: Enables following, commenting, and rating to foster a community-driven environment.',
        ],
        myRole: [
            'My primary focus was on building and maintaining the Artist Management Module, which included:',
            'Developing the Artist Portfolio — enabling artists to create, edit, and showcase their artworks and profile.',
            'Implementing Artwork Upload & Sales features — allowing artists to upload art pieces and list them for sale.',
            'Building the Commission Request System — where artists can accept or reject buyer commission requests.',

            'Creating interfaces for Exhibition and Achievement Updates — helping artists highlight their accomplishments.'
        ],
    },
    {
        id: 2,
        title: 'UniHub',
        description:
            'A platform for collaborating University lectures and students together. It allows students to connect with lectures for requesting answers directly, requesting for meetings, uploading lecture slides, and Gemini based AI chatbot to solve questions in the past papers as well.',
        technologies: ['React', 'Spring Boot', 'MySQL'],
        githubFrontend: 'https://github.com/Peshala84/uni-hub',
        githubBackend: 'https://github.com/ShashiniMadhu/UniHUB-Backend',
        liveUrl: '/project/2',
        imageUrl: '/images/project2.png', // Use your own image here

        gallery: [
            '/images/project2.png',
            '/images/project2-2.png',
            '/images/project2-3.png',
            '/images/project2-4.png',
            '/images/project2-5.png',
            '/images/project2-6.png',
            '/images/project2-7.png',
            '/images/project2-8.png',
            '/images/project2-9.png',

        ],
        features: [
            'User authentication and authorization',
            'Query Categorization & Ticketing ',
            'Appointment Scheduling',
            'Broadcast Announcements ',
            'Urgency-Based Smart Notification System',
            'Feedback System ',
            'Peer Learning ',
        ],
        myRole: [
            'My primary focus was on building and maintaining the Student Learning Hub, which included:',
            'Queries based on the subjects — enabling students to post questions and get answers from lecturers.',
            'Appointment Scheduling — allowing students to book meetings with lecturers based on their availability.',
            'Student Tools - GPA calculator, To-Do list, Study planner, and more.',
            'Peer Learning Platform — where students can interact, discuss topics, and help each other out.',

        ],
    },
    {
        id: 3,
        title: 'EduFlex',
        description:
            'EduFlex is a PHP MVC–based school management system designed to simplify teacher workflows by handling attendance, marks management, daily activities, and class reporting in an automated and structured way.',
        technologies: ['PHP', 'MySQL'],
        githubUrl: 'https://github.com/nikilasilva/EduFlex.git',
        liveUrl: '/project/3',
        imageUrl: '/images/project3.png', // Use your own image here

        features: [
            'Student attendance marking',

            'Attendance updating within a limited period',

            'Student marks entry system',

            'Term selection for marks submission',
            'Class report generation (averages, ranks, summaries)',

            'Update marks feature',

            'Teacher daily activity recording',

            'Dynamic loading of classes, subjects, and students from database',

            'MVC architecture with database-driven operations'
        ],
        myRole: [
            'Complete marks entry module with subject-wise marks',
            'Term selection + storing term data in DB',
            'Class report generation with averages and ranking',
            'Update Marks feature (overwrite and regenerate report)',
            'Student attendance marking system',
            'Update attendance within 1-week validation',
            'Teacher daily activity recording module',
            'Dynamic loading of classes, subjects, and students in forms',
            'Controller + Model integration using Database trait',
            'UI and form flow improvements for teacher modules'
        ],
    },
    {
        id: 4,
        title: 'ZellMart',
        description:
            'ZellMart is a MERN-stack e-commerce web application designed for a mobile phone shop. . The platform allows users to browse mobile phones and accessories, view detailed product pages, and interact with a responsive, user-friendly interface. ZellMart also includes dynamic product properties, an interactive navbar, and a smooth browsing experience optimized for both performance and usability.',
        technologies: ['MERN Stack'],
        githubUrl: 'https://github.com/kaveeshanirmal/zellmart.git',
        imageUrl: '/images/project4.jpg', // Use your own image here
    },
]
