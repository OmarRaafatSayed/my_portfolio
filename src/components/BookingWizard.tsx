"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Step1PersonalInfo } from './booking/Step1PersonalInfo';
import { Step2MeetingType } from './booking/Step2MeetingType';
import { Step3Platform } from './booking/Step3Platform';
import { Step4Calendar } from './booking/Step4Calendar';

interface BookingData {
  name: string;
  phone: string;
  email: string;
  description: string;
  meetingType: 'online' | 'offline' | '';
  platform: 'meet' | 'zoom' | 'microsoft' | '';
  date: string;
  time: string;
}

interface BookingWizardProps {
  onClose: () => void;
}

export function BookingWizard({ onClose }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    description: '',
    meetingType: '',
    platform: '',
    date: '',
    time: '',
  });

  const updateData = (newData: Partial<BookingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    // TODO: Integrate with Google Calendar & WhatsApp API
    console.log('Booking data:', data);
    alert('Booking confirmed! You will receive confirmation via WhatsApp and Email.');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center pb-16 md:pb-0"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-background w-full md:max-w-lg md:rounded-2xl rounded-t-2xl max-h-[75vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold">Book Consultation</h2>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-4 pt-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s <= step ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">Step {step} of 4</p>
        </div>

        {/* Steps */}
        <div className="flex-1 overflow-y-auto p-4 pb-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1PersonalInfo
                key="step1"
                data={data}
                updateData={updateData}
                onNext={nextStep}
              />
            )}
            {step === 2 && (
              <Step2MeetingType
                key="step2"
                data={data}
                updateData={updateData}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {step === 3 && (
              <Step3Platform
                key="step3"
                data={data}
                updateData={updateData}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {step === 4 && (
              <Step4Calendar
                key="step4"
                data={data}
                updateData={updateData}
                onSubmit={handleSubmit}
                onBack={prevStep}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
