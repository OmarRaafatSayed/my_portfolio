"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Tool } from '@/data/tools';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="block bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors"
    >
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img src={tool.image} alt={tool.name} className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground">{tool.name}</h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
        </div>
      </div>
    </motion.a>
  );
}
