"use client";

import { motion } from 'framer-motion';

interface Step3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step3Platform({ data, updateData, onNext, onBack }: Step3Props) {
  const handleSelect = (platform: 'meet' | 'zoom' | 'microsoft') => {
    updateData({ platform });
    setTimeout(onNext, 300);
  };

  if (data.meetingType === 'offline') {
    setTimeout(onNext, 0);
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold mb-4">Choose Platform</h3>

      <button
        onClick={() => handleSelect('meet')}
        className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
          data.platform === 'meet'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
          <span className="text-2xl">📹</span>
        </div>
        <div className="text-left">
          <p className="font-semibold">Google Meet</p>
          <p className="text-sm text-muted-foreground">Free video conferencing</p>
        </div>
      </button>

      <button
        onClick={() => handleSelect('zoom')}
        className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
          data.platform === 'zoom'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
          <span className="text-2xl">💼</span>
        </div>
        <div className="text-left">
          <p className="font-semibold">Zoom</p>
          <p className="text-sm text-muted-foreground">Professional meetings</p>
        </div>
      </button>

      <button
        onClick={() => handleSelect('microsoft')}
        className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
          data.platform === 'microsoft'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
          <span className="text-2xl">🎯</span>
        </div>
        <div className="text-left">
          <p className="font-semibold">Microsoft Teams</p>
          <p className="text-sm text-muted-foreground">Enterprise solution</p>
        </div>
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
