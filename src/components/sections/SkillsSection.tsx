"use client";

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  Code2,
  DollarSign,
  Briefcase,
} from 'lucide-react';
import { SectionAnimator } from '../SectionAnimator';

const skillsData = [
  {
    value: "business",
    label: "Business Development",
    icon: Briefcase,
    skills: [
      "Market Expansion", "Strategic Partnerships", "Business Planning",
      "New Market Entry", "Growth Strategy", "Stakeholder Management",
    ],
  },
  {
    value: "marketing",
    label: "Marketing & Sales",
    icon: TrendingUp,
    skills: [
      "Digital Marketing", "Sales Strategy", "Brand Positioning",
      "Content Marketing", "Lead Generation", "Campaign Management",
    ],
  },
  {
    value: "software",
    label: "Software",
    icon: Code2,
    skills: [
      "Web Development", "CRM Systems", "Automation Tools",
      "App Development", "UI/UX", "AI Integration",
    ],
  },
  {
    value: "finance",
    label: "Finance & Operations",
    icon: DollarSign,
    skills: [
      "Financial Planning", "Budgeting", "Risk Management",
      "P&L Analysis", "Operations Setup", "Business Modeling",
    ],
  },
];

const summaryStats = [
  { value: "5+", label: "Markets Entered" },
  { value: "10+", label: "Businesses Served" },
  { value: "4+", label: "Years Experience" },
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
