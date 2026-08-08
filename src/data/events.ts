export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  type: 'event' | 'competition' | 'award';
  location?: string;
  award?: string;
}

export const eventTypes = ['All', 'Events'];

export const events: Event[] = [
  {
    id: 1,
    title: 'CU AI Nexus 2025',
    description: 'A Cairo University student-led AI conference bringing together tech enthusiasts, researchers, and professionals to explore the future of artificial intelligence.',
    image: '/images/event-cu-ai-nexus.jpg',
    date: '2025-01-01',
    type: 'event',
    location: 'Cairo University, Giza',
  },
  {
    id: 2,
    title: 'Egypt Career Summit',
    description: "One of Egypt's largest career development summits, connecting students and young professionals with top companies, mentors, and industry leaders.",
    image: '/images/event-egypt-career-summit.jpg',
    date: '2024-03-07',
    type: 'event',
    location: 'Cairo, Egypt',
  },
];
