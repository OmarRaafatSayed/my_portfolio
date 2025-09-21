export type CaseStudy = {
  id: number;
  slug: string;
  client: string;
  clientLogo: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  summary: string;
  image: string;
  category: string;
  tags: string[];
};

export const allCaseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'automating-order-processing-fulfillment',
    client: 'E-commerce Startup',
    clientLogo: '/images/logos/logo-placeholder-1.svg', // Placeholder
    title: 'Automating Order Processing & Fulfillment',
    challenge: 'A growing e-commerce brand was struggling with manual order processing, leading to delays and errors. They needed a scalable system to handle increasing sales volume.',
    solution: 'We designed and implemented a custom no-code automation workflow using Make.com. The system automatically syncs orders from Shopify, updates inventory, notifies the fulfillment team, and sends shipping confirmations to customers.',
    results: [
      '95% reduction in manual processing time',
      '80% decrease in shipping errors',
      'Scaled to handle 10x order volume',
    ],
    summary: '95% Reduction in Manual Processing Time',
    image: '/images/case-study-1.png',
    category: 'E-commerce',
    tags: ['Automation', 'E-commerce', 'Make.com', 'Shopify'],
  },
  {
    id: 2,
    slug: 'centralized-knowledge-hub-in-notion',
    client: 'Consulting Firm',
    clientLogo: '/images/logos/logo-placeholder-2.svg', // Placeholder
    title: 'Building a Centralized Knowledge Hub in Notion',
    challenge: 'A consulting firm\'s knowledge was scattered across Google Docs, email, and local drives, making it difficult for team members to find information and collaborate effectively.',
    solution: 'We developed a comprehensive and structured knowledge management system within Notion. This included creating project templates, client databases, and a central resource library, all interconnected for easy navigation.',
    results: [
      '50% faster information retrieval',
      'Improved team collaboration & consistency',
      'Streamlined new employee onboarding',
    ],
    summary: '50% Faster Information Retrieval',
    image: '/images/case-study-2.png',
    category: 'Productivity',
    tags: ['Notion', 'Productivity', 'Consulting', 'Knowledge Management'],
  },
  {
    id: 3,
    slug: 'streamlining-client-projects-dashboard',
    client: 'Creative Agency',
    clientLogo: '/images/logos/logo-placeholder-3.svg', // Placeholder
    title: 'Streamlining Client Projects with a Custom Dashboard',
    challenge: 'A creative agency was managing projects using spreadsheets and email, leading to miscommunication and missed deadlines. They needed a central place to track project status, assets, and client feedback.',
    solution: 'We built a custom project management dashboard using a combination of no-code tools. The solution provided a real-time overview of all projects, automated client updates, and created a single source of truth for all project-related information.',
    results: [
      'Centralized project tracking, improving clarity',
      'Reduced time spent on administrative tasks by 40%',
      'Enhanced client satisfaction and communication',
    ],
    summary: '40% Reduction in Admin Tasks',
    image: '/images/case-study-3.png',
    category: 'Project Management',
    tags: ['Project Management', 'No-Code', 'Client Dashboard', 'Automation'],
  },
];
