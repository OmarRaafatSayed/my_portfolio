import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TrustedBySection } from '@/components/sections/TrustedBySection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { ContactSection } from '@/components/sections/ContactSection';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
}
