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
  {
    id: 7,
    title: 'Lobna',
    category: 'Web',
    description: 'Personal brand website for a sales expert, built to establish professional authority and attract high-value clients.',
    image: '/projects/WEB/Lobna.jpg',
    overview: 'Lobna is a personal branding platform crafted for a professional sales expert. The site is designed to highlight her expertise, showcase testimonials, and convert visitors into clients through a clean and impactful digital presence.',
    challenge: 'Translating a strong personal brand identity into a digital experience that feels both professional and approachable, while clearly communicating her unique value proposition in the sales domain.',
    solution: 'Designed and developed a sleek personal brand website with a focus on storytelling, social proof, and clear calls-to-action — enabling visitors to instantly understand her expertise and take action.',
    results: 'Increased online visibility, stronger personal brand positioning, and improved lead generation through a dedicated professional web presence.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    duration: '3 weeks',
    role: 'Web Developer & Brand Designer',
    link: 'https://lobna-personal-brand-hte2-one.vercel.app/en',
  },
  {
    id: 15,
    title: 'Ausrah',
    category: 'Web',
    description: 'Family coaching consultation platform for booking sessions with certified coaches — for couples, individuals, or children.',
    image: '/projects/WEB/Ausrah.jpeg',
    overview: 'Ausrah is a family wellness platform that enables individuals and families to book coaching sessions with certified coaches. Whether for couples, spouses individually, or children, the platform provides a tailored experience for every family member seeking personal growth and support.',
    challenge: 'Building a flexible booking system that handles multiple session types — couples, individual spouses, and children — while maintaining a warm, trust-building user experience.',
    solution: 'Developed a structured consultation booking platform with session categorization, coach profiles, and a smooth scheduling flow that makes it easy for any family member to find the right coach.',
    results: 'A fully functional coaching marketplace connecting families with certified professionals, with a seamless booking experience across all session types.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    duration: '1 month',
    role: 'Full Stack Developer & UI Designer',
    link: 'https://ausra-omega.vercel.app/',
  },
];
