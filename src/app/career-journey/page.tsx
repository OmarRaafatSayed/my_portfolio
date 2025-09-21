import { SectionAnimator } from '@/components/SectionAnimator';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { experiences } from '@/data/experiences';
import { ExperienceCard } from '@/components/ExperienceCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CareerJourneyPage() {
  return (
    <main className="bg-background">
      <section id="career-journey" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/#experience">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
          </div>

          <SectionAnimator className="mb-12 text-center">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">My Career Journey</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              A timeline of my professional growth and key accomplishments.
            </p>
          </SectionAnimator>
          
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
  
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <SectionAnimator key={index} delay={index * 0.1}>
                  <div className="relative flex items-start gap-6">
                    <div className="hidden md:block md:w-[calc(50%-1.75rem)]">
                      {index % 2 === 0 && <ExperienceCard {...exp} />}
                    </div>
                    <div className="flex-shrink-0 z-10">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-1.75rem)]">
                      {index % 2 !== 0 && <ExperienceCard {...exp} />}
                      <div className="block md:hidden">
                         <ExperienceCard {...exp} />
                      </div>
                    </div>
                  </div>
                </SectionAnimator>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
