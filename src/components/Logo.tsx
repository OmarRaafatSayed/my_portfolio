import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-12 w-12", className)}>
      <Image
        src="/images/logo.png"
        alt="Your Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
