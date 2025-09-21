import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { LecturesSection } from '@/components/sections/LecturesSection';
import { TrustedBySection } from '@/components/sections/TrustedBySection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <LecturesSection />

      <TrustedBySection />
      <AwardsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
