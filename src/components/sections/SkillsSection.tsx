"use client";

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BrainCircuit,
  Target,
  Users,
  PenSquare,
  MousePointerClick,
  BarChart3,
  ShoppingCart,
  ClipboardCheck,
  Database
} from 'lucide-react';
import { SectionAnimator } from '../SectionAnimator';

const skillsData = [
  {
    value: "business",
    label: "Business establishment",
    icon: BrainCircuit,
    skills: [
      "Business Planning", "Market Research", "Financial Planning",
      "Strategic Development", "Risk Management", "Operations Setup",
    ],
  },
  {
    value: "frontend",
    label: "Frontend development",
    icon: Target,
    skills: [
      "React", "Next.js", "TypeScript",
      "HTML/CSS", "JavaScript", "Responsive Design",
    ],
  },
  {
    value: "backend",
    label: "Backend developer",
    icon: Users,
    skills: [
      "Node.js", "Python", "Database Design",
      "API Development", "Server Management", "Security",
    ],
  },
  {
    value: "app",
    label: "App development",
    icon: PenSquare,
    skills: [
      "React Native", "Flutter", "Mobile UI/UX",
      "App Store Optimization", "Cross-platform Development", "Performance Optimization",
    ],
  },
  {
    value: "uiux",
    label: "UI UX designer",
    icon: MousePointerClick,
    skills: [
      "User Research", "Wireframing", "Prototyping",
      "Figma", "Adobe XD", "User Testing",
    ],
  },
  {
    value: "brand",
    label: "Brand identity",
    icon: BarChart3,
    skills: [
      "Logo Design", "Brand Guidelines", "Visual Identity",
      "Color Theory", "Typography", "Brand Strategy",
    ],
  },
  {
    value: "marketing",
    label: "Marketing strategy",
    icon: ShoppingCart,
    skills: [
      "Digital Marketing", "Content Strategy", "Social Media Marketing",
      "SEO/SEM", "Campaign Management", "Analytics",
    ],
  },
  {
    value: "team",
    label: "Team management",
    icon: ClipboardCheck,
    skills: [
      "Leadership", "Project Coordination", "Team Building",
      "Performance Management", "Communication", "Agile Methodologies",
    ],
  },
  {
    value: "crm",
    label: "CRM developer",
    icon: Database,
    skills: [
      "Salesforce", "HubSpot", "Custom CRM Development",
      "Data Integration", "Workflow Automation", "Customer Analytics",
    ],
  },
];

const summaryStats = [
  { value: "9", label: "Skill Categories" },
  { value: "50+", label: "Core Skills" },
  { value: "5+", label: "Years Experience" },
  { value: "500+", label: "People Impacted" },
];


export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">MY ARSENAL</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
           <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            A collection of technologies and methodologies I excel at.
          </p>
        </SectionAnimator>
        
        <SectionAnimator delay={0.2} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {summaryStats.map((stat, index) => (
              <Card key={index} className="text-center bg-background py-4 shadow-md">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1 px-2">{stat.label}</p>
              </Card>
            ))}
          </div>

          <Tabs defaultValue={skillsData[0].value} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
              {skillsData.map(category => (
                <TabsTrigger key={category.value} value={category.value} className="py-3 flex gap-2 h-auto">
                  <category.icon className="w-5 h-5"/>
                  <span className="font-semibold">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6">
              {skillsData.map(category => (
                <TabsContent key={category.value} value={category.value}>
                  <SkillGrid skills={category.skills} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </SectionAnimator>
      </div>
    </section>
  );
}

const SkillGrid = ({ skills }: { skills: string[] }) => (
  <div className="flex flex-wrap justify-center gap-3 bg-background/50 p-6 rounded-lg">
    {skills.map((skillName) => (
      <Badge 
        key={skillName} 
        variant="outline" 
        className="text-base py-2 px-4 border-2 border-primary/50 bg-background hover:bg-primary/10 transition-colors duration-300 cursor-default"
      >
        {skillName}
      </Badge>
    ))}
  </div>
);
