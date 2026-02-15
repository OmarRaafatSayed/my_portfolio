"use client";

import { motion } from 'framer-motion';

interface Step1Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

export function Step1PersonalInfo({ data, updateData, onNext }: Step1Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.name && data.phone && data.email && data.description) {
      onNext();
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      <div>
        <label className="block text-sm font-medium mb-1.5">Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
          className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Phone</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Meeting Description</label>
        <textarea
          value={data.description}
          onChange={(e) => updateData({ description: e.target.value })}
          className="w-full h-20 px-4 py-2 rounded-lg border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="pt-6 pb-4">
        <button
          type="submit"
          className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 shadow-lg"
        >
          Next
        </button>
      </div>
    </motion.form>
  );
}
