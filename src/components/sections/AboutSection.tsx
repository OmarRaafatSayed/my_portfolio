"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Users, TrendingUp, Zap, Smile } from 'lucide-react';
import { SectionAnimator } from '@/components/SectionAnimator';
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const metrics = [
  { icon: <Users className="h-8 w-8 text-primary" />, value: "500+", label: "Community Growth" },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, value: "213%", label: "Engagement Boost" },
  { icon: <Zap className="h-8 w-8 text-primary" />, value: "40%", label: "Automation Efficiency" },
  { icon: <Smile className="h-8 w-8 text-primary" />, value: "95%", label: "Satisfaction Rate" },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
      const suffix = value.replace(/[0-9]/g, '');
      
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, '');
  return <p ref={ref} className="text-3xl font-bold">0{suffix}</p>;
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionAnimator>
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute -inset-2 bg-accent/20 rounded-2xl rotate-6 transform transition-transform duration-500 hover:rotate-0"></div>
              <Image
                src="/mr.png"
                alt="About Omar Dawood"
                width={600}
                height={600}
                className="relative rounded-2xl object-cover w-full h-full shadow-lg"
                data-ai-hint="person working"
              />
            </div>
          </SectionAnimator>
          <SectionAnimator delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-bold text-primary font-headline">WHO AM I</span>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">About Omar</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                "Serving businesses through technology" I have worked in the Egyptian market in companies in different fields and I have worked in more than 4 businesses in the fields of sports, education, clothing, hand-made, and tourism. I have trained a number of young people in the field of programming in training workshops lasting hours. I own an online business that provides software solutions and I aspire to enter more work in markets outside the Egyptian and Saudi markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="text-center bg-background transform transition-transform duration-300 hover:-translate-y-2">
                    <CardHeader className="pb-2">
                      {metric.icon}
                    </CardHeader>
                    <CardContent>
                      <AnimatedNumber value={metric.value} />
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </SectionAnimator>
        </div>
      </div>
    </section>
  );
}
