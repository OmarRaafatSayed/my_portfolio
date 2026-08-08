"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, MapPin, Wifi, Mic, Users } from 'lucide-react';
import { Session } from '@/data/sessions';

interface SessionPopupProps {
  session: Session;
  onClose: () => void;
}

export function SessionPopup({ session, onClose }: SessionPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-lg bg-background rounded-t-3xl sm:rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-border shrink-0">
          <div className="w-10 h-1 bg-muted rounded-full mx-auto sm:hidden absolute top-3 left-1/2 -translate-x-1/2" />
          <h2 className="font-bold text-base pr-4 leading-tight">{session.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-5">
          {/* Thumbnail */}
          <div className="aspect-video rounded-xl overflow-hidden bg-secondary relative">
            <img
              src={session.thumbnail}
              alt={session.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${
                session.type === 'online'
                  ? 'bg-blue-500/80 text-white'
                  : 'bg-green-600/80 text-white'
              }`}>
                {session.type === 'online' ? <Wifi className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                {session.type === 'online' ? 'Online' : 'In-Person'}
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              {session.category}
            </span>
            <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
              <Mic className="w-3 h-3" />
              {session.role}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{session.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(session.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            {session.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{session.location}</span>
              </div>
            )}
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-semibold text-sm mb-2">About this Session</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {session.details.overview}
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-semibold text-sm mb-3">What We Covered</h3>
            <ul className="space-y-2">
              {session.details.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guest Speakers */}
          {session.details.speakers && session.details.speakers.length > 0 && (
            <div className="pb-2">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Guest Speakers
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {session.details.speakers.map((speaker, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl p-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {speaker.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-xs">{speaker.name}</p>
                      <p className="text-xs text-muted-foreground">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
