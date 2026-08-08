"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sessions, sessionCategories, Session } from '@/data/sessions';
import { VideoCard } from '@/components/VideoCard';
import { SessionPopup } from '@/components/SessionPopup';

export default function SessionsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const filteredSessions = activeCategory === 'All'
    ? sessions
    : sessions.filter(s => s.category === activeCategory);

  return (
    <>
      <div className="min-h-screen pt-20 px-4 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Sessions</h1>
          <p className="text-muted-foreground mb-6">My speaking sessions and workshops</p>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {sessionCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sessions Grid */}
          <div className="grid gap-4">
            {filteredSessions.map((session, index) => (
              <VideoCard
                key={session.id}
                session={session}
                index={index}
                onClick={() => setSelectedSession(session)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Session Detail Popup */}
      <AnimatePresence>
        {selectedSession && (
          <SessionPopup
            session={selectedSession}
            onClose={() => setSelectedSession(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
