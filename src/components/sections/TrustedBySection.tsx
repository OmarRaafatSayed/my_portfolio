import Image from 'next/image';
import { SectionAnimator } from '../SectionAnimator';

const companies = [
  { name: 'Company 1', logo: '/images/companies/IMG-20250919-WA0003.jpg' },
  { name: 'Company 2', logo: '/images/companies/IMG-20250919-WA0004.jpg' },
  { name: 'Company 3', logo: '/images/companies/IMG-20250919-WA0005.jpg' },
  { name: 'Company 4', logo: '/images/companies/IMG-20250919-WA0006.jpg' },
  { name: 'Company 5', logo: '/images/companies/IMG-20250919-WA0007.jpg' },
  { name: 'Company 6', logo: '/images/companies/WhatsApp Image 2025-09-16 at 22.39.33_da112488.jpg' },
  { name: 'Omar Logo', logo: '/images/companies/لوجو.jpg' },
];

export function TrustedBySection() {
  const allLogos = [...companies, ...companies];

  return (
    <section id="trusted-by" className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionAnimator className="mb-12 text-center">
          <span className="font-bold text-primary font-headline">TRUSTED BY</span>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Great Companies
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-muted-foreground">
            I've had the privilege of working with a diverse range of companies and startups.
          </p>
        </SectionAnimator>
        
        <div 
          className="relative w-full overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {allLogos.map((company, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center mx-8" style={{ width: '150px' }}>
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={150}
                  height={60}
                  className="object-contain filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
