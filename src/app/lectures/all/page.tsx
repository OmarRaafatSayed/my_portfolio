"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { SectionAnimator } from '@/components/SectionAnimator';
import { allLectures } from '@/data/lectures';
import { motion } from 'framer-motion';

const allCategories = ['All', ...Array.from(new Set(allLectures.map(l => l.category)))];

export default function AllLecturesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredLectures = activeCategory === 'All'
    ? allLectures
    : allLectures.filter(l => l.category === activeCategory);

  return (
    <main className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator>
          <Button asChild variant="outline" className="mb-8">
            <Link href="/#lectures">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </SectionAnimator>

        <SectionAnimator delay={0.1} className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">All Lectures</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Browse through all available lectures and workshops. Filter by category to find what you're looking for.
          </p>
        </SectionAnimator>

        <SectionAnimator delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="font-semibold"
              >
                {category}
              </Button>
            ))}
          </div>
        </SectionAnimator>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLectures.map((lecture, index) => (
            <SectionAnimator key={lecture.id} delay={0.3 + index * 0.1}>
              <Card className="h-full flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="p-0">
                  <Link href={`/lectures/${lecture.slug}`}>
                    <Image
                      src={lecture.image}
                      alt={lecture.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-video"
                      data-ai-hint={lecture.aiHint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-xl mb-2">{lecture.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {lecture.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="font-bold w-full">
                    <Link href={`/lectures/${lecture.slug}`}>
                      Watch Lecture <BookOpen className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </SectionAnimator>
          ))}
        </div>

        {filteredLectures.length === 0 && (
          <SectionAnimator delay={0.3} className="text-center mt-16">
              <p className="text-lg text-muted-foreground">No lectures found for the selected category.</p>
          </SectionAnimator>
        )}
      </div>
    </main>
  );
}
