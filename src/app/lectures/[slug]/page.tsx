import { allLectures } from '@/data/lectures';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, FolderKanban } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionAnimator } from '@/components/SectionAnimator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LectureShareButton } from '@/components/LectureShareButton';

export async function generateStaticParams() {
    return allLectures.map((lecture) => ({
      slug: lecture.slug,
    }));
}

export default function LecturePage({ params }: { params: { slug: string } }) {
  const lecture = allLectures.find(l => l.slug === params.slug);

  if (!lecture) {
    notFound();
  }

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

        <SectionAnimator delay={0.1}>
            <header className="mb-8">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl mb-2">{lecture.title}</h1>
                <div className="flex flex-wrap gap-2">
                    {lecture.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </header>
        </SectionAnimator>
        
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <SectionAnimator delay={0.2}>
                    <Card className="overflow-hidden mb-8">
                        <div className="aspect-video">
                            <iframe
                                src={lecture.videoUrl}
                                title={lecture.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </Card>
                </SectionAnimator>
                <SectionAnimator delay={0.3}>
                    <h2 className="text-2xl font-headline font-bold mb-4">About this lecture</h2>
                    <p className="text-muted-foreground text-lg">{lecture.description}</p>
                </SectionAnimator>
                <SectionAnimator delay={0.4}>
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-2xl font-headline font-bold mb-4">Share this Lecture</h3>
                        <LectureShareButton title={lecture.title} slug={lecture.slug} />
                    </div>
                </SectionAnimator>
            </div>
            <div className="lg:col-span-1">
                <SectionAnimator delay={0.4}>
                    <Card className="bg-background sticky top-24">
                        <CardHeader>
                            <CardTitle className="font-headline">Resources</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {lecture.links.length > 0 ? lecture.links.map(link => (
                                <Button asChild key={link.url} variant="outline" className="w-full justify-start">
                                    <Link href={link.url} target="_blank">
                                        <FolderKanban className="mr-2 h-4 w-4"/>
                                        <span>{link.label}</span>
                                        <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                                    </Link>
                                </Button>
                            )) : <p className="text-sm text-muted-foreground">No resources available for this lecture.</p>}
                        </CardContent>
                    </Card>
                </SectionAnimator>
            </div>
        </div>

      </div>
    </main>
  );
}
