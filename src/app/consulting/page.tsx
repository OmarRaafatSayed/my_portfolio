"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingWizard } from '@/components/BookingWizard';
import { Calendar, Users, Award } from 'lucide-react';

export default function ConsultingPage() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <div className="min-h-screen pt-20 px-4 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Consulting</h1>
          <p className="text-muted-foreground mb-8">
            Professional consulting in business and technology
          </p>

          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold mb-3">Expert Consultation Services</h2>
            <p className="text-muted-foreground mb-4">
              Get specialized consulting in business and technology fields. Whether you're starting your career or launching a company, I provide comprehensive knowledge with expert collaborators.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Flexible Schedule</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-4 mb-6">
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold mb-2">🎯 Business Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Strategic planning, market analysis, and growth strategies for startups and businesses
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold mb-2">💻 Technology Consulting</h3>
              <p className="text-sm text-muted-foreground">
                Tech stack selection, architecture design, and digital transformation guidance
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold mb-2">🚀 Career Development</h3>
              <p className="text-sm text-muted-foreground">
                Career path planning, skill development, and professional growth strategies
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowBooking(true)}
            className="w-full h-14 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </motion.div>
      </div>

      {/* Booking Wizard */}
      <AnimatePresence>
        {showBooking && <BookingWizard onClose={() => setShowBooking(false)} />}
      </AnimatePresence>
    </>
  );
}
