"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Calendar, User } from 'lucide-react';
import { projectDetails } from '@/data/projectDetails';
import { allProjects } from '@/data/projects';

export function ProjectDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const projectId = Number(id);

  const detail = projectDetails.find(p => p.id === projectId);
  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>

        <div className="aspect-video relative bg-secondary rounded-2xl overflow-hidden mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-6">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-3">
            {project.category}
          </span>
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        {detail && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs">Duration</span>
              </div>
              <p className="font-semibold">{detail.duration}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <User className="w-4 h-4" />
                <span className="text-xs">Role</span>
              </div>
              <p className="font-semibold text-sm">{detail.role}</p>
            </div>
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 mb-6"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Visit Website</span>
          </a>
        )}

        {detail && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3">📋 Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.overview}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3">🎯 Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.challenge}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3">💡 Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.solution}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3">✨ Results</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.results}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-lg font-bold mb-3">🛠️ Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {detail.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {!detail && (
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="text-lg font-bold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
