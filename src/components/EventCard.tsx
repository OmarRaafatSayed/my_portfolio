"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const getTypeIcon = () => {
    switch (event.type) {
      case 'award':
        return '🏆';
      case 'competition':
        return '🎯';
      default:
        return '📅';
    }
  };

  return (
    <Link href={`/events/${event.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
      >
        <div className="aspect-video relative bg-secondary overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {event.award && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Award className="w-3 h-3" />
              {event.award}
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{getTypeIcon()}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium capitalize">
              {event.type}
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {event.description}
          </p>
          <div className="flex flex-col gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
