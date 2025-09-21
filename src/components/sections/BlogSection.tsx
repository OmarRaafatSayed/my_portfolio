
import { SectionAnimator } from '../SectionAnimator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Send, ArrowRight } from 'lucide-react';
import { allPosts } from '@/data/blog';
import Image from 'next/image';

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">INSIGHTS</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">From My Blog</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Sharing my thoughts on technology, design, and marketing.
          </p>
        </SectionAnimator>
        
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post, index) => (
            <SectionAnimator key={index} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
                <Card className="h-full flex flex-col bg-background overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    data-ai-hint={post.aiHint}
                    className="object-cover w-full h-48"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                      <Button className="w-full font-bold" variant="outline" tabIndex={-1}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                  </CardFooter>
                </Card>
              </Link>
            </SectionAnimator>
          ))}
        </div>

        <SectionAnimator delay={0.4} className="mt-16 text-center">
          <Link href="/blog/all" passHref>
            <button
                className="group flex mx-auto items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary px-5 py-3 text-lg font-bold text-primary-foreground transition-colors duration-200 active:scale-95"
            >
                <div className="svg-wrapper group-hover:animate-fly-1">
                    <Send className="h-6 w-6 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-6 group-hover:rotate-45 group-hover:scale-110" />
                </div>
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-x-24">
                  Visit My Blog
                </span>
            </button>
          </Link>
        </SectionAnimator>
      </div>
    </section>
  );
}
