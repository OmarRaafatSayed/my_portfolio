import { allPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

// Removing async as it's not needed for a static array
export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Removing async as it's not needed for a static array read
export function generateMetadata({ params }: Props): Metadata {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = allPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
