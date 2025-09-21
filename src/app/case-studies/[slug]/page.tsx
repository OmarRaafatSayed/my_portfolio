import { allCaseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap } from 'lucide-react';
import { SectionAnimator } from '@/components/SectionAnimator';

// Generate static paths for all case studies
export async function generateStaticParams() {
  return allCaseStudies.map(study => ({ slug: study.slug }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = allCaseStudies.find(s => s.slug === params.slug);
  if (!study) {
    return { title: 'Case Study Not Found' };
  }
  return { title: `${study.title} | Case Study` };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = allCaseStudies.find(s => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-background">
      <article>
        <header className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <SectionAnimator>
              <div className="flex justify-center items-center gap-4 mb-4">
                <Image
                  src={study.clientLogo}
                  alt={`${study.client} logo`}
                  width={50}
                  height={50}
                  className="rounded-md bg-white p-1 object-contain"
                />
                <span className="text-xl font-semibold text-muted-foreground">{study.client}</span>
              </div>
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-4xl mx-auto">{study.title}</h1>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {study.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </SectionAnimator>
          </div>
        </header>

        <SectionAnimator delay={0.2} className="container mx-auto px-4 md:px-6 -mt-16">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={study.image}
              alt={study.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SectionAnimator>

        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            <SectionAnimator delay={0.3} className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-headline text-3xl">The Challenge</h2>
                <p>{study.challenge}</p>
                <h2 className="font-headline text-3xl">The Solution</h2>
                <p>{study.solution}</p>
              </div>
            </SectionAnimator>

            <aside className="md:col-span-1">
              <SectionAnimator delay={0.4}>
                <div className="sticky top-24 bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-headline font-bold mb-4 flex items-center">
                    <Zap className='mr-2 text-primary h-6 w-6'/>
                    Key Results
                  </h3>
                  <ul className="space-y-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className='text-muted-foreground'>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionAnimator>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
