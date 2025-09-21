"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allCaseStudies } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { SectionAnimator } from '@/components/SectionAnimator';

export default function AllCaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allCaseStudies.forEach(study => {
      study.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredStudies = useMemo(() => {
    return allCaseStudies.filter(study => {
      const searchMatch =
        searchQuery === '' ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      const tagsMatch =
        selectedTags.length === 0 ||
        selectedTags.every(tag => study.tags.includes(tag));

      return searchMatch && tagsMatch;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <main className="bg-background">
      <section id="all-case-studies" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionAnimator>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">Our Work</h1>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground text-center">
              Explore our portfolio of success stories and see the results we've delivered.
            </p>
          </SectionAnimator>

          <div className="mt-16 grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <SectionAnimator delay={0.1}>
                <div className="sticky top-24">
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Type here to search..."
                      className="w-full pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <h3 className="font-semibold mb-4 text-muted-foreground tracking-wider uppercase text-sm">Filter by Service</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <Button
                        key={tag}
                        variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleTag(tag)}
                        className="rounded-full font-semibold"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </SectionAnimator>
            </aside>

            {/* Case Studies Grid */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredStudies.map((study, index) => (
                  <SectionAnimator key={study.id} delay={0.2 + index * 0.05}>
                    <Link href={`/case-studies/${study.slug}`} className="block group">
                      <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          <Image
                            src={study.image}
                            alt={study.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-3 right-3">{study.category}</Badge>
                        </div>
                        <div className="p-6 flex-grow flex flex-col items-start text-left">
                          <div className="flex items-center gap-4 mb-4">
                            <Image
                              src={study.clientLogo}
                              alt={`${study.client} logo`}
                              width={40}
                              height={40}
                              className="rounded-md bg-white p-1 object-contain"
                            />
                            <span className="font-semibold text-muted-foreground">{study.client}</span>
                          </div>
                          <h3 className="font-headline font-bold text-xl leading-tight">{study.summary}</h3>
                        </div>
                      </div>
                    </Link>
                  </SectionAnimator>
                ))}
              </div>
               {filteredStudies.length === 0 && (
                  <div className="text-center col-span-full py-16">
                    <p className="text-muted-foreground text-lg">No case studies match your criteria.</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
