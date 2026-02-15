export interface Session {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  date: string;
  category: string;
}

export const sessionCategories = ['All', 'Business', 'Technology', 'Career', 'Marketing'];

export const sessions: Session[] = [
  {
    id: 1,
    title: 'Building Your First Startup',
    description: 'Learn the fundamentals of starting a business from scratch',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '45 min',
    date: '2024-01-15',
    category: 'Business',
  },
  {
    id: 2,
    title: 'Web Development Best Practices',
    description: 'Modern approaches to building scalable web applications',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '60 min',
    date: '2024-02-10',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Career Growth Strategies',
    description: 'How to advance your career in tech industry',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '40 min',
    date: '2024-03-05',
    category: 'Career',
  },
  {
    id: 4,
    title: 'Digital Marketing Essentials',
    description: 'Master the basics of digital marketing and social media',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '50 min',
    date: '2024-03-20',
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'AI in Business',
    description: 'Leveraging artificial intelligence for business growth',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '55 min',
    date: '2024-04-01',
    category: 'Technology',
  },
];
