"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { allPosts, categories } from '@/data/blog';
import { SectionAnimator } from '@/components/SectionAnimator';

export default function AllBlogsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredPosts = allPosts.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">All Blog Posts</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Explore articles on AI, marketing, and technology.
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
          {filteredPosts.map(post => (
            <SectionAnimator key={post.id} className="h-full">
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full flex flex-col overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-headline mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm flex-grow line-clamp-3">{post.description}</p>
                    <Badge variant="secondary">{post.category}</Badge>
                  </CardContent>
                </Card>
              </Link>
            </SectionAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
