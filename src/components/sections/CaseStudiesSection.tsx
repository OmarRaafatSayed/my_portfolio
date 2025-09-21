"use client";

import { useState } from 'react';
import { SectionAnimator } from '../SectionAnimator';
import { allCaseStudies } from '@/data/caseStudies';
import Image from 'next/image';
import { CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

export function CaseStudiesSection() {
  const featuredStudies = allCaseStudies.slice(0, 2);

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Success Stories</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            See how we've helped businesses like yours overcome challenges and achieve their goals through automation and smart solutions.
          </p>
        </SectionAnimator>

        <div className="space-y-24">
          {featuredStudies.map((study, index) => (
            <SectionAnimator key={study.id} delay={0.1 * index}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`relative w-full h-96 rounded-lg overflow-hidden shadow-2xl ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image 
                      src={study.image}
                      alt={study.title}
                      layout="fill"
                      objectFit="cover"
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                  </div>
                  <p className="text-primary font-semibold mb-2">{study.client}</p>
                  <h3 className="text-3xl font-headline font-bold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.challenge}</p>
                  
                  <h4 className="text-xl font-headline font-bold mb-4">Solution Delivered</h4>
                  <p className="text-muted-foreground mb-6">{study.solution}</p>

                  <h4 className="text-xl font-headline font-bold mb-4 flex items-center"><Zap className='mr-2 text-primary h-5 w-5'/> Key Results</h4>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className='text-muted-foreground'>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionAnimator>
          ))}
        </div>

        {allCaseStudies.length > 2 && (
          <SectionAnimator delay={0.4} className="mt-20 text-center">
            <Button asChild size="lg" className="font-bold group">
              <Link href="/case-studies/all">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </SectionAnimator>
        )}

      </div>
    </section>
  );
}
