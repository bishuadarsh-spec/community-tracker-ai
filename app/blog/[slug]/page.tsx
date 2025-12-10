// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import BlogPostContent from './BlogPostContent';
import { getContentfulUrl } from '@/lib/contentfulUtils';

async function getBlogPost(slug: string) {
  const res = await fetch(
    getContentfulUrl(`&fields.urlSlug=${slug}`),
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch blog post');
  }

  const data = await res.json();
  
  if (data.items.length === 0) {
    return null;
  }

  return data;
}

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  try {
    const res = await fetch(getContentfulUrl());
    const data = await res.json();

    return data.items.map((post: any) => ({
      slug: post.fields.urlSlug,
    }));
  } catch (error) {
    return [];
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getBlogPost(params.slug);

  if (!data || data.items.length === 0) {
    return {
      title: 'Post Not Found',
    };
  }

  const post = data.items[0];

  return {
    title: `${post.fields.title} | Blog`,
    description: post.fields.description,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const data = await getBlogPost(params.slug);

  if (!data || data.items.length === 0) {
    notFound();
  }

  return <BlogPostContent post={data.items[0]} includes={data.includes} />;
}