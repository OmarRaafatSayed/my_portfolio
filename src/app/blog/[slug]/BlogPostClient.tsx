
"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Code, Link as LinkIcon, Twitter, Linkedin, Facebook } from 'lucide-react';
import { SectionAnimator } from '@/components/SectionAnimator';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { type Post } from '@/data/blog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This is a simple markdown to HTML converter.
// In a real app, you might use a library like 'marked' or 'react-markdown'.
function SimpleMarkdown({ content }: { content: string }) {
  const tableContent: React.ReactNode[][] = [];
  const otherContent: React.ReactNode[] = [];

  const lines = content.split('\n');
  let inTable = false;

  lines.forEach((line, index) => {
    if (line.match(/^\|.*\|$/)) {
      if (!inTable) {
        inTable = true;
        tableContent.push([]);
      }
      const currentRow = tableContent[tableContent.length - 1];
      const isHeader = line.includes('---');
      
      if(!isHeader) {
          const cells = line.split('|').filter(c => c.trim() !== '');
          const isTitleRow = index > 0 && lines[index-1].includes('---');

          currentRow.push(
            <tr key={`tr-${index}`}>
              {cells.map((cell, cellIndex) => 
                isTitleRow 
                  ? <th key={cellIndex} className="border px-4 py-2 text-left font-bold">{cell.trim()}</th> 
                  : <td key={cellIndex} className="border px-4 py-2">{cell.trim()}</td>
              )}
            </tr>
          );
      }

    } else {
      inTable = false;
      const linkRegex = /\B\[([^\]]+)\]\(([^)]+)\)/;
      const match = line.match(linkRegex);

      if (match) {
        const linkText = match[1];
        const linkUrl = match[2];
        const remainingText = line.replace(match[0], '').trim();

        otherContent.push(
          <div key={index} className="flex items-center space-x-4 my-4">
            <Button asChild variant="secondary" size="lg">
              <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
                {linkText}
              </Link>
            </Button>
            {remainingText && <p className="text-lg text-muted-foreground leading-relaxed m-0">{remainingText}</p>}
          </div>
        );
      } else if (line.startsWith('## ')) {
        otherContent.push(<h2 key={index} className="text-3xl font-bold font-headline mt-10 mb-6 border-b pb-2">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        otherContent.push(<h3 key={index} className="text-2xl font-bold font-headline mt-8 mb-4">{line.substring(4)}</h3>);
      } else if (line.startsWith('- ')) {
        otherContent.push(<li key={index} className="ml-5 list-disc text-lg text-muted-foreground leading-relaxed">{line.substring(2)}</li>);
      } else if (line.match(/^\d+\. /)) {
        otherContent.push(<li key={index} className="ml-5 list-decimal text-lg text-muted-foreground leading-relaxed">{line.substring(line.indexOf(' ') + 1)}</li>);
      } else if (line.trim() !== '') {
        otherContent.push(<p key={index} className="text-lg text-muted-foreground leading-relaxed">{line}</p>);
      } else {
         otherContent.push(<br key={index} />);
      }
    }
  });

  const renderedContent = (
    <>
      {otherContent}
      {tableContent.map((tableRows, index) => (
        <div key={`table-container-${index}`} className="overflow-x-auto my-6">
          <table className="table-auto w-full">
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      ))}
    </>
  );

  return <>{renderedContent}</>;
}


export default function BlogPostClient({ post }: { post: Post }) {
  const { toast } = useToast();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // This ensures window is defined, preventing hydration errors
    setCurrentUrl(window.location.href);
  }, []);

  const copyToClipboard = async (text: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: successMessage,
      });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Could not copy to your clipboard.",
      });
    }
  };

  const copyLink = () => {
    copyToClipboard(currentUrl, "Link copied to clipboard.");
  };

  const copyEmbedCode = () => {
    const embedCode = `<iframe src="${currentUrl}" title="${post.title}" width="100%" height="600" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    copyToClipboard(embedCode, "Embed code copied to clipboard.");
  };


  return (
    <main className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionAnimator>
            <div className="mb-8">
                <Button asChild variant="outline">
                    <Link href="/#blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </SectionAnimator>

        <article>
          <SectionAnimator delay={0.1}>
            <header className="mb-8">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">{post.title}</h1>
            </header>
          </SectionAnimator>
          
          <SectionAnimator delay={0.2}>
            <Card className="overflow-hidden mb-12 shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                data-ai-hint={post.aiHint}
                className="w-full object-cover aspect-video"
              />
            </Card>
          </SectionAnimator>
          
          <SectionAnimator delay={0.3}>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
               <SimpleMarkdown content={post.content} />
            </div>
          </SectionAnimator>

          <SectionAnimator delay={0.4}>
            <div className="mt-16 pt-8 border-t text-center">
              <h3 className="text-2xl font-headline font-bold mb-6">Share this Post</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share Options
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  <DropdownMenuItem onClick={copyLink}>
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <span>Copy Link</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={copyEmbedCode}>
                    <Code className="mr-2 h-4 w-4" />
                    <span>Copy Embed Code</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Share on Social Media</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Twitter className="mr-2 h-4 w-4" />
                          <span>Twitter</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                       <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.description)}`} target="_blank" rel="noopener noreferrer" className="w-full">
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
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SectionAnimator>
        </article>
      </div>
    </main>
  );
}
