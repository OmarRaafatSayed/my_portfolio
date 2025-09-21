"use client";

import { Download, CheckSquare } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function DownloadCvButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleClick = () => {
    if (isDownloading || isDownloaded) return;

    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = '/omar_dawood_cv.pdf'; 
    link.setAttribute('download', 'omar_dawood_cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);  
      setIsDownloaded(true);
      
      // إعادة تعيين الحالة بعد 3 ثوانٍ
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
      
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div 
        onClick={handleClick}
        className={cn(
          "group bg-transparent border-2 border-primary flex items-center rounded-full w-48 h-[55px] cursor-pointer transition-all duration-400 ease-in-out p-1 relative",
          isDownloading && !isDownloaded && "w-[57px] animate-[installed-cv_0.4s_ease_3.5s_forwards]",
          isDownloaded && "border-accent w-[160px]"
        )}
      >
        <div className={cn("absolute top-0 bottom-0 left-0 right-0 w-2 h-2 rounded-full m-auto opacity-0",
          isDownloading && "bg-background animate-[rotate-cv_3s_ease-in-out_0.4s_forwards]"
        )}></div>
        
        <div className={cn("h-11 w-11 rounded-full bg-primary flex justify-center items-center transition-all duration-400 ease-in-out relative shadow-none overflow-hidden",
          isDownloading && "animate-[pulse-cv_1s_forwards,circle-delete-cv_0.2s_ease_3.5s_forwards]"
        )}>
          <div className={cn("absolute left-0 top-0 bg-primary/80 w-full h-0",
            isDownloading && "animate-[installing-cv_3s_ease-in-out_forwards]"
          )}></div>
          <Download className={cn("h-6 w-6 text-primary-foreground absolute transition-all", isDownloading && "opacity-0")} />
          <CheckSquare className={cn("h-6 w-6 text-primary-foreground absolute transition-all opacity-0", isDownloaded && "opacity-100")} />
        </div>
        
        <span className={cn("text-base font-bold text-foreground transition-all duration-400 absolute right-5",
          isDownloading && "opacity-0"
        )}>
          Download CV
        </span>

        <span className={cn("text-base font-bold text-accent transition-all duration-400 absolute opacity-0",
          isDownloaded && "animate-[show-installed-message-cv_0.4s_ease_forwards]"
        )}>
          Downloaded!
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        <code className="bg-muted p-1 rounded-sm"></code>
      </p>
    </div>
  );
}
