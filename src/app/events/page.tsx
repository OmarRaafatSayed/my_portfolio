"use client";

import { motion } from 'framer-motion';
import { events } from '@/data/events';
import { EventCard } from '@/components/EventCard';

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Events</h1>
        <p className="text-muted-foreground mb-6">
          Events I attended and participated in — from AI conferences to career summits across Egypt.
        </p>

        <div className="grid gap-4">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
