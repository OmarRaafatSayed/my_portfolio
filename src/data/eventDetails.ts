export interface EventDetail {
  id: number;
  organizer?: string;
  participants?: string;
  overview: string;
  highlights: string[];
  gallery?: string[];
}

export const eventDetails: EventDetail[] = [
  {
    id: 1,
    organizer: 'Cairo University — Student Activities',
    participants: '200+ Attendees',
    overview:
      'CU AI Nexus 2025 was a student-organized AI-focused conference held at Cairo University, bringing together students, academics, and tech professionals to discuss the growing role of artificial intelligence across different industries. The event featured talks, panels, and networking sessions designed to bridge the gap between academic AI research and real-world application. I attended as a participant and actively engaged with speakers and fellow attendees, expanding my network within the Egyptian tech and AI community.',
    highlights: [
      'Keynote sessions on AI applications in business and industry',
      'Panel discussions with academics and tech professionals',
      'Networking with Cairo University students and graduates',
      'Exposure to AI research and innovation coming out of Egyptian universities',
      'Conversations about the intersection of AI and business development',
    ],
  },
  {
    id: 2,
    organizer: 'Egypt Career Summit Organization',
    participants: '1000+ Attendees',
    overview:
      "Egypt Career Summit (ECS) is one of Egypt's most prominent career development events, bringing together students, fresh graduates, and young professionals with leading companies and industry mentors. The summit spans multiple days and covers career coaching, CV reviews, job interview simulations, networking, and panel discussions across various fields. I attended and participated in the event, which provided a valuable opportunity to connect with business leaders, explore career paths, and engage with Egypt's professional community.",
    highlights: [
      'Direct networking with HR professionals and business leaders from top Egyptian and regional companies',
      'Career coaching and mentoring sessions',
      'CV review and job interview simulation workshops',
      'Panel discussions covering entrepreneurship, business development, and career growth',
      'Connecting with young professionals from across Egypt',
      'Insights into the Egyptian job market and emerging career opportunities',
    ],
  },
];
