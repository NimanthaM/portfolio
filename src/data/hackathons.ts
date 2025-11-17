export interface Hackathon {
    id: number
    title: string
    event: string // Hackathon event name
    date: string // Date or date range
    description: string
    detailedDescription?: string
    achievement?: string // e.g., "1st Place", "Best Innovation Award"
    technologies: string[]
    teamSize?: number
    role?: string // Your role in the team
    imageUrl: string
    gallery?: string[] // Multiple images for the carousel
    features?: string[]
    myContributions?: string[] // What you specifically built/did
    projectUrl?: string // Demo or GitHub link
}

export const hackathons: Hackathon[] = [
    {
        id: 1,
        title: 'Smart City Solution',
        event: 'HackX 2024',
        date: 'March 15-17, 2024',
        description:
            'Developed an IoT-based smart parking system that helps drivers find available parking spots in real-time, reducing traffic congestion and pollution.',
        detailedDescription:
            'Our team created a comprehensive smart parking solution using IoT sensors, real-time data processing, and a mobile app. The system includes sensor integration, a cloud backend for data processing, and an intuitive mobile interface for users to locate and reserve parking spots.',
        achievement: '1st Place Winner',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Arduino', 'MQTT'],
        teamSize: 4,
        role: 'Full-Stack Developer',
        imageUrl: '/images/hackathon1.jpeg',
        gallery: [
            '/images/hackathon1.png',
            '/images/hackathon1-2.png',
            '/images/hackathon1-3.png',
        ],
        features: [
            'Real-time parking availability tracking',
            'Mobile app for iOS and Android',
            'Payment integration',
            'Historical data analytics',
            'Admin dashboard for parking lot management',
        ],
        myContributions: [
            'Designed and implemented the REST API backend',
            'Built the real-time notification system',
            'Integrated payment gateway',
            'Developed admin dashboard',
        ],
        projectUrl: 'https://github.com/yourusername/smart-parking',
    },
    {
        id: 2,
        title: 'Health Tracker AI',
        event: 'MedHacks 2024',
        date: 'June 8-9, 2024',
        description:
            'An AI-powered health tracking app that analyzes user data to provide personalized health recommendations and early warning signs of potential health issues.',
        detailedDescription:
            'Built a comprehensive health tracking application that uses machine learning to analyze user health metrics, activity patterns, and lifestyle data to provide personalized recommendations and early detection of health concerns.',
        achievement: 'Best AI Implementation',
        technologies: ['Python', 'TensorFlow', 'Flutter', 'Firebase'],
        teamSize: 3,
        role: 'ML Engineer & Backend Developer',
        imageUrl: '/images/hackathon2.jpeg',
        features: [
            'AI-powered health predictions',
            'Wearable device integration',
            'Personalized health recommendations',
            'Medication reminders',
            'Doctor appointment scheduling',
        ],
        myContributions: [
            'Developed machine learning models for health prediction',
            'Built the data pipeline for processing health metrics',
            'Implemented Firebase backend services',
            'Created data visualization components',
        ],
    },
    {
        id: 3,
        title: 'EcoTrade Platform',
        event: 'GreenTech Hackathon 2024',
        date: 'September 20-22, 2024',
        description:
            'A peer-to-peer marketplace for buying, selling, and exchanging eco-friendly products with a carbon footprint calculator and sustainability scoring system.',
        achievement: 'Finalist - Top 5',
        technologies: ['React', 'Express', 'PostgreSQL', 'Stripe'],
        teamSize: 5,
        role: 'Frontend Lead',
        imageUrl: '/images/hackathon3.jpg',
        features: [
            'User authentication and profiles',
            'Product listings with sustainability scores',
            'Carbon footprint calculator',
            'Secure payment processing',
            'Community forum',
        ],
        myContributions: [
            'Led frontend development with React',
            'Designed and implemented UI/UX',
            'Built the product search and filtering system',
            'Integrated Stripe payment gateway',
        ],
    },
]
