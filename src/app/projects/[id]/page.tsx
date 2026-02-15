import { ProjectDetailClient } from './ProjectDetailClient';
import { allProjects } from '@/data/projects';

export function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetailClient id={params.id} />;
}
