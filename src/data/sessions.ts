export interface Session {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  date: string;
  category: string;
  type: 'in-person' | 'online';
  role: string;
  location?: string;
  details: {
    overview: string;
    topics: string[];
    speakers?: { name: string; role: string }[];
  };
}

export const sessionCategories = ['All', 'Technology', 'Business', 'Career'];

export const sessions: Session[] = [
  {
    id: 1,
    title: 'Full Stack Development Workshop',
    description: 'A hands-on workshop introducing Full Stack Development from the ground up — covering frontend, backend, and everything in between.',
    thumbnail: '/images/session-1.jpeg',
    videoUrl: '',
    duration: '3 hrs',
    date: '2024-06-10',
    category: 'Technology',
    type: 'in-person',
    role: 'Speaker & Instructor',
    location: 'Company HQ',
    details: {
      overview: 'I delivered this workshop as a speaker and instructor at the company headquarters. The session was designed for beginners with zero background — I walked attendees through the full picture of web development: how the frontend talks to the backend, how servers work, databases, APIs, and how everything connects. The goal was to give participants a clear mental model of the entire stack before diving into any specialization.',
      topics: [
        'What is Full Stack Development?',
        'Frontend fundamentals: HTML, CSS, JavaScript',
        'Backend basics: servers, APIs, and databases',
        'How frontend and backend communicate',
        'Choosing your learning path',
        'Real-world project walkthrough',
      ],
    },
  },
  {
    id: 2,
    title: 'How to Start Any Career — Panel Session',
    description: 'An online panel session with two guest speakers from different career tracks, discussing how to kick off any career from scratch.',
    thumbnail: '/images/session-2.png',
    videoUrl: '',
    duration: '2 hrs',
    date: '2024-09-20',
    category: 'Career',
    type: 'online',
    role: 'Host & Speaker',
    details: {
      overview: 'I hosted and spoke in this online session focused on career beginnings. Coming from a business development background combined with a tech foundation, I shared my own journey and how the two worlds intersect. The session featured two guest speakers from completely different fields to give attendees a broad perspective on how to start — regardless of their industry. We covered mindset, first steps, mistakes to avoid, and how to build momentum early on.',
      topics: [
        'How to define your career direction',
        'Building skills with no experience',
        'Networking and getting your first opportunity',
        'Business development as a career path',
        'Combining tech and business backgrounds',
        'Q&A with speakers',
      ],
      speakers: [
        { name: 'Ahmed Soliman', role: 'Attorney' },
        { name: 'Hasnaa Mohamed Gad', role: 'Voice Over Artist' },
      ],
    },
  },
];
