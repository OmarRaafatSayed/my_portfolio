import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Users, TrendingUp, Zap, Smile } from 'lucide-react';
import { SectionAnimator } from '@/components/SectionAnimator';

const metrics = [
  { icon: <Users className="h-8 w-8 text-primary" />, value: "500+", label: "Community Growth" },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, value: "213%", label: "Engagement Boost" },
  { icon: <Zap className="h-8 w-8 text-primary" />, value: "40%", label: "Automation Efficiency" },
  { icon: <Smile className="h-8 w-8 text-primary" />, value: "95%", label: "Satisfaction Rate" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionAnimator>
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute -inset-2 bg-accent/20 rounded-2xl rotate-6 transform transition-transform duration-500 hover:rotate-0"></div>
              <Image
                src="/mr.png"
                alt="About Muhammed Mekky"
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
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">About Muhammed</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Dynamic Marketing Manager & AI Automation Specialist with a proven track record of developing compelling strategies that drive measurable business growth. Currently serving as Community Manager at Qudraat, I've successfully managed and grown communities with over 500 participants while leveraging AI tools to boost engagement by 213%.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="text-center bg-background transform transition-transform duration-300 hover:-translate-y-2">
                    <CardHeader className="pb-2">
                      {metric.icon}
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{metric.value}</p>
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
