import { Badge } from './ui/badge';
import { CheckCircle, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyAchievements: string[];
  technologies: string[];
}

export const ExperienceCard = ({
  role,
  company,
  period,
  location,
  type,
  description,
  keyAchievements,
  technologies,
}: ExperienceCardProps) => (
  <div className="bg-background p-6 rounded-lg shadow-md border border-transparent hover:border-primary transition-all duration-300 h-full flex flex-col gap-4">
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="text-xl font-bold font-headline">{role}</h3>
        <p className="text-md text-primary font-semibold">{company}</p>
      </div>
      <Badge variant="outline" className="text-xs shrink-0 whitespace-nowrap">{type}</Badge>
    </div>
    <div className="text-sm text-muted-foreground flex justify-between items-center flex-wrap gap-2">
      <span>{period}</span>
      {location && (
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {location}
        </span>
      )}
    </div>
    <p className="text-muted-foreground">{description}</p>
    
    {keyAchievements && keyAchievements.length > 0 && (
      <div className="space-y-2">
        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
        <ul className="space-y-1.5 list-inside">
          {keyAchievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {technologies && technologies.length > 0 && (
      <div className="space-y-2 mt-auto pt-3">
        <h4 className="font-semibold text-foreground">Technologies & Tools:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20 font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    )}
  </div>
);
