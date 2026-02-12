import { SectionAnimator } from '@/components/SectionAnimator';
import { experiences } from '@/data/experiences';
import Link from 'next/link';
import { DownloadCvButton } from '../DownloadCvButton';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function ExperienceSection() {
  const featuredExperiences = experiences.slice(0, 4);

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            I serve the business's commercial vision through my expertise in technology (programming and security).
          </p>
        </SectionAnimator>
        
        <SectionAnimator delay={0.2}>
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 py-1 px-3 text-sm font-semibold">
              Currently
            </Badge>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredExperiences.map((exp, index) => (
              <Card key={index} className="p-8 text-center bg-background border-2 border-transparent hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                <p className="text-md text-primary font-semibold my-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description.split('.')[0] + '.'}</p>
              </Card>
            ))}
          </div>
        </SectionAnimator>

        <SectionAnimator delay={0.4}>
            <div className="mt-16 text-center flex flex-col items-center gap-4">
                <Link href="/career-journey" className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-background backdrop-blur-md font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-primary-foreground before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden relative z-10 px-4 py-2 border-2 rounded-full group">
                    View Full Career Journey
                    <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-background text-foreground ease-linear duration-300 rounded-full border border-current group-hover:border-primary-foreground p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-current group-hover:fill-primary" />
                    </svg>
                </Link>
                <DownloadCvButton />
            </div>
        </SectionAnimator>
      </div>
    </section>
  );
}
