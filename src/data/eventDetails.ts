export interface EventDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  type: 'event' | 'competition' | 'award';
  location?: string;
  award?: string;
  overview: string;
  highlights: string[];
  gallery: string[];
  organizer?: string;
  participants?: string;
}

export const eventDetails: EventDetail[] = [
  {
    id: 1,
    title: 'Tech Summit 2024',
    description: 'Participated as a speaker discussing AI in business transformation',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    date: '2024-03-15',
    type: 'event',
    location: 'Cairo, Egypt',
    overview: 'Tech Summit 2024 was a major technology conference bringing together industry leaders, innovators, and tech enthusiasts. I had the privilege of speaking about AI integration in business processes and how companies can leverage artificial intelligence for digital transformation.',
    highlights: [
      'Delivered keynote speech on AI in Business',
      'Networked with 500+ tech professionals',
      'Participated in panel discussion on future of technology',
      'Shared insights on digital transformation strategies',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
    ],
    organizer: 'Tech Leaders Association',
    participants: '500+ attendees',
  },
  {
    id: 2,
    title: 'Startup Hackathon',
    description: 'Led a team to develop innovative e-commerce solution',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    date: '2024-02-20',
    type: 'competition',
    location: 'Alexandria, Egypt',
    award: '1st Place',
    overview: 'A 48-hour intensive hackathon where teams competed to build innovative startup solutions. Our team developed a revolutionary e-commerce platform with AI-powered recommendations and won first place among 30 competing teams.',
    highlights: [
      'Won 1st Place out of 30 teams',
      'Built full-stack e-commerce platform in 48 hours',
      'Implemented AI recommendation engine',
      'Pitched to panel of investors and industry experts',
      'Received seed funding offer',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
    ],
    organizer: 'Startup Egypt',
    participants: '30 teams',
  },
  {
    id: 3,
    title: 'Best Developer Award',
    description: 'Recognized for outstanding contribution to web development',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800',
    date: '2024-01-10',
    type: 'award',
    award: 'Excellence Award',
    overview: 'Honored with the Best Developer Award for exceptional contributions to web development projects and innovative solutions that impacted thousands of users. This recognition celebrates technical excellence and commitment to quality.',
    highlights: [
      'Recognized for technical excellence',
      'Awarded for innovative web solutions',
      'Acknowledged impact on 10,000+ users',
      'Featured in tech community spotlight',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    ],
    organizer: 'Developer Community Egypt',
  },
  {
    id: 4,
    title: 'Digital Marketing Conference',
    description: 'Workshop on modern marketing strategies and social media',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    date: '2023-12-05',
    type: 'event',
    location: 'Dubai, UAE',
    overview: 'International conference focused on digital marketing trends and strategies. Conducted a workshop on leveraging social media for business growth and modern marketing automation techniques.',
    highlights: [
      'Led workshop with 100+ participants',
      'Shared social media marketing strategies',
      'Discussed marketing automation tools',
      'Connected with international marketers',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    ],
    organizer: 'Digital Marketing Hub',
    participants: '300+ attendees',
  },
  {
    id: 5,
    title: 'Innovation Challenge',
    description: 'Competed in national innovation competition with AI project',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    date: '2023-11-18',
    type: 'competition',
    location: 'Cairo, Egypt',
    award: '2nd Place',
    overview: 'National innovation competition showcasing cutting-edge technology projects. Presented an AI-powered solution for business automation and secured second place among top innovators nationwide.',
    highlights: [
      'Secured 2nd Place nationally',
      'Presented AI automation solution',
      'Demonstrated live product demo',
      'Received recognition from ministry officials',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800',
    ],
    organizer: 'Ministry of Innovation',
    participants: '50 projects',
  },
  {
    id: 6,
    title: 'Young Entrepreneur Award',
    description: 'Honored for entrepreneurial achievements and business impact',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800',
    date: '2023-10-22',
    type: 'award',
    award: 'Rising Star',
    overview: 'Received the Young Entrepreneur Award recognizing entrepreneurial spirit, business achievements, and positive impact on the startup ecosystem. This award celebrates young leaders driving innovation and economic growth.',
    highlights: [
      'Honored as Rising Star Entrepreneur',
      'Recognized for business impact',
      'Featured in entrepreneurship magazine',
      'Invited to mentor young startups',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    ],
    organizer: 'Entrepreneurs Association',
  },
  {
    id: 7,
    title: 'Web Development Bootcamp',
    description: 'Mentored students in full-stack development intensive program',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    date: '2023-09-10',
    type: 'event',
    location: 'Cairo, Egypt',
    overview: 'Intensive web development bootcamp where I served as lead mentor, guiding 50+ students through full-stack development journey. Covered modern frameworks, best practices, and real-world project development.',
    highlights: [
      'Mentored 50+ aspiring developers',
      'Taught full-stack development',
      'Guided students through real projects',
      '90% student success rate',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    ],
    organizer: 'Code Academy Egypt',
    participants: '50 students',
  },
  {
    id: 8,
    title: 'Cybersecurity Competition',
    description: 'Participated in national cybersecurity challenge',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    date: '2023-08-15',
    type: 'competition',
    location: 'Giza, Egypt',
    award: '3rd Place',
    overview: 'National cybersecurity competition testing skills in ethical hacking, network security, and vulnerability assessment. Competed against top security professionals and secured third place.',
    highlights: [
      'Achieved 3rd Place nationally',
      'Solved complex security challenges',
      'Demonstrated ethical hacking skills',
      'Networked with cybersecurity experts',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    ],
    organizer: 'Cyber Defense League',
    participants: '40 teams',
  },
];
