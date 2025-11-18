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
        title: 'Hacktivate \'25',
        event: 'NSBM Green University',
        date:  '2025',
        description:
            'Developed a collaborative university web based platform for seamless interaction between Students and Lecturers. The platform includes features such as course management, assignment submissions, grading systems, and real-time notifications to enhance the academic experience.',
        detailedDescription:
            'Developed a collaborative university web based platform "UniHub" for seamless interaction between Students and Lecturers. Out of 25+ teams from across Sri Lanka, we were excited to be selected among the top 12 finalists, competing alongside some of the best young innovators in the country.',
        achievement: 'Finalists - Top 12',
        technologies: [],
        teamSize: 5,
        role: 'Full-Stack Developer',
        imageUrl: '/images/hackathon1.jpeg',
        gallery: [
            '/images/hackathon1.jpeg',
            '/images/hackathon1-2.jpeg',
            '/images/hackathon1-3.jpeg',
            '/images/hackathon1-4.jpeg',
            '/images/hackathon1-5.jpeg',
        ],
        features: [
            'User Authentication & Authorization',
            'Query Categorization & Ticketing System',
            'Appointment Scheduling System',
            'Broadcast Announcements',
            'Feedback System',
            'Peer Learning Platform',
            'Gemini-powered AI for past paper question solving',
        ],
        
        
        // projectUrl: 'https://drive.google.com/file/d/1SQ_mc_1ell6q1zyU23qjv6 ekvcpPllW/view?usp=sharing',
    },
    {
        id: 2,
        title: 'Beauty of Cloud ',
        event: 'Facalty of Engineering, University of Jayawardenepura',
        date: '2025',
        description:
            'Beauty of Cloud is a Cloud based Ideathon organized by IEEE Student Branch of University of Sri Jayewardenepura. Reaching the Finals was a truly rewarding milestone for us.',
        detailedDescription:
            'Team SkyDevs from University of Colombo School of Computing had the amazing opportunity to compete in the Beauty of Cloud Ideathon, organized by the IEEE Student Branch of University of Sri Jayewardenepura. We presented a AWS services based solution that leveraged cloud computing to address a real-world challenge.Reaching the Finals was a truly rewarding milestone for us. Throughout this journey, we were able to brainstorm innovative solutions, strengthen our technical and problem-solving skills, and most importantly, experience the power of teamwork and collaboration.',
        achievement: 'Finalists - Top 5',
        technologies: [],
        teamSize: 5,
        
        imageUrl: '/images/hackathon2.jpeg',

        gallery: [
            '/images/hackathon2.jpeg',
            '/images/hackathon2-2.jpeg',
            '/images/hackathon2-3.jpeg',
            '/images/hackathon2-4.jpeg',
            
        ],

        
    },
    {
        id: 3,
        title: 'Code Quest',
        event: 'Virtusa',
        date: 'September 20-22, 2024',
        description:
            'I had an opportunity to be part of the organizing committee as a Program Team member for Code Quest: Vault Edition, a CTF based hackathon event organized by IEEE Student branch of UCSC. This experience allowed me to contribute to the planning and execution of the event, ensuring a smooth and engaging experience for all participants.',
        achievement: 'Organizing Committee ',
        technologies: [],
        imageUrl: '/images/hackathon3.jpeg.jpg',
gallery: [
            '/images/hackathon3.jpeg.jpg',
            '/images/hackathon3-1.jpeg.jpg',
            '/images/hackathon3-2.jpeg.jpg',
            '/images/hackathon3-3.jpeg.jpg',
            
        ],

        
    },
]
