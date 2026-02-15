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

export const eventTypes = ['All', 'Events', 'Competitions', 'Awards'];

export const events: Event[] = [
  {
    id: 1,
    title: 'Tech Summit 2024',
    description: 'Participated as a speaker discussing AI in business transformation',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    date: '2024-03-15',
    type: 'event',
    location: 'Cairo, Egypt',
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
  },
  {
    id: 3,
    title: 'Best Developer Award',
    description: 'Recognized for outstanding contribution to web development',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800',
    date: '2024-01-10',
    type: 'award',
    award: 'Excellence Award',
  },
  {
    id: 4,
    title: 'Digital Marketing Conference',
    description: 'Workshop on modern marketing strategies and social media',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    date: '2023-12-05',
    type: 'event',
    location: 'Dubai, UAE',
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
  },
  {
    id: 6,
    title: 'Young Entrepreneur Award',
    description: 'Honored for entrepreneurial achievements and business impact',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800',
    date: '2023-10-22',
    type: 'award',
    award: 'Rising Star',
  },
  {
    id: 7,
    title: 'Web Development Bootcamp',
    description: 'Mentored students in full-stack development intensive program',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    date: '2023-09-10',
    type: 'event',
    location: 'Cairo, Egypt',
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
  },
];
