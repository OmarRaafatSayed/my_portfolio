export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  duration: string;
  role: string;
  gallery?: string[];
  link?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: 'Refit Academy',
    category: 'Web',
    description: 'Online fitness training platform featuring live coaching sessions and personalized workout programs.',
    image: '/projects/WEB/0c3e9faeb5484ed29d218cdd91032829.jpg',
    overview: 'Refit Academy is a comprehensive online fitness platform that connects trainers with clients through live coaching sessions, personalized workout programs, and nutrition guidance.',
    challenge: 'Creating a seamless real-time video streaming experience while managing user subscriptions, workout schedules, and progress tracking in a single platform.',
    solution: 'Built a scalable web application using Next.js with real-time capabilities, integrated payment systems, and developed a custom dashboard for both trainers and clients.',
    results: 'Successfully launched with 500+ active users in the first 3 months, 95% user satisfaction rate, and average session completion rate of 87%.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'Stripe'],
    duration: '4 months',
    role: 'Full Stack Developer & UI/UX Designer',
    link: 'https://refit-academy.com/',
  },
  {
    id: 2,
    title: 'Yaqoot Design',
    category: 'Web',
    description: 'E-commerce platform for handmade products with custom design showcase and online ordering system.',
    image: '/projects/WEB/532cfa2ae8804996a4b81f6ded259afb.jpg',
    overview: 'An elegant e-commerce platform showcasing handmade products with a focus on visual storytelling and seamless shopping experience.',
    challenge: 'Balancing aesthetic presentation with e-commerce functionality while maintaining fast load times for image-heavy content.',
    solution: 'Implemented optimized image loading, custom product galleries, and streamlined checkout process with multiple payment options.',
    results: '200+ products listed, 40% increase in conversion rate, and positive customer feedback on user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    duration: '2 months',
    role: 'Web Developer & Designer',
  },
  {
    id: 3,
    title: 'Madenaty Lights',
    category: 'Web',
    description: 'Real estate marketing platform with unique buy/sell features, competing with major property websites.',
    image: '/projects/WEB/5ffee697cbc74be39e0eafbb984e2761.jpg',
    overview: 'A modern real estate platform offering property listings, virtual tours, and direct communication between buyers and sellers.',
    challenge: 'Creating a competitive platform with advanced search filters, map integration, and real-time property updates.',
    solution: 'Developed custom search algorithms, integrated Google Maps API, and implemented real-time notifications for new listings.',
    results: '1000+ property listings, 60% user engagement increase, and established partnerships with 50+ real estate agents.',
    technologies: ['Shopify', 'CSS', 'JavaScript', 'Google Maps API'],
    duration: '3 months',
    role: 'Lead Developer',
  },
  {
    id: 6,
    title: 'Mawgood',
    category: 'Web',
    description: 'An electronic marketing platform that supports the Egyptian product + ease of trade for merchants + provides jobs',
    image: '/projects/WEB/Mawgood.jpg',
    overview: 'Mawgood is a comprehensive e-commerce platform designed to empower Egyptian merchants and promote local products while creating job opportunities.',
    challenge: 'Building a scalable marketplace that handles multiple vendors, product categories, and provides seamless merchant onboarding.',
    solution: 'Created a multi-vendor platform with automated merchant verification, integrated payment gateways, and built-in marketing tools.',
    results: '300+ registered merchants, 5000+ products, and significant contribution to local economy.',
    technologies: ['E-commerce', 'Marketing', 'Platform'],
    duration: '5 months',
    role: 'Platform Architect & Developer',
    link: 'https://mawgood.cloud/',
  },
];
