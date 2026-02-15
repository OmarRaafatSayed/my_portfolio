"use client";

import { motion } from 'framer-motion';
import { Play, Clock, Calendar } from 'lucide-react';
import { Session } from '@/data/sessions';

interface VideoCardProps {
  session: Session;
  index: number;
  onClick: () => void;
}

export function VideoCard({ session, index, onClick }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary transition-colors"
    >
      <div className="aspect-video relative bg-secondary overflow-hidden group">
        <img
          src={session.thumbnail}
          alt={session.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium mb-2">
          {session.category}
        </span>
        <h3 className="font-semibold mb-2">{session.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {session.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{session.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(session.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
