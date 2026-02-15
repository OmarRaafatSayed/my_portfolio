export interface Tool {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export const toolCategories = [
  'All',
  'Data Analysis',
  'Cyber Security',
  'AI',
  'Web Development',
  'Design',
  'Marketing',
];

export const tools: Tool[] = [
  // Data Analysis
  {
    id: 1,
    name: 'Tableau',
    description: 'Powerful data visualization and business intelligence platform',
    image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    link: 'https://www.tableau.com/',
    category: 'Data Analysis',
  },
  {
    id: 2,
    name: 'Power BI',
    description: 'Microsoft business analytics service for interactive visualizations',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    link: 'https://powerbi.microsoft.com/',
    category: 'Data Analysis',
  },
  {
    id: 3,
    name: 'Google Analytics',
    description: 'Web analytics service for tracking and reporting website traffic',
    image: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
    link: 'https://analytics.google.com/',
    category: 'Data Analysis',
  },
  // Cyber Security
  {
    id: 4,
    name: 'Wireshark',
    description: 'Network protocol analyzer for troubleshooting and analysis',
    image: 'https://www.wireshark.org/assets/icons/wireshark-fin.png',
    link: 'https://www.wireshark.org/',
    category: 'Cyber Security',
  },
  {
    id: 5,
    name: 'Metasploit',
    description: 'Penetration testing framework for security assessments',
    image: 'https://www.metasploit.com/includes/images/metasploit-r7-logo.svg',
    link: 'https://www.metasploit.com/',
    category: 'Cyber Security',
  },
  {
    id: 6,
    name: 'Burp Suite',
    description: 'Web application security testing platform',
    image: 'https://portswigger.net/content/images/logos/burp-suite-logo.svg',
    link: 'https://portswigger.net/burp',
    category: 'Cyber Security',
  },
  // AI
  {
    id: 7,
    name: 'ChatGPT',
    description: 'Advanced AI language model for conversations and content',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    link: 'https://chat.openai.com/',
    category: 'AI',
  },
  {
    id: 8,
    name: 'Midjourney',
    description: 'AI-powered image generation tool',
    image: 'https://styles.redditmedia.com/t5_5cqhe0/styles/communityIcon_5jzk1yj0xr8a1.png',
    link: 'https://www.midjourney.com/',
    category: 'AI',
  },
  {
    id: 9,
    name: 'Claude',
    description: 'AI assistant for analysis, writing, and coding',
    image: 'https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-app-icon.png&w=96&q=75',
    link: 'https://claude.ai/',
    category: 'AI',
  },
  // Web Development
  {
    id: 10,
    name: 'VS Code',
    description: 'Powerful code editor with extensive extensions',
    image: 'https://code.visualstudio.com/assets/images/code-stable.png',
    link: 'https://code.visualstudio.com/',
    category: 'Web Development',
  },
  {
    id: 11,
    name: 'GitHub',
    description: 'Version control and collaboration platform',
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    link: 'https://github.com/',
    category: 'Web Development',
  },
  {
    id: 12,
    name: 'Vercel',
    description: 'Platform for frontend deployment and hosting',
    image: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    link: 'https://vercel.com/',
    category: 'Web Development',
  },
  // Design
  {
    id: 13,
    name: 'Figma',
    description: 'Collaborative interface design tool',
    image: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png',
    link: 'https://www.figma.com/',
    category: 'Design',
  },
  {
    id: 14,
    name: 'Adobe XD',
    description: 'UI/UX design and prototyping tool',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg',
    link: 'https://www.adobe.com/products/xd.html',
    category: 'Design',
  },
  {
    id: 15,
    name: 'Canva',
    description: 'Graphic design platform for creating visual content',
    image: 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg',
    link: 'https://www.canva.com/',
    category: 'Design',
  },
  // Marketing
  {
    id: 16,
    name: 'HubSpot',
    description: 'Marketing automation and CRM platform',
    image: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
    link: 'https://www.hubspot.com/',
    category: 'Marketing',
  },
  {
    id: 17,
    name: 'Mailchimp',
    description: 'Email marketing and automation platform',
    image: 'https://eep.io/images/yzco4xsimv0y/5fwn1lUbxKwMV1CJ74lnr4/7f5c6f2f3c3e3b3e3e3e3e3e3e3e3e3e/freddie_icon.png',
    link: 'https://mailchimp.com/',
    category: 'Marketing',
  },
  {
    id: 18,
    name: 'SEMrush',
    description: 'SEO and digital marketing toolkit',
    image: 'https://www.semrush.com/company/press-center/media-kit/semrush-logo.svg',
    link: 'https://www.semrush.com/',
    category: 'Marketing',
  },
];
