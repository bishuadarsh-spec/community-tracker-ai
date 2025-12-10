// app/blog/page.tsx
import BlogListClient from './BlogListClient';
import { getContentfulUrl } from '@/lib/contentfulUtils';

async function getBlogPosts() {
  const res = await fetch(getContentfulUrl('&order=-fields.publishingDate'), {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  return res.json();
}

export const metadata = {
  title: 'Blog | Ideas to level-up your game',
  description: 'Explore expert tips and insights to improve customer engagement.',
};

export default async function BlogPage() {
  const data = await getBlogPosts();

  return <BlogListClient posts={data.items} includes={data.includes} />;
}