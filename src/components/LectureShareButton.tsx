"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Link as LinkIcon, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LectureShareButton({ title, slug }: { title: string, slug: string }) {
  const { toast } = useToast();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(`${window.location.origin}/lectures/${slug}`);
    }
  }, [slug]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Copied!",
        description: "Lecture link copied to clipboard.",
      });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast({
        title: "Error",
        description: "Failed to copy link.",
        variant: "destructive",
      });
    }
  };

  if (!currentUrl) {
    return null; // Don't render the button until the URL is available
  }

  return (
    <div className="my-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share Lecture
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuItem onClick={copyLink}>
            <LinkIcon className="mr-2 h-4 w-4" />
            <span>Copy Link</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Share on Social Media</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="w-full">
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              <span>Facebook</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
