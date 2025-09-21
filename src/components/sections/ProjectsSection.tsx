"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight, Bot, FolderKanban, Github } from 'lucide-react';
import { SectionAnimator } from '../SectionAnimator';
import { allProjects, categories } from '@/data/projects';
import { motion } from 'framer-motion';

const getLinkIcon = (label: string) => {
  const lowerCaseLabel = label.toLowerCase();
  if (lowerCaseLabel.includes('github')) return <Github />;
  if (lowerCaseLabel.includes('try it')) return <Bot />;
  if (lowerCaseLabel.includes('resource') || lowerCaseLabel.includes('presentation')) return <FolderKanban />;
  return <ArrowUpRight />;
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Web');

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">MY WORK</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            A selection of projects that I'm proud of.
          </p>
        </SectionAnimator>
        
        <SectionAnimator delay={0.2} className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="font-semibold"
            >
              {category}
            </Button>
          ))}
        </SectionAnimator>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <SectionAnimator key={project.id} className="h-full">
               <div className="group h-[400px] [perspective:1000px]">
                <motion.div
                  className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d]"
                  whileHover={{ rotateY: 180 }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Card className="h-full flex flex-col overflow-hidden bg-background">
                      <div className="overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          data-ai-hint={project.aiHint}
                          className="object-cover w-full h-48"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold font-headline mb-1">{project.title}</h3>
                        {project.subtitle && <p className="text-sm text-primary font-semibold mb-2">{project.subtitle}</p>}
                        <p className="text-muted-foreground mb-4 text-sm flex-grow line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <Card className="relative h-full flex flex-col items-center justify-center overflow-hidden text-primary-foreground">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        data-ai-hint={project.aiHint}
                        className="object-cover w-full h-full blur-sm"
                      />
                      <div className="absolute inset-0 bg-primary/80" />
                      <CardContent className="relative z-10 p-6 text-center">
                        <h3 className="text-xl font-bold font-headline mb-4">{project.title}</h3>
                        <div className="flex flex-col items-center gap-3">
                          {project.links.map(link => (
                            <Button key={link.url} variant="secondary" asChild className="font-bold">
                              <Link href={link.url} target="_blank">
                                {link.label}
                                <span className="ml-2">{getLinkIcon(link.label)}</span>
                              </Link>
                            </Button>
                          ))}
                          {project.links.length === 0 && <p className="text-sm text-primary-foreground/80">No links available.</p>}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </SectionAnimator>
          ))}
        </div>
        
        {(activeCategory === 'Marketing & Business' || activeCategory === 'UI UX') && (
          <SectionAnimator delay={0.4} className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="https://www.behance.net/omarraafat12" target="_blank">
                View More on Behance
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </SectionAnimator>
        )}
      </div>
    </section>
  );
}
