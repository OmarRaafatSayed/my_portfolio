"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { events, eventTypes } from '@/data/events';
import { EventCard } from '@/components/EventCard';

export default function EventsPage() {
  const [activeType, setActiveType] = useState('All');

  const filteredEvents = activeType === 'All'
    ? events
    : events.filter(e => {
        if (activeType === 'Events') return e.type === 'event';
        if (activeType === 'Competitions') return e.type === 'competition';
        if (activeType === 'Awards') return e.type === 'award';
        return true;
      });

  return (
    <div className="min-h-screen pt-20 px-4 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Events & Competitions</h1>
        <p className="text-muted-foreground mb-6">My journey through events, competitions, and achievements</p>

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeType === type
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid gap-4">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
