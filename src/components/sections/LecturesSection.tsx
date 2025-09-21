import { SectionAnimator } from '../SectionAnimator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { allLectures } from '@/data/lectures';
import { Badge } from '../ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';

export function LecturesSection() {
  const featuredLectures = allLectures.slice(0, 3); // Show only first 3 on homepage

  return (
    <section id="lectures" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">KNOWLEDGE SHARING</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Tips & Tricks</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Quick information about business and other topics
          </p>
        </SectionAnimator>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {allLectures.map((lecture, index) => (
            <SectionAnimator key={lecture.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col bg-background overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                <Image
                  src={lecture.image}
                  alt={lecture.title}
                  width={600}
                  height={400}
                  data-ai-hint={lecture.aiHint}
                  className="object-cover w-full h-48"
                />
                <CardHeader>
                  <CardTitle className="font-headline">{lecture.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">{lecture.description}</p>
                   <div className="flex flex-wrap gap-2 mt-4">
                    {lecture.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="font-bold w-full">
                    <Link href={`/lectures/${lecture.slug}`}>
                      Watch <BookOpen className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </SectionAnimator>
          ))}
        </div>

        {allLectures.length > 3 && (
          <SectionAnimator delay={0.4} className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold group">
              <Link href="/lectures/all">
                View All Lectures
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </SectionAnimator>
        )}

      </div>
    </section>
  );
}
