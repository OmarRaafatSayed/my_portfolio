import { SectionAnimator } from '../SectionAnimator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Award } from 'lucide-react';
import { awards } from '@/data/awards';

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">RECOGNITION</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards & Recognition</h2>
           <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Acknowledged for dedication, performance, and innovation.
          </p>
        </SectionAnimator>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <SectionAnimator key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col bg-background shadow-md text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20">
                <CardHeader>
                  <Award className="h-12 w-12 mx-auto text-primary/70 transition-colors duration-300 group-hover:text-primary"/>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <CardTitle className="font-headline text-xl">{award.title}</CardTitle>
                  <p className="text-muted-foreground mt-2 font-semibold">{award.organization} - <span className="text-sm font-bold text-primary">{award.year}</span></p>
                  <CardDescription className="mt-4 text-sm flex-grow">{award.description}</CardDescription>
                </CardContent>
              </Card>
            </SectionAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
