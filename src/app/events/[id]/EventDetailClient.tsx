"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Award, Users, Building } from 'lucide-react';
import { eventDetails } from '@/data/eventDetails';
import { events } from '@/data/events';

export function EventDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const eventId = Number(id);

  const detail = eventDetails.find(e => e.id === eventId);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <p className="text-muted-foreground">Event not found</p>
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
          <span>Back to Events</span>
        </button>

        <div className="aspect-video relative bg-secondary rounded-2xl overflow-hidden mb-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {event.award && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              {event.award}
            </div>
          )}
        </div>

        <div className="mb-6">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-3 capitalize">
            {event.type}
          </span>
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <p className="text-muted-foreground">{event.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Date</span>
            </div>
            <p className="font-semibold text-sm">
              {new Date(event.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          {event.location && (
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs">Location</span>
              </div>
              <p className="font-semibold text-sm">{event.location}</p>
            </div>
          )}
        </div>

        {detail && (
          <>
            {(detail.organizer || detail.participants) && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {detail.organizer && (
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Building className="w-4 h-4" />
                      <span className="text-xs">Organizer</span>
                    </div>
                    <p className="font-semibold text-sm">{detail.organizer}</p>
                  </div>
                )}
                {detail.participants && (
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Participants</span>
                    </div>
                    <p className="font-semibold text-sm">{detail.participants}</p>
                  </div>
                )}
              </div>
            )}

            <div className="bg-card border border-border rounded-xl p-5 mb-6">
              <h2 className="text-lg font-bold mb-3">📋 Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{detail.overview}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 mb-6">
              <h2 className="text-lg font-bold mb-3">✨ Highlights</h2>
              <ul className="space-y-2">
                {detail.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {detail.gallery && detail.gallery.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-5">
                <h2 className="text-lg font-bold mb-4">📸 Gallery</h2>
                <div className="grid gap-3">
                  {detail.gallery.map((img, index) => (
                    <div key={index} className="aspect-video relative bg-secondary rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={`${event.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
