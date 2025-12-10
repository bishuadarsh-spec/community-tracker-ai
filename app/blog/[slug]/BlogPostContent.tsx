// app/blog/[slug]/BlogPostContent.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { getAssetUrl } from '@/lib/contentfulUtils';
import { Header } from '@/components/header';
import { FooterSection } from '@/components/footer-section';

interface ContentNode {
  nodeType: string;
  content?: ContentNode[];
  value?: string;
  marks?: Array<{ type: string }>;
  data?: {
    uri?: string;
  };
}

interface BlogPostContentProps {
  post: {
    sys: { id: string };
    fields: {
      title: string;
      description: string;
      urlSlug: string;
      publishingDate: string;
      body: ContentNode;
      blogBanner?: { sys: { id: string } };
    };
  };
  includes: any;
}

export default function BlogPostContent({ post, includes }: BlogPostContentProps) {
  const bannerUrl = post.fields.blogBanner
    ? getAssetUrl(post.fields.blogBanner.sys.id, includes)
    : null;

  const renderContent = (node: ContentNode): React.ReactNode => {
    if (!node) return null;

    switch (node.nodeType) {
      case 'document':
        return node.content?.map((child, i) => (
          <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
        ));

      case 'paragraph':
        if (!node.content || node.content.length === 0) return <br />;
        return (
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            {node.content.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </p>
        );

      case 'heading-2':
        return (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </h2>
        );

      case 'heading-3':
        return (
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 scroll-mt-24">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </h3>
        );

      case 'heading-4':
        return (
          <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-4 scroll-mt-24">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </h4>
        );

      case 'unordered-list':
        return (
          <ul className="space-y-3 mb-6 ml-6">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </ul>
        );

      case 'ordered-list':
        return (
          <ol className="space-y-3 mb-6 ml-6 list-decimal">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </ol>
        );

      case 'list-item':
        return (
          <li className="text-gray-700 text-lg leading-relaxed pl-2" style={{ display: "-webkit-box" }}>
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 -mt-1"></span>
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </li>
        );

      case 'table':
        return (
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200 bg-white">
                {node.content?.map((row, i) => (
                  <React.Fragment key={i}>{renderContent(row)}</React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'table-row':
        return (
          <tr className="hover:bg-gray-50 transition-colors">
            {node.content?.map((cell, i) => (
              <React.Fragment key={i}>{renderContent(cell)}</React.Fragment>
            ))}
          </tr>
        );

      case 'table-cell':
        return (
          <td className="px-6 py-4 text-sm text-gray-700">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </td>
        );

      case 'hyperlink':
        return (
          <a
            href={node.data?.uri}
            className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </a>
        );

      case 'blockquote':
        return (
          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-6 italic text-gray-700 bg-blue-50 rounded-r-lg">
            {node.content?.map((child, i) => (
              <React.Fragment key={i}>{renderContent(child)}</React.Fragment>
            ))}
          </blockquote>
        );

      case 'hr':
        return <hr className="my-12 border-gray-200" />;

      case 'text':
        let text: React.ReactNode = node.value;
        if (node.marks && node.marks.length > 0) {
          node.marks.forEach(mark => {
            if (mark.type === 'bold') {
              text = <strong className="font-bold text-gray-900">{text}</strong>;
            } else if (mark.type === 'underline') {
              text = <span className="underline decoration-2 underline-offset-2">{text}</span>;
            } else if (mark.type === 'italic') {
              text = <em className="italic">{text}</em>;
            } else if (mark.type === 'code') {
              text = <code className="bg-gray-100 text-pink-600 px-2 py-1 rounded text-sm font-mono">{text}</code>;
            }
          });
        }
        return text;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        <Header />
      
    

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
              {/* Back Navigation */}
      <div className=" sticky top-0 z-50 backdrop-blur-sm ">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2  hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform " />
            <span className="font-medium">Back to Blog</span>
          </Link>

          <button 
            className="inline-flex items-center gap-2  hover:text-gray-900 transition-colors"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.fields.title,
                  text: post.fields.description,
                  url: window.location.href
                });
              }
            }}
          >
            <Share2 size={20} />
            <span className="font-medium hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar size={16} />
                <span>
                  {new Date(post.fields.publishingDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock size={16} />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.fields.title}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {post.fields.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Banner Image */}
      {bannerUrl && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 -mt-16 relative z-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={bannerUrl}
              alt={post.fields.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {renderContent(post.fields.body)}
        </motion.div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to improve your email deliverability?
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Start with Infraforge to help your AI agents land every email in the inbox.
          </p>
          <button className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </section>

      <FooterSection />

    </div>
  );
}