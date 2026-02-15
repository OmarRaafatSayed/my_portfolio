"use client";

import { motion } from 'framer-motion';
import { Monitor, MapPin } from 'lucide-react';

interface Step2Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step2MeetingType({ data, updateData, onNext, onBack }: Step2Props) {
  const handleSelect = (type: 'online' | 'offline') => {
    updateData({ meetingType: type });
    setTimeout(onNext, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold mb-4">Choose Meeting Type</h3>

      <button
        onClick={() => handleSelect('online')}
        className={`w-full p-6 rounded-xl border-2 transition-all ${
          data.meetingType === 'online'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <Monitor className="w-8 h-8 mx-auto mb-2 text-primary" />
        <p className="font-semibold">Online Meeting</p>
        <p className="text-sm text-muted-foreground mt-1">Meet virtually via video call</p>
      </button>

      <button
        onClick={() => handleSelect('offline')}
        className={`w-full p-6 rounded-xl border-2 transition-all ${
          data.meetingType === 'offline'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
        <p className="font-semibold">Offline Meeting</p>
        <p className="text-sm text-muted-foreground mt-1">Meet in person at office</p>
      </button>

      <button
        onClick={onBack}
        className="w-full h-12 border border-border rounded-lg font-medium hover:bg-secondary"
      >
        Back
      </button>
    </motion.div>
  );
}
