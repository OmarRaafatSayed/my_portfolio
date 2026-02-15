"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Step4Props {
  data: any;
  updateData: (data: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function Step4Calendar({ data, updateData, onSubmit, onBack }: Step4Props) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      updateData({ date: selectedDate, time: selectedTime });
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>

      <div>
        <label className="block text-sm font-medium mb-2">Date (Sat-Thu)</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-border bg-background"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Time (12 PM - 8 PM)</label>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                selectedTime === time
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 h-12 border border-border rounded-lg font-medium hover:bg-secondary"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!selectedDate || !selectedTime}
          className="flex-1 h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50"
        >
          Confirm Booking
        </button>
      </div>
    </motion.div>
  );
}
