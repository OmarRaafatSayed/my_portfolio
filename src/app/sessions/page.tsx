"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sessions, sessionCategories } from '@/data/sessions';
import { VideoCard } from '@/components/VideoCard';
import { VideoPopup } from '@/components/VideoPopup';

export default function SessionsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

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
          <p className="text-muted-foreground mb-6">Watch my recorded lectures and presentations</p>

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

          {/* Videos Grid */}
          <div className="grid gap-4">
            {filteredSessions.map((session, index) => (
              <VideoCard
                key={session.id}
                session={session}
                index={index}
                onClick={() => setSelectedVideo({ url: session.videoUrl, title: session.title })}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Popup */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoPopup
            videoUrl={selectedVideo.url}
            title={selectedVideo.title}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
